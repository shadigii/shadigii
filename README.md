# Sha Digii Website — Final Static Build

## Pages
- `index.html` — Home
- `our-work.html` — Full portfolio with automatic filters and click-to-preview lightbox
- `about.html` — About Us + client recommendations
- `packages.html` — Main packages + expandable add-ons
- `build-your-plan.html` — Package selector, add-on selection, live total and WhatsApp message
- `contact.html` — Contact details and social links

## Important site data
Edit `assets/data.js` for the single source of truth:
- `SITE` — phone/WhatsApp, email, Facebook, Instagram
- `packages` — main monthly packages
- `addons` — add-on packages
- `portfolio` — all work + future categories
- `testimonials` — real client reviews
- `faqs` — FAQ content

## Adding new work later
Add a new object at the **TOP** of the `portfolio` array so it becomes the newest item on Home. Include:
- `type`
- `client`
- `title`
- `result`
- `caption`
- `image`
- optional `video` (MP4 path) for playable Reels
- optional `externalUrl` for live websites

Our Work filters are generated automatically from the `type` values, so adding a new type also creates a new filter.

## Portfolio images
The standard image card uses a 4:5 display ratio. The current supplied images are included in `assets/portfolio/`. Clicking a card opens a larger preview. If `video` is populated, the lightbox uses a native video player.

## WhatsApp plan builder
The WhatsApp destination is `94761018668`. The builder composes a message containing each selected item, its price and the total.

## Current package prices
- Homepreneur — LKR 25,000 / month
- Buildpreneur — LKR 35,000 / month
- Growpreneur — LKR 45,000 / month
- Growth Surge Pack — LKR 5,500
- InstaBuzz Pack — LKR 7,500
- Revenue Rocket — LKR 10,000
- Content Creation Pack — LKR 12,000
- Reel Studio Pack — LKR 15,000
- Store Stocker Pack — LKR 15,000
- Business Autopilot Pack — LKR 20,000
