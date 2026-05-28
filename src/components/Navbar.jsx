import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { buttonProps } from '../variants'

const NAV_LINKS = [
  { label: 'Home',         to: '/'                },
  { label: 'About',        to: '/about'           },
  { label: 'Services',     to: '/services'         },
  { label: 'Products',     to: '/products'         },
  { label: 'How It Works', to: '/how-it-works'     },
  { label: 'Compliance',   to: '/compliance'       },
  { label: 'Contact',      to: '/contact'          },
]

const mobileMenuVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.2, ease: 'easeIn'  } },
}

const iconVariants = {
  initial: { rotate: -90, opacity: 0 },
  animate: { rotate: 0,   opacity: 1, transition: { duration: 0.2 } },
  exit:    { rotate: 90,  opacity: 0, transition: { duration: 0.15 } },
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll-triggered white background */}
      <motion.div
        className="absolute inset-0 bg-white shadow-md"
        style={{ opacity: bgOpacity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo — React Router Link to home */}
          <Link to="/" className="flex items-center flex-shrink-0" aria-label="New Horizon Oil and Gas — Home">
            <img
              src="/site-logo.png"
              alt="New Horizon Oil and Gas"
              className="h-20 md:h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 lg:gap-7">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `font-body text-sm font-medium transition-colors duration-200 relative group ${
                    isActive ? 'text-brand-teal' : 'text-gray-700 hover:text-brand-teal'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-brand-teal transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <motion.span {...buttonProps} className="inline-block">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-brand-teal text-white text-sm font-medium font-body rounded-lg shadow-sm shadow-brand-teal/30 hover:bg-brand-tealDark transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </motion.span>
          </nav>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden p-2 text-brand-tealDeep"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="close" variants={iconVariants} initial="initial" animate="animate" exit="exit" className="block">
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span key="open" variants={iconVariants} initial="initial" animate="animate" exit="exit" className="block">
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <nav aria-label="Mobile navigation" className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-body text-sm font-medium py-1 transition-colors ${
                      isActive ? 'text-brand-teal' : 'text-gray-700 hover:text-brand-teal'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-2 px-5 py-3 bg-brand-teal text-white text-sm font-medium font-body rounded-lg text-center hover:bg-brand-tealDark transition-colors"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
