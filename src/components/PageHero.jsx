import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { staggerContainer, staggerItem } from '../variants'

/**
 * Reusable inner-page hero banner.
 *
 * Props:
 *  title       – h1 text (required)
 *  subtitle    – optional paragraph beneath the heading
 *  breadcrumbs – array of { label, to? } — last item has no `to` (current page)
 *  tag         – optional eyebrow text above the heading
 */
export default function PageHero({ title, subtitle, breadcrumbs = [], tag }) {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 bg-brand-cream overflow-hidden">
      {/* Decorative background orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-brand-teal/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-brand-gold/8 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb nav */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs font-body text-gray-500 mb-6">
            <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
            {breadcrumbs.map(({ label, to }, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={12} className="text-gray-400 flex-shrink-0" />
                {to ? (
                  <Link to={to} className="hover:text-brand-teal transition-colors">{label}</Link>
                ) : (
                  <span className="text-brand-teal font-medium">{label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {tag && (
            <motion.span
              variants={staggerItem}
              className="inline-block text-brand-gold font-body text-sm font-medium uppercase tracking-widest mb-4"
            >
              {tag}
            </motion.span>
          )}

          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-tealDeep leading-tight mb-4"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={staggerItem}
              className="font-body text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
