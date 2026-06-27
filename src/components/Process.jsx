import { motion } from 'framer-motion'
import { MessageSquare, FileText, PenLine, Truck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, buttonProps } from '../variants'

const STEPS = [
  {
    Icon: MessageSquare,
    title: 'Inquiry',
    description:
      'Submit your product requirements, quantity, target price, and delivery specifications. We respond within 24 hours.',
  },
  {
    Icon: FileText,
    title: 'Quotation',
    description:
      'Receive a detailed, competitive quotation including product specifications, pricing, and agreed Incoterms.',
  },
  {
    Icon: PenLine,
    title: 'Contract',
    description:
      'Sign a formal supply agreement. We handle ICPO, LOI, FCO, BCL, and all necessary trade documentation.',
  },
  {
    Icon: Truck,
    title: 'Delivery',
    description:
      'Products are SGS-inspected at origin, loaded, and delivered to your designated port or facility on schedule.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
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
            How It Works
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-brand-tealDeep">
            Our Oil &amp; Gas Supply Process
          </h2>
          <p className="mt-4 font-body text-gray-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            A transparent, step-by-step journey from your first inquiry to successful delivery.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative"
        >
          {/* Horizontal connector line — desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-gradient-to-r from-brand-teal/30 via-brand-gold/30 to-brand-teal/30"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ Icon, title, description }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step icon circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-brand-teal flex items-center justify-center shadow-xl shadow-brand-teal/25">
                    <Icon className="text-white" size={28} strokeWidth={1.5} />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand-gold border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold font-body">{i + 1}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-brand-tealDeep mb-3">
                  {title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed max-w-xs">
                  {description}
                </p>

                {/* Mobile connector arrow */}
                {i < STEPS.length - 1 && (
                  <div className="md:hidden mt-6 w-px h-8 bg-brand-teal/20 mx-auto" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span {...buttonProps} className="inline-block">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-teal text-brand-teal font-medium font-body rounded-xl hover:bg-brand-teal hover:text-white transition-colors"
            >
              See Full Process Details
              <ArrowRight size={18} />
            </Link>
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
