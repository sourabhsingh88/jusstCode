// import { Link } from 'react-router-dom'
// import { Zap, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
// import { motion } from 'framer-motion'

// const footerLinks = {
//   Company: [
//     { label: 'About Us', to: '/about' },
//     { label: 'Services', to: '/services' },
//     { label: 'Portfolio', to: '/portfolio' },
//     { label: 'Blog', to: '/blog' },
//     { label: 'Careers', to: '/contact' },
//   ],
//   Services: [
//     { label: 'SaaS Development', to: '/services' },
//     { label: 'Web App Development', to: '/services' },
//     { label: 'Android Development', to: '/services' },
//     { label: 'AI Integration', to: '/services' },
//     { label: 'UI/UX Design', to: '/services' },
//     { label: 'Cloud Solutions', to: '/services' },
//     { label: 'Maintenance & Support', to: '/services' },
//     { label: 'Custom Software', to: '/services' },
//   ],
//   Legal: [
//     { label: 'Privacy Policy', to: '/' },
//     { label: 'Terms of Service', to: '/' },
//     { label: 'Cookie Policy', to: '/' },
//   ],
// }

// const socials = [
//   { icon: Github, href: 'https://github.com', label: 'GitHub' },
//   { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
//   { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
// ]

// export default function Footer() {
//   return (
//     <footer className="relative border-t" style={{ borderColor: 'rgba(99,102,241,0.15)', background: '#030712' }}>
//       {/* Top glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px" style={{ background: 'linear-gradient(90deg,transparent,#6366f1,transparent)' }} />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <Link to="/" className="flex items-center gap-2 mb-5">
            
//               <span
//   style={{
//     background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent"
//   }}
// >
//   JusstCode
// </span>
//             </Link>
//             <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
//               We build future-ready SaaS products that scale. From MVP to enterprise — your technology partner for the long run.
//             </p>
//             <div className="flex flex-col gap-3 text-sm text-gray-400">
//               <a href="mailto:JusstCode@gmail.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
//                 <Mail size={14} /><span>JusstCode@gmail.com</span>
//               </a>
//               <a href="tel:+919755826293" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
//                 <Phone size={14} /><span>+91 97558 26293</span>
//               </a>
//               <span className="flex items-center gap-2">
//                 <MapPin size={14} /><span>vijay nagar indore 453221</span>
//               </span>
//             </div>
//             <div className="flex items-center gap-3 mt-6">
//               {socials.map(({ icon: Icon, href, label }) => (
//                 <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
//                   style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
//                 >
//                   <Icon size={16} />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           {Object.entries(footerLinks).map(([section, links]) => (
//             <div key={section}>
//               <h4 className="font-display font-semibold text-white mb-5">{section}</h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <Link to={link.to} className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200">
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom bar */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
//           <p className="text-xs text-gray-500">© {new Date().getFullYear()} JusstCode Agency. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }


// import { useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { Github, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
// import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from 'framer-motion'
// import logo from '../../../logo/logo.png'

// const BRAND_NAME = 'Jusst Code'
// const GRADIENT = 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)'

// const footerLinks = {
//   Company: [
//     { label: 'About Us', to: '/about' },
//     { label: 'Services', to: '/services' },
//     { label: 'Portfolio', to: '/portfolio' },
//     { label: 'Blog', to: '/blog' },
//     { label: 'Careers', to: '/contact' },
//   ],
//   Services: [
//     { label: 'SaaS Development', to: '/services' },
//     { label: 'Web App Development', to: '/services' },
//     { label: 'Android Development', to: '/services' },
//     { label: 'AI Integration', to: '/services' },
//     { label: 'UI/UX Design', to: '/services' },
//     { label: 'Cloud Solutions', to: '/services' },
//     { label: 'Maintenance & Support', to: '/services' },
//     { label: 'Custom Software', to: '/services' },
//   ],
//   Legal: [
//     { label: 'Privacy Policy', to: '/' },
//     { label: 'Terms of Service', to: '/' },
//     { label: 'Cookie Policy', to: '/' },
//   ],
// }

// const socials = [
//   { icon: Github, href: 'https://github.com', label: 'GitHub' },
//   { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
//   { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
// ]

// const contacts = [
//   { icon: Mail, href: 'mailto:JusstCode@gmail.com', label: 'JusstCode@gmail.com' },
//   { icon: Phone, href: 'tel:+919755826293', label: '+91 97558 26293' },
//   { icon: MapPin, href: null, label: 'Vijay Nagar, Indore 453221' },
// ]

// /* ================================================================== */
// /*  Social icon: magnetic pull + 3D tilt toward the cursor               */
// /* ================================================================== */
// function SocialIcon({ icon: Icon, href, label }) {
//   const ref = useRef(null)
//   const reduced = useReducedMotion()
//   const x = useMotionValue(0)
//   const y = useMotionValue(0)
//   const sx = useSpring(x, { stiffness: 250, damping: 16 })
//   const sy = useSpring(y, { stiffness: 250, damping: 16 })
//   const rotateX = useTransform(sy, [-10, 10], [14, -14])
//   const rotateY = useTransform(sx, [-10, 10], [-14, 14])

//   const onMove = (e) => {
//     if (reduced || !ref.current) return
//     const r = ref.current.getBoundingClientRect()
//     x.set((e.clientX - (r.left + r.width / 2)) * 0.4)
//     y.set((e.clientY - (r.top + r.height / 2)) * 0.4)
//   }
//   const reset = () => {
//     x.set(0)
//     y.set(0)
//   }

//   return (
//     <motion.a
//       ref={ref}
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       onMouseMove={onMove}
//       onMouseLeave={reset}
//       style={{ x: sx, y: sy, rotateX, rotateY, transformPerspective: 300 }}
//       whileHover={{ scale: 1.12 }}
//       className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
//     >
//       <span
//         aria-hidden
//         className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
//         style={{ background: GRADIENT }}
//       />
//       <span
//         className="absolute inset-0 rounded-xl"
//         style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
//       />
//       <Icon size={16} className="relative" />
//     </motion.a>
//   )
// }

// /* ================================================================== */
// /*  Link with an underline that draws in from the left on hover          */
// /* ================================================================== */
// function FooterLink({ to, children }) {
//   return (
//     <Link to={to} className="group relative inline-block text-sm text-gray-400 transition-colors duration-200 hover:text-white">
//       {children}
//       <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
//     </Link>
//   )
// }

// /* ================================================================== */
// /*  Footer                                                              */
// /* ================================================================== */
// export default function Footer() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
//   const glowScale = useTransform(scrollYProgress, [0, 1], [0.3, 1])
//   const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])

//   return (
//     <footer ref={ref} className="relative overflow-hidden border-t" style={{ borderColor: 'rgba(99,102,241,0.15)', background: '#030712' }}>
//       {/* top glow, grows in as the footer enters view */}
//       <motion.div
//         aria-hidden
//         className="absolute top-0 left-1/2 h-px w-96 -translate-x-1/2"
//         style={{ background: 'linear-gradient(90deg,transparent,#6366f1,transparent)', scaleX: glowScale, opacity: glowOpacity }}
//       />
//       {/* soft ambient glow rising from the bottom */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
//         style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
//       />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
//           {/* Brand */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: '-60px' }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-2"
//           >
//             <Link to="/" className="group inline-flex items-center gap-2.5 mb-5">
//               <img src={logo} alt="" className="h-8 w-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-110" />
//               <span
//                 className="text-lg font-extrabold leading-none"
//                 style={{
//                   background: GRADIENT,
//                   WebkitBackgroundClip: 'text',
//                   backgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   paddingBottom: '2px',
//                 }}
//               >
//                 {BRAND_NAME}
//               </span>
//             </Link>
//             <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
//               We build future-ready SaaS products that scale. From MVP to enterprise — your technology partner for
//               the long run.
//             </p>
//             <div className="flex flex-col gap-3 text-sm text-gray-400">
//               {contacts.map(({ icon: Icon, href, label }) =>
//                 href ? (
//                   <a key={label} href={href} className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
//                     <Icon size={14} />
//                     <span>{label}</span>
//                   </a>
//                 ) : (
//                   <span key={label} className="flex items-center gap-2">
//                     <Icon size={14} />
//                     <span>{label}</span>
//                   </span>
//                 )
//               )}
//             </div>
//             <div className="flex items-center gap-3 mt-6">
//               {socials.map((s) => (
//                 <SocialIcon key={s.label} {...s} />
//               ))}
//             </div>
//           </motion.div>

//           {/* Links */}
//           {Object.entries(footerLinks).map(([section, links], i) => (
//             <motion.div
//               key={section}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: '-60px' }}
//               transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
//             >
//               <h4 className="font-display font-semibold text-white mb-5">{section}</h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <FooterLink to={link.to}>{link.label}</FooterLink>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom bar */}
//         <div
//           className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
//           style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
//         >
//           <p className="text-xs text-gray-500">© {new Date().getFullYear()} {BRAND_NAME} Agency. All rights reserved.</p>
//           <Link to="/contact" className="group inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors">
//             Let's build something <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   )
// }


import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion'
import logo from '../../../logo/logo.png'

const BRAND_NAME = 'JusstCode'

const GRADIENT =
  'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)'

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Blog', to: '/blog' },
    { label: 'Careers', to: '/contact' },
  ],

  Services: [
    { label: 'SaaS Development', to: '/services' },
    { label: 'Web App Development', to: '/services' },
    { label: 'Android Development', to: '/services' },
    { label: 'AI Integration', to: '/services' },
    { label: 'UI/UX Design', to: '/services' },
    { label: 'Cloud Solutions', to: '/services' },
    { label: 'Maintenance & Support', to: '/services' },
    { label: 'Custom Software', to: '/services' },
  ],

  Legal: [
    { label: 'Privacy Policy', to: '/' },
    { label: 'Terms of Service', to: '/' },
    { label: 'Cookie Policy', to: '/' },
  ],
}

const socials = [
  {
    type: 'github',
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    type: 'twitter',
    href: 'https://twitter.com',
    label: 'Twitter',
  },
  {
    type: 'linkedin',
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
]

const contacts = [
  {
    icon: Mail,
    href: 'mailto:JusstCode@gmail.com',
    label: 'JusstCode@gmail.com',
  },
  {
    icon: Phone,
    href: 'tel:+919755826293',
    label: '+91 97558 26293',
  },
  {
    icon: MapPin,
    href: null,
    label: 'Vijay Nagar, Indore 453221',
  },
]

/* ================================================================
   Social Brand Icons
================================================================ */

function BrandIcon({ type }) {
  if (type === 'github') {
    return (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.338 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
      </svg>
    )
  }

  if (type === 'twitter') {
    return (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.965 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.56 20.452h3.557V8.999H3.56v11.453Z" />
      </svg>
    )
  }

  return null
}

/* ================================================================
   Social Icon
================================================================ */

function SocialIcon({ type, href, label }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const sx = useSpring(x, {
    stiffness: 250,
    damping: 16,
  })

  const sy = useSpring(y, {
    stiffness: 250,
    damping: 16,
  })

  const rotateX = useTransform(
    sy,
    [-10, 10],
    [14, -14]
  )

  const rotateY = useTransform(
    sx,
    [-10, 10],
    [-14, 14]
  )

  const onMove = (e) => {
    if (reduced || !ref.current) return

    const r = ref.current.getBoundingClientRect()

    x.set(
      (e.clientX - (r.left + r.width / 2)) * 0.4
    )

    y.set(
      (e.clientY - (r.top + r.height / 2)) * 0.4
    )
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        x: sx,
        y: sy,
        rotateX,
        rotateY,
        transformPerspective: 300,
      }}
      whileHover={{
        scale: 1.12,
      }}
      className="
        group
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        text-gray-400
        transition-colors
        hover:text-white
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-indigo-400/70
      "
    >
      <span
        aria-hidden
        className="
          absolute
          inset-0
          rounded-xl
          opacity-0
          blur-md
          transition-opacity
          duration-300
          group-hover:opacity-60
        "
        style={{
          background: GRADIENT,
        }}
      />

      <span
        className="
          absolute
          inset-0
          rounded-xl
        "
        style={{
          border:
            '1px solid rgba(255,255,255,0.1)',
          background:
            'rgba(255,255,255,0.03)',
        }}
      />

      <span className="relative">
        <BrandIcon type={type} />
      </span>
    </motion.a>
  )
}

/* ================================================================
   Footer Link
================================================================ */

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        group
        relative
        inline-block
        text-sm
        text-gray-400
        transition-colors
        duration-200
        hover:text-white
      "
    >
      {children}

      <span
        className="
          absolute
          -bottom-0.5
          left-0
          h-px
          w-0
          bg-indigo-400
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </Link>
  )
}

/* ================================================================
   Footer
================================================================ */

export default function Footer() {
  const ref = useRef(null)

  const {
    scrollYProgress,
  } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  const glowScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.3, 1]
  )

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [0, 1]
  )

  return (
    <footer
      ref={ref}
      className="
        relative
        overflow-hidden
        border-t
      "
      style={{
        borderColor:
          'rgba(99,102,241,0.15)',
        background: '#030712',
      }}
    >
      {/* Top Glow */}

      <motion.div
        aria-hidden
        className="
          absolute
          top-0
          left-1/2
          h-px
          w-96
          -translate-x-1/2
        "
        style={{
          background:
            'linear-gradient(90deg,transparent,#6366f1,transparent)',
          scaleX: glowScale,
          opacity: glowOpacity,
        }}
      />

      {/* Ambient Glow */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/2
          h-80
          w-[40rem]
          -translate-x-1/2
          rounded-full
          opacity-20
          blur-3xl
        "
        style={{
          background:
            'radial-gradient(circle, #6366f1, transparent 70%)',
        }}
      />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-16
          pb-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-5
            gap-10
            mb-14
          "
        >
          {/* ======================================================
              Brand
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-2"
          >
            <Link
              to="/"
              className="
                group
                inline-flex
                items-center
                gap-3
                mb-5
              "
            >
              <img
                src={logo}
                alt="JusstCode Logo"
                className="
                  h-9
                  w-9
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />

              <span
                className="
                  text-xl
                  font-extrabold
                  leading-none
                  tracking-tight
                "
                style={{
                  background: GRADIENT,
                  WebkitBackgroundClip:
                    'text',
                  backgroundClip:
                    'text',
                  WebkitTextFillColor:
                    'transparent',
                }}
              >
                {BRAND_NAME}
              </span>
            </Link>

            <p
              className="
                text-gray-400
                text-sm
                leading-relaxed
                max-w-xs
                mb-6
              "
            >
              We build future-ready SaaS
              products that scale. From MVP
              to enterprise — your technology
              partner for the long run.
            </p>

            {/* Contact Information */}

            <div
              className="
                flex
                flex-col
                gap-3
                text-sm
                text-gray-400
              "
            >
              {contacts.map(
                ({
                  icon: Icon,
                  href,
                  label,
                }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      className="
                        flex
                        items-center
                        gap-2
                        hover:text-indigo-400
                        transition-colors
                      "
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </a>
                  ) : (
                    <span
                      key={label}
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </span>
                  )
              )}
            </div>

            {/* Social Icons */}

            <div
              className="
                flex
                items-center
                gap-3
                mt-6
              "
            >
              {socials.map((social) => (
                <SocialIcon
                  key={social.label}
                  {...social}
                />
              ))}
            </div>
          </motion.div>

          {/* ======================================================
              Footer Links
          ====================================================== */}

          {Object.entries(footerLinks).map(
            ([section, links], i) => (
              <motion.div
                key={section}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-60px',
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                }}
              >
                <h4
                  className="
                    font-display
                    font-semibold
                    text-white
                    mb-5
                  "
                >
                  {section}
                </h4>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterLink to={link.to}>
                        {link.label}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        {/* ======================================================
            Bottom Bar
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            pt-8
          "
          style={{
            borderTop:
              '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()}{' '}
            {BRAND_NAME} Agency. All rights
            reserved.
          </p>

          <Link
            to="/contact"
            className="
              group
              inline-flex
              items-center
              gap-1.5
              text-xs
              font-medium
              text-gray-400
              hover:text-white
              transition-colors
            "
          >
            Let's build something

            <ArrowUpRight
              size={13}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}