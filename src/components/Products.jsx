import { motion } from 'framer-motion'
import { Droplets, Fuel, PlaneTakeoff, Flame, Gauge, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, buttonProps } from '../variants'

const PRODUCTS = [
  {
    Icon: Droplets,
    name: 'Crude Oil',
    spec: 'Brent / WTI',
    description:
      'High-quality Brent and WTI crude oil supplied to refineries, trading houses, and downstream operations worldwide.',
  },
  {
    Icon: Fuel,
    name: 'Diesel EN590',
    spec: '10ppm Sulphur',
    description:
      'European-standard EN590 ultra-low sulphur diesel for road transport, heavy industry, and power generation.',
  },
  {
    Icon: PlaneTakeoff,
    name: 'Jet Fuel A1',
    spec: 'Aviation Grade',
    description:
      'Aviation-grade Jet A-1 meeting IATA, DEF STAN 91-091, and ASTM D1655 specifications for commercial aviation.',
  },
  {
    Icon: Flame,
    name: 'LNG & LPG',
    spec: 'Liquefied Gas',
    description:
      'Liquefied natural and petroleum gas for industrial processes, marine applications, and residential distribution.',
  },
  {
    Icon: Gauge,
    name: 'Fuel Oil',
    spec: 'Heavy & Light Grades',
    description:
      'Heavy fuel oil (HFO) and light fuel oil (LFO) for power stations, marine bunkers, and industrial heating.',
  },
  {
    Icon: Zap,
    name: 'Gasoline',
    spec: 'RON 92 / RON 95',
    description:
      'Unleaded premium and regular gasoline for retail distribution, wholesale, and private blending operations.',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-brand-cream">
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
            Our Portfolio
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-brand-tealDeep">
            Petroleum Products We Supply Globally
          </h2>
          <p className="mt-4 font-body text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We facilitate the supply of a comprehensive range of petroleum products to verified buyers
            across all major markets — handled with full documentation and compliance.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PRODUCTS.map(({ Icon, name, spec, description }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 cursor-default group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-5 group-hover:bg-brand-teal/20 transition-colors duration-300">
                <Icon className="text-brand-teal" size={26} strokeWidth={1.5} />
              </div>

              {/* Spec badge */}
              <span className="inline-block text-[10px] font-medium font-body text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-2.5 py-1 rounded-full mb-3">
                {spec}
              </span>

              <h3 className="font-display text-2xl font-bold text-brand-tealDeep mb-3">
                {name}
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                {description}
              </p>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-2 text-brand-teal text-xs font-medium font-body">
                <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                Available for supply
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span {...buttonProps} className="inline-block">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-teal text-white font-medium font-body rounded-xl shadow-lg shadow-brand-teal/25 hover:bg-brand-tealDark transition-colors"
            >
              View Full Product Range
              <ArrowRight size={18} />
            </Link>
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
