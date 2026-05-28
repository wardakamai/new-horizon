import { motion } from 'framer-motion'
import { Award, Globe2, FileCheck, Zap, FolderOpen, UserCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, buttonProps } from '../variants'

const FEATURES = [
  {
    Icon: Award,
    title: 'Official Mandate',
    description:
      'We hold verified official mandates from established oil & gas suppliers, giving every transaction a legitimate foundation that protects your interests.',
  },
  {
    Icon: Globe2,
    title: 'Global Facilitation',
    description:
      'Our buyer and supplier network spans Europe, Central Asia, North America, and beyond — connecting you with the right counterparties, fast.',
  },
  {
    Icon: FileCheck,
    title: 'Transparent Process',
    description:
      'Every deal follows a clearly defined, documented workflow. No hidden fees, no ambiguous terms — just honest trading from start to finish.',
  },
  {
    Icon: Zap,
    title: 'Fast Response',
    description:
      'We turn quotations and initial feedback around within 24–48 hours. In commodity markets, timing is everything.',
  },
  {
    Icon: FolderOpen,
    title: 'Proper Documentation',
    description:
      'Full support for ICPO, LOI, FCO, BCL, SGS inspection certificates, and all trade documents required by your compliance team.',
  },
  {
    Icon: UserCheck,
    title: 'Buyer-First Focus',
    description:
      'We represent the buyer\'s interests at every stage, ensuring the product you receive matches what you agreed to — on time, on spec.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-gold font-body text-sm font-medium uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-brand-tealDeep">
            The New Horizon Advantage
          </h2>
          <p className="mt-4 font-body text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We combine mandate authority, global reach, and process discipline to deliver a trading
            experience built entirely on trust.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 cursor-default group"
            >
              {/* Gold-tinted icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                <Icon className="text-brand-gold" size={22} strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-xl font-bold text-brand-tealDeep mb-3">
                {title}
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span {...buttonProps} className="inline-block">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-teal text-white font-medium font-body rounded-xl shadow-lg shadow-brand-teal/25 hover:bg-brand-tealDark transition-colors"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
          </motion.span>
          <motion.span {...buttonProps} className="inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-gold text-brand-gold font-medium font-body rounded-xl hover:bg-brand-gold hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
