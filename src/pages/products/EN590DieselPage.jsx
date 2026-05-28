import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Fuel, MapPin, CheckCircle2, ArrowRight, FlaskConical } from 'lucide-react'
import Seo from '../../components/Seo'
import PageHero from '../../components/PageHero'
import CTA from '../../components/CTA'
import { makeBreadcrumbs, EN590_PRODUCT_SCHEMA } from '../../seo-schemas'
import { staggerContainer, staggerItem } from '../../variants'

const SPECS = [
  { label: 'Cetane Number',    value: 'min. 51' },
  { label: 'Sulphur Content',  value: 'max. 10 ppm (0.001% wt)' },
  { label: 'Flash Point',      value: 'min. 55°C' },
  { label: 'Density @ 15°C',   value: '820–845 kg/m³' },
  { label: 'Viscosity @ 40°C', value: '2.00–4.50 mm²/s' },
  { label: 'CFPP',             value: '0°C (Grade A) to −44°C (Grade F)' },
  { label: 'Lubricity (HFRR)', value: 'max. 460 µm' },
  { label: 'Minimum Cargo',    value: '5,000 MT' },
]

const GRADES = [
  { grade: 'EN590 Grade A', note: 'Summer grade — CFPP 0°C, temperate climates' },
  { grade: 'EN590 Grade F', note: 'Arctic grade — CFPP −44°C, extreme cold use' },
  { grade: 'D2 GOST',       note: 'Russian-standard diesel, GOST 32511-2013' },
]

const LOCATIONS = [
  {
    port: 'Rotterdam',
    country: 'Netherlands',
    terms: 'FOB / CIF',
    note: 'Primary European hub. EN590 CIF Rotterdam and FOB ARA range. Largest diesel trading location in Europe.',
  },
  {
    port: 'Houston',
    country: 'USA',
    terms: 'FOB',
    note: 'Gulf Coast terminal allocation. ULSD for US, Caribbean, and Latin American buyers on FOB terms.',
  },
  {
    port: 'Jurong',
    country: 'Singapore',
    terms: 'FOB',
    note: 'Asia-Pacific hub. FOB Jurong for South-East Asia, East Asia, and Oceania import buyers.',
  },
  {
    port: 'Fujairah',
    country: 'UAE',
    terms: 'FOB',
    note: 'Middle East and Indian Ocean gateway. FOB Fujairah for MENA and South Asian buyers.',
  },
]

export default function EN590DieselPage() {
  return (
    <>
      <Seo
        title="EN590 Diesel Supplier | New Horizon Oil and Gas"
        description="EN590 10ppm ultra-low sulphur diesel supplier. FOB Rotterdam, Houston, Jurong & Fujairah. CIF any safe world port. Bulk diesel supply to verified buyers globally."
        keywords="EN590 supplier, EN590 diesel supplier, EN590 diesel seller, diesel fuel supplier, ultra low sulfur diesel supplier, ULSD supplier, bulk diesel supplier, wholesale diesel fuel supplier, diesel fuel trader, diesel fuel mandate, EN590 Rotterdam, EN590 CIF Rotterdam, diesel supplier Netherlands, EN590 Houston, EN590 Fujairah, EN590 Jurong Singapore"
        path="/products/en590-diesel"
        schemas={[
          makeBreadcrumbs([
            { name: 'Products', path: '/products' },
            { name: 'EN590 Diesel', path: '/products/en590-diesel' },
          ]),
          EN590_PRODUCT_SCHEMA,
        ]}
      />

      <PageHero
        tag="Petroleum Products"
        title="EN590 Diesel Supplier"
        subtitle="Ultra-low sulphur EN590 diesel (max. 10 ppm sulphur) supplied to vetted buyers globally on FOB and CIF terms. Product allocation at Rotterdam, Houston, Jurong, and Fujairah."
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'EN590 Diesel' },
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
                EN590 Ultra-Low Sulphur Diesel
              </motion.h2>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
                New Horizon Oil and Gas is an authorised petroleum mandate and direct <strong className="text-brand-tealDeep">EN590 diesel supplier</strong>, facilitating bulk supply of ultra-low sulphur diesel to qualified importers, distributors, and trading houses globally. Our EN590 diesel fully conforms to <strong className="text-brand-tealDeep">EN 590:2013+A1:2017</strong> — the current European standard — with a maximum sulphur content of <strong className="text-brand-tealDeep">10 ppm (ULSD)</strong>, compliant with Euro V and Euro VI vehicle and industrial emission requirements.
              </motion.p>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
                As a wholesale diesel fuel supplier operating under official mandate, we eliminate unnecessary intermediaries. Buyers transact with us as the legitimate principal — with full trade documentation (LOI, ICPO, FCO, BCL) and independent SGS, Intertek, or Bureau Veritas inspection at every loading. Minimum cargo is <strong className="text-brand-tealDeep">5,000 MT</strong> per shipment.
              </motion.p>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed">
                We hold <strong className="text-brand-tealDeep">EN590 diesel allocation</strong> at Rotterdam (Netherlands), Houston (USA), Jurong (Singapore), and Fujairah (UAE) for <strong className="text-brand-tealDeep">FOB delivery</strong>. <strong className="text-brand-tealDeep">CIF supply to any safe world port</strong> is also available, with New Horizon coordinating ocean freight and marine cargo insurance on behalf of the buyer.
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
                  {['EN 590:2013+A1:2017', 'GOST 32511-2013 (D2)', 'BS EN 590'].map((s, i) => (
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

      {/* Technical Specs */}
      <section className="py-16 bg-brand-cream">
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
              Standard EN590 specification parameters. Actual cargo specifications confirmed by SGS Certificate of Analysis at the loading terminal prior to shipment.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 px-6 py-4 bg-brand-tealDeep">
              <FlaskConical className="text-brand-gold flex-shrink-0" size={18} />
              <span className="font-body text-sm font-semibold text-white uppercase tracking-wider">
                EN590 Diesel — Key Parameters
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
      <section className="py-20 bg-white">
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
              New Horizon holds EN590 diesel allocation at four major international petroleum hubs. FOB delivery is available from each location; CIF supply is available to any safe world port.
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
                className="p-6 rounded-2xl bg-brand-cream border border-gray-100 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300"
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
              CIF supply is available from Rotterdam, Houston, Jurong, or Fujairah to{' '}
              <strong className="text-white">any safe world port</strong>. New Horizon coordinates ocean freight and marine cargo insurance, delivering a complete, duty-unpaid price to your nominated discharge port.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Get Started</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-tealDeep mb-4">
            Request EN590 Diesel Supply
          </h2>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Submit your inquiry with required volume (MT), preferred Incoterms (FOB or CIF), delivery port, and target pricing. We respond with an indicative Full Corporate Offer (FCO) within 24–48 business hours.
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
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-widest mb-4">
            Related Products
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Jet Fuel A1',    to: '/products/jet-a1',    note: 'Aviation-grade turbine fuel' },
              { label: 'Crude Oil',      to: '/products/crude-oil', note: 'Urals & Qatar origin' },
              { label: 'Full Portfolio', to: '/products',           note: 'All petroleum products' },
            ].map(({ label, to, note }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-brand-cream border border-gray-100 hover:border-brand-teal/30 hover:shadow-sm transition-all duration-200 group"
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
