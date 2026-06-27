import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, buttonProps } from '../variants'

const STRENGTHS = [
  'Official mandate holder with verified supplier relationships across the globe',
  'Direct facilitation between qualified suppliers and serious, vetted buyers',
  'Full trade document support: SGS, Q88, LOI, ICPO, FCO, and BCL processing',
  'Comprehensive petroleum portfolio covering all major product categories',
  'Strategic location in Astana, Kazakhstan — crossroads of Europe and Asia',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span
              variants={staggerItem}
              className="inline-block text-brand-gold font-body text-sm font-medium uppercase tracking-widest mb-3"
            >
              Who We Are
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="font-display text-4xl lg:text-5xl font-bold text-brand-tealDeep leading-tight mb-6"
            >
              Your Trusted Oil &amp; Gas Mandate Partner
            </motion.h2>

            <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
              New Horizon Oil and Gas operates as an official mandate, standing between verified suppliers
              and qualified buyers in the global petroleum trade. We eliminate barriers, streamline processes,
              and ensure energy reaches where it is needed — on time and within specification.
            </motion.p>

            <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-4">
              Based in Astana, Kazakhstan — a strategic hub at the crossroads of Europe and Central Asia — we
              leverage our geographical and relational position to facilitate high-volume transactions with full
              compliance and transparency.
            </motion.p>

            <motion.p variants={staggerItem} className="font-body text-gray-600 leading-relaxed mb-8">
              Every engagement is handled professionally, with proper documentation, verified counterparties,
              and a commitment to protecting the interests of the buyer from first contact to final delivery.
            </motion.p>

            <motion.span variants={staggerItem} {...buttonProps} className="inline-block">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-teal text-white font-medium font-body rounded-xl shadow-lg shadow-brand-teal/25 hover:bg-brand-tealDark transition-colors"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </motion.span>
          </motion.div>

          {/* ── Right: key strengths ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-3"
          >
            {STRENGTHS.map((text, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-start gap-4 p-5 rounded-xl bg-brand-cream hover:bg-brand-teal/5 transition-colors duration-200 border border-transparent hover:border-brand-teal/10"
              >
                <CheckCircle2
                  className="flex-shrink-0 text-brand-teal mt-0.5"
                  size={20}
                  strokeWidth={2}
                />
                <p className="font-body text-gray-700 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
