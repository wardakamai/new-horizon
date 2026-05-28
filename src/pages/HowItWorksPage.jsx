import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Process from '../components/Process'
import CTA from '../components/CTA'
import { makeBreadcrumbs, HOW_TO_SCHEMA } from '../seo-schemas'
import { staggerContainer, staggerItem } from '../variants'

const FAQS = [
  {
    q: 'What documents does a buyer need to submit at the start?',
    a: 'At inquiry stage we require a Letter of Intent (LOI) or Irrevocable Corporate Purchase Order (ICPO), your company\'s KYC documentation (certificate of incorporation, director IDs, proof of address), and your nominated bank details for BCL (Bank Comfort Letter) verification.',
  },
  {
    q: 'How long does it take to receive a quotation?',
    a: 'We aim to provide a full indicative quotation within 24–48 business hours of receiving your complete inquiry. Final FCO (Full Corporate Offer) is typically issued within 3–5 business days following initial document exchange.',
  },
  {
    q: 'Which Incoterms do you offer?',
    a: 'We facilitate transactions on FOB (Free On Board), CIF (Cost, Insurance and Freight), and TTO (Tanker-to-Tanker Operations) terms, depending on the product, origin, and buyer preference. Our team advises on the most appropriate Incoterm for each specific transaction.',
  },
  {
    q: 'Is SGS inspection always included?',
    a: 'Yes. All product shipments are subject to independent third-party inspection (typically SGS, Intertek, or Bureau Veritas) at the loading port, verifying both product quality against the agreed specification and the loaded quantity.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept Irrevocable Letter of Credit (LC at sight), MT103 bank wire transfer, and in some cases Stand-By Letter of Credit (SBLC). Payment terms are agreed during contract negotiation and formalised in the supply agreement.',
  },
  {
    q: 'Are trial orders or spot cargoes available?',
    a: 'Yes. We facilitate both spot (single-cargo) transactions and longer-term supply contracts. Spot cargoes are subject to the same documentation and inspection requirements as contract deliveries.',
  },
]

function FaqItem({ q, a, index }) {
  return (
    <motion.details
      variants={staggerItem}
      className="group rounded-xl border border-gray-100 bg-white overflow-hidden"
      open={index === 0}
    >
      <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 font-body font-semibold text-brand-tealDeep text-sm list-none hover:bg-brand-cream transition-colors">
        {q}
        <ChevronDown size={18} className="flex-shrink-0 text-brand-teal transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6">
        <p className="font-body text-gray-600 text-sm leading-relaxed">{a}</p>
      </div>
    </motion.details>
  )
}

export default function HowItWorksPage() {
  return (
    <>
      <Seo
        title="The Oil Supply Process | New Horizon Oil and Gas"
        description="Step-by-step petroleum procurement: inquiry, ICPO, quotation, contract, SGS inspection, and FOB or CIF delivery. Transparent process, no hidden fees."
        keywords="oil supply process, how to buy oil, petroleum procurement, ICPO LOI oil buying, oil contract process, SGS inspection delivery, petroleum supply chain steps, crude oil purchase process, diesel EN590 procurement"
        path="/how-it-works"
        schemas={[
          makeBreadcrumbs([{ name: 'How It Works', path: '/how-it-works' }]),
          HOW_TO_SCHEMA,
        ]}
      />

      <PageHero
        tag="The Process"
        title="How to Source Oil Through Us"
        subtitle="A clear, step-by-step procurement pathway — from your initial inquiry to confirmed, SGS-inspected delivery. No ambiguity, no surprises."
        breadcrumbs={[{ label: 'How It Works' }]}
      />

      {/* Reuse the Process section */}
      <Process />

      {/* Document requirements */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Documentation</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-tealDeep">Required Trade Documents</h2>
            <p className="mt-4 font-body text-gray-600 max-w-lg mx-auto text-sm leading-relaxed">
              International petroleum transactions require a specific set of commercial and banking documents.
              We guide buyers through every step of the document exchange.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { abbr: 'LOI',   full: 'Letter of Intent',              who: 'Issued by Buyer'    },
              { abbr: 'ICPO',  full: 'Irrevocable Corporate Purchase Order', who: 'Issued by Buyer' },
              { abbr: 'FCO',   full: 'Full Corporate Offer',           who: 'Issued by Mandate'  },
              { abbr: 'BCL',   full: 'Bank Comfort Letter',            who: 'Issued by Buyer\'s Bank' },
              { abbr: 'SGS',   full: 'SGS Inspection Certificate',     who: 'Third-Party Inspector' },
              { abbr: 'Q88',   full: 'Vessel Questionnaire',           who: 'Issued by Shipowner' },
              { abbr: 'BL',    full: 'Bill of Lading',                 who: 'Issued by Carrier'  },
              { abbr: 'CoA',   full: 'Certificate of Analysis',        who: 'Issued by Inspector' },
              { abbr: 'CoQ',   full: 'Certificate of Quantity',        who: 'Issued by Inspector' },
            ].map(({ abbr, full, who }, i) => (
              <motion.div key={i} variants={staggerItem} className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 rounded bg-brand-teal text-white text-xs font-bold font-body tracking-wider">{abbr}</span>
                  <span className="text-[10px] font-body text-brand-gold uppercase tracking-wider">{who}</span>
                </div>
                <p className="font-body text-sm text-brand-tealDeep font-medium">{full}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">FAQ</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-tealDeep">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  )
}
