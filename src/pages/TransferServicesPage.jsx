import { motion } from 'framer-motion'
import { Anchor, ArrowRightLeft, Navigation, Pipette, Warehouse } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { makeBreadcrumbs } from '../seo-schemas'
import { staggerContainer, staggerItem } from '../variants'

const TRANSFER_METHODS = [
  {
    Icon: Anchor,
    label: 'FOB',
    title: 'Free On Board (FOB)',
    description:
      'The most common Incoterm in petroleum trading. The supplier delivers the product and loads it aboard the vessel nominated by the buyer at the agreed port of origin. All costs and risk transfer to the buyer once the product passes the ship\'s rail. New Horizon coordinates SGS inspection at loading, Q88 submission, and all origin-side documentation.',
    buyer:    'Buyer arranges freight, marine insurance, and voyage from origin port.',
    supplier: 'Supplier delivers product to vessel; New Horizon coordinates origin inspection.',
  },
  {
    Icon: Navigation,
    label: 'CIF',
    title: 'Cost, Insurance & Freight (CIF)',
    description:
      'Under CIF terms, New Horizon coordinates the full shipping arrangement on behalf of the supplier — covering ocean freight, marine cargo insurance, and all documentation to the named destination port. Risk transfers to the buyer upon arrival at the discharge port. Ideal for buyers who prefer a delivered price without managing their own freight.',
    buyer:    'Buyer handles import customs, discharge, and onward transport from destination port.',
    supplier: 'New Horizon arranges freight and insurance; delivers to named destination port.',
  },
  {
    Icon: ArrowRightLeft,
    label: 'TTO',
    title: 'Tanker-to-Tanker Operations (TTO)',
    description:
      'TTO involves the direct transfer of crude oil or refined products from a mother vessel to a daughter vessel at an offshore anchorage or designated STS (ship-to-ship) location. Common for very large crude carriers (VLCCs) that cannot enter shallow-draught ports. New Horizon coordinates STS master approvals, mooring arrangements, and independent quantity surveyors.',
    buyer:    'Buyer nominates daughter vessel; New Horizon manages STS logistics and documentation.',
    supplier: 'Product transferred from mother vessel to buyer\'s nominated vessel offshore.',
  },
  {
    Icon: Pipette,
    label: 'Pipeline',
    title: 'Pipeline Transfer',
    description:
      'For landlocked destinations or pipeline-connected refineries, New Horizon facilitates custody transfer through metered pipeline systems. This requires coordination with pipeline operators, custody transfer meter technicians, and customs authorities at the border or terminal entry point.',
    buyer:    'Buyer nominates pipeline terminal; New Horizon handles custody meter and documentation.',
    supplier: 'Product injected into pipeline at origin metering station.',
  },
  {
    Icon: Warehouse,
    label: 'In-Tank',
    title: 'In-Tank / Terminal Transfer',
    description:
      'Products stored in a bonded or commercial petroleum terminal can be transferred between storage tanks without physical movement of cargo. New Horizon coordinates custody transfer with the terminal operator, independent inspectors, and all relevant tank-to-tank documentation — enabling buyers to take title within the terminal.',
    buyer:    'Buyer receives title to product within the storage terminal; no vessel required.',
    supplier: 'Product ownership transfers via terminal book transfer; New Horizon handles paperwork.',
  },
]

export default function TransferServicesPage() {
  return (
    <>
      <Seo
        title="FOB, CIF & TTO Oil Transfer Services | New Horizon"
        description="Petroleum transfers on FOB, CIF and TTO Incoterms. SGS-inspected, fully documented oil delivery from supplier terminals to buyer destinations globally."
        keywords="oil transfer services, FOB oil delivery, CIF petroleum, TTO tanker transfer, oil tanker shipment, petroleum Incoterms, SGS inspection oil, bulk oil transfer, ship to ship oil transfer, STS operation, pipeline oil transfer"
        path="/transfer-services"
        schemas={[
          makeBreadcrumbs([
            { name: 'Services', path: '/services' },
            { name: 'Oil Transfer Services', path: '/transfer-services' },
          ]),
        ]}
      />

      <PageHero
        tag="Transfer Services"
        title="Oil Transfer on FOB, CIF & TTO Terms"
        subtitle="We coordinate all modes of petroleum product delivery — from port-based FOB loading to offshore tanker-to-tanker operations — with SGS inspection and full documentation at every step."
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: 'Oil Transfer Services' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Incoterms explainer strip */}
          <motion.div
            className="mb-14 p-6 rounded-2xl bg-brand-tealDeep text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-sm text-brand-teal/80 uppercase tracking-widest font-medium mb-2">
              About Incoterms in Petroleum Trading
            </p>
            <p className="font-body text-white/90 text-sm leading-relaxed max-w-3xl">
              Incoterms (International Commercial Terms) define where responsibility, cost, and risk transfer between buyer and seller. In petroleum trading, the correct Incoterm selection is critical for pricing, insurance, and operational planning. New Horizon advises buyers on the most appropriate Incoterm for each transaction and manages all logistics under the agreed terms.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8"
          >
            {TRANSFER_METHODS.map(({ Icon, label, title, description, buyer, supplier }, i) => (
              <motion.article
                key={i}
                variants={staggerItem}
                className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 p-6 bg-brand-cream border-b border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold/20 text-brand-gold text-[10px] font-bold font-body tracking-widest uppercase mb-1">
                      {label}
                    </span>
                    <h2 className="font-display text-xl font-bold text-brand-tealDeep">{title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
                      <p className="text-[10px] font-body font-bold text-brand-teal uppercase tracking-wider mb-1">Buyer Responsibility</p>
                      <p className="font-body text-gray-700 text-xs leading-relaxed">{buyer}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/10">
                      <p className="text-[10px] font-body font-bold text-brand-gold uppercase tracking-wider mb-1">Supplier / Mandate</p>
                      <p className="font-body text-gray-700 text-xs leading-relaxed">{supplier}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  )
}
