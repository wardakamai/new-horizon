import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react'
import { staggerContainer, staggerItem, buttonProps } from '../variants'

const CONTACT_ITEMS = [
  {
    Icon: MapPin,
    label: 'Address',
    content: 'Dinmukhamed Qonayev St 2, Astana 010000, Kazakhstan',
    href: null,
  },
  {
    Icon: Mail,
    label: 'Email',
    content: 'info@newhorizonoil.com',
    href: 'mailto:info@newhorizonoil.com',
  },
  {
    Icon: Phone,
    label: 'Phone (Kazakhstan)',
    content: '+7 711 610 3763',
    href: 'tel:+77116103763',
  },
  {
    Icon: Phone,
    label: 'Phone (Europe)',
    content: '+420 225 636 109',
    href: 'tel:+420225636109',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    content: '+420 225 636 109',
    href: 'https://wa.me/420225636109',
    external: true,
  },
]

const INITIAL_FORM = { name: '', email: '', phone: '', message: '' }

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-red-500 text-xs font-body">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm]           = useState(INITIAL_FORM)
  const [errors, setErrors]       = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required.'
    if (!form.email.trim()) {
      e.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleChange = ({ target: { name, value } }) => {
    setForm(f   => ({ ...f,  [name]: value }))
    setErrors(e => ({ ...e,  [name]: ''   }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    const subject = encodeURIComponent(`Product Inquiry from ${form.name}`)
    const body    = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@newhorizonoil.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputBase =
    'w-full font-body text-sm text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal transition-all placeholder:text-gray-400'

  return (
    <section id="contact" className="py-24 bg-white">
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
            Get in Touch
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-brand-tealDeep">
            Contact Us
          </h2>
          <p className="mt-4 font-body text-gray-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Reach out via any channel below, or fill out the form and we will get back to you
            within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Contact details ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h3
              variants={staggerItem}
              className="font-display text-2xl font-bold text-brand-tealDeep mb-8"
            >
              Reach Out Directly
            </motion.h3>

            <div className="space-y-5">
              {CONTACT_ITEMS.map(({ Icon, label, content, href, external }, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-start gap-4 p-5 rounded-xl bg-brand-cream hover:bg-brand-teal/5 transition-colors border border-transparent hover:border-brand-teal/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-brand-teal" size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-medium font-body text-gray-400 uppercase tracking-wider mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="font-body text-gray-700 hover:text-brand-teal transition-colors text-sm"
                      >
                        {content}
                      </a>
                    ) : (
                      <p className="font-body text-gray-700 text-sm">{content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              /* Success state */
              <div className="h-full min-h-[400px] flex items-center justify-center p-12 bg-brand-cream rounded-2xl text-center">
                <div>
                  <CheckCircle2 className="text-brand-teal mx-auto mb-4" size={52} strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-bold text-brand-tealDeep mb-3">
                    Message Prepared!
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    Your email client should open with the message ready to send. If it does not, email us
                    directly at{' '}
                    <a href="mailto:info@newhorizonoil.com" className="text-brand-teal hover:underline">
                      info@newhorizonoil.com
                    </a>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}
                    className="mt-6 font-body text-sm text-brand-teal hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <Field label="Full Name *" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={`${inputBase} ${errors.name ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : ''}`}
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email Address *" error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`${inputBase} ${errors.email ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : ''}`}
                    />
                  </Field>
                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className={inputBase}
                    />
                  </Field>
                </div>

                <Field label="Message *" error={errors.message}>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please describe the product(s) you need, required quantity, and preferred delivery location..."
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : ''}`}
                  />
                </Field>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-brand-teal text-white font-semibold font-body rounded-xl shadow-md shadow-brand-teal/20 hover:bg-brand-tealDark transition-colors"
                  {...buttonProps}
                >
                  Send Inquiry
                </motion.button>

                <p className="text-center font-body text-xs text-gray-400">
                  This will open your email client with the message pre-filled.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
