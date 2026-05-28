import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Warehouse, Layers, FileCheck, BarChart2, Lock, ArrowRightLeft,
  ArrowRight, Info,
} from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { makeBreadcrumbs } from '../seo-schemas'
import { staggerContainer, staggerItem } from '../variants'

/* ── Service cards ───────────────────────────────────────────────────────── */
const SERVICES = [
  {
    Icon: Warehouse,
    title: 'Terminal & Tank Allocation',
    description:
      'We source and coordinate available storage capacity at petroleum terminals worldwide — including land-based tank farms, port terminals, and inland depots. Allocation is confirmed by tank inspection certificate and terminal agreement prior to cargo arrival.',
    tags: ['Spot storage', 'Contract capacity', 'Multi-product terminals'],
  },
  {
    Icon: ArrowRightLeft,
    title: 'Custody Transfer Management',
    description:
      'As Storage Agent, we oversee the formal handover of product custody at terminal receipt and at release — coordinating between terminal operators, independent inspectors, and both buyer and seller to ensure metered or gauged quantities are agreed and documented.',
    tags: ['Receipt metering', 'Release authorisation', 'Quantity reconciliation'],
  },
  {
    Icon: BarChart2,
    title: 'Ullage & Tank Gauging',
    description:
      'We appoint and supervise independent gauging inspectors to conduct manual or automatic tank gauges, ullage measurements, temperature readings, and API gravity sampling at receipt, during storage, and at product release. All figures are corrected to 15°C standard volume.',
    tags: ['Manual gauging', 'ATG systems', 'Volume correction to 15°C'],
  },
  {
    Icon: Layers,
    title: 'Product Segregation & Integrity',
    description:
      'Each product grade is allocated to a dedicated, pre-inspected tank that has been confirmed clean, dry, and free from prior-product contamination. We coordinate pre-storage tank inspections and ensure line flushing procedures are followed to maintain product integrity throughout storage.',
    tags: ['Tank pre-inspection', 'Line flushing', 'Grade segregation'],
  },
  {
    Icon: Lock,
    title: 'Bonded & Duty-Free Storage',
    description:
      'For transit cargoes, re-export consignments, or products awaiting destination confirmation, we arrange bonded storage in customs-supervised terminals. This defers import duty and VAT obligations while the cargo is in transit — critical for trading operations and optimising working capital.',
    tags: ['Customs bonded', 'Re-export eligible', 'Duty deferment'],
  },
  {
    Icon: FileCheck,
    title: 'Documentation & Stock Reporting',
    description:
      'We issue and collect all terminal documentation: terminal receipts (TR), certificates of quantity (CoQ), stock position reports, tank dip sheets, release orders (RO), and storage agreements. Buyers receive regular inventory status updates throughout the storage period.',
    tags: ['Terminal receipts', 'CoQ / CoA', 'Daily stock reports', 'Release orders'],
  },
]

/* ── Process steps ───────────────────────────────────────────────────────── */
const PROCESS = [
  {
    step: '01',
    title: 'Mandate Appointment',
    description: 'The product owner or trading counterparty formally appoints New Horizon as Storage Agent, establishing authority to act at the terminal on their behalf.',
  },
  {
    step: '02',
    title: 'Terminal Coordination',
    description: 'We contact the terminal operator, confirm tank availability and cleanliness, agree storage rates and terms, and issue a terminal instruction letter.',
  },
  {
    step: '03',
    title: 'Receipt & Gauging',
    description: 'On product arrival, independent inspectors gauge the receiving tank (before and after), collect samples for quality analysis, and issue a Certificate of Quantity and Certificate of Analysis.',
  },
  {
    step: '04',
    title: 'In-Storage Management',
    description: 'We monitor the stock position, provide periodic inventory reports, arrange any required re-gauging, and manage communications between all parties throughout the storage period.',
  },
  {
    step: '05',
    title: 'Release Authorisation',
    description: 'On the product owner\'s instruction, we issue a Release Order (RO) to the terminal, coordinate the out-turn gauging inspection, and provide the buyer with all release documentation.',
  },
]

/* ── Key terminology ─────────────────────────────────────────────────────── */
const TERMS = [
  { term: 'Ullage',          definition: 'The unfilled space in a storage tank — measured from the tank roof to the product surface.' },
  { term: 'Innage (Dip)',    definition: 'The depth of liquid product in a tank, measured from the tank datum to the product surface.' },
  { term: 'Custody Transfer', definition: 'The point at which legal ownership and measurement accountability transfers between parties.' },
  { term: 'Bonded Storage',  definition: 'Customs-supervised storage where import duties are deferred until the product enters the domestic market.' },
  { term: 'ATG',             definition: 'Automatic Tank Gauge — electronic level measurement system providing continuous real-time tank data.' },
  { term: 'Volume Correction', definition: 'Adjustment of measured liquid volume to standard reference conditions (15°C / 60°F) using API tables.' },
  { term: 'Release Order (RO)', definition: 'A formal instruction issued by the Storage Agent to the terminal authorising delivery of product to the named buyer.' },
  { term: 'Out-turn',        definition: 'The quantity of product actually delivered out of storage, measured at the point of departure from the terminal.' },
]

export default function StorageAgentPage() {
  return (
    <>
      <Seo
        title="Storage Agent Services | New Horizon Oil and Gas"
        description="Petroleum storage agent services — terminal coordination, tank allocation, custody transfer management, ullage surveys, bonded storage, and full documentation."
        keywords="petroleum storage agent, oil storage terminal, custody transfer oil, tank allocation, ullage survey, bonded oil storage, petroleum terminal management, oil storage documentation, tank gauging, CoQ CoA storage"
        path="/storage-agent"
        schemas={[
          makeBreadcrumbs([
            { name: 'Services', path: '/services' },
            { name: 'Storage Agent', path: '/storage-agent' },
          ]),
          {
            '@type': 'Service',
            name: 'Petroleum Storage Agent Services',
            description: 'Terminal coordination, tank allocation, custody transfer management, and full documentation for petroleum product storage worldwide.',
            provider: { '@id': 'https://www.newhorizonoil.com/#organization' },
            areaServed: 'Worldwide',
            serviceType: 'Petroleum Storage Agent',
          },
        ]}
      />

      <PageHero
        tag="Storage Services"
        title="Petroleum Storage Agent"
        subtitle="We act as your authorised storage agent — coordinating terminal capacity, managing custody transfers, and providing full documentation for petroleum products held in storage worldwide."
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: 'Storage Agent' }]}
      />

      {/* Intro banner */}
      <section className="py-12 bg-brand-tealDeep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Info className="text-brand-gold flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-body text-sm font-semibold text-white mb-1">What is a Storage Agent?</p>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                In the petroleum trade, a <strong className="text-white">Storage Agent</strong> is the
                entity formally appointed to manage petroleum products held in a third-party terminal on
                behalf of the product owner. The agent coordinates with the terminal operator, arranges
                independent gauging inspections, manages documentation, and authorises product releases
                — acting as the accountable representative for all in-storage activity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">What We Provide</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-brand-tealDeep">Storage Agent Services</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map(({ Icon, title, description, tags }, i) => (
              <motion.article
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="bg-brand-cream rounded-2xl p-7 border border-gray-100 hover:border-brand-teal/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center mb-5 shadow-sm shadow-brand-teal/20">
                  <Icon className="text-white" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-tealDeep mb-3">{title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full bg-white border border-brand-teal/20 text-brand-teal text-[11px] font-body">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">The Workflow</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-tealDeep">How Storage Agency Works</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical connector */}
            <div aria-hidden className="hidden lg:block absolute left-[calc(2.5rem)] top-10 bottom-10 w-px bg-brand-teal/20" />

            <div className="space-y-6">
              {PROCESS.map(({ step, title, description }, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="relative flex items-start gap-6"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-teal flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-teal/20 relative z-10">
                    <span className="font-display font-bold text-white text-lg">{step}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mt-4">
                    <h3 className="font-display text-xl font-bold text-brand-tealDeep mb-2">{title}</h3>
                    <p className="font-body text-gray-600 text-sm leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key terminology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Glossary</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-tealDeep">Key Storage Terms</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {TERMS.map(({ term, definition }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex gap-4 p-5 rounded-xl bg-brand-cream border border-gray-100"
              >
                <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-2" />
                <div>
                  <dt className="font-body text-sm font-semibold text-brand-tealDeep mb-1">{term}</dt>
                  <dd className="font-body text-xs text-gray-600 leading-relaxed">{definition}</dd>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cross-link to Inspection Agent */}
      <section className="py-12 bg-brand-cream border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-sm text-gray-600 mb-3">
            Need an agent to supervise the injection or quality inspection of your cargo?
          </p>
          <Link
            to="/injection-inspection-agent"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-brand-teal hover:text-brand-tealDark transition-colors"
          >
            View Injection & Inspection Agent Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  )
}
