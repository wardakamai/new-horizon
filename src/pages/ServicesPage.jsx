import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Globe2, FileText, Truck, MessageSquare, BarChart2, Warehouse, Pipette, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { makeBreadcrumbs, SERVICES_SCHEMA } from '../seo-schemas'
import { staggerContainer, staggerItem } from '../variants'

const SERVICES = [
  {
    Icon: Users,
    title: 'Mandate Representation',
    description:
      'New Horizon Oil and Gas holds official mandates from petroleum suppliers, acting as the authorised intermediary in all commercial transactions. Buyers transact with us as the legitimate principal — eliminating the risk of fraudulent brokers and unverified middlemen.',
    highlights: ['Verified mandate documentation', 'Direct supplier relationships', 'Full legal accountability'],
  },
  {
    Icon: Globe2,
    title: 'Buyer-Supplier Facilitation',
    description:
      'We source and connect verified buyers with pre-qualified petroleum suppliers globally. Our network spans Europe, Central Asia, the Middle East, and the Americas — enabling us to match the right product with the right buyer at the right price.',
    highlights: ['300+ verified buyer network', 'Multi-continent supplier access', 'Product-buyer matching'],
  },
  {
    Icon: FileText,
    title: 'Trade Documentation',
    description:
      'We manage the complete documentation lifecycle for every transaction: Letter of Intent (LOI), Irrevocable Corporate Purchase Order (ICPO), Full Corporate Offer (FCO), Bank Comfort Letter (BCL), and SGS inspection coordination.',
    highlights: ['LOI & ICPO processing', 'FCO & BCL handling', 'SGS / Q88 coordination'],
  },
  {
    Icon: Truck,
    title: 'Logistics Coordination',
    description:
      'From SGS inspection scheduling at the loading terminal to Q88 vessel submissions and cargo documentation, we coordinate the logistical elements that ensure on-spec, on-time delivery under agreed Incoterms (FOB, CIF, or TTO).',
    highlights: ['SGS inspection scheduling', 'Q88 vessel submission', 'FOB / CIF / TTO coordination'],
  },
  {
    Icon: MessageSquare,
    title: 'Contract Advisory',
    description:
      'Our team reviews and advises on supply agreement terms, Incoterms selection, payment structures (LC at sight, MT103, SBLC), and commercial conditions — ensuring buyers understand and are protected by the terms they sign.',
    highlights: ['Incoterms advisory', 'Payment structure review', 'Supply agreement guidance'],
  },
  {
    Icon: BarChart2,
    title: 'Market Intelligence',
    description:
      'We provide buyers with current product availability, indicative pricing benchmarked to Platts and Argus assessments, and market trend analysis — so you can make informed sourcing decisions in a volatile commodity market.',
    highlights: ['Platts / Argus price tracking', 'Product availability updates', 'Market trend briefings'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Oil & Gas Supply Services | New Horizon Oil and Gas"
        description="Oil and gas supply services: mandate representation, LOI/ICPO processing, SGS inspection, and full-cycle petroleum trade facilitation worldwide."
        keywords="oil and gas trading company, petroleum trading company, oil gas supply services, mandate representation, LOI ICPO processing, SGS inspection, petroleum facilitation, international fuel supplier, fuel trading company, oil mandate company, petroleum supply management"
        path="/services"
        schemas={[
          makeBreadcrumbs([{ name: 'Services', path: '/services' }]),
          SERVICES_SCHEMA,
        ]}
      />

      <PageHero
        tag="What We Do"
        title="Full-Cycle Oil & Gas Supply Services"
        subtitle="From mandate representation to final delivery coordination — every service you need to source petroleum products with confidence and compliance."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-6"
          >
            {SERVICES.map(({ Icon, title, description, highlights }, i) => (
              <motion.article
                key={i}
                variants={staggerItem}
                className="grid md:grid-cols-[auto_1fr] gap-8 p-8 rounded-2xl bg-brand-cream hover:bg-white border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-teal flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-teal/20">
                  <Icon className="text-white" size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-tealDeep mb-3">{title}</h2>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {highlights.map((h, j) => (
                      <li
                        key={j}
                        className="px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-medium font-body border border-brand-teal/20"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products we supply */}
      <section className="py-12 bg-brand-cream border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Products</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-tealDeep">
              Products We Facilitate
            </h2>
            <p className="mt-2 font-body text-gray-600 text-sm max-w-lg mx-auto">
              Our services cover the full supply chain for these petroleum products — from mandate representation to final delivery.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'EN590 Diesel',    sub: 'Ultra-low sulphur diesel',    to: '/products/en590-diesel'       },
              { label: 'Jet Fuel A1',    sub: 'Aviation turbine fuel',       to: '/products/jet-a1'             },
              { label: 'Crude Oil',      sub: 'Urals & Qatar origin',        to: '/products/crude-oil'          },
              { label: 'D6 Fuel Oil',    sub: 'Virgin residual fuel oil',    to: '/products/virgin-fuel-oil-d6' },
              { label: 'Full Portfolio', sub: 'LNG, LPG & more',             to: '/products'                    },
            ].map(({ label, sub, to }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-100 hover:border-brand-teal/30 hover:shadow-sm transition-all duration-200 group"
              >
                <div>
                  <p className="font-body text-sm font-semibold text-brand-tealDeep group-hover:text-brand-teal transition-colors">{label}</p>
                  <p className="font-body text-xs text-gray-500">{sub}</p>
                </div>
                <ArrowRight size={14} className="text-brand-teal flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist agent services */}
      <section className="py-16 bg-brand-cream border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Specialist Services</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-tealDeep">
              Agent Services for Terminal Operations
            </h2>
            <p className="mt-3 font-body text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
              Beyond trade facilitation, we act as appointed agents for physical terminal operations —
              managing storage, product injection, and independent inspection on behalf of buyers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                Icon: Warehouse,
                title: 'Storage Agent',
                description:
                  'Terminal coordination, tank allocation, custody transfer management, ullage gauging, bonded storage arrangement, and full documentation for petroleum products held in storage at third-party terminals.',
                highlights: ['Tank allocation', 'Custody transfer', 'Ullage surveys', 'Release orders'],
                to: '/storage-agent',
              },
              {
                Icon: Pipette,
                title: 'Injection & Inspection Agent',
                description:
                  'Pipeline and terminal injection supervision, SGS/Intertek/BV inspector coordination, NOR and laytime management, draft surveys, MARPOL sulphur sampling, and full CoQ/CoA certificate management.',
                highlights: ['Pipeline injection', 'SGS coordination', 'NOR & laytime', 'MARPOL sampling'],
                to: '/injection-inspection-agent',
              },
            ].map(({ Icon, title, description, highlights, to }, i) => (
              <motion.article
                key={i}
                variants={staggerItem}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-brand-teal flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-teal/20">
                    <Icon className="text-white" size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-brand-tealDeep">{title}</h3>
                  </div>
                </div>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {highlights.map((h, j) => (
                    <li key={j} className="px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-medium font-body border border-brand-teal/20">
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to={to}
                  className="inline-flex items-center gap-2 text-sm font-medium font-body text-brand-teal hover:text-brand-tealDark transition-colors"
                >
                  Learn more
                  <ArrowRight size={15} />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  )
}
