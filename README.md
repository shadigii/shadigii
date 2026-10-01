# Sha Digii — Final Static Website

Static HTML/CSS/JavaScript site for Sha Digii.

## Files
- `index.html` — home, recent work, main packages, full build-your-plan section, about preview, testimonials, FAQ, contact CTA
- `our-work.html` — full portfolio + generated filters + media preview
- `about.html` — company story + services + client recommendations
- `packages.html` — main monthly packages + expandable add-ons
- `build-your-plan.html` — package/add-on planner + WhatsApp message builder
- `contact.html` — contact details and links
- `assets/data.js` — single source of truth for contact details, packages, add-ons, portfolio, reviews and FAQs
- `assets/app.js` — rendering, filters, planner, WhatsApp links, expandable add-ons, media lightbox and Reel playback
- `assets/styles.css` — responsive design

## Future portfolio update
Add a new object at the top of the `portfolio` array in `assets/data.js`. For images use `mediaType: 'image'`; for videos use `mediaType: 'video'` and a poster; for multiple images in one card use `mediaType: 'gallery'` and a `media` array. The Home recent-work section uses the same portfolio data.

## GitHub Pages
The current deployment target is the project-site URL:
`https://shadigii.github.io/shadigii/`

Publish from branch `main` and folder `/ (root)`.
