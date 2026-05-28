import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Droplets, MapPin, CheckCircle2, ArrowRight, FlaskConical } from 'lucide-react'
import Seo from '../../components/Seo'
import PageHero from '../../components/PageHero'
import CTA from '../../components/CTA'
import { makeBreadcrumbs, CRUDE_OIL_PRODUCT_SCHEMA } from '../../seo-schemas'
import { staggerContainer, staggerItem } from '../../variants'

const ORIGINS = [
  {
    id: 'urals',
    name: 'Urals Crude',
    region: 'Russia',
    tagline: 'Medium sour blended export crude — the benchmark for European refineries.',
    description:
      'Urals is Russia\'s primary export crude blend, a medium sour grade traded at Primorsk (Baltic) and Novorossiysk (Black Sea) loading ports. It is the principal benchmark crude for Central and Eastern European refineries, priced at a differential to Dated Brent. Urals is well suited to complex refineries configured for medium sour feedstocks.',
    specs: [
      { label: 'API Gravity',     value: '~31–32°' },
      { label: 'Sulphur Content', value: '~1.2–1.5% wt' },
      { label: 'Pour Point',      value: '~−6°C' },
      { label: 'TAN',             value: '< 0.20 mg KOH/g' },
    ],
  },
  {
    id: 'qatar',
    name: 'Qatar Crude',
    region: 'Qatar',
    tagline: 'Light to medium Arabian Gulf crude from one of the world\'s leading energy exporters.',
    description:
      'Qatar produces several internationally traded crude grades. Qatar Marine is a medium sour Arabian Gulf blend loaded at Ras Laffan and Mesaieed terminals. Qatar Land is a lighter, lower-sulphur grade, well-suited to simple and complex refineries seeking Middle Eastern feedstocks. Both grades are priced against Dubai/Oman assessments.',
    specs: [
      { label: 'API Gravity — Marine', value: '~36°' },
      { label: 'Sulphur — Marine',     value: '~1.2% wt' },
      { label: 'API Gravity — Land',   value: '~41°' },
      { label: 'Sulphur — Land',       value: '~0.9% wt' },
    ],
  },
]

const LOCATIONS = [
  {
    port: 'Rotterdam',
    country: 'Netherlands',
    terms: 'FOB / CIF',
    note: 'Primary European crude hub. Crude allocation available FOB ARA range or CIF to European refineries.',
  },
  {
    port: 'Houston',
    country: 'USA',
    terms: 'FOB',
    note: 'Gulf Coast terminal allocation for Americas refinery buyers. FOB Gulf Coast terms.',
  },
  {
    port: 'Jurong',
    country: 'Singapore',
    terms: 'FOB',
    note: 'Asia-Pacific crude hub. FOB Jurong for East Asian, South-East Asian, and Pacific refinery buyers.',
  },
  {
    port: 'Fujairah',
    country: 'UAE',
    terms: 'FOB',
    note: 'Arabian Gulf gateway. FOB Fujairah for MENA, Indian Subcontinent, and East African buyers.',
  },
]

export default function CrudeOilPage() {
  return (
    <>
      <Seo
        title="Crude Oil Supplier — Urals & Qatar | New Horizon Oil and Gas"
        description="Crude oil supplier — Urals & Qatar origin. FOB Rotterdam, Houston, Jurong & Fujairah. CIF any safe world port. SGS-inspected cargoes for refineries and trading houses."
        keywords="crude oil supplier, crude oil seller, crude oil exporter, Urals crude oil supplier, Qatar crude oil supplier, crude oil trading company, refinery crude oil supplier, direct crude oil mandate, crude oil CIF, crude oil FOB, petroleum crude supplier, Urals crude exporter, Qatar crude seller, Arabian Gulf crude supplier, crude oil Rotterdam"
        path="/products/crude-oil"
        schemas={[
          makeBreadcrumbs([
            { name: 'Products', path: '/products' },
            { name: 'Crude Oil', path: '/products/crude-oil' },
          ]),
          CRUDE_OIL_PRODUCT_SCHEMA,
        ]}
      />

      <PageHero
        tag="Petroleum Products"
        title="Crude Oil Supplier"
        subtitle="Urals and Qatar origin crude oil supplied to refineries and trading houses globally on FOB and CIF terms. Allocation at Rotterdam, Houston, Jurong, and Fujairah."
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Crude Oil' },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">About This Product</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-brand-tealDeep">
              Crude Oil — Urals & Qatar Origin
            </h2>
            <p className="mt-4 font-body text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
              New Horizon Oil and Gas is a direct <strong className="text-brand-tealDeep">crude oil mandate</strong> facilitating the supply of Urals and Qatar origin crude to qualified refineries, independent oil traders, and petroleum trading companies worldwide. All crude cargoes are SGS-inspected at origin for quality and quantity, with full trade documentation provided under internationally recognised procedures.
            </p>
          </motion.div>

          {/* Origin cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {ORIGINS.map(({ id, name, region, tagline, description, specs }) => (
              <motion.article
                key={id}
                variants={staggerItem}
                className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-8 bg-brand-cream border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-teal/20">
                      <Droplets className="text-white" size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-brand-tealDeep">{name}</h3>
                      <p className="font-body text-xs text-brand-gold font-medium uppercase tracking-wider mt-0.5">
                        Origin: {region}
                      </p>
                      <p className="font-body text-sm text-gray-600 mt-2">{tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                    {description}
                  </p>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FlaskConical size={14} className="text-brand-teal" />
                      <h4 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest">
                        Typical Specifications
                      </h4>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-gray-100">
                      <table className="w-full text-xs font-body">
                        <tbody>
                          {specs.map(({ label, value }, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-brand-cream' : 'bg-white'}>
                              <td className="px-4 py-2.5 text-gray-500 font-medium w-1/2">{label}</td>
                              <td className="px-4 py-2.5 text-brand-tealDeep font-semibold">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Common specs + inspection */}
          <motion.div
            className="mt-8 p-8 rounded-2xl bg-brand-cream border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-3">Inspection</h4>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  SGS / Intertek at loading port. Quantity determined by shore tank gauging or draft survey. CoQ and CoA issued at loading.
                </p>
              </div>
              <div>
                <h4 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-3">Standards</h4>
                <ul className="space-y-1.5">
                  {['ASTM D287 (API gravity)', 'ASTM D4294 (sulphur)', 'ASTM D5002 (density)', 'ISO 3170 (sampling)'].map((s, i) => (
                    <li key={i} className="flex items-center gap-2 font-body text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-3">Delivery Terms</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {['FOB', 'CIF', 'TTO'].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/20 text-xs font-bold font-body">{t}</span>
                  ))}
                </div>
                <p className="font-body text-xs text-gray-600">Minimum cargo: 25,000 MT (spot)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Locations */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Availability</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-tealDeep">FOB Locations & CIF Supply</h2>
            <p className="mt-4 font-body text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
              New Horizon holds crude oil allocation at four major international petroleum hubs. FOB delivery is available from each location; CIF supply is available to any safe world port.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
          >
            {LOCATIONS.map(({ port, country, terms, note }) => (
              <motion.div
                key={port}
                variants={staggerItem}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="text-brand-teal flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-display text-xl font-bold text-brand-tealDeep">{port}</p>
                    <p className="font-body text-xs text-gray-500">{country}</p>
                  </div>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-teal/10 text-brand-teal text-[11px] font-bold font-body border border-brand-teal/20 mb-3">
                  {terms}
                </span>
                <p className="font-body text-xs text-gray-600 leading-relaxed">{note}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl bg-brand-tealDeep text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs font-bold text-brand-gold uppercase tracking-widest mb-2">
              CIF — Any Safe World Port
            </p>
            <p className="font-body text-white/90 text-sm leading-relaxed max-w-2xl mx-auto">
              CIF crude oil supply is available from Rotterdam, Houston, Jurong, or Fujairah to{' '}
              <strong className="text-white">any safe world port</strong>. TTO (tanker-to-tanker operations) can also be arranged for VLCC-size cargoes at suitable offshore anchorages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Get Started</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-tealDeep mb-4">
            Request a Crude Oil Quotation
          </h2>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Submit your inquiry specifying required origin (Urals or Qatar), volume (MT or BBL), preferred Incoterms, and delivery port. We will respond with an indicative FCO within 24–48 business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-teal text-white font-medium font-body rounded-xl shadow-lg shadow-brand-teal/25 hover:bg-brand-tealDark transition-colors"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-gold text-brand-gold font-medium font-body rounded-xl hover:bg-brand-gold hover:text-white transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-10 bg-brand-cream border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-4">
            Related Products
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'EN590 Diesel',   to: '/products/en590-diesel', note: 'Ultra-low sulphur diesel' },
              { label: 'Jet Fuel A1',    to: '/products/jet-a1',       note: 'Aviation-grade turbine fuel' },
              { label: 'Full Portfolio', to: '/products',              note: 'All petroleum products' },
            ].map(({ label, to, note }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-100 hover:border-brand-teal/30 hover:shadow-sm transition-all duration-200 group"
              >
                <div>
                  <p className="font-body text-sm font-semibold text-brand-tealDeep group-hover:text-brand-teal transition-colors">
                    {label}
                  </p>
                  <p className="font-body text-xs text-gray-500">{note}</p>
                </div>
                <ArrowRight size={14} className="text-brand-teal flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
