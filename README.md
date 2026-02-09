# Income Stack Lab (ISL-90)
**Proof Before Payment. Execution Before Theory. Discipline Before Hype.**

Income Stack Lab is a stewardship-first execution lab designed to help people build **multiple income streams** with structure, accountability, and proof-based learning.

This repository contains the **GitHub Pages website** for ISL:
- The Charter (the non-negotiables)
- The 7-Day Income Proof Sprint (free execution filter)
- ISL-90 (the full 90-day program)
- Access Gate (key-based entry UX)

---

## Why This Exists
Most people don’t lack knowledge — they lack **structure**.

ISL is not a motivational community.  
It is a builder’s room.

We follow one principle:
> **Proof first. Payment second. Scaling last.**

---

## Site Pages (Structure)
- `index.html` — Landing / ideology / CTA
- `charter.html` — The Charter (rules and covenant)
- `sprint.html` — 7-Day Income Proof Sprint (step-by-step)
- `isl90.html` — ISL-90 program structure
- `access.html` — Key-based access gate (Lodge-style UX)

Assets:
- `assets/css/styles.css` — theme + layout
- `assets/js/app.js` — access gate logic (client-side)

---

## Local Preview
You can open the site locally by simply opening `index.html` in a browser.

For a cleaner dev workflow:
- Use VS Code + Live Server extension  
  or  
- Use any local static server (optional)

---

## Deploy to GitHub Pages
1. Create/choose a repo (e.g. `income-stack-lab`)
2. Push these files to the `main` branch
3. Go to **Settings → Pages**
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` / root
5. Save

Your site will be available at:
`https://<username>.github.io/<repo-name>/`

---

## Access Gate (Important Note)
The Access Gate uses **client-side key verification** for UX only.

✅ Great for: simple gating, “Lodge” feel, commitment filter  
❌ Not secure for: private content, payments, sensitive resources

If you need real security later:
- Use server auth
- Or use private links + membership tools

---
README — ISL Lab Deployment Notes

1) Replace payment link:
- In index.html and isl-90.html, replace PAYSTACK_PAYMENT_URL with your actual Paystack payment page URL.
  (The pk_live_... value is a Paystack public key, not a checkout URL.)

2) Logo:
- Place your logo at: assets/img/isl-logo.png

3) Lab Log:
- Update lab-log.html:
  - Replace the offer line with your real offer.
  - Add the real launch date/time.
  - Fill Week 1/2/3 entries as data arrives.

Deploy:
- Push files to GitHub Pages repo root.
- Settings → Pages → Deploy from main branch.


## Customization Checklist
To customize content quickly:
- Update the headline + mission in `index.html`
- Update covenant language in `charter.html`
- Update sprint steps in `sprint.html`
- Update program details in `isl90.html`
- Change the access key list in `assets/js/app.js`

Recommended next upgrades:
- Add WhatsApp CTA link
- Add Paystack/Flutterwave link for commitment fee
- Add “Proof Wall” section (testimonials and results)

---

## Philosophy (Non-Negotiables)
- **Clarity over cleverness**
- **Discipline over dopamine**
- **Attempts over perfection**
- **Integrity over shortcuts**
- **One stream first. Stack later.**

---

## Maintainer
**Charles Arin**  
Income Stack Lab — Builder’s Program

> Built for those who are done watching and ready to execute.
