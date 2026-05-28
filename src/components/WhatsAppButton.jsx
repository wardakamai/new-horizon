import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/420225636109"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-xl shadow-green-500/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.15, transition: { type: 'spring', stiffness: 400 } }}
      whileTap={{ scale: 0.93 }}
    >
      {/* Pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30"
      />
      {/* Official WhatsApp logo SVG */}
      <svg
        className="relative"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="30"
        height="30"
        aria-hidden="true"
      >
        <path
          fill="#fff"
          d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"
        />
        <path
          fill="#25d366"
          d="M24 6.8c-9.5 0-17.2 7.7-17.2 17.2 0 3.3.9 6.4 2.6 9.1L8 38l5.1-1.3c2.6 1.5 5.6 2.4 8.9 2.4 9.5 0 17.2-7.7 17.2-17.2S33.5 6.8 24 6.8z"
        />
        <path
          fill="#fff"
          d="M33.5 28.8c-.4-1.1-2.3-2.2-3.2-2.3-.3 0-.6-.1-.9-.1-.6 0-1.2.2-1.6.5l-.4.3c-.5.4-1 .6-1.6.3-.7-.3-2.8-1.7-4.3-4-.4-.6-.2-1.1.1-1.5l.3-.4c.3-.4.4-.9.2-1.4l-1-3c-.3-.8-.9-1.3-1.6-1.3h-.3c-.5 0-1 .2-1.4.5-1.1 1-1.7 2.3-1.6 3.7.1 1.9 1 5 4.8 8.4 3.9 3.5 7.1 4.1 8.8 4.1.6 0 1-.1 1.3-.2 1.4-.4 2.5-1.4 3-2.7.2-.5.2-1 0-1.3z"
        />
      </svg>
    </motion.a>
  )
}
