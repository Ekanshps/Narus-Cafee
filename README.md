# Narus Cafee — website concept preview

A responsive, static HTML/CSS/JavaScript website concept made for a first pitch to Narus Cafee in Deokali, Ayodhya. It includes a custom loading screen, scroll-triggered reveals, a scrolling progress line, mobile navigation, interactive menu filters, responsive gallery, direct map/call links, metadata, and a branded `404.html` page.

## Preview locally

Open `index.html` in a browser. It does not require a build step or package installation. An internet connection is required for remotely hosted photos and Google Fonts.

## Deploy on `naruscafee.epsingh.in`

1. Create the subdomain in your hosting dashboard and point its DNS to your hosting provider.
2. Upload `index.html`, `styles.css`, `script.js`, `404.html`, and the `assets/` folder into that subdomain's document root.
3. Enable HTTPS. Configure the host to serve `404.html` for not-found routes (some static hosts do this automatically; others need a setting or rewrite).
4. Open the site on mobile and desktop and verify all photos, links, call number, address and opening hours.

For Vercel, upload this folder as a project and use the static/other framework preset; for shared hosting, upload the files into the subdomain's `public_html` or assigned root.

## Important before public launch

- This is a **concept / sales preview**, not an owner-approved official website. No online ordering, booking, customer data collection, payment flow, or backend is configured.
- Menu descriptions and the featured-dish layout are sample presentation content; current menu availability and prices should be confirmed with the owner.
- Address, opening-hours, phone and profile links were collected from public business listings and should be confirmed by the owner before launch. Phone listed in the design: `+91 96480 43131`.
- Photos are remote images, not bundled in this zip. The Narus Cafee storefront/interior/food images use public image URLs hosted at `img.magicpin.com`; additional illustrative food photos are hosted by Unsplash. Public visibility does not automatically grant commercial reuse rights. For the live client site, ask the owner for approved originals or permission, then download/optimize them and replace remote image URLs with local `/assets/...` paths. This also avoids hotlinking and broken images if third-party URLs change.
- The sample review-style section is brand-story copy, not real customer quotes. It is explicitly labelled in the page and should be replaced with approved reviews if the owner wants testimonials.
- The page uses Google Fonts; system font fallbacks are included.

## Files

- `index.html` — home page and SEO/social metadata
- `styles.css` — design system, responsive layout and motion
- `script.js` — loader, mobile nav, scroll reveals, menu filters and progress indicator
- `404.html` — custom not-found page
- `assets/favicon.svg` — simple project favicon

## Public research references used to shape this concept

- Narus Cafee listing and photo gallery on Magicpin: https://magicpin.in/Ayodhya/Deokali/Restaurant/Narus-Cafee-Ll-Best-Restaurant-In-Ayodhya/store/200738b
- Narus Cafee listing on Tripadvisor: https://www.tripadvisor.in/Restaurant_Review-g1985445-d32782165-Reviews-Narus_Cafee-Ayodhya_Ayodhya_District_Uttar_Pradesh.html
- Narus Cafee listing/menu categories on Zomato: https://www.zomato.com/cs/faizabad-ayodhya/narus-cafee-faizabad-ayodhya-locality/order
