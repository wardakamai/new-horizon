import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { label: 'About Us',               to: '/about'                       },
  { label: 'Services',               to: '/services'                    },
  { label: 'Oil Transfer',           to: '/transfer-services'           },
  { label: 'Storage Agent',          to: '/storage-agent'               },
  { label: 'Injection & Inspection', to: '/injection-inspection-agent'  },
  { label: 'Products',               to: '/products'                    },
  { label: 'EN590 Diesel',           to: '/products/en590-diesel'       },
  { label: 'Jet Fuel A1',            to: '/products/jet-a1'             },
  { label: 'Crude Oil',              to: '/products/crude-oil'          },
  { label: 'D6 Fuel Oil',            to: '/products/virgin-fuel-oil-d6' },
  { label: 'How It Works',           to: '/how-it-works'                },
  { label: 'Compliance',             to: '/compliance'                  },
  { label: 'Contact',                to: '/contact'                     },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-tealDeep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5" aria-label="New Horizon Oil and Gas — Home">
              <img
                src="/site-logo.png"
                alt="New Horizon Oil and Gas"
                className="h-28 w-auto object-contain"
              />
            </Link>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#C9A24A' }}>
              Official mandate to oil and gas suppliers, facilitating the supply of petroleum products
              to serious buyers globally. Based in Astana, Kazakhstan.
            </p>
          </div>

          {/* Quick links — now using React Router Link */}
          <div>
            <h3 className="font-body font-semibold text-brand-gold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-body text-sm text-brand-gold hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-semibold text-brand-gold text-xs uppercase tracking-widest mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-3 font-body text-sm" style={{ color: '#C9A24A' }}>
              <p className="leading-relaxed">
                Dinmukhamed Qonayev St 2,<br />
                Astana 010000, Kazakhstan
              </p>
              <p>
                <a href="mailto:info@newhorizonoil.com" className="hover:text-white transition-colors">
                  info@newhorizonoil.com
                </a>
              </p>
              <p>
                <a href="tel:+77116103763" className="hover:text-white transition-colors">
                  +7 711 610 3763
                </a>
              </p>
              <p>
                <a href="tel:+420225636109" className="hover:text-white transition-colors">
                  +420 225 636 109
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/420225636109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Chat with us on WhatsApp"
                >
                  WhatsApp: +420 225 636 109
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs" style={{ color: '#C9A24A' }}>
            &copy; {year} New Horizon Oil and Gas. All rights reserved.
          </p>
          <p className="font-body text-xs text-center sm:text-right" style={{ color: '#C9A24A' }}>
            Facilitating global petroleum supply with integrity.
          </p>
        </div>
      </div>
    </footer>
  )
}
