import { motion } from 'framer-motion'
import { Shield, UserCheck, Search, CreditCard, FileCheck, Scale } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { makeBreadcrumbs } from '../seo-schemas'
import { staggerContainer, staggerItem } from '../variants'

const COMPLIANCE_PILLARS = [
  {
    Icon: UserCheck,
    title: 'Know Your Customer (KYC)',
    description:
      'Before any transaction is initiated, all counterparties — buyers, sellers, and their beneficial owners — are required to submit a full KYC package. This includes corporate registration documents, director identification, proof of business address, and a statement of source of funds.',
    requirements: [
      'Certificate of Incorporation / Business Registration',
      'Director / UBO identification (passport)',
      'Proof of registered business address',
      'Corporate banking references',
    ],
  },
  {
    Icon: Shield,
    title: 'Anti-Money Laundering (AML)',
    description:
      'New Horizon Oil and Gas applies comprehensive AML procedures to every transaction. We screen counterparties against international financial intelligence databases and maintain transaction records in accordance with applicable regulations to prevent the use of petroleum trade for financial crime.',
    requirements: [
      'Source of funds declaration',
      'AML screening against FATF guidance',
      'Financial institution verification',
      'Beneficial ownership disclosure',
    ],
  },
  {
    Icon: Search,
    title: 'Sanctions Screening',
    description:
      'Every counterparty, director, and ultimate beneficial owner (UBO) is screened against OFAC (US), EU, UN, and UK HMT sanctions lists prior to engagement. We will not participate in any transaction that involves a sanctioned entity, person, or jurisdiction.',
    requirements: [
      'OFAC (US Treasury) list screening',
      'EU Consolidated Sanctions List',
      'UN Security Council sanctions list',
      'UK HMT Financial Sanctions screening',
    ],
  },
  {
    Icon: CreditCard,
    title: 'Trade Finance Verification',
    description:
      'Payment instruments submitted in connection with petroleum transactions — including Letters of Credit, Stand-By Letters of Credit (SBLC), and Bank Guarantees — are authenticated with the issuing financial institution before acceptance. We do not accept unverified or non-prime bank instruments.',
    requirements: [
      'Irrevocable Letter of Credit (LC) verification',
      'SBLC / BG issuing bank confirmation',
      'SWIFT MT760 / MT799 pre-advice',
      'Bank Comfort Letter (BCL) authentication',
    ],
  },
  {
    Icon: FileCheck,
    title: 'Document Authentication',
    description:
      'All corporate documents submitted by counterparties are verified for authenticity. Where required, documents must be notarised, apostilled, or consularised in accordance with the Hague Convention or bilateral treaty between the relevant jurisdictions.',
    requirements: [
      'Notarised corporate documents',
      'Apostille certification where required',
      'Legalisation for non-Hague Convention jurisdictions',
      'Third-party legal opinion on corporate structure',
    ],
  },
  {
    Icon: Scale,
    title: 'Regulatory Framework',
    description:
      'All transactions facilitated by New Horizon Oil and Gas are conducted in compliance with applicable Kazakhstani commercial law, EU trade regulations, and international petroleum trading standards including IBIA guidelines and ISPS code requirements for tanker operations.',
    requirements: [
      'Kazakhstani commercial law compliance',
      'International trade regulations adherence',
      'IBIA (International Bunker Industry Association) guidelines',
      'ISPS code compliance for tanker operations',
    ],
  },
]

export default function CompliancePage() {
  return (
    <>
      <Seo
        title="KYC & AML Compliance | New Horizon Oil and Gas"
        description="KYC, AML, OFAC & UN sanctions compliance on all petroleum trade counterparties. Fully verified transactions conducted within international trade law."
        keywords="oil trade compliance, KYC oil gas, AML petroleum trading, OFAC sanctions oil, oil trade regulations, petroleum counterparty verification, anti-money laundering oil, trade finance compliance, SBLC LC oil gas"
        path="/compliance"
        schemas={[makeBreadcrumbs([{ name: 'Compliance', path: '/compliance' }])]}
      />

      <PageHero
        tag="Compliance & Governance"
        title="KYC, AML & Trade Compliance"
        subtitle="Every transaction at New Horizon Oil and Gas is governed by rigorous KYC, AML, and international sanctions compliance — protecting buyers, sellers, and the integrity of the global petroleum market."
        breadcrumbs={[{ label: 'Compliance' }]}
      />

      {/* Compliance statement banner */}
      <section className="py-10 bg-brand-tealDeep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="font-body text-white/80 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-semibold">Our commitment: </span>
            No transaction proceeds until all counterparties have been fully verified, all documents authenticated,
            and all sanctions checks cleared. This is non-negotiable and applies equally to buyers, sellers, and any
            associated entities or individuals.
          </motion.p>
        </div>
      </section>

      {/* Compliance pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-tealDeep">
              Our Compliance Framework
            </h2>
            <p className="mt-3 font-body text-gray-600 text-sm max-w-xl mx-auto">
              Six pillars of compliance governance applied to every petroleum transaction we facilitate.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {COMPLIANCE_PILLARS.map(({ Icon, title, description, requirements }, i) => (
              <motion.article
                key={i}
                variants={staggerItem}
                className="p-8 rounded-2xl bg-brand-cream border border-gray-100 hover:border-brand-teal/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-teal flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-tealDeep">{title}</h3>
                </div>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{description}</p>
                <div>
                  <p className="font-body text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-2">Requirements</p>
                  <ul className="space-y-1">
                    {requirements.map((req, j) => (
                      <li key={j} className="flex items-start gap-2 font-body text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0 mt-1.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance notice */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-tealDeep mb-4">
            Why Compliance Matters in Petroleum Trading
          </h2>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">
            The global petroleum trade is subject to complex and rapidly evolving regulatory requirements.
            Buyers and sellers operating without robust compliance frameworks risk transaction failures,
            frozen funds, legal liability, and reputational damage.
          </p>
          <p className="font-body text-gray-600 text-sm leading-relaxed">
            At New Horizon Oil and Gas, our compliance-first approach is a business advantage — not a burden.
            By ensuring all counterparties are verified and all transactions documented, we protect our buyers
            from fraud and ensure that every transaction closes successfully.
          </p>
        </div>
      </section>

      <CTA />
    </>
  )
}
