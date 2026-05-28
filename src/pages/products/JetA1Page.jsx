import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PlaneTakeoff, MapPin, CheckCircle2, ArrowRight, FlaskConical, ShieldCheck } from 'lucide-react'
import Seo from '../../components/Seo'
import PageHero from '../../components/PageHero'
import CTA from '../../components/CTA'
import { makeBreadcrumbs, JET_A1_PRODUCT_SCHEMA } from '../../seo-schemas'
import { staggerContainer, staggerItem } from '../../variants'

const SPECS = [
  { label: 'Flash Point',               value: 'min. 38°C' },
  { label: 'Freeze Point',              value: 'max. −47°C' },
  { label: 'Density @ 15°C',            value: '775–840 kg/m³' },
  { label: 'Aromatics',                 value: 'max. 25.0% vol' },
  { label: 'Sulphur Content',           value: 'max. 3,000 ppm (0.30% wt)' },
  { label: 'Net Heat of Combustion',    value: 'min. 42.8 MJ/kg' },
  { label: 'Thermal Stability (JFTOT)', value: 'min. 260°C' },
  { label: 'Minimum Cargo',             value: '3,000 MT' },
]

const GRADES = [
  { grade: 'Jet A-1',    note: 'International standard — all commercial and cargo aviation' },
  { grade: 'Jet A',      note: 'US domestic aviation grade' },
]

const LOCATIONS = [
  {
    port: 'Rotterdam',
    country: 'Netherlands',
    terms: 'FOB / CIF',
    note: 'Primary European allocation. Jet A-1 available ex-ARA range; leading FOB and CIF Rotterdam origin for European aviation buyers.',
  },
  {
    port: 'Houston',
    country: 'USA',
    terms: 'FOB',
    note: 'Gulf Coast terminal allocation. Jet A-1 and Jet A supply for US and Americas aviation buyers on FOB terms.',
  },
  {
    port: 'Jurong',
    country: 'Singapore',
    terms: 'FOB',
    note: 'Asia-Pacific hub for aviation fuel. FOB Jurong for South-East Asian, East Asian, and Pacific buyers.',
  },
  {
    port: 'Fujairah',
    country: 'UAE',
    terms: 'FOB',
    note: 'Middle East and Indian Ocean gateway. FOB Fujairah for MENA and South Asian aviation fuel buyers.',
  },
]

export default function JetA1Page() {
  return (
    <>
      <Seo
        title="Jet A1 Fuel Supplier | New Horizon Oil and Gas"
        description="Jet A-1 aviation turbine fuel supplier. DEF STAN 91-091 & ASTM D1655 compliant. FOB Rotterdam, Houston, Jurong & Fujairah. CIF any safe world port."
        keywords="Jet A1 supplier, Jet A1 seller, Jet fuel supplier, aviation fuel supplier, aviation turbine fuel supplier, wholesale jet fuel supplier, bulk jet fuel supplier, Jet A1 trading company, Jet fuel exporter, Jet fuel refinery supplier, aviation fuel trading company, Jet A1 mandate, Jet A1 Rotterdam, Jet A1 CIF Rotterdam, Jet A1 Fujairah, Jet A1 Singapore"
        path="/products/jet-a1"
        schemas={[
          makeBreadcrumbs([
            { name: 'Products', path: '/products' },
            { name: 'Jet Fuel A1', path: '/products/jet-a1' },
          ]),
          JET_A1_PRODUCT_SCHEMA,
        ]}
      />

      <PageHero
        tag="Petroleum Products"
        title="Jet A1 Aviation Fuel Supplier"
        subtitle="Aviation-grade Jet A-1 turbine fuel meeting DEF STAN 91-091 and ASTM D1655 specifications. FOB from Rotterdam, Houston, Jurong, and Fujairah. CIF any safe world port."
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Jet Fuel A1' },
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
                Jet A-1 Aviation Turbine Fuel
              </motion.h2>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
                New Horizon Oil and Gas is an authorised petroleum mandate and direct <strong className="text-brand-tealDeep">Jet A1 fuel supplier</strong>, facilitating the bulk supply of aviation turbine fuel to airlines, fuel distributors, aviation trading companies, and refinery buyers worldwide. Every cargo of Jet A-1 supplied through New Horizon is tested and released against <strong className="text-brand-tealDeep">DEF STAN 91-091 Issue 7</strong> and <strong className="text-brand-tealDeep">ASTM D1655</strong> — the international specifications for commercial aviation turbine fuel.
              </motion.p>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
                As a bulk jet fuel supplier and aviation fuel trading company, we facilitate transactions from <strong className="text-brand-tealDeep">3,000 MT per cargo</strong> with full compliance documentation. Each cargo is accompanied by a <strong className="text-brand-tealDeep">Certificate of Analysis (CoA)</strong>, a <strong className="text-brand-tealDeep">Certificate of Conformance (CoC)</strong>, and an <strong className="text-brand-tealDeep">Aviation Release Certificate (ARC)</strong> confirming the fuel meets specification and is cleared for aviation use.
              </motion.p>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed">
                Jet A-1 is available on <strong className="text-brand-tealDeep">FOB terms</strong> from allocation positions at Rotterdam, Houston, Jurong, and Fujairah, or on <strong className="text-brand-tealDeep">CIF terms to any safe world port</strong>, with New Horizon coordinating freight and insurance from the loading terminal to your nominated discharge location.
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
                  {['DEF STAN 91-091 Issue 7', 'ASTM D1655', 'IATA Guidance Material', 'IP 188'].map((s, i) => (
                    <li key={i} className="flex items-center gap-2 font-body text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ARC note */}
              <div className="p-6 rounded-2xl bg-brand-gold/5 border border-brand-gold/20">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-gold flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-body text-xs font-bold text-brand-tealDeep uppercase tracking-wider mb-1">
                      Aviation Release Certificate (ARC)
                    </p>
                    <p className="font-body text-xs text-gray-600 leading-relaxed">
                      Every Jet A-1 cargo includes a certified ARC confirming the fuel meets specification and is approved for aviation use — a mandatory requirement for all commercial aviation fuel supply.
                    </p>
                  </div>
                </div>
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
              Key Jet A-1 parameters per DEF STAN 91-091 and ASTM D1655. Actual cargo values confirmed by ASTM/IP laboratory testing and SGS inspection at origin.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 px-6 py-4 bg-brand-tealDeep">
              <FlaskConical className="text-brand-gold flex-shrink-0" size={18} />
              <span className="font-body text-sm font-semibold text-white uppercase tracking-wider">
                Jet A-1 Aviation Turbine Fuel — Key Parameters
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
              Jet A-1 allocation is held at four major international petroleum hubs. CIF delivery is available to any safe world port from each location.
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
              CIF Jet A-1 supply is available from Rotterdam, Houston, Jurong, or Fujairah to{' '}
              <strong className="text-white">any safe world port</strong>. New Horizon coordinates ocean freight, marine insurance, and all export documentation to your nominated destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Get Started</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-tealDeep mb-4">
            Request Jet A-1 Aviation Fuel
          </h2>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Submit your inquiry with required volume (MT), preferred Incoterms (FOB or CIF), delivery location, and target pricing. We respond with an indicative FCO within 24–48 business hours.
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
              { label: 'EN590 Diesel',   to: '/products/en590-diesel', note: 'Ultra-low sulphur diesel' },
              { label: 'Crude Oil',      to: '/products/crude-oil',    note: 'Urals & Qatar origin' },
              { label: 'Full Portfolio', to: '/products',              note: 'All petroleum products' },
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
