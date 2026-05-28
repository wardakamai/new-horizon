/* ─────────────────────────────────────────────────────────────────────────────
   Centralised JSON-LD schema factories
   All schemas are merged into a single @graph block by <Seo /> per page.
───────────────────────────────────────────────────────────────────────────── */

export const BASE_URL   = 'https://www.newhorizonoil.com'
export const SITE_NAME  = 'New Horizon Oil and Gas'
export const GEO_LAT    = '51.1801'
export const GEO_LNG    = '71.4460'

// ── Site-wide: always injected by <Seo /> ────────────────────────────────────
export const ORG_SCHEMA = {
  '@type': 'Organization',
  '@id':   `${BASE_URL}/#organization`,
  name:    SITE_NAME,
  url:     BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url:     `${BASE_URL}/site-logo.png`,
  },
  description:
    'New Horizon Oil and Gas is an official mandate to oil and gas suppliers, facilitating the supply of oil products to serious buyers globally.',
  address: {
    '@type':          'PostalAddress',
    streetAddress:    'Dinmukhamed Qonayev St 2',
    addressLocality:  'Astana',
    postalCode:       '010000',
    addressRegion:    'KZ-AST',
    addressCountry:   'KZ',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   GEO_LAT,
    longitude:  GEO_LNG,
  },
  contactPoint: [
    {
      '@type':           'ContactPoint',
      telephone:         '+7-711-610-3763',
      contactType:       'customer service',
      email:             'info@newhorizonoil.com',
      areaServed:        'Worldwide',
      availableLanguage: ['English', 'Russian'],
    },
    {
      '@type':           'ContactPoint',
      telephone:         '+420-225-636-109',
      contactType:       'customer service',
      areaServed:        'Worldwide',
      availableLanguage: 'English',
    },
  ],
  areaServed: 'Worldwide',
  sameAs:     [],
}

// ── Home page only ────────────────────────────────────────────────────────────
export const WEBSITE_SCHEMA = {
  '@type':       'WebSite',
  '@id':         `${BASE_URL}/#website`,
  name:          SITE_NAME,
  url:           BASE_URL,
  description:   'Official petroleum mandate facilitating global supply of crude oil, diesel EN590, Jet A1, LNG, LPG, and fuel oil.',
  publisher:     { '@id': `${BASE_URL}/#organization` },
}

// ── Breadcrumb factory ────────────────────────────────────────────────────────
export const makeBreadcrumbs = (crumbs) => ({
  '@type':           'BreadcrumbList',
  itemListElement:   [
    {
      '@type':  'ListItem',
      position: 1,
      name:     'Home',
      item:     BASE_URL,
    },
    ...crumbs.map(({ name, path }, i) => ({
      '@type':  'ListItem',
      position: i + 2,
      name,
      item:     `${BASE_URL}${path}`,
    })),
  ],
})

// ── Products page: ItemList of petroleum products ─────────────────────────────
export const PRODUCTS_SCHEMA = {
  '@type':           'ItemList',
  name:              'Petroleum Products Supplied by New Horizon Oil and Gas',
  description:       'Full portfolio of petroleum products available for global supply.',
  itemListElement:   [
    { '@type': 'ListItem', position: 1, name: 'Crude Oil — Urals & Qatar Origin',       url: `${BASE_URL}/products/crude-oil`    },
    { '@type': 'ListItem', position: 2, name: 'Diesel EN590 10ppm Ultra-Low Sulphur',   url: `${BASE_URL}/products/en590-diesel` },
    { '@type': 'ListItem', position: 3, name: 'Jet Fuel A1 (Aviation Grade)',            url: `${BASE_URL}/products/jet-a1`       },
    { '@type': 'ListItem', position: 4, name: 'LNG & LPG (Liquefied Gas)',               url: `${BASE_URL}/products`              },
    { '@type': 'ListItem', position: 5, name: 'Fuel Oil (D6 / HFO / VLSFO)',             url: `${BASE_URL}/products`              },
    { '@type': 'ListItem', position: 6, name: 'Gasoline (RON 92 / RON 95)',              url: `${BASE_URL}/products`              },
  ],
}

// ── D6 Virgin Fuel Oil product schema ────────────────────────────────────────
export const D6_PRODUCT_SCHEMA = {
  '@type': 'Product',
  '@id':   `${BASE_URL}/products/virgin-fuel-oil-d6#product`,
  name:    'D6 Virgin Residual Fuel Oil',
  description:
    'D6 virgin residual fuel oil (60–80 cSt @ 50°C) for power generation, industrial boilers, and marine use. Available FOB Rotterdam, Houston, Jurong, Fujairah or CIF any safe world port. Minimum cargo 5,000 MT.',
  brand: { '@type': 'Brand', name: SITE_NAME },
  offers: {
    '@type':        'Offer',
    seller:         { '@id': `${BASE_URL}/#organization` },
    priceCurrency:  'USD',
    availability:   'https://schema.org/InStock',
    areaServed:     'Worldwide',
    description:    'FOB Rotterdam, Houston, Jurong, Fujairah. CIF any safe world port. Min. 5,000 MT.',
  },
}

// ── EN590 Diesel product schema ───────────────────────────────────────────────
export const EN590_PRODUCT_SCHEMA = {
  '@type': 'Product',
  '@id':   `${BASE_URL}/products/en590-diesel#product`,
  name:    'EN590 Ultra-Low Sulphur Diesel',
  description:
    'EN590 10ppm ultra-low sulphur diesel (ULSD) conforming to EN 590:2013+A1:2017. Available FOB Rotterdam, Houston, Jurong, Fujairah or CIF any safe world port. Minimum cargo 5,000 MT.',
  brand: { '@type': 'Brand', name: SITE_NAME },
  offers: {
    '@type':        'Offer',
    seller:         { '@id': `${BASE_URL}/#organization` },
    priceCurrency:  'USD',
    availability:   'https://schema.org/InStock',
    areaServed:     'Worldwide',
    description:    'FOB Rotterdam, Houston, Jurong, Fujairah. CIF any safe world port. Min. 5,000 MT.',
  },
}

// ── Jet A1 product schema ─────────────────────────────────────────────────────
export const JET_A1_PRODUCT_SCHEMA = {
  '@type': 'Product',
  '@id':   `${BASE_URL}/products/jet-a1#product`,
  name:    'Jet A-1 Aviation Turbine Fuel',
  description:
    'Aviation-grade Jet A-1 meeting DEF STAN 91-091 Issue 7 and ASTM D1655. Available FOB Rotterdam, Houston, Jurong, Fujairah or CIF any safe world port. Minimum cargo 3,000 MT.',
  brand: { '@type': 'Brand', name: SITE_NAME },
  offers: {
    '@type':        'Offer',
    seller:         { '@id': `${BASE_URL}/#organization` },
    priceCurrency:  'USD',
    availability:   'https://schema.org/InStock',
    areaServed:     'Worldwide',
    description:    'FOB Rotterdam, Houston, Jurong, Fujairah. CIF any safe world port. Min. 3,000 MT.',
  },
}

// ── Crude Oil product schema ──────────────────────────────────────────────────
export const CRUDE_OIL_PRODUCT_SCHEMA = {
  '@type': 'Product',
  '@id':   `${BASE_URL}/products/crude-oil#product`,
  name:    'Crude Oil — Urals & Qatar Origin',
  description:
    'Crude oil from Urals (Russia) and Qatar origins. SGS-inspected at loading. Available FOB Rotterdam, Houston, Jurong, Fujairah or CIF any safe world port. Minimum cargo 25,000 MT.',
  brand: { '@type': 'Brand', name: SITE_NAME },
  offers: {
    '@type':        'Offer',
    seller:         { '@id': `${BASE_URL}/#organization` },
    priceCurrency:  'USD',
    availability:   'https://schema.org/InStock',
    areaServed:     'Worldwide',
    description:    'FOB Rotterdam, Houston, Jurong, Fujairah. CIF any safe world port. Min. 25,000 MT.',
  },
}

// ── Services page: ItemList of services ──────────────────────────────────────
export const SERVICES_SCHEMA = {
  '@type':         'Service',
  name:            'Oil & Gas Supply and Facilitation Services',
  provider:        { '@id': `${BASE_URL}/#organization` },
  areaServed:      'Worldwide',
  description:     'Mandate representation, buyer-supplier facilitation, trade documentation processing (LOI, ICPO, FCO, BCL), SGS inspection coordination, and full-cycle petroleum supply services.',
  serviceType:     'Petroleum Supply Facilitation',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name:    'Oil & Gas Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mandate Representation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Buyer-Supplier Facilitation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trade Documentation (LOI/ICPO/FCO/BCL)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SGS Inspection Coordination' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contract Advisory' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Market Intelligence' } },
    ],
  },
}

// ── Contact page: LocalBusiness ───────────────────────────────────────────────
export const LOCAL_BUSINESS_SCHEMA = {
  '@type':      ['LocalBusiness', 'Organization'],
  '@id':        `${BASE_URL}/#localbusiness`,
  name:         SITE_NAME,
  url:          BASE_URL,
  telephone:    '+7-711-610-3763',
  email:        'info@newhorizonoil.com',
  address: {
    '@type':         'PostalAddress',
    streetAddress:   'Dinmukhamed Qonayev St 2',
    addressLocality: 'Astana',
    postalCode:      '010000',
    addressRegion:   'KZ-AST',
    addressCountry:  'KZ',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   GEO_LAT,
    longitude:  GEO_LNG,
  },
  openingHoursSpecification: {
    '@type':    'OpeningHoursSpecification',
    dayOfWeek:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens:      '00:00',
    closes:     '23:59',
  },
}

// ── HowTo schema for the process page ────────────────────────────────────────
export const HOW_TO_SCHEMA = {
  '@type':       'HowTo',
  name:          'How to Source Oil Products Through New Horizon Oil and Gas',
  description:   'Step-by-step process for buyers to procure petroleum products through New Horizon Oil and Gas.',
  step: [
    {
      '@type':      'HowToStep',
      position:     1,
      name:         'Submit Inquiry',
      text:         'Contact us with your product requirements, quantity, delivery location, and target price. Include your company details for KYC.',
    },
    {
      '@type':      'HowToStep',
      position:     2,
      name:         'Receive Quotation',
      text:         'Receive a detailed quotation including product specification, pricing, Incoterms, and delivery timeline within 24–48 hours.',
    },
    {
      '@type':      'HowToStep',
      position:     3,
      name:         'Sign Contract',
      text:         'Execute a formal supply agreement. Submit ICPO and LOI. We process FCO, BCL, and all required trade documents.',
    },
    {
      '@type':      'HowToStep',
      position:     4,
      name:         'Delivery',
      text:         'Product is SGS-inspected at origin, loaded per agreed Incoterms (FOB, CIF, or TTO), and delivered to your designated destination.',
    },
  ],
}
