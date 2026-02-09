// Simple key-gate for "Access" page (client-side demo)
// NOTE: This is not secure. For real security you need server auth.
// For now, it matches your "Lodge key" UX pattern.

function qs(sel){ return document.querySelector(sel); }

function setGateMessage(type, msg){
  const el = qs("#gateMsg");
  if(!el) return;
  el.className = "notice " + (type === "ok" ? "ok" : type === "err" ? "err" : "");
  el.textContent = msg;
}

function openIfValidKey(key){
  // You can rotate this key anytime.
  // Example: ISL-FOUNDERS-2026
  const VALID_KEYS = ["ISL-FOUNDERS-2026", "ISL-90-BUILD"];
  return VALID_KEYS.includes((key||"").trim());
}

function initGate(){
  const form = qs("#gateForm");
  if(!form) return;

  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const key = qs("#accessKey").value;

    if(openIfValidKey(key)){
      localStorage.setItem("isl_access_key", key.trim());
      setGateMessage("ok","Access granted. Redirecting…");
      setTimeout(()=> window.location.href = "isl90.html", 650);
    } else {
      setGateMessage("err","Access key is invalid. Check case sensitivity and try again.");
    }
  });

  // Auto-unlock if key already saved
  const saved = localStorage.getItem("isl_access_key");
  if(openIfValidKey(saved)){
    setGateMessage("ok","You’re already verified on this device. Redirecting…");
    setTimeout(()=> window.location.href = "isl90.html", 650);
  } else {
    setGateMessage("", "Enter your access key to continue.");
  }
}

document.addEventListener("DOMContentLoaded", initGate);
