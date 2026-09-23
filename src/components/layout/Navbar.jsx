// import { useState, useEffect } from 'react'
// import { Link, NavLink, useLocation } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Menu, X, Zap } from 'lucide-react'
// import logo from '../../../logo/logo.png'

// const navLinks = [
//   { label: 'Home', to: '/' },
//   { label: 'About', to: '/about' },
//   { label: 'Services', to: '/services' },
//   { label: 'Portfolio', to: '/portfolio' },
//   { label: 'Pricing', to: '/pricing' },
//   { label: 'Blog', to: '/blog' },
//   { label: 'Contact', to: '/contact' },
// ]

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 30)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => setMobileOpen(false), [location])

//   return (
//     <>
//       <motion.nav
//         className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
//         style={{
//           background: scrolled ? 'rgba(3,7,18,0.85)' : 'transparent',
//           backdropFilter: scrolled ? 'blur(20px)' : 'none',
//           borderBottom: scrolled ? '1px solid rgba(99,102,241,0.15)' : 'none',
//         }}
//         initial={{ y: -80 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">
//             {/* Logo */}
            
//             <Link to="/" className="flex items-center gap-2 group">
            
//               <img src={logo} alt="JustCode Logo" className="w-10 h-10 rounded-full group-hover:animate-pulse" /><span
//   style={{
//     background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent"
//   }}
// >JustCode
// </span>
//             </Link>

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.to}
//                   to={link.to}
//                   end={link.to === '/'}
//                   className={({ isActive }) =>
//                     `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                       isActive
//                         ? 'text-primary-400 bg-primary-500/10'
//                         : 'text-gray-400 hover:text-white hover:bg-white/5'
//                     }`
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="hidden lg:flex items-center gap-3">
//               <Link
//                 to="/contact"
//                 className="text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
//                 style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 0 20px rgba(99,102,241,0.35)' }}
//               >
//                 Get Started
//               </Link>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
//             >
//               {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//             className="fixed top-16 left-0 right-0 z-30 lg:hidden"
//             style={{ background: 'rgba(3,7,18,0.97)', borderBottom: '1px solid rgba(99,102,241,0.2)', backdropFilter: 'blur(20px)' }}
//           >
//             <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.to}
//                   to={link.to}
//                   end={link.to === '/'}
//                   className={({ isActive }) =>
//                     `px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
//                       isActive ? 'text-primary-400 bg-primary-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
//                     }`
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//               ))}
//               <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
//                 <Link to="/admin/login" className="px-4 py-3 text-gray-400 hover:text-white text-sm transition-colors">Admin Panel</Link>
//                 <Link to="/contact" className="text-center font-semibold text-white px-5 py-3 rounded-xl" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
//                   Get Started →
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import logo from '../../../logo/logo.png'

// Change the brand name here and it updates everywhere in the navbar.
const BRAND_NAME = 'Jusst Code'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const GRADIENT = 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)'
const BTN_GRADIENT = 'linear-gradient(135deg, #6366f1, #8b5cf6)'

/* ------------------------------------------------------------------ */
/*  Logo: 3D tilt on hover + slowly rotating gradient ring             */
/* ------------------------------------------------------------------ */
function BrandLogo({ reduced }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 200, damping: 16 })
  const sy = useSpring(my, { stiffness: 200, damping: 16 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [-28, 28])
  const rotateX = useTransform(sy, [-0.5, 0.5], [28, -28])

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <Link
      to="/"
      aria-label={`${BRAND_NAME} home`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="group flex items-center gap-3 h-full rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
    >
      <motion.span
        ref={ref}
        className="relative block w-10 h-10 shrink-0"
        style={{ rotateX, rotateY, transformPerspective: 500, transformStyle: 'preserve-3d' }}
      >
        {/* rotating ring */}
        <motion.span
          aria-hidden
          className="absolute -inset-[3px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
          }}
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        {/* glow */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          style={{ background: GRADIENT }}
        />
        <img
          src={logo}
          alt=""
          className="relative w-full h-full rounded-full object-cover bg-[#030712]"
          style={{ transform: 'translateZ(12px)' }}
        />
      </motion.span>

      <span
        className="text-[1.35rem] font-extrabold tracking-tight leading-none whitespace-nowrap select-none transition-[background-position] duration-700 group-hover:[background-position:100%_0]"
        style={{
          background: GRADIENT,
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingBottom: '2px', // keeps descenders from clipping
        }}
      >
        {BRAND_NAME}
      </span>
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/*  CTA: magnetic + 3D tilt + light sweep                               */
/* ------------------------------------------------------------------ */
function MagneticCTA({ to, children, reduced, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16 })
  const sy = useSpring(y, { stiffness: 220, damping: 16 })
  const rotateX = useTransform(sy, [-12, 12], [12, -12])
  const rotateY = useTransform(sx, [-16, 16], [-12, 12])

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, rotateX, rotateY, transformPerspective: 600 }}
      className="inline-block"
    >
      <Link
        to={to}
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full text-sm font-semibold text-white px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${className}`}
        style={{ background: BTN_GRADIENT, boxShadow: '0 0 28px rgba(99,102,241,0.45)' }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-[20deg] bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[400%]"
        />
        <span className="relative">{children}</span>
        <ArrowUpRight
          size={16}
          className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Hamburger that morphs into a cross                                  */
/* ------------------------------------------------------------------ */
function Burger({ open }) {
  const line = 'absolute h-0.5 w-6 rounded-full bg-current'
  return (
    <span className="relative flex h-6 w-6 items-center justify-center">
      <motion.span className={line} animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -7 }} />
      <motion.span className={line} animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} />
      <motion.span className={line} animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 7 }} />
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                              */
/* ------------------------------------------------------------------ */
export default function Navbar() {
  const reduced = useReducedMotion()
  const location = useLocation()

  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState(null)

  // scroll progress bar
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  // shrink into a floating pill + hide when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(latest > 30)
    if (reduced || mobileOpen) {
      setHidden(false)
    } else if (latest > prev && latest > 500) {
      setHidden(true)
    } else if (latest < prev) {
      setHidden(false)
    }
  })

  // close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname])

  // lock body scroll + Esc to close
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMobileOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  const spring = reduced ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 30 }

  return (
    <>
      {/* Scroll progress line */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
        style={{ scaleX: progress, background: GRADIENT }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 md:px-4 pointer-events-none"
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: hidden ? -140 : 0, opacity: 1 }}
        transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 200, damping: 26, delay: hidden ? 0 : 0.05 }}
      >
        <motion.nav
          aria-label="Main"
          className={`pointer-events-auto w-full border transition-[backdrop-filter] duration-500 ${
            scrolled ? 'backdrop-blur-xl' : ''
          }`}
          initial={false}
          animate={{
            maxWidth: scrolled ? 980 : 1280,
            marginTop: scrolled ? 12 : 0,
            borderRadius: scrolled ? 9999 : 0,
            backgroundColor: scrolled ? 'rgba(3,7,18,0.72)' : 'rgba(3,7,18,0)',
            borderColor: scrolled ? 'rgba(129,140,248,0.28)' : 'rgba(129,140,248,0)',
            boxShadow: scrolled
              ? '0 12px 40px rgba(0,0,0,0.45), 0 0 40px rgba(99,102,241,0.18)'
              : '0 0 0 rgba(0,0,0,0)',
          }}
          transition={spring}
        >
          <motion.div
            className="flex items-center justify-between px-4 sm:px-6"
            initial={false}
            animate={{ height: scrolled ? 60 : 80 }}
            transition={spring}
          >
            <BrandLogo reduced={reduced} />

            {/* Desktop links */}
            <div
              className="hidden lg:flex items-center gap-1"
              onMouseLeave={() => setHovered(null)}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onMouseEnter={() => setHovered(link.to)}
                  onFocus={() => setHovered(link.to)}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                >
                  {({ isActive }) => (
                    <>
                      {hovered === link.to && (
                        <motion.span
                          layoutId="nav-hover"
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-white/[0.07]"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                      )}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          aria-hidden
                          className="absolute inset-0 rounded-full border border-indigo-400/40 bg-indigo-500/15"
                          style={{ boxShadow: '0 0 18px rgba(99,102,241,0.35) inset' }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      {/* label roll on hover */}
                      <span className="relative z-10 block h-5 overflow-hidden leading-5">
                        <span
                          className={`block transition-transform duration-300 ease-out group-hover:-translate-y-5 ${
                            isActive ? 'text-white' : 'text-gray-400'
                          }`}
                        >
                          {link.label}
                        </span>
                        <span
                          aria-hidden
                          className="absolute left-0 top-5 block text-white transition-transform duration-300 ease-out group-hover:-translate-y-5"
                        >
                          {link.label}
                        </span>
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <MagneticCTA to="/contact" reduced={reduced}>
                Get Started
              </MagneticCTA>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full text-gray-200 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
            >
              <Burger open={mobileOpen} />
            </button>
          </motion.div>
        </motion.nav>
      </motion.header>

      {/* Mobile menu: circular reveal from the toggle button, links flip in with 3D */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col px-6 pt-28 pb-10 overflow-y-auto"
            style={{
              background:
                'radial-gradient(600px circle at 85% 0%, rgba(99,102,241,0.28), transparent 60%), radial-gradient(500px circle at 0% 100%, rgba(6,182,212,0.18), transparent 60%), #030712',
            }}
            initial={{ clipPath: 'circle(0px at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0px at calc(100% - 40px) 40px)' }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="flex flex-col gap-1"
              style={{ perspective: 900 }}
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  style={{ transformOrigin: '50% 100%' }}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotateX: -70 },
                    show: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: { type: 'spring', stiffness: 140, damping: 16 },
                    },
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-2xl px-4 py-3 text-3xl font-bold tracking-tight transition-colors ${
                        isActive ? 'text-white bg-white/[0.06]' : 'text-gray-400 hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>
                        {isActive && (
                          <span
                            aria-hidden
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ background: GRADIENT, boxShadow: '0 0 14px rgba(99,102,241,0.9)' }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-auto pt-8 flex flex-col gap-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <MagneticCTA to="/contact" reduced className="w-full justify-center py-4 text-base">
                Start your project
              </MagneticCTA>
              <Link
                to="/admin/login"
                className="text-center text-sm text-gray-500 hover:text-white transition-colors"
              >
                Admin Panel
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}