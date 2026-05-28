/* Reusable Framer Motion variants shared across all sections */

export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const slideInLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const slideInRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

/* Container: stagger its children when entering view */
export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

/* Child item: fades up with a spring feel */
export const staggerItem = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

/* Card hover lift — use as `whileHover` prop directly */
export const cardHoverProps = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

/* Button interaction props */
export const buttonProps = {
  whileHover: { scale: 1.05, transition: { type: 'spring', stiffness: 400 } },
  whileTap:   { scale: 0.97 },
}
