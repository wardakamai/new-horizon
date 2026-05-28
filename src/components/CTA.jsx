import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { fadeUp, buttonProps } from '../variants'

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deep teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-tealDeep via-brand-teal to-brand-tealDark" />

      {/* Decorative orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="inline-block text-brand-gold font-body text-sm font-medium uppercase tracking-widest mb-4">
            Start Today
          </span>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Source Quality{' '}
            <span className="text-brand-gold">Oil Products?</span>
          </h2>

          <p className="font-body text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Connect with our team today. We will assess your requirements and provide a competitive,
            detailed quotation within 24–48 hours — no obligations, no upfront fees.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white font-semibold font-body rounded-xl shadow-lg shadow-brand-gold/30 hover:bg-brand-goldLight transition-colors"
              {...buttonProps}
            >
              Get a Quote Now
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="https://wa.me/420225636109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold font-body rounded-xl hover:bg-white/10 transition-colors"
              {...buttonProps}
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
