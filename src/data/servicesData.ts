import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'performance-marketing',
    code: '01',
    title: 'Performance Marketing & Media Buying',
    shortDesc: 'Data-driven paid media execution focused on cost efficiency, high-intent audience acquisition, and measurable return on ad spend.',
    fullDesc: 'We build, structure, and scale disciplined media buying operations. By combining methodical campaign architecture with continuous creative testing and rigorous attribution, we ensure your ad spend yields predictable customer acquisition.',
    whoItIsFor: [
      'E-commerce & DTC brands seeking profitable customer acquisition',
      'Scaling businesses aiming to expand past organic reach',
      'Companies dissatisfied with high customer acquisition costs and vague reports'
    ],
    problemsSolved: [
      'Unstructured ad accounts burning budget on low-intent traffic',
      'Inaccurate tracking and lack of clear multi-channel attribution',
      'Ad fatigue and absence of systematic creative iteration workflows',
      'Uncertainty about actual marginal return on advertising spend'
    ],
    approach: [
      'Audit existing media spend, pixel setups, and conversion tracking health',
      'Design modular campaign structures segmented by intent and lifecycle stages',
      'Deploy rapid creative testing protocols to identify breakthrough hooks and formats',
      'Conduct weekly bid and budget reallocations based on verifiable revenue metrics'
    ],
    deliverables: [
      'Comprehensive media buying plan & budget allocation model',
      'Full tracking pixel, CAPI, and conversion event audit & configuration',
      'Custom campaign structure across selected ad networks',
      'Creative testing matrix & performance reporting dashboards'
    ],
    nextStep: 'Request an account audit or discovery session to evaluate your current customer acquisition economics.',
    isCoreService: true
  },
  {
    id: 'paid-social-search',
    code: '02',
    title: 'Paid Social & Search Advertising',
    shortDesc: 'Targeted campaign deployment across Meta, Google Ads, and emerging channels with high-converting creative variations.',
    fullDesc: 'We capture intent where prospects are actively searching and generate demand where they spend their attention. From high-intent Google Search and Shopping campaigns to persuasive Meta (Instagram & Facebook) video ads, every campaign is tuned for business impact.',
    whoItIsFor: [
      'Brands looking to capture high-intent search traffic on Google',
      'Retail and direct-to-consumer businesses expanding on Meta platforms',
      'Hospitality and service providers needing consistent reservation volume'
    ],
    problemsSolved: [
      'Overbidding on broad search keywords without conversion intent',
      'Inability to scale Meta ads past initial lookalike audiences',
      'Fragmented messaging between search queries and landing pages',
      'Wasted impressions from inaccurate audience exclusions'
    ],
    approach: [
      'Perform search query intent mapping and negative keyword hygiene',
      'Develop multi-format ad variations (reels, carousels, long-form static, video)',
      'Implement strict retargeting and exclusion cadences to avoid ad fatigue',
      'Monitor search lost IS (rank/budget) and ROAS trends for real-time adjustments'
    ],
    deliverables: [
      'Google Ads account architecture (Search, Shopping, Performance Max)',
      'Meta advertising hierarchy (Prospecting, Retargeting, Loyalty)',
      'Ad copywriting and static visual variations tailored per placement',
      'Weekly performance summaries and optimization log'
    ],
    nextStep: 'Share your current ad accounts or target markets to define an initial testing roadmap.',
    isCoreService: true
  },
  {
    id: 'social-media-marketing',
    code: '03',
    title: 'Social Media Marketing & Content Planning',
    shortDesc: 'Strategic editorial planning and community communication that turns casual followers into loyal brand advocates.',
    fullDesc: 'Social media is not just about posting frequency; it is your brand’s public showroom and voice. We design editorial strategies, aesthetic content systems, and distribution schedules that establish authority and maintain audience engagement.',
    whoItIsFor: [
      'Lifestyle, hospitality, and design-led brands establishing authority',
      'Startups needing a cohesive, professional brand narrative on social',
      'Businesses wanting to cultivate an active, engaged client community'
    ],
    problemsSolved: [
      'Inconsistent visual presentation and disconnected posting schedules',
      'Low audience engagement resulting from generic corporate updates',
      'Lack of clear conversion pathways from social channels to the website',
      'Time-consuming internal content creation bottlenecks'
    ],
    approach: [
      'Define content pillars aligned with customer pain points and brand story',
      'Create monthly editorial calendars with exact visual and caption briefs',
      'Establish brand response guidelines for timely audience interactions',
      'Analyze organic post performance to inform future creative and paid promotion'
    ],
    deliverables: [
      'Channel positioning guide and aesthetic tone-of-voice standard',
      'Monthly curated content calendar with asset specifications',
      'Community engagement and direct messaging response guidelines',
      'Monthly engagement analysis and strategic recommendations'
    ],
    nextStep: 'Review your social channels with our team to map out high-performing content pillars.',
    isCoreService: true
  },
  {
    id: 'branding-creative-strategy',
    code: '04',
    title: 'Branding & Creative Strategy',
    shortDesc: 'Strategic positioning, distinctive visual identity, and high-impact messaging that differentiate your brand in crowded markets.',
    fullDesc: 'True brand value is built at the intersection of memorable visual aesthetics and commercial clarity. We develop brand foundations, messaging frameworks, and campaign concepts that give your business staying power across Moroccan, European, and international markets.',
    whoItIsFor: [
      'New ventures establishing their market presence from the ground up',
      'Established businesses outgrowing an outdated or DIY brand identity',
      'Brands entering international markets requiring refined positioning'
    ],
    problemsSolved: [
      'Looking indistinguishable from lower-quality competitors',
      'Muddled value propositions that confuse prospective buyers',
      'Inconsistent marketing assets created across different channels',
      'Price resistance driven by weak perceived brand value'
    ],
    approach: [
      'Conduct competitive landscape audits and customer perception interviews',
      'Articulate the core value proposition, brand pillars, and tone of voice',
      'Design modern typography, color palettes, and art-directed asset libraries',
      'Produce comprehensive brand guidelines for effortless cross-team execution'
    ],
    deliverables: [
      'Brand positioning document & core messaging matrix',
      'Visual identity system (wordmark, color palette, typography hierarchy)',
      'Digital brand guidelines & social media visual templates',
      'Launch campaign concepts and launch collateral'
    ],
    nextStep: 'Schedule a brand discovery session to align on your market positioning.',
    isCoreService: true
  },
  {
    id: 'email-marketing-automation',
    code: '05',
    title: 'Email Marketing & Automation',
    shortDesc: 'High-converting automated lifecycle flows and tailored campaigns that maximize customer lifetime value without being spammy.',
    fullDesc: 'Email remains the highest-margin digital channel when treated with respect. We build automated lifecycle sequences—from welcome series to post-purchase nurturing and win-backs—that steadily nurture prospects and generate recurring revenue.',
    whoItIsFor: [
      'E-commerce brands with growing customer lists but low repeat purchase rates',
      'Service businesses wanting automated client onboarding and follow-ups',
      'Organizations looking to reduce reliance on paid ad channels'
    ],
    problemsSolved: [
      'One-size-fits-all batch emails that damage sender reputation and open rates',
      'Missing automated triggers (abandoned checkout, browse abandonment, post-purchase)',
      'Underutilized customer email databases generating negligible revenue',
      'Poor mobile email rendering and unoptimized click-through rates'
    ],
    approach: [
      'Segment existing contact lists by purchase history, recency, and engagement',
      'Draft persuasive copy and responsive, minimalist email layouts',
      'Construct event-driven automated workflows inside your chosen ESP (e.g. Klaviyo, Mailchimp)',
      'Perform continuous A/B subject line and send-time testing'
    ],
    deliverables: [
      'Core automated lifecycle flows (Welcome, Abandoned Cart, Post-Purchase, Win-back)',
      'Branded responsive email design templates',
      'Contact segmentation strategy and list hygiene protocol',
      'Deliverability optimization and monthly revenue tracking reports'
    ],
    nextStep: 'Request an email list audit to identify revenue gaps in your current lifecycle flows.',
    isCoreService: true
  },
  {
    id: 'seo-content-strategy',
    code: '06',
    title: 'SEO & Content Strategy',
    shortDesc: 'Search intent research, on-page optimization, and editorial planning that builds enduring organic visibility.',
    fullDesc: 'We treat search engine optimization as an organic demand generator, not a keyword-stuffing exercise. By understanding user search intent and structuring your digital footprint logically, we help your business rank for queries that actually convert into customers.',
    whoItIsFor: [
      'Businesses looking to reduce long-term customer acquisition costs',
      'Companies with new websites needing strong organic discoverability',
      'Regional businesses targeting specific geographic markets (Morocco, France, UK)'
    ],
    problemsSolved: [
      'Targeting high-volume keywords with zero commercial conversion intent',
      'Technical SEO blockers preventing search engines from indexing core pages',
      'Low organic ranking for commercial queries in local and regional markets',
      'Thin content that fails to satisfy user search questions'
    ],
    approach: [
      'Conduct commercial search intent keyword research and competitor gap analysis',
      'Perform on-page SEO audits: metadata, header structures, URLs, and internal linking',
      'Provide technical health recommendations (Core Web Vitals, schema, crawlability)',
      'Formulate editorial content roadmaps prioritizing high-intent transaction terms'
    ],
    deliverables: [
      'Commercial keyword research map & intent priority matrix',
      'On-page SEO audit report with concrete implementation tickets',
      'Content calendar of topics designed to drive qualified organic searchers',
      'Quarterly ranking movement and organic traffic assessment'
    ],
    nextStep: 'Submit your website for an organic search footprint overview.',
    isCoreService: false
  },
  {
    id: 'landing-pages-cro',
    code: '07',
    title: 'Landing Pages & Conversion Optimization',
    shortDesc: 'Custom conversion architectures and friction-free user journeys engineered to turn incoming visitors into paying clients.',
    fullDesc: 'Traffic is only half the equation. If your landing pages fail to communicate clarity and confidence immediately, media spend is wasted. We design fast, persuasive landing pages with clear value hierarchies and zero distractions.',
    whoItIsFor: [
      'Businesses spending on paid media but suffering from low conversion rates',
      'Product launches needing a dedicated, conversion-focused single page',
      'Service firms looking to replace generic homepages with tailored campaign funnels'
    ],
    problemsSolved: [
      'Slow-loading pages that cause visitors to bounce before seeing the offer',
      'Cluttered interfaces with competing calls-to-action that paralyze decisions',
      'Weak value propositions that fail to address buyer objections',
      'Poor mobile checkout and lead submission experiences'
    ],
    approach: [
      'Analyze current conversion funnel drop-off points and session recordings',
      'Draft clear, objection-handling copy with structured social proof placement',
      'Build lightweight, responsive landing pages optimized for sub-second loading',
      'Establish baseline conversion metrics and test incremental layout variations'
    ],
    deliverables: [
      'Conversion-focused landing page wireframe & visual design',
      'High-converting sales copy written for your target customer persona',
      'Complete frontend implementation with analytics & tracking integration',
      'Conversion rate optimization testing checklist'
    ],
    nextStep: 'Share your primary landing page URL for an objective conversion critique.',
    isCoreService: true
  },
  {
    id: 'product-design-digital-experiences',
    code: '08',
    title: 'Product Design & Digital Experiences',
    shortDesc: 'Intuitive UI/UX design, interactive prototypes, and modern digital interfaces that delight users and support conversion.',
    fullDesc: 'Drawing from real product design experience, we craft clean, accessible, and responsive digital products. From web applications to client portals and e-commerce platforms, we make digital interactions effortless and aesthetically refined.',
    whoItIsFor: [
      'Tech startups and SaaS teams designing new web interfaces',
      'E-commerce brands seeking custom digital shopping experiences',
      'Traditional enterprises modernizing client portals and workflow tools'
    ],
    problemsSolved: [
      'Confusing user workflows leading to abandoned tasks and high support tickets',
      'Outdated interfaces that erode trust with discerning international clients',
      'Inaccessible and unresponsive layouts that break on mobile viewports',
      'Disconnection between visual design and actual frontend engineering'
    ],
    approach: [
      'Conduct user journey mapping and structural information architecture planning',
      'Create interactive wireframes to validate usability before development',
      'Develop modern design systems with consistent components, tokens, and states',
      'Deliver production-ready specs ensuring seamless transition to engineering'
    ],
    deliverables: [
      'Complete UI/UX wireframes and interactive prototypes',
      'Design system specification (components, typography, states, color tokens)',
      'Responsive interface layouts for mobile, tablet, and desktop',
      'Design-to-code technical handoff documentation'
    ],
    nextStep: 'Discuss your product roadmap or interface requirements with our founder.',
    isCoreService: true
  }
];
