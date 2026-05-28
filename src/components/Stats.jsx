import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, staggerItem } from '../variants'

const STATS = [
  { value: 300, suffix: '+', label: 'Global Buyers',       sublabel: 'Worldwide Network'   },
  { value: 100, suffix: '%', label: 'Official Mandate',    sublabel: 'Verified & Authorized'},
  { value: 6,   suffix: '',  label: 'Product Categories',  sublabel: 'Full Portfolio'       },
  { value: 24,  suffix: '/7',label: 'Support Available',   sublabel: 'Always Reachable'     },
]

/* Animated count-up driven by eased RAF loop */
function CountUp({ target, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 1800
    const startTime = Date.now()

    const tick = () => {
      const elapsed  = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Cubic ease-out for satisfying deceleration
      const eased    = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }

    requestAnimationFrame(tick)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-brand-tealDeep relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {STATS.map(({ value, suffix, label, sublabel }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="text-center px-4 relative"
            >
              {/* Vertical divider (except first column) */}
              {i !== 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
              )}

              <div className="font-display text-5xl lg:text-6xl font-bold text-brand-gold mb-2">
                <CountUp target={value} suffix={suffix} />
              </div>
              <div className="font-body font-semibold text-white text-base lg:text-lg mb-1">
                {label}
              </div>
              <div className="font-body text-brand-teal text-sm">
                {sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
