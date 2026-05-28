import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Pipette, Search, ClipboardList, FlaskConical, Ship, FileText,
  ScanLine, Gauge, ArrowRight, Info,
} from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { makeBreadcrumbs } from '../seo-schemas'
import { staggerContainer, staggerItem } from '../variants'

/* ── Injection services ──────────────────────────────────────────────────── */
const INJECTION_SERVICES = [
  {
    Icon: Pipette,
    title: 'Pipeline Injection Management',
    description:
      'We coordinate the injection of petroleum products into pipeline networks — arranging access agreements with pipeline operators, scheduling injection windows, and supervising the metered custody transfer at the pipeline inlet. All injection activities are documented with meter tickets and custody transfer certificates.',
    tags: ['Pipeline access', 'Metered custody', 'Injection scheduling'],
  },
  {
    Icon: Gauge,
    title: 'Terminal Injection Supervision',
    description:
      'For products arriving by road tanker, rail car, or small vessel, we supervise the injection (loading) into storage tanks at the receiving terminal. This includes coordinating terminal staff, overseeing hose/arm connections, monitoring product flow rates, and confirming tank-to-tank transfers.',
    tags: ['Road / rail receipt', 'Vessel discharge', 'Tank-to-tank'],
  },
  {
    Icon: ScanLine,
    title: 'Custody Meter Witnessing',
    description:
      'We witness and document flow meter readings at injection points — verifying meter factor, calibration status, and meter proving certificates. Where disputes arise on quantity, we arrange independent meter proving in collaboration with the pipeline or terminal operator.',
    tags: ['Flow meter validation', 'Meter proving', 'Quantity dispute resolution'],
  },
  {
    Icon: FlaskConical,
    title: 'Blending & Co-mingling Supervision',
    description:
      'When a buyer requires a specific blended specification, we supervise the co-mingling of component streams during injection — ensuring blend ratios are achieved within tolerance and that the resulting composite sample meets the agreed specification before release.',
    tags: ['Blend ratio control', 'Composite sampling', 'Spec compliance'],
  },
]

/* ── Inspection services ─────────────────────────────────────────────────── */
const INSPECTION_SERVICES = [
  {
    Icon: Search,
    title: 'SGS / Intertek / BV Coordination',
    description:
      'We appoint and supervise certified independent inspection companies — SGS, Intertek, Bureau Veritas, or other ILAC-accredited bodies — on behalf of buyers. The inspector attends loading/discharge operations, witnesses sampling, and issues Certificate of Quantity (CoQ) and Certificate of Analysis (CoA).',
    tags: ['SGS', 'Intertek', 'Bureau Veritas', 'ILAC-accredited'],
  },
  {
    Icon: FlaskConical,
    title: 'Quality Sampling & Testing',
    description:
      'We oversee sample collection per ASTM D4057 (manual) or ASTM D4177 (automatic) methods during loading or discharge. Samples are sealed, labelled, and split between retained and analysis sets. Testing is conducted against the agreed product specification at an accredited laboratory.',
    tags: ['ASTM D4057 / D4177', 'Sealed retention samples', 'Accredited lab analysis'],
  },
  {
    Icon: Ship,
    title: 'Draft Survey & Shore Tank Gauging',
    description:
      'For vessel-based cargo quantity determination, we arrange and supervise draft surveys — measuring vessel displacement before and after loading/discharge to determine cargo weight. For shore-based quantity, we coordinate tank gauging (manual or ATG) at loading and receiving terminals.',
    tags: ['Draft survey', 'Shore tank gauge', 'Bill of lading quantity'],
  },
  {
    Icon: ClipboardList,
    title: 'NOR & Laytime Calculations',
    description:
      'We handle the operational documentation at the vessel / terminal interface — issuing and acknowledging Notice of Readiness (NOR), tracking laytime commencement per charter party terms, monitoring loading/discharge rates, and calculating demurrage or despatch amounts where applicable.',
    tags: ['NOR handling', 'Laytime tracking', 'Demurrage calculation'],
  },
  {
    Icon: FileText,
    title: 'Certificate Management',
    description:
      'We collect, verify, and distribute all inspection certificates required to complete a transaction — CoQ, CoA, Certificate of Origin (CoO), SGS inspection report, and any product-specific certificates such as aviation release certificate (ARC) for Jet A-1 or MARPOL sample certificate for bunkers.',
    tags: ['CoQ / CoA', 'CoO', 'ARC (Jet A-1)', 'MARPOL certificate'],
  },
  {
    Icon: ScanLine,
    title: 'MARPOL Sulphur Sampling',
    description:
      'For bunker fuel deliveries subject to MARPOL Annex VI, we coordinate the mandatory sulphur content sampling — using the MARPOL sequential sampling method — and ensure the MARPOL Delivered Sample (MLDS) is properly sealed, labelled, and delivered to the vessel master with the Bunker Delivery Note (BDN).',
    tags: ['MARPOL Annex VI', 'MLDS sampling', 'Bunker Delivery Note'],
  },
]

/* ── Key terminology ─────────────────────────────────────────────────────── */
const TERMS = [
  { term: 'NOR (Notice of Readiness)',  definition: 'Formal written notice from vessel master that the ship has arrived at the port and is ready to commence loading or discharging.' },
  { term: 'Laytime',                   definition: 'The total time allowed under a charter party for loading or discharging a cargo. Laytime commences when NOR is accepted.' },
  { term: 'Demurrage',                 definition: 'Penalty charges payable by the charterer (buyer/seller) to the shipowner when laytime is exceeded during loading or discharge.' },
  { term: 'Draft Survey',              definition: 'Method of determining cargo weight by measuring a vessel\'s displacement (draft) before and after loading/discharge.' },
  { term: 'CoQ (Certificate of Quantity)', definition: 'Document issued by the independent inspector certifying the measured quantity of product loaded or discharged.' },
  { term: 'CoA (Certificate of Analysis)', definition: 'Document certifying the quality/specification of a petroleum product based on laboratory testing of representative samples.' },
  { term: 'MARPOL',                    definition: 'International Convention for the Prevention of Pollution from Ships. Annex VI governs sulphur content of marine fuels.' },
  { term: 'BDN (Bunker Delivery Note)', definition: 'Mandatory document required under MARPOL Annex VI to accompany every bunker fuel delivery, stating sulphur content and quantity.' },
  { term: 'ARC (Aviation Release Certificate)', definition: 'Document certifying that a batch of aviation fuel (Jet A-1) meets the required specification and has been released for use.' },
  { term: 'Meter Proving',             definition: 'Process of calibrating a flow meter against a certified prover to determine its meter factor for custody transfer accuracy.' },
]

export default function InjectionInspectionAgentPage() {
  return (
    <>
      <Seo
        title="Injection & Inspection Agent | New Horizon Oil and Gas"
        description="Injection and inspection agent: SGS/Intertek coordination, NOR/laytime management, MARPOL sampling, draft surveys, and full CoQ/CoA certificate management."
        keywords="injection agent oil, petroleum inspection agent, SGS inspection coordinator, NOR laytime oil, draft survey petroleum, CoQ CoA oil gas, MARPOL sampling, meter witnessing, bunker inspection agent, petroleum quality inspection"
        path="/injection-inspection-agent"
        schemas={[
          makeBreadcrumbs([
            { name: 'Services', path: '/services' },
            { name: 'Injection & Inspection Agent', path: '/injection-inspection-agent' },
          ]),
          {
            '@type': 'Service',
            name: 'Petroleum Injection and Inspection Agent Services',
            description: 'Pipeline injection supervision, independent inspection coordination (SGS/Intertek/BV), NOR handling, laytime calculation, MARPOL sampling, and full certificate management.',
            provider: { '@id': 'https://www.newhorizonoil.com/#organization' },
            areaServed: 'Worldwide',
            serviceType: 'Petroleum Injection & Inspection Agent',
          },
        ]}
      />

      <PageHero
        tag="Injection & Inspection"
        title="Injection & Inspection Agent"
        subtitle="We supervise product injection into pipelines and terminals, coordinate certified independent inspectors, manage operational documentation, and ensure every cargo is quality- and quantity-verified."
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: 'Injection & Inspection Agent' },
        ]}
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
            <div className="space-y-3">
              <p className="font-body text-sm text-white/70 leading-relaxed">
                <strong className="text-white">Injection Agent:</strong> The party responsible for
                supervising and documenting the introduction of petroleum products into a pipeline,
                terminal tank, or refinery system — including witnessing metered custody transfer and
                managing all injection paperwork.
              </p>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                <strong className="text-white">Inspection Agent:</strong> The party appointed on behalf
                of a buyer (or seller) to engage, brief, and supervise independent third-party inspectors
                (SGS, Intertek, Bureau Veritas) — ensuring quality and quantity determinations are
                conducted correctly and all certificates are properly issued and distributed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Injection services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Part One</span>
            <h2 className="mt-2 font-display text-4xl font-bold text-brand-tealDeep">Injection Agent Services</h2>
            <p className="mt-3 font-body text-gray-600 text-sm leading-relaxed max-w-2xl">
              We supervise and document the physical injection of petroleum products into pipeline infrastructure,
              storage tanks, and processing facilities — ensuring accurate custody transfer at every injection point.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 gap-6"
          >
            {INJECTION_SERVICES.map(({ Icon, title, description, tags }, i) => (
              <motion.article
                key={i}
                variants={staggerItem}
                className="flex gap-5 p-7 rounded-2xl bg-brand-cream border border-gray-100 hover:border-brand-teal/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center flex-shrink-0 shadow-sm shadow-brand-teal/20 mt-1">
                  <Icon className="text-white" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-tealDeep mb-2">{title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded-full bg-white border border-brand-teal/20 text-brand-teal text-[11px] font-body">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal h-px mx-8 rounded-full opacity-30" />

      {/* Inspection services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Part Two</span>
            <h2 className="mt-2 font-display text-4xl font-bold text-brand-tealDeep">Inspection Agent Services</h2>
            <p className="mt-3 font-body text-gray-600 text-sm leading-relaxed max-w-2xl">
              We act as your eyes and ears at the loading port — appointing certified inspectors, supervising
              sampling and gauging, managing operational documentation, and ensuring every certificate is
              accurate, complete, and in your hands before the vessel sails.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {INSPECTION_SERVICES.map(({ Icon, title, description, tags }, i) => (
              <motion.article
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="p-7 rounded-2xl bg-brand-cream border border-gray-100 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4">
                  <Icon className="text-brand-gold" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-tealDeep mb-2">{title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full bg-white border border-brand-gold/20 text-brand-gold text-[11px] font-body">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key terminology */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Glossary</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-tealDeep">Key Inspection & Injection Terms</h2>
          </motion.div>

          <motion.dl
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
                className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100"
              >
                <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                <div>
                  <dt className="font-body text-sm font-semibold text-brand-tealDeep mb-1">{term}</dt>
                  <dd className="font-body text-xs text-gray-600 leading-relaxed">{definition}</dd>
                </div>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Cross-link to Storage Agent */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-sm text-gray-600 mb-3">
            Also need a storage agent to manage your product at the terminal?
          </p>
          <Link
            to="/storage-agent"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-brand-teal hover:text-brand-tealDark transition-colors"
          >
            View Storage Agent Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  )
}
