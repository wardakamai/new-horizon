import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gauge, MapPin, CheckCircle2, ArrowRight, FlaskConical, Zap } from 'lucide-react'
import Seo from '../../components/Seo'
import PageHero from '../../components/PageHero'
import CTA from '../../components/CTA'
import { makeBreadcrumbs, D6_PRODUCT_SCHEMA } from '../../seo-schemas'
import { staggerContainer, staggerItem } from '../../variants'

const SPECS = [
  { label: 'Viscosity @ 50°C',        value: '60–80 cSt' },
  { label: 'Flash Point',              value: 'min. 60°C' },
  { label: 'Density @ 15°C',           value: 'max. 991 kg/m³' },
  { label: 'Sulphur Content',          value: 'max. 3.5% wt (standard) / max. 0.5% wt (VLSFO)' },
  { label: 'Pour Point',               value: 'max. 30°C' },
  { label: 'Water Content',            value: 'max. 0.5% vol' },
  { label: 'Sediment by Extraction',   value: 'max. 0.10% wt' },
  { label: 'Ash Content',              value: 'max. 0.10% wt' },
  { label: 'Minimum Cargo',            value: '5,000 MT' },
]

const GRADES = [
  {
    grade: 'D6 Virgin Fuel Oil (Standard)',
    note: 'Residual grade — sulphur max. 3.5% wt. Power generation and industrial use.',
  },
  {
    grade: 'D6 VLSFO (IMO 2020 Compliant)',
    note: 'Very low sulphur — max. 0.5% wt. Marine bunker use in Emission Control Areas.',
  },
]

const APPLICATIONS = [
  {
    Icon: Zap,
    title: 'Power Generation',
    description:
      'D6 virgin fuel oil is widely used as a primary or backup fuel in diesel and dual-fuel power plants, independent power producers (IPPs), and captive power facilities. Its high calorific value and relatively low cost make it a preferred fuel for heavy-duty generating sets.',
  },
  {
    Icon: Gauge,
    title: 'Industrial Boilers & Furnaces',
    description:
      'Industrial facilities — including cement plants, refineries, and manufacturing operations — use D6 residual fuel oil in boilers and process furnaces for steam generation and direct heating applications.',
  },
  {
    Icon: MapPin,
    title: 'Marine Bunkering',
    description:
      'D6 residual fuel oil (including VLSFO variants) is used as a bunker fuel for ocean-going vessels. VLSFO grade (≤0.5% sulphur) is compliant with MARPOL Annex VI IMO 2020 global sulphur cap for vessels without exhaust gas cleaning systems.',
  },
]

const LOCATIONS = [
  {
    port: 'Rotterdam',
    country: 'Netherlands',
    terms: 'FOB / CIF',
    note: 'Primary European fuel oil hub. D6 available ex-ARA range on FOB or CIF Europe terms. Major bunkering and industrial fuel supply origin.',
  },
  {
    port: 'Houston',
    country: 'USA',
    terms: 'FOB',
    note: 'Gulf Coast terminal allocation. D6 fuel oil for Americas power stations, industrial buyers, and marine bunkering on FOB terms.',
  },
  {
    port: 'Jurong',
    country: 'Singapore',
    terms: 'FOB',
    note: 'Asia-Pacific hub. One of the world\'s largest bunkering ports. FOB Jurong for South-East Asian and East Asian buyers.',
  },
  {
    port: 'Fujairah',
    country: 'UAE',
    terms: 'FOB',
    note: 'Major Arabian Gulf bunkering hub. FOB Fujairah for MENA, East African, and Indian Subcontinent buyers.',
  },
]

export default function VirginFuelOilD6Page() {
  return (
    <>
      <Seo
        title="D6 Virgin Fuel Oil Supplier | New Horizon Oil and Gas"
        description="D6 virgin residual fuel oil supplier. FOB Rotterdam, Houston, Jurong & Fujairah. CIF any safe world port. Supply to power stations, industry and marine buyers."
        keywords="D6 fuel oil supplier, D6 virgin fuel oil supplier, residual fuel oil supplier, D6 fuel oil seller, D6 fuel oil exporter, virgin fuel oil D6, fuel oil D6 mandate, bulk D6 fuel oil, D6 fuel oil Rotterdam, D6 fuel oil Fujairah, D6 fuel oil Singapore, D6 VLSFO supplier, residual fuel oil exporter, heavy fuel oil supplier"
        path="/products/virgin-fuel-oil-d6"
        schemas={[
          makeBreadcrumbs([
            { name: 'Products', path: '/products' },
            { name: 'D6 Virgin Fuel Oil', path: '/products/virgin-fuel-oil-d6' },
          ]),
          D6_PRODUCT_SCHEMA,
        ]}
      />

      <PageHero
        tag="Petroleum Products"
        title="D6 Virgin Fuel Oil Supplier"
        subtitle="D6 virgin residual fuel oil for power generation, industrial boilers, and marine bunkering. FOB from Rotterdam, Houston, Jurong, and Fujairah. CIF any safe world port."
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'D6 Virgin Fuel Oil' },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.span variants={staggerItem} className="inline-block text-brand-gold font-body text-sm font-medium uppercase tracking-widest mb-3">
                About This Product
              </motion.span>
              <motion.h2 variants={staggerItem} className="font-display text-4xl font-bold text-brand-tealDeep leading-tight mb-6">
                D6 Virgin Residual Fuel Oil
              </motion.h2>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
                New Horizon Oil and Gas is an authorised petroleum mandate and direct <strong className="text-brand-tealDeep">D6 virgin fuel oil supplier</strong>, facilitating bulk supply of residual fuel oil to power stations, industrial facilities, and marine bunker buyers globally. <strong className="text-brand-tealDeep">Virgin fuel oil D6</strong> is an unblended residual fuel oil — a straight-run product from crude oil distillation — classified at 60–80 cSt viscosity at 50°C and conforming to <strong className="text-brand-tealDeep">ISO 8217:2017</strong>.
              </motion.p>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
                We supply D6 residual fuel oil in both standard grade (sulphur max. 3.5% wt) and <strong className="text-brand-tealDeep">VLSFO grade (≤0.5% sulphur, IMO 2020 compliant)</strong> for marine vessels operating under MARPOL Annex VI without scrubbers. All cargoes are independently inspected at the loading terminal by SGS or Bureau Veritas, with MARPOL sulphur sampling included on bunker deliveries.
              </motion.p>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed">
                D6 fuel oil is available from <strong className="text-brand-tealDeep">5,000 MT per cargo</strong> on <strong className="text-brand-tealDeep">FOB terms</strong> from product allocation at Rotterdam, Houston, Jurong, and Fujairah, or on <strong className="text-brand-tealDeep">CIF terms to any safe world port</strong>.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-5"
            >
              <div className="p-6 rounded-2xl bg-brand-cream border border-gray-100">
                <h3 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-4">
                  Available Grades
                </h3>
                <div className="space-y-3">
                  {GRADES.map(({ grade, note }) => (
                    <div key={grade} className="flex items-start gap-3">
                      <CheckCircle2 className="text-brand-teal flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="font-body text-sm font-semibold text-brand-tealDeep">{grade}</p>
                        <p className="font-body text-xs text-gray-500">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-cream border border-gray-100">
                <h3 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-3">
                  Applicable Standards
                </h3>
                <ul className="space-y-2">
                  {[
                    'ISO 8217:2017 (RMD 80 / RMG 380)',
                    'MARPOL Annex VI (VLSFO ≤0.5% sulphur)',
                    'ASTM D396 (fuel oils)',
                    'CIMAC Guidelines',
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-2 font-body text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-brand-teal/5 border border-brand-teal/20">
                <h3 className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-3">
                  Delivery Terms
                </h3>
                <div className="flex gap-2 mb-3">
                  {['FOB', 'CIF'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/20 text-xs font-bold font-body">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="font-body text-xs text-gray-600 leading-relaxed">
                  FOB: Rotterdam, Houston, Jurong, Fujairah.<br />
                  CIF: any safe world port.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Use Cases</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-tealDeep">Applications</h2>
            <p className="mt-3 font-body text-gray-600 text-sm max-w-lg mx-auto leading-relaxed">
              D6 virgin fuel oil is a versatile residual fuel suited to a range of high-energy consumption industries.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {APPLICATIONS.map(({ Icon, title, description }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-5">
                  <Icon className="text-brand-teal" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-tealDeep mb-3">{title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Specifications</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-tealDeep">Technical Specifications</h2>
            <p className="mt-3 font-body text-gray-600 text-sm max-w-lg mx-auto leading-relaxed">
              Typical D6 residual fuel oil parameters per ISO 8217:2017. Actual cargo specifications confirmed by SGS or Bureau Veritas Certificate of Quality at the loading terminal.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 px-6 py-4 bg-brand-tealDeep">
              <FlaskConical className="text-brand-gold flex-shrink-0" size={18} />
              <span className="font-body text-sm font-semibold text-white uppercase tracking-wider">
                D6 Virgin Fuel Oil — Key Parameters
              </span>
            </div>
            <table className="w-full text-sm font-body">
              <tbody>
                {SPECS.map(({ label, value }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-brand-cream' : 'bg-white'}>
                    <td className="px-6 py-3 text-gray-500 font-medium w-2/5">{label}</td>
                    <td className="px-6 py-3 text-brand-tealDeep font-semibold">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              New Horizon holds D6 fuel oil allocation at four major international petroleum and bunkering hubs. FOB delivery is available from each; CIF supply to any safe world port.
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
              CIF D6 fuel oil supply is available from Rotterdam, Houston, Jurong, or Fujairah to{' '}
              <strong className="text-white">any safe world port</strong>. New Horizon coordinates ocean freight and marine cargo insurance, delivering a complete, duty-unpaid price to your nominated discharge port.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Get Started</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-tealDeep mb-4">
            Request D6 Fuel Oil Supply
          </h2>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Submit your inquiry with required volume (MT), preferred grade (standard or VLSFO), Incoterms (FOB or CIF), and delivery port. We respond with an indicative Full Corporate Offer (FCO) within 24–48 business hours.
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
              { label: 'Crude Oil',      to: '/products/crude-oil',    note: 'Urals & Qatar origin' },
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
