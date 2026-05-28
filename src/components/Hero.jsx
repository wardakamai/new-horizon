import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { staggerContainer, staggerItem, buttonProps } from '../variants'

const PRODUCT_HIGHLIGHTS = [
  { tag: 'Brent / WTI',       label: 'Crude Oil'      },
  { tag: '10ppm Sulphur',     label: 'Diesel EN590'   },
  { tag: 'Aviation Grade',    label: 'Jet Fuel A1'    },
  { tag: 'Liquefied Gas',     label: 'LNG & LPG'      },
]

export default function Hero() {
  const sectionRef = useRef(null)

  // Parallax: tie background orbs to scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const orbY       = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentY   = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-cream pt-16 md:pt-20"
    >
      {/* ── Parallax background orbs ── */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: orbY }}
      >
        <div className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full bg-brand-teal/8 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-brand-gold/10 blur-2xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl" />
        {/* Geometric accent lines */}
        <div className="absolute top-20 left-0 w-48 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
        <div className="absolute bottom-40 right-0 w-64 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: headline + CTA ── */}
          <motion.div
            style={{ y: contentY }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-medium font-body tracking-wider uppercase mb-6 border border-brand-teal/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                Official Oil &amp; Gas Mandate
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-tealDeep leading-[1.05] mb-6"
            >
              Bridging Global
              <span className="block text-brand-teal mt-1">Oil &amp; Gas</span>
              <span className="block text-brand-gold mt-1">Markets</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={staggerItem}
              className="font-body text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
            >
              New Horizon Oil and Gas is an official mandate to oil and gas suppliers, facilitating
              the supply of oil products to serious buyers globally.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <motion.a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-teal text-white font-medium font-body rounded-xl shadow-lg shadow-brand-teal/25 hover:bg-brand-tealDark transition-colors"
                {...buttonProps}
              >
                Explore Products
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-gold text-brand-gold font-medium font-body rounded-xl hover:bg-brand-gold hover:text-white transition-colors"
                {...buttonProps}
              >
                Contact Us
              </motion.a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={staggerItem}
              className="mt-10 flex items-center gap-6 text-xs font-body text-gray-400"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Verified Mandate
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                300+ Global Buyers
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-teal" />
                24 / 7 Support
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: floating product card ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            {/* Back card — rotated */}
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-brand-teal to-brand-tealDeep rotate-3 transform opacity-60" />

            {/* Front card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 -rotate-1 transform border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xl font-bold text-brand-tealDeep">Product Portfolio</span>
                <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium font-body border border-green-100">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {PRODUCT_HIGHLIGHTS.map(({ tag, label }) => (
                  <div key={label} className="p-4 rounded-xl bg-brand-cream border border-gray-100">
                    <div className="text-[10px] text-brand-gold font-medium font-body uppercase tracking-wider mb-1">
                      {tag}
                    </div>
                    <div className="text-sm font-semibold text-brand-tealDeep font-body">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-r from-brand-teal to-brand-tealDark text-white">
                <div className="text-[10px] font-body uppercase tracking-widest text-brand-goldLight mb-1">
                  Global Buyer Network
                </div>
                <div className="flex items-end justify-between">
                  <span className="font-display text-3xl font-bold">300+</span>
                  <span className="font-body text-xs text-white/70">Worldwide Coverage</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#187767', '#c9a24b', '#0f5049'].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex-shrink-0" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="font-body text-xs text-gray-500 ml-1">
                  Buyers across Europe, Asia &amp; Americas
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-brand-teal/40" size={28} />
      </motion.div>
    </section>
  )
}
