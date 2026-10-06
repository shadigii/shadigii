// SHA DIGII — single source of truth.
// Add new portfolio objects to the TOP of `portfolio` for newest-first display.
// New filter buttons are generated automatically from each portfolio object's `type`.
const SITE = {
  brand: 'Sha Digii',
  tagline: 'TURNING CLICKS INTO CUSTOMERS',
  whatsapp: '94761018668',
  whatsappDisplay: '076 101 8668',
  hrWhatsapp: '94766347108',
  hrWhatsappDisplay: '076 634 7108',
  email: 'shadigii.agency@gmail.com',
  facebook: 'https://web.facebook.com/shadigii/',
  instagram: 'https://www.instagram.com/sha.digii/',
  facebookReviews: 'https://www.facebook.com/shadigii/reviews/?id=61574327379914&sk=reviews',
  baseUrl: 'https://shadigii.github.io/shadigii/'
};

const packages = [
  {
    id: 'homepreneur', name: 'Homepreneur', price: 25000,
    for: 'For home businesses getting their first regular customers.', featured: false,
    websiteLabel: 'No website management included',
    items: [['4','Designed posts'],['2','Reels'],['30','Days of stories, 1 per day'],['1','Ad campaign, run biweekly'],['5','Products listed on Marketplace']]
  },
  {
    id: 'buildpreneur', name: 'Buildpreneur', price: 35000,
    for: 'For growing brands that want to post more and keep their store updated.', featured: true,
    websiteLabel: '10 Website products updated & basic store maintenance',
    items: [['6','Designed posts'],['3','Reels'],['30','Days of stories, 1–2 per day'],['1','Ad campaign, run biweekly'],['10','Products listed on Marketplace']]
  },
  {
    id: 'growpreneur', name: 'Growpreneur', price: 45000,
    for: 'For established businesses ready to scale sales across social & web.', featured: false,
    websiteLabel: '25 Website products updated + full monthly web care',
    items: [['8','Designed posts'],['4','Reels'],['30','Days of stories, 1–3 per day'],['2','Ad campaigns, run biweekly'],['15','Products listed on Marketplace']]
  }
];


const hrPackages = [
  {
    id: 'hr-starter', name: 'Starter', price: 18000,
    team: 'Recommended for teams up to 10 employees', featured: false,
    items: [
      'HR Administration','Employee Records & Files','Employment Contracts','HR Letters',
      'Employee Onboarding — Basic','Employee Offboarding — Basic'
    ],
    notIncluded: ['Attendance & Leave','Payroll Preparation','Payslip Preparation','EPF / ETF Support','Recruitment Coordination']
  },
  {
    id: 'hr-growth', name: 'Growth', price: 35000,
    team: 'Recommended for teams with 11–35 employees', featured: true,
    teamNote: 'More than 35 employees? We’ll provide a custom quotation based on your team size and requirements.',
    items: [
      'HR Administration','Employee Records & Files','Employment Contracts','HR Letters',
      'Attendance & Leave','Payroll Preparation','Payslip Preparation','EPF / ETF Support',
      'Recruitment Coordination','Employee Onboarding','Employee Offboarding'
    ]
  }
];

const addons = [
  { id:'growth-surge', name:'Growth Surge Pack', price:5500, category:'Social Addon Package', summary:'FB Page Growth Pack', highlights:['800–1,000 Page Likes','Sri Lanka audience focus','Delivery: 5–7 days'] },
  { id:'instabuzz', name:'InstaBuzz Pack', price:7500, category:'IG Profile Growth Pack', summary:'IG Profile Growth Pack', highlights:['800–1,000 Followers','Balanced & natural growth speed','Delivery: 5–7 days'] },
  { id:'revenue-rocket', name:'Revenue Rocket', price:10000, category:'Sales Addon Package', summary:'Customer inquiry generation', highlights:['80–100 Leads','Target Audience Base','Delivery: 5–7 days'] },
  { id:'content-creation', name:'Content Creation Pack', price:12000, category:'Content Creation Addon Package', summary:'Posts & reels ready to publish', highlights:['8 Posts','4 Reels','8–12 total content pieces','Delivery: 1–3 days'] },
  { id:'reel-studio', name:'Reel Studio Pack', price:15000, category:'Video Creation Addon Package', summary:'Professional short-form videos', highlights:['5–6 videos, 15–60 seconds each','Concept & script ideas included','Captions, music & transitions','1 revision per video','Optimized for FB Reels, IG Reels & TikTok','Delivery: 3–5 days'] },
  { id:'store-stocker', name:'Store Stocker Pack', price:15000, category:'Website Addon Package', summary:'Website product upload support', highlights:['100 Products Uploaded','SEO-friendly titles & descriptions','Pricing, variants & categories','Up to 4 images per product','WooCommerce & Shopify support','Delivery: 3–5 days'], footnote:'Extra products: LKR 100 per product' },
  { id:'hr-recruitment', name:'Recruitment', price:8000, category:'HR One-Time / Add-On Service', summary:'Recruitment support priced by role', highlights:['Junior / General Positions — from LKR 8,000 per successful hire','Professional / Specialist Positions — from LKR 14,000 per successful hire','Senior / Management Positions — from LKR 20,000 per successful hire'], billing:'one-time', priceLabel:'From LKR 8,000', variable:true },
  { id:'employee-documentation', name:'Employee Documentation', price:10000, category:'HR One-Time / Add-On Service', summary:'HR documentation setup for your team', highlights:['Starting from LKR 10,000'], billing:'one-time', priceLabel:'From LKR 10,000', variable:true },
  { id:'onsite-hr-support', name:'On-Site HR Support', price:3000, category:'HR One-Time / Add-On Service', summary:'On-site HR support when required', highlights:['LKR 3,000–5,000 per day','Depending on location and requirements','Travel expenses may apply separately'], billing:'one-time', priceLabel:'LKR 3,000–5,000 / day', variable:true }
];

const portfolio = [
  {
    id:'pt-hardware-creatives', type:'Post', client:'Premium Traders', title:'Premium hardware, built to stand out',
    result:'35–40 orders from this post', caption:'Premium Traders, Colombo · Aluminium & hardware · Product-focused creatives built to drive orders',
    mediaType:'gallery', autoSlide:true,
    media:[
      'assets/portfolio/premium-traders-post/01-aluminium-step-ladder.png',
      'assets/portfolio/premium-traders-post/02-utility-rolling-cart.jpg',
      'assets/portfolio/premium-traders-post/03-rivet-gun.jpg',
      'assets/portfolio/premium-traders-post/04-vvp-patch-fittings.jpg'
    ],
    socialUrl:'https://www.instagram.com/_premium_traders___/' , socialLabel:'View on Instagram ↗'
  },
  {
    id:'mcdodo-product-creatives', type:'Post', client:'Mcdodo', title:'From product features to real customer orders',
    result:'3,000+ views · 10–15 inquiries · 3 orders', caption:'Mcdodo · Tech & mobile accessories · 3,000+ views, 10–15 inquiries and 3 orders from product-focused creatives',
    mediaType:'gallery', autoSlide:true,
    media:[
      'assets/portfolio/mcdodo-post/01-transparent-series.png',
      'assets/portfolio/mcdodo-post/02-g5-series.png',
      'assets/portfolio/mcdodo-post/03-speaka01-series.png',
      'assets/portfolio/mcdodo-post/04-gana-mini-series.png',
      'assets/portfolio/mcdodo-post/05-built-to-stay-designed-to-perform.png',
      'assets/portfolio/mcdodo-post/06-more-power-more-confidence.png',
      'assets/portfolio/mcdodo-post/07-silence-that-moves-you.png'
    ],
    socialUrl:'https://www.instagram.com/mcdodo.lk/', socialLabel:'View on Instagram ↗'
  },
  {
    id:'lankan-mart-product-posts', type:'Post', client:'Lankan Mart LK', title:'Everyday products that turned attention into orders',
    result:'5,000+ views · 50+ inquiries · 20+ orders', caption:'Lankan Mart LK, Islandwide · Multi-category product creatives · 5,000+ views, 50+ inquiries and 20+ orders',
    mediaType:'gallery', autoSlide:true,
    media:[
      'assets/portfolio/lankan-mart-post/01-umbrella.png',
      'assets/portfolio/lankan-mart-post/02-makeup-brush-cleaner.png',
      'assets/portfolio/lankan-mart-post/03-elevate-style-watch.png',
      'assets/portfolio/lankan-mart-post/04-bold-by-design-watch.png',
      'assets/portfolio/lankan-mart-post/05-scarf-shawl-organizer.png',
      'assets/portfolio/lankan-mart-post/06-four-layer-shoe-rack.png'
    ],
    socialUrl:'https://www.instagram.com/lankan_mart.lk/', socialLabel:'View on Instagram ↗'
  },
  {
    id:'herstore-toner-reel', type:'Reel', client:'HerStore.lk', title:'The product that made skincare stop and look',
    result:'3,000+ views · 25 inquiries', caption:'HerStore.lk, Islandwide · Skincare · Product-focused Reel that generated 3,000+ views and 25 customer inquiries',
    mediaType:'video', poster:'assets/portfolio/herstore-reel/05-the-ordinary-milky-toner-reel-poster.jpg', video:'assets/portfolio/herstore-reel/05-the-ordinary-milky-toner-reel.mp4',
    socialUrl:'https://www.instagram.com/herstore.lk/', socialLabel:'View on Instagram ↗'
  },
  {
    id:'herstore-sunscreen-post', type:'Post', client:'HerStore.lk', title:'Everyday sun protection, made for every skin type',
    result:'2,500+ views · 100+ profile visits · 20+ inquiries', caption:'HerStore.lk, Islandwide · Sunscreen & skincare · Product-focused creatives that generated 2,500+ views, 100+ profile visits and 20+ customer inquiries',
    mediaType:'gallery', autoSlide:true,
    media:[
      'assets/portfolio/herstore-post/01-eucerin-sun.jpg',
      'assets/portfolio/herstore-post/02-cerave-spf30.jpg',
      'assets/portfolio/herstore-post/03-cetaphil-spf50.jpg',
      'assets/portfolio/herstore-post/04-cosrx-aloe-sun.jpg'
    ],
    socialUrl:'https://www.instagram.com/herstore.lk/', socialLabel:'View on Instagram ↗'
  },
  {
    id:'pt-marble-reel', type:'Reel', client:'Premium Traders', title:'Luxury marble look, without the heavy cost',
    result:'LKR 70,000+ in sales', caption:'Premium Traders, Colombo · Marble-look sheets · 371 inquiries at just LKR 7 each',
    mediaType:'video', poster:'assets/portfolio/01-premium-traders-marble-reel.jpg', video:'assets/portfolio/01-premium-traders-marble-reel.mp4'
  },
  {
    id:'curtain-offer', type:'Ad', client:'Curtain Fashion', title:'20% off custom curtains, with free installation',
    result:'26 appointments booked', caption:'Curtain Fashion, Kandy · Custom curtains · Just LKR 3,000 in ads, about LKR 115 per appointment',
    mediaType:'video', poster:'assets/portfolio/02-curtain-fashion-offer.jpg', video:'assets/portfolio/02-curtain-fashion-offer.mp4'
  },
  {
    id:'lm-coffee-reel', type:'Reel', client:'Lankan Mart LK', title:'Café-style coffee, right at home',
    result:'4 orders from one reel', caption:'Lankan Mart LK, Islandwide · Home & kitchen products · 5,600 views and 7+ hours of watch time',
    mediaType:'video', poster:'assets/portfolio/03-lankan-mart-coffee-reel.jpg', video:'assets/portfolio/03-lankan-mart-coffee-reel.mp4'
  },
  {
    id:'lm-feet-reel', type:'Reel', client:'Lankan Mart LK', title:'Stop scrolling, your feet need this',
    result:'3,800 views', caption:'Lankan Mart LK, Islandwide · Home & wellness products · 1,400+ organic views and 20 comments',
    mediaType:'video', poster:'assets/portfolio/04-lankan-mart-feet-reel.jpg', video:'assets/portfolio/04-lankan-mart-feet-reel.mp4'
  },
  {
    id:'herstore-glow-post', type:'Post', client:'HerStore.lk', title:'3 steps to healthy, glowing skin',
    result:'2,300 views', caption:'HerStore.lk, Islandwide · Skincare · 21 clicks through to the online store',
    mediaType:'image', media:['assets/portfolio/05-herstore-skincare-post.jpg']
  },
  {
    id:'pt-listings-post', type:'Post', client:'Premium Traders', title:'Everyday products, listed and selling',
    result:'35 orders in 30 days', caption:'Premium Traders, Islandwide · Aluminium and Glass Accessories, and all essential hardware products · 787 clicks on product listings',
    mediaType:'image', media:['assets/portfolio/11-premium-traders-listings.png']
  },
  {
    id:'pt-google-post', type:'Post', client:'Premium Traders', title:'Easier to find on Google',
    result:'72% more Google interactions', caption:'Premium Traders, Colombo · 91 calls, chats, direction requests and website clicks',
    mediaType:'image', media:['assets/portfolio/06-premium-traders-google.png']
  },
  {
    id:'lm-listings-post', type:'Post', client:'Lankan Mart LK', title:'Everyday products, listed and selling',
    result:'19 orders in 30 days', caption:'Lankan Mart LK, Islandwide · Home & kitchen products · 656 clicks on product listings',
    mediaType:'image', media:['assets/portfolio/07-lankan-mart-listings.png']
  },
  {
    id:'herstore-seo', type:'SEO', client:'HerStore.lk', title:'Found on Google, product by product',
    result:'100+ SEO-optimised products', caption:'HerStore.lk, Islandwide · Skincare · Every brand and product page built around what shoppers search, like "cerave products sri lanka"',
    mediaType:'gallery', autoSlide:true, media:['assets/portfolio/08-herstore-seo-keywords.png','assets/portfolio/08-herstore-seo-rankings.png']
  },
  {
    id:'pt-page-growth', type:'Page Growth', client:'Premium Traders', title:'A page built for real buyers',
    result:'1,700 followers in 3 months', caption:'Premium Traders, Islandwide · Aluminium & hardware · Targeted to people shopping for construction and renovation, not random followers',
    mediaType:'image', media:['assets/portfolio/09-premium-traders-page-growth.png']
  },
  {
    id:'herstore-website', type:'Website', client:'HerStore.lk', title:'An e-commerce website built for the brand',
    result:'Live e-commerce website', caption:'HerStore.lk · E-commerce website · Built and managed by Sha Digii',
    mediaType:'image', media:['assets/portfolio/10-herstore-website.png'], externalUrl:'https://herstore.lk/'
  }
];

const testimonials = [
  { client:'Premium Traders', text:'Working with this team has been a great decision for our business. From the start, we’ve seen a strong increase in sales and quality leads through their ad campaigns. The results have been consistent, and it has really helped us grow month by month.\n\nThey created and managed our page from the very beginning, handling everything from content to ads with full professionalism. Even now, they continue to run our campaigns effectively and keep things moving forward.\n\nHighly recommended for anyone who wants real results, not just page management!' },
  { client:'iPhone Eyes', text:'We worked with the team for a few months to manage our iPhone Eyes social media pages, and the experience was great. They handled both Instagram and Facebook professionally, keeping the page active, engaging, and well-organized. We saw good growth in reach and engagement during that time.\n\nDue to budget constraints, we had to pause the work, but we were genuinely happy with the service provided. Highly recommended for anyone looking for reliable social media management!' },
  { client:'Lankan Mart LK', text:'We have been working with Sha Digii from the beginning of our online business, and they have been an important part of building and managing our digital presence. They handle our social media, content, advertising, customer inquiries, and support us throughout the sales and order process.\n\nWhat we really appreciate is that they don’t just focus on getting views or followers, they focus on bringing customers and generating actual sales. Their advertising campaigns have helped us reach new customers, generate inquiries, and convert those inquiries into orders. They also take care of the day-to-day communication and order confirmation process, which has made running our online business much easier.\n\nThe team is professional, responsive, and genuinely involved in our business. We are very happy with the support and results we have received from Sha Digii and would highly recommend them to any business looking for a team that can handle their digital marketing and online sales professionally.' },
  { client:'Curtain Fashion', text:'We have been working with Sha Digii for the past few months to manage our social media and advertising, and we are very happy with the results. Their ads have generated a steady flow of good-quality and genuine leads, which have turned into new orders for our business. The quotation and lead-generation campaigns have helped us reach new customers and also create opportunities to increase the value of our sales.\n\nSha Digii handles our social media, content, and advertising professionally, and they understand how to promote our services to the right audience. We have seen a positive difference in both inquiries and sales since working with them. We are very satisfied with their work and would definitely recommend Sha Digii to other businesses looking for results-focused digital marketing.' },
  { client:'HerStore.lk', text:'We’ve been working with Sha Digii since we started HerStore.lk, and honestly, they have helped us with almost everything online. They built our website and have been managing it for us, while also handling our Facebook and Instagram, posts, reels, content, and ads.\n\nOne thing I really appreciate is that they don’t just stop at running ads. They also help us handle customer messages, respond to inquiries, confirm orders, and follow up with customers. So whenever we have something to do on the online side, we can usually just tell them and they take care of it.\n\nIt has made things much easier for us, especially because we are still growing the business. They have been very supportive, easy to work with, and always there when we need them. Really happy with the work they have done for HerStore.lk and looking forward to continuing with them.' }
];

const faqs = [
  { q:'Is the ad budget included in the package price?', a:'No. Your package covers planning, designing and managing your ads. The ad budget is paid directly to Meta. We usually recommend LKR 7,000–10,000 per campaign, but the right amount depends on the size of your business and your goals.' },
  { q:'Do I need to sign a long contract?', a:'No. All packages run month to month, and you can upgrade, downgrade or cancel anytime. Just let us know 10 days before your next month starts.' },
  { q:'Do I need to give you my Facebook password?', a:'No, never. You simply add us as a partner to your Facebook page and Instagram account through Meta Business Suite. Your personal account stays private, you keep full ownership of your page, and you can remove our access anytime.' }
];

const services = [
  { icon:'◎', title:'Social media management', text:'Plan, design and post your Facebook and Instagram content every month.' },
  { icon:'✦', title:'Content & reels', text:'Create social posts, short-form videos and content batches ready to publish.' },
  { icon:'↗', title:'Advertising', text:'Plan and manage campaigns built around inquiries, leads and sales.' },
  { icon:'▣', title:'Website & e-commerce', text:'Build and manage store pages, product content and ongoing web updates.' },
  { icon:'⌕', title:'SEO & Google visibility', text:'Structure product and brand content around the searches your customers make.' },
  { icon:'▤', title:'Online sales support', text:'Help with customer inquiries, order confirmation and day-to-day digital operations.' }
];


const hrServices = [
  { icon:'⌂', title:'Recruitment & hiring', text:'Job descriptions, job ads, CV screening, shortlisting, interview coordination, reference-check coordination and onboarding support.' },
  { icon:'▤', title:'HR administration', text:'Employee files, contracts, HR letters, confirmations, promotions, transfers, warnings, resignations and documentation.' },
  { icon:'▥', title:'Payroll support', text:'Monthly payroll preparation, attendance and leave adjustments, salary calculations, deductions, payslips and bank salary files.' },
  { icon:'✓', title:'EPF / ETF support', text:'Employee and statutory record preparation and submission support.' },
  { icon:'◷', title:'Attendance & leave', text:'Attendance monitoring, leave records, late and absence monitoring and monthly HR reports.' },
  { icon:'□', title:'HR policies', text:'Employee handbook, leave policy, attendance policy, recruitment procedures, disciplinary procedures and other workplace policies.' },
  { icon:'＋', title:'Employee onboarding', text:'Joining documents, employee files, induction checklists and onboarding coordination.' },
  { icon:'↗', title:'Employee offboarding', text:'Resignation documents, exit interviews, clearance and final settlement support.' },
  { icon:'◎', title:'Disciplinary & employee relations', text:'Warning letters, show-cause documentation, grievance documentation and disciplinary process support.' }
];
