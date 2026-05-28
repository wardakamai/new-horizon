import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Droplets, Fuel, PlaneTakeoff, Flame, Gauge, Zap,
  ArrowRight, FlaskConical, ExternalLink,
} from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { makeBreadcrumbs, PRODUCTS_SCHEMA } from '../seo-schemas'
import { staggerContainer, staggerItem } from '../variants'

const FEATURED_PRODUCTS = [
  {
    Icon: Fuel,
    name: 'EN590 Diesel',
    tagline: 'Ultra-Low Sulphur Diesel',
    spec: '10 ppm max. sulphur — EN 590:2013+A1:2017',
    to: '/products/en590-diesel',
  },
  {
    Icon: PlaneTakeoff,
    name: 'Jet Fuel A1',
    tagline: 'Aviation Turbine Fuel',
    spec: 'DEF STAN 91-091 & ASTM D1655 compliant',
    to: '/products/jet-a1',
  },
  {
    Icon: Droplets,
    name: 'Crude Oil',
    tagline: 'Urals & Qatar Origin',
    spec: 'SGS-inspected at origin · FOB / CIF / TTO',
    to: '/products/crude-oil',
  },
  {
    Icon: Gauge,
    name: 'D6 Virgin Fuel Oil',
    tagline: 'Residual Fuel Oil',
    spec: '60–80 cSt · ISO 8217:2017 · VLSFO available',
    to: '/products/virgin-fuel-oil-d6',
  },
]

/* ── Product data with full technical specifications ─────────────────────── */
const PRODUCTS = [
  {
    id: 'crude-oil',
    Icon: Droplets,
    name: 'Crude Oil',
    grades: ['Brent Blend', 'WTI (West Texas Intermediate)', 'Urals'],
    tagline: 'Light sweet and medium sour grades for refineries and trading houses worldwide.',
    description:
      'New Horizon facilitates the supply of internationally traded crude oil benchmarks — including Brent Blend from the North Sea and WTI from US Permian Basin production. All crude cargoes are SGS-inspected at origin for quality and quantity.',
    specs: [
      { label: 'API Gravity',      value: '38–40° (Brent) / 39.6° (WTI)' },
      { label: 'Sulphur Content',  value: '0.24–0.45% wt' },
      { label: 'Pour Point',       value: '−6°C (Brent)' },
      { label: 'Kinematic Viscosity', value: '1.5–4.0 cSt @ 50°C' },
      { label: 'Water & Sediment', value: 'max. 0.5% vol' },
      { label: 'Minimum Cargo',    value: '25,000 MT (spot)' },
    ],
    standards: ['ASTM D287', 'ASTM D4294', 'ASTM D5002', 'ISO 3170'],
    incoterms: ['FOB', 'CIF', 'TTO'],
    inspection: 'SGS / Intertek at loading port',
  },
  {
    id: 'diesel-en590',
    Icon: Fuel,
    name: 'Diesel EN590',
    grades: ['EN590 Grade A (summer)', 'EN590 Grade F (arctic)', 'D2 GOST'],
    tagline: 'Ultra-low sulphur diesel meeting full European EN590 specification.',
    description:
      'EN590 is the European standard for automotive diesel. Our supply conforms to the 2013+A1:2017 revision — 10 ppm maximum sulphur — and is suitable for all Euro V and Euro VI diesel vehicles, heavy transport, and industrial power generation.',
    specs: [
      { label: 'Cetane Number',    value: 'min. 51' },
      { label: 'Sulphur Content',  value: 'max. 10 ppm (0.001% wt)' },
      { label: 'Flash Point',      value: 'min. 55°C' },
      { label: 'Density @ 15°C',   value: '820–845 kg/m³' },
      { label: 'Viscosity @ 40°C', value: '2.00–4.50 mm²/s' },
      { label: 'CFPP',             value: '0°C (A) to −44°C (F) by grade' },
      { label: 'Lubricity (HFRR)', value: 'max. 460 µm' },
      { label: 'Minimum Cargo',    value: '5,000 MT' },
    ],
    standards: ['EN 590:2013+A1:2017', 'GOST 32511-2013 (D2)', 'BS EN 590'],
    incoterms: ['FOB', 'CIF'],
    inspection: 'SGS / Bureau Veritas at loading terminal',
  },
  {
    id: 'jet-fuel-a1',
    Icon: PlaneTakeoff,
    name: 'Jet Fuel A1',
    grades: ['Jet A-1 (international)', 'Jet A (US domestic)'],
    tagline: 'Aviation-grade turbine fuel for commercial and cargo airlines.',
    description:
      'Jet A-1 is the international aviation turbine fuel standard for commercial passenger and cargo aircraft. Every batch is tested against DEF STAN 91-091 and ASTM D1655 specifications and requires a Certificate of Analysis (CoA) and Certificate of Conformance (CoC) before release.',
    specs: [
      { label: 'Flash Point',      value: 'min. 38°C' },
      { label: 'Freeze Point',     value: 'max. −47°C' },
      { label: 'Density @ 15°C',   value: '775–840 kg/m³' },
      { label: 'Aromatics',        value: 'max. 25.0% vol' },
      { label: 'Sulphur Content',  value: 'max. 3,000 ppm (0.30% wt)' },
      { label: 'Net Heat of Combustion', value: 'min. 42.8 MJ/kg' },
      { label: 'Thermal Stability (JFTOT)', value: 'min. 260°C' },
      { label: 'Minimum Cargo',    value: '3,000 MT' },
    ],
    standards: ['DEF STAN 91-091 Issue 7', 'ASTM D1655', 'IATA Guidance Material', 'IP 188'],
    incoterms: ['FOB', 'CIF'],
    inspection: 'SGS / Intertek + ASTM/IP testing at origin',
  },
  {
    id: 'lng-lpg',
    Icon: Flame,
    name: 'LNG & LPG',
    grades: ['LNG (Liquefied Natural Gas)', 'LPG Propane (HD-5)', 'LPG Butane (Commercial)', 'Propane-Butane Mix'],
    tagline: 'Liquefied natural and petroleum gas for power, industry, and marine use.',
    description:
      'We supply both LNG — chilled to −162°C for cryogenic transport — and commercial-grade LPG in propane, butane, or mixed compositions. Applications include power generation, petrochemical feedstock, marine bunkering, and residential heating.',
    specs: [
      { label: 'LNG — Methane Content', value: 'min. 85% mol' },
      { label: 'LNG — Temperature',     value: '−162°C (cryogenic)' },
      { label: 'LNG — LHV',             value: '~50 MJ/kg' },
      { label: 'LPG Propane — Purity',  value: 'min. 95% (HD-5 grade)' },
      { label: 'LPG Propane — Pressure', value: '8.4 bar @ 20°C (vapour)' },
      { label: 'LPG Butane — Purity',   value: 'min. 95% commercial grade' },
      { label: 'Sulphur (LPG)',          value: 'max. 50 ppm' },
      { label: 'Minimum Cargo',          value: '1,000 MT' },
    ],
    standards: ['ISO 6578 (LNG measurement)', 'EN 589 (LPG automotive)', 'ASTM D1835 (LPG)', 'GPA 2140'],
    incoterms: ['FOB', 'CIF'],
    inspection: 'Quantity by shore tank / ship meter; quality by lab analysis',
  },
  {
    id: 'fuel-oil',
    Icon: Gauge,
    name: 'Fuel Oil',
    grades: ['HFO 380 cSt (HSFO)', 'VLSFO 0.5% (IMO 2020)', 'D6 Residual Fuel Oil', 'IFO 180 cSt'],
    tagline: 'Heavy and residual fuel oils for marine bunkers, power generation, and industry.',
    description:
      'We supply a range of heavy and residual fuel oils across all major ISO 8217 grades. This includes high-sulphur HFO 380 for vessels with scrubbers, VLSFO (≤0.5% sulphur) for IMO 2020 compliance, and D6 residual for power station use. All grades are supplied with certificate of quality against ISO 8217:2017.',
    specs: [
      { label: 'HFO 380 — Viscosity',   value: '380 cSt @ 50°C (max)' },
      { label: 'HFO 380 — Sulphur',     value: 'max. 3.5% wt (HSFO)' },
      { label: 'VLSFO — Sulphur',       value: 'max. 0.5% wt (IMO 2020)' },
      { label: 'D6 — Viscosity',         value: '60–80 cSt @ 50°C' },
      { label: 'Flash Point (all)',       value: 'min. 60°C' },
      { label: 'Density @ 15°C',         value: 'max. 991 kg/m³' },
      { label: 'Water Content',          value: 'max. 0.5% vol' },
      { label: 'Minimum Cargo',          value: '5,000 MT' },
    ],
    standards: ['ISO 8217:2017 (RMG 380, RMK 700)', 'MARPOL Annex VI (VLSFO)', 'CIMAC Guidelines'],
    incoterms: ['FOB', 'CIF'],
    inspection: 'SGS / Veritas at loading port; MARPOL sulphur sampling',
  },
  {
    id: 'gasoline',
    Icon: Zap,
    name: 'Gasoline',
    grades: ['RON 92 (Regular Unleaded)', 'RON 95 (Premium Unleaded)', 'RON 98 (Super)'],
    tagline: 'Euro V/VI compliant unleaded gasoline for retail, wholesale, and blending.',
    description:
      'We supply European-specification EN 228 unleaded gasoline and GOST-standard petrol across multiple octane grades. Supply is available for retail distribution networks, wholesale importers, and blending operations. All cargoes are tested for octane, vapour pressure, and sulphur at origin.',
    specs: [
      { label: 'Research Octane No.',  value: '92 / 95 / 98 (by grade)' },
      { label: 'Lead Content',         value: '0 mg/L (unleaded)' },
      { label: 'Sulphur',             value: 'max. 10 ppm (Euro V/VI)' },
      { label: 'Benzene',             value: 'max. 1.0% vol' },
      { label: 'Aromatics',           value: 'max. 35.0% vol' },
      { label: 'Olefins',             value: 'max. 18.0% vol' },
      { label: 'Reid Vapour Pressure', value: '45–100 kPa (seasonal)' },
      { label: 'Minimum Cargo',        value: '5,000 MT' },
    ],
    standards: ['EN 228:2012+A1:2017 (European)', 'GOST R 51105-97 (GOST)', 'ASTM D4814 (US)'],
    incoterms: ['FOB', 'CIF'],
    inspection: 'SGS inspection + certified lab analysis at loading',
  },
]

const INCOTERM_COLORS = {
  FOB: 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
  CIF: 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
  TTO: 'bg-purple-50 text-purple-700 border-purple-200',
}

function ProductCard({ product, index }) {
  const { Icon, name, grades, tagline, description, specs, standards, incoterms, inspection } = product

  return (
    <motion.article
      id={product.id}
      variants={staggerItem}
      className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Card header */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-5 p-8 bg-brand-cream border-b border-gray-100">
        <div className="w-14 h-14 rounded-xl bg-brand-teal flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-teal/20">
          <Icon className="text-white" size={26} strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-tealDeep">
              {name}
            </h2>
          </div>
          <p className="font-body text-sm text-brand-gold font-medium mb-2">{tagline}</p>
          {/* Available grades */}
          <div className="flex flex-wrap gap-1.5">
            {grades.map(g => (
              <span key={g} className="inline-block px-2.5 py-0.5 rounded-full bg-white border border-gray-200 text-[11px] font-body text-gray-600">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Description */}
        <p className="font-body text-gray-600 text-sm leading-relaxed mb-8">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical specifications table */}
          <div>
            <h3 className="flex items-center gap-2 font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-4">
              <FlaskConical size={14} className="text-brand-teal" />
              Technical Specifications
            </h3>
            <div className="rounded-xl overflow-hidden border border-gray-100">
              <table className="w-full text-xs font-body">
                <tbody>
                  {specs.map(({ label, value }, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-brand-cream' : 'bg-white'}
                    >
                      <td className="px-4 py-2.5 text-gray-500 font-medium w-2/5 align-top">
                        {label}
                      </td>
                      <td className="px-4 py-2.5 text-brand-tealDeep font-semibold">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right column: standards + delivery */}
          <div className="space-y-6">
            {/* Standards */}
            <div>
              <h3 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-3">
                Applicable Standards
              </h3>
              <ul className="space-y-1.5">
                {standards.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0 mt-1.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Incoterms */}
            <div>
              <h3 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-3">
                Delivery Terms
              </h3>
              <div className="flex flex-wrap gap-2">
                {incoterms.map(term => (
                  <span
                    key={term}
                    className={`px-3 py-1 rounded-full text-xs font-bold font-body border ${INCOTERM_COLORS[term] || 'bg-gray-50 text-gray-600 border-gray-200'}`}
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>

            {/* Inspection */}
            <div>
              <h3 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-2">
                Inspection
              </h3>
              <p className="font-body text-xs text-gray-600 leading-relaxed">{inspection}</p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-teal text-white text-xs font-medium font-body rounded-lg hover:bg-brand-tealDark transition-colors"
            >
              Request a Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Petroleum Products Portfolio | New Horizon Oil and Gas"
        description="Crude oil, EN590 diesel, Jet A1, LNG, LPG, fuel oil and gasoline. Supplied to verified buyers globally with SGS inspection and full documentation."
        keywords="petroleum products supplier, crude oil supply, diesel EN590 10ppm, Jet Fuel A1, LNG supplier, LPG supplier, D6 fuel oil, gasoline RON 92, oil products global supply, bulk petroleum supply, petroleum trading company, fuel oil HFO, VLSFO IMO 2020"
        path="/products"
        schemas={[
          makeBreadcrumbs([{ name: 'Products', path: '/products' }]),
          PRODUCTS_SCHEMA,
        ]}
      />

      <PageHero
        tag="Our Portfolio"
        title="Petroleum Products We Supply"
        subtitle="Technical specifications, applicable standards, available grades, and delivery terms for every product in our portfolio."
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* Featured product sub-pages */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-5">
            Dedicated Product Pages
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURED_PRODUCTS.map(({ Icon, name, tagline, spec, to }) => (
              <Link
                key={to}
                to={to}
                className="flex items-start gap-4 p-5 rounded-2xl bg-brand-cream border border-gray-100 hover:border-brand-teal/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center flex-shrink-0 shadow-sm shadow-brand-teal/20">
                  <Icon className="text-white" size={18} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-display text-base font-bold text-brand-tealDeep group-hover:text-brand-teal transition-colors">
                      {name}
                    </p>
                    <ExternalLink size={12} className="text-brand-teal flex-shrink-0" />
                  </div>
                  <p className="font-body text-xs font-medium text-brand-gold mb-1">{tagline}</p>
                  <p className="font-body text-xs text-gray-500 leading-relaxed">{spec}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-jump anchors */}
      <nav aria-label="Jump to product" className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {PRODUCTS.map(({ id, name, Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-1.5 flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium font-body text-gray-600 hover:bg-brand-cream hover:text-brand-teal transition-colors"
              >
                <Icon size={13} />
                {name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Product detail cards */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-8"
          >
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Procurement note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-tealDeep mb-4">
            How We Confirm Availability & Pricing
          </h2>
          <p className="font-body text-gray-600 leading-relaxed text-sm mb-4">
            Specifications above represent standard grade parameters. Actual cargo specifications are confirmed
            via SGS Certificate of Analysis at loading. Pricing is indexed to Platts or Argus assessments
            at the time of contract, plus agreed premium or discount.
          </p>
          <p className="font-body text-gray-600 leading-relaxed text-sm mb-8">
            To receive a quotation, submit your inquiry with product name, required quantity (MT or BBL),
            preferred Incoterms, and target delivery port. We respond within 24–48 business hours
            with an indicative FCO.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-teal text-white font-medium font-body rounded-xl hover:bg-brand-tealDark transition-colors shadow-md shadow-brand-teal/20"
          >
            Submit a Product Inquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  )
}
