import { motion } from 'framer-motion'
import { CheckCircle2, Globe2, Award, ShieldCheck } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import { makeBreadcrumbs } from '../seo-schemas'
import { staggerContainer, staggerItem } from '../variants'

const VALUES = [
  {
    Icon: Award,
    title: 'Mandate Integrity',
    description:
      'Every supply engagement is backed by a verified, legitimate mandate between supplier and mandate holder — giving buyers the assurance that they are dealing with authorised principals.',
  },
  {
    Icon: Globe2,
    title: 'Global Reach',
    description:
      'With counterparties across Europe, Central Asia, the Middle East, and the Americas, New Horizon Oil and Gas maintains one of the broadest petroleum supply networks in the sector.',
  },
  {
    Icon: ShieldCheck,
    title: 'Compliance First',
    description:
      'All transactions are conducted within the bounds of KYC, AML, OFAC, and applicable international trade law. No transaction proceeds without full document verification.',
  },
]

const STRENGTHS = [
  'Official mandate holder with verified relationships across major petroleum-producing regions',
  'Direct facilitation between qualified international buyers and pre-vetted oil suppliers',
  'Full trade document support: SGS/Q88 inspection, LOI, ICPO, FCO, BCL processing',
  'Comprehensive petroleum portfolio covering crude oil, EN590 diesel, Jet A1, LNG, LPG, D6, and gasoline',
  'Strategic headquarters in Astana, Kazakhstan — central hub between European and Asian energy markets',
  'Transparent, step-by-step transaction process with no hidden fees or third-party commission surprises',
]

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | New Horizon Oil and Gas"
        description="New Horizon Oil and Gas — official petroleum mandate holder in Astana, Kazakhstan, connecting verified suppliers with qualified international buyers worldwide."
        keywords="New Horizon Oil Gas about, oil mandate holder, petroleum supply company Kazakhstan, oil gas facilitator Astana, international petroleum supplier, official petroleum mandate, oil gas company Astana"
        path="/about"
        schemas={[makeBreadcrumbs([{ name: 'About Us', path: '/about' }])]}
      />

      <PageHero
        tag="Who We Are"
        title="Trusted Mandate Holders in Global Petroleum Trade"
        subtitle="New Horizon Oil and Gas bridges verified suppliers and serious buyers through a transparent, documented, compliance-first supply chain — from first inquiry to final delivery."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Company overview */}
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
                Our Story
              </motion.span>
              <motion.h2 variants={staggerItem} className="font-display text-4xl lg:text-5xl font-bold text-brand-tealDeep leading-tight mb-6">
                A Mandate Built on Trust
              </motion.h2>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
                New Horizon Oil and Gas was established with a singular mission: to provide a credible, professional link between petroleum product suppliers and the global community of buyers seeking reliable, documented supply.
              </motion.p>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
                As an official mandate holder, we carry the authority and responsibility of representing suppliers in commercial transactions. This means buyers transact with us as the principal intermediary — a position we take seriously, with full accountability and transparency at every stage.
              </motion.p>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
                Headquartered in Astana, Kazakhstan, we sit at the intersection of European and Asian energy markets. This strategic position allows us to serve buyers across multiple continents while maintaining close relationships with suppliers across Central Asian, European, and Middle Eastern production regions.
              </motion.p>
              <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed">
                Every transaction is governed by internationally recognised trade procedures — including ICPO, LOI, FCO, and SGS inspection — ensuring that both parties receive exactly what was agreed, on the terms specified.
              </motion.p>
            </motion.div>

            {/* Strengths checklist */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-3"
            >
              <motion.h3 variants={staggerItem} className="font-display text-2xl font-bold text-brand-tealDeep mb-6">
                What Sets Us Apart
              </motion.h3>
              {STRENGTHS.map((text, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-start gap-4 p-5 rounded-xl bg-brand-cream hover:bg-brand-teal/5 transition-colors border border-transparent hover:border-brand-teal/10"
                >
                  <CheckCircle2 className="flex-shrink-0 text-brand-teal mt-0.5" size={20} strokeWidth={2} />
                  <p className="font-body text-gray-700 text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">Our Principles</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-tealDeep">Core Values</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {VALUES.map(({ Icon, title, description }, i) => (
              <motion.div key={i} variants={staggerItem} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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

      <Stats />
      <CTA />
    </>
  )
}
