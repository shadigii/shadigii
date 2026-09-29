// SHA DIGII — single source of truth.
// Future work: add a new object to the TOP of `portfolio`.
// Future categories/filters are generated automatically from each object's `type`.
const SITE = {
  brand: 'Sha Digii',
  tagline: 'TURNING CLICKS INTO CUSTOMERS',
  whatsapp: '94761018668',
  whatsappDisplay: '076 101 8668',
  email: 'shadigii.agency@gmail.com',
  facebook: 'https://web.facebook.com/shadigii/',
  instagram: 'https://www.instagram.com/sha.digii/'
};

const packages = [
  {
    id: 'homepreneur', name: 'Homepreneur', price: 25000,
    for: 'For home businesses getting their first regular customers.',
    featured: false,
    websiteLabel: 'No website management included',
    items: [
      ['4', 'Designed posts'],
      ['2', 'Reels'],
      ['30', 'Days of stories, 1 per day'],
      ['1', 'Ad campaign, run biweekly'],
      ['5', 'Products listed on Marketplace']
    ]
  },
  {
    id: 'buildpreneur', name: 'Buildpreneur', price: 35000,
    for: 'For growing brands that want to post more and keep their store updated.',
    featured: true,
    websiteLabel: '10 Website products updated & basic store maintenance',
    items: [
      ['6', 'Designed posts'],
      ['3', 'Reels'],
      ['30', 'Days of stories, 1–2 per day'],
      ['1', 'Ad campaign, run biweekly'],
      ['10', 'Products listed on Marketplace']
    ]
  },
  {
    id: 'growpreneur', name: 'Growpreneur', price: 45000,
    for: 'For established businesses ready to scale sales across social & web.',
    featured: false,
    websiteLabel: '25 Website products updated + full monthly web care',
    items: [
      ['8', 'Designed posts'],
      ['4', 'Reels'],
      ['30', 'Days of stories, 1–3 per day'],
      ['2', 'Ad campaigns, run biweekly'],
      ['15', 'Products listed on Marketplace']
    ]
  }
];

const addons = [
  {
    id: 'growth-surge', name: 'Growth Surge Pack', price: 5500,
    category: 'Social Addon Package',
    summary: 'FB Page Growth Pack',
    delivery: '5–7 days',
    highlights: ['800–1,000 Page Likes', 'Sri Lanka audience focus', 'Delivery: 5–7 days']
  },
  {
    id: 'instabuzz', name: 'InstaBuzz Pack', price: 7500,
    category: 'IG Profile Growth Pack',
    summary: 'Instagram profile growth built around a balanced pace.',
    delivery: '5–7 days',
    highlights: ['800–1,000 Followers', 'Balanced & natural growth speed', 'Delivery: 5–7 days']
  },
  {
    id: 'revenue-rocket', name: 'Revenue Rocket', price: 10000,
    category: 'Sales Addon Package',
    summary: 'Customer inquiry generation for a defined target audience.',
    delivery: '5–7 days',
    highlights: ['80–100 Leads', 'Target Audience Base', 'Delivery: 5–7 days']
  },
  {
    id: 'content-creation', name: 'Content Creation Pack', price: 12000,
    category: 'Content Creation Addon Package',
    summary: 'A ready-to-publish batch of posts and reels.',
    delivery: '1–3 days',
    highlights: ['8 Posts', '4 Reels', '8–12 total content pieces', 'Delivery: 1–3 days']
  },
  {
    id: 'reel-studio', name: 'Reel Studio Pack', price: 15000,
    category: 'Video Creation Addon Package',
    summary: 'Professional short-form videos from your footage.',
    delivery: '3–5 days',
    highlights: ['5–6 videos, 15–60 seconds each', 'Concept & script ideas included', 'Captions, music & transitions', '1 revision per video', 'Optimized for FB, IG & TikTok', 'Delivery: 3–5 days']
  },
  {
    id: 'store-stocker', name: 'Store Stocker Pack', price: 15000,
    category: 'Website Addon Package',
    summary: 'Website product upload and store maintenance support.',
    delivery: '3–5 days',
    highlights: ['100 Products Uploaded', 'SEO-friendly titles & descriptions', 'Pricing, variants & categories', 'Up to 4 images per product', 'WooCommerce & Shopify support', 'Delivery: 3–5 days'],
    footnote: 'Extra products: LKR 100 per product'
  },
  {
    id: 'business-autopilot', name: 'Business Autopilot Pack', price: 20000,
    category: 'Staff & Salary Management System',
    summary: 'A practical staff and payroll system for day-to-day operations.',
    delivery: '5–7 days',
    highlights: ['Employee records', 'Attendance tracking', 'Leave management', 'Salary calculation', 'EPF & ETF calculation', 'Monthly payslips', 'Delivery: 5–7 days']
  }
];

const portfolio = [
  { id:'pt-marble-ad', type:'Ad', client:'Premium Traders', title:'Luxury marble look, without the heavy cost', result:'LKR 70,000+ in sales', caption:'Premium Traders, Colombo · Marble-look sheets · 371 inquiries at just LKR 7 each', image:'assets/portfolio/01-premium-traders-ad.png' },
  { id:'curtain-ad', type:'Ad', client:'Curtain Fashion', title:'20% off custom curtains, with free installation', result:'26 appointments booked', caption:'Curtain Fashion, Kandy · Custom curtains · Just LKR 3,000 in ads, about LKR 115 per appointment', image:'assets/portfolio/02-curtain-fashion-ad.png' },
  { id:'lm-coffee-reel', type:'Reel', client:'Lankan Mart LK', title:'Café-style coffee, right at home', result:'4 orders from one reel', caption:'Lankan Mart LK, Islandwide · Home & kitchen products · 5,600 views and 7+ hours of watch time', image:'assets/portfolio/03-lankan-mart-reel-coffee.png', video:null },
  { id:'lm-feet-reel', type:'Reel', client:'Lankan Mart LK', title:'Stop scrolling, your feet need this', result:'3,800 views', caption:'Lankan Mart LK, Islandwide · Home & wellness products · 1,400+ organic views and 20 comments', image:'assets/portfolio/04-lankan-mart-reel-feet.png', video:null },
  { id:'herstore-glow-post', type:'Post', client:'HerStore.lk', title:'3 steps to healthy, glowing skin', result:'2,300 views', caption:'HerStore.lk, Islandwide · Skincare · 21 clicks through to the online store', image:'assets/portfolio/05-herstore-skincare-post.png' },
  { id:'pt-google', type:'Google', client:'Premium Traders', title:'Easier to find on Google', result:'72% more Google interactions', caption:'Premium Traders, Colombo · 91 calls, chats, direction requests and website clicks', image:'assets/portfolio/06-premium-traders-google.png' },
  { id:'lm-listings', type:'Listings', client:'Lankan Mart LK', title:'Everyday products, listed and selling', result:'19 orders in 30 days', caption:'Lankan Mart LK, Islandwide · Home & kitchen products · 643 clicks on product listings', image:'assets/portfolio/07-lankan-mart-listings.png' },
  { id:'herstore-seo', type:'SEO', client:'HerStore.lk', title:'Found on Google, product by product', result:'100+ SEO-optimised products', caption:'HerStore.lk, Islandwide · Skincare · Every brand and product page built around what shoppers search, like "cerave products sri lanka"', image:'assets/portfolio/08-herstore-seo.png' },
  { id:'pt-page-growth', type:'Page Growth', client:'Premium Traders', title:'A page built for real buyers', result:'1,700 followers in 3 months', caption:'Premium Traders, Islandwide · Aluminium & hardware · Targeted to people shopping for construction and renovation, not random followers', image:'assets/portfolio/09-premium-traders-page-growth.png' },
  { id:'herstore-website', type:'Website', client:'HerStore.lk', title:'An e-commerce website built for the brand', result:'Live e-commerce website', caption:'HerStore.lk · E-commerce website · Built and managed by Sha Digii', image:'assets/portfolio/10-herstore-website.png', externalUrl:'https://herstore.lk/' }
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
  { icon:'◫', title:'Social media management', text:'Plan, design and post your Facebook and Instagram content every month.' },
  { icon:'✦', title:'Content & reels', text:'Create social posts, short-form videos and content batches ready to publish.' },
  { icon:'↗', title:'Advertising', text:'Plan and manage campaigns built around inquiries, leads and sales.' },
  { icon:'▣', title:'Website management', text:'Keep product pages, banners and basic store maintenance moving on schedule.' },
  { icon:'⌕', title:'SEO & search visibility', text:'Structure product and brand content around the searches your customers make.' },
  { icon:'▤', title:'Online sales support', text:'Help with customer inquiries, order confirmation and day-to-day digital operations.' }
];
