// import { useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { motion, useInView } from 'framer-motion'
// import { ArrowRight, Target, Eye, Heart, Rocket } from 'lucide-react'

// const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

// const team = [
//    {
//     name: 'Sourabh Singh Mandloi',
//     role: 'CEO Founder',
//     bio: 'Backend systems architect. Scaled cloud infrastructure handling lakhs of users with high availability.',
//     avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
//     color: '#8b5cf6'
//   },
//   {
//     name: 'Tejasvi Solanki',
//     role: 'CTO & Co-founder',
//     bio: '3+ years building SaaS products for Indian startups. Led multiple successful product launches across fintech and edtech.',
//     avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
//     color: '#6366f1'
//   }
 
// ]

// const values = [
//   { icon: Target, title: 'Client-First', desc: 'Your success is our success. We measure outcomes, not hours.', color: '#6366f1' },
//   { icon: Eye, title: 'Radical Transparency', desc: 'Daily updates, open communication, no hidden surprises.', color: '#06b6d4' },
//   { icon: Heart, title: 'Craftsmanship', desc: 'We take pride in every line of code and pixel of design.', color: '#8b5cf6' },
//   { icon: Rocket, title: 'Move Fast', desc: 'Agile sprints, rapid iteration, and ship-ready builds.', color: '#f59e0b' },
// ]

// const timeline = [
//   { year: '2024', event: 'Founded in San Francisco with 2 engineers and a bold vision.' },
//   { year: '2024', event: 'Launched first enterprise SaaS platform serving 10,000+ users.' },
//   { year: '2025', event: 'Expanded to AI/ML services. Grew team to 25 specialists.' },
//   { year: '2025', event: 'Reached $10M ARR milestone. Opened offices in London and Singapore.' },
//   { year: '2026', event: '5+ products launched globally. Named Top SaaS Agency by Forbes.' },
// ]

// export default function About() {
//   const teamRef = useRef(null)
//   const teamInView = useInView(teamRef, { once: true, margin: '-100px' })

//   return (
//     <div style={{ background: '#030712' }}>
//       {/* Hero */}
//       <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)' }}>
//         <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium mb-4" style={{ color: '#6366f1' }}>ABOUT JusstCode</motion.p>
//           <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6">
//             We're a Team of{' '}
//             <span style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//               Builders
//             </span>
//           </motion.h1>
//           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-400 text-xl max-w-2xl mx-auto">
//             Since 2023, we've been the engineering partner behind some of the world's fastest-growing SaaS companies.
//           </motion.p>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-24" style={{ background: '#0a0f1e' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
//             <p className="text-sm font-medium mb-3" style={{ color: '#6366f1' }}>OUR STORY</p>
//             <h2 className="font-display font-extrabold text-4xl text-white mb-6">Built by Engineers, for Founders</h2>
//             <div className="space-y-4 text-gray-400 leading-relaxed">
//               <p>JusstCode was founded by two engineers who were tired of seeing great ideas fail because of poor technical execution. We set out to build the agency we wished existed when we were founders ourselves.</p>
//               <p>Today we're a 40+ person team of engineers, designers, and product thinkers united by one goal: building software products that genuinely move the needle for our clients.</p>
//               <p>We don't just write code — we become your technical co-founders, your architects, and your partners in building something lasting.</p>
//             </div>
//             <Link to="/contact" className="inline-flex items-center gap-2 mt-8 font-semibold text-white px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
//               Work With Us <ArrowRight size={16} />
//             </Link>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid grid-cols-2 gap-4">
//             {[{ label: 'Mission', icon: '🎯', text: 'Empower every founder to build world-class software, regardless of their technical background.' },
//               { label: 'Vision', icon: '🔭', text: 'A world where every great idea gets the technical execution it deserves.' }].map(({ label, icon, text }) => (
//               <div key={label} className="p-6 rounded-2xl col-span-2 md:col-span-1" style={{ background: '#030712', border: '1px solid rgba(99,102,241,0.2)' }}>
//                 <div className="text-3xl mb-3">{icon}</div>
//                 <h3 className="font-display font-bold text-white mb-2">{label}</h3>
//                 <p className="text-gray-400 text-sm">{text}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-24" style={{ background: '#030712' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-14">
//             <p className="text-sm font-medium mb-3" style={{ color: '#6366f1' }}>WHAT DRIVES US</p>
//             <h2 className="font-display font-extrabold text-4xl text-white">Our Core Values</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((v, i) => (
//               <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//                 className="p-6 rounded-2xl text-center" style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}>
//                 <div className="inline-flex w-12 h-12 rounded-xl items-center justify-center mb-4" style={{ background: `${v.color}20`, border: `1px solid ${v.color}40` }}>
//                   <v.icon size={22} style={{ color: v.color }} />
//                 </div>
//                 <h3 className="font-display font-semibold text-white mb-2">{v.title}</h3>
//                 <p className="text-gray-400 text-sm">{v.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-24" style={{ background: '#0a0f1e' }}>
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-14">
//             <p className="text-sm font-medium mb-3" style={{ color: '#6366f1' }}>OUR JOURNEY</p>
//             <h2 className="font-display font-extrabold text-4xl text-white">2 Years of Building</h2>
//           </div>
//           <div className="relative">
//             <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #6366f1, transparent)' }} />
//             <div className="space-y-8">
//               {timeline.map((item, i) => (
//                 <motion.div key={item.year} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
//                   className="flex items-start gap-6 pl-16 relative">
//                   <div className="absolute left-0 w-16 flex items-center">
//                     <div className="w-4 h-4 rounded-full flex-shrink-0 ml-6 z-10" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 0 12px rgba(99,102,241,0.5)' }} />
//                   </div>
//                   <div className="p-5 rounded-xl flex-1" style={{ background: '#030712', border: '1px solid rgba(99,102,241,0.15)' }}>
//                     <span className="text-xs font-bold text-primary-400 mb-1 block">{item.year}</span>
//                     <p className="text-gray-300 text-sm">{item.event}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-24" style={{ background: '#030712' }} ref={teamRef}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-14">
//             <p className="text-sm font-medium mb-3" style={{ color: '#6366f1' }}>THE TEAM</p>
//             <h2 className="font-display font-extrabold text-4xl text-white">Meet Our Experts</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {team.map((member, i) => (
//               <motion.div key={member.name} initial={{ opacity: 0, y: 40 }} animate={teamInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
//                 whileHover={{ y: -6 }} className="p-6 rounded-2xl group" style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}>
//                 <div className="relative mb-5">
//                   <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-2xl object-cover" />
//                   <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2" style={{ background: member.color, borderColor: '#0a0f1e' }} />
//                 </div>
//                 <h3 className="font-display font-semibold text-lg text-white mb-1">{member.name}</h3>
//                 <p className="text-xs font-medium mb-3" style={{ color: member.color }}>{member.role}</p>
//                 <p className="text-gray-400 text-sm">{member.bio}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


// ------------------------------------------------
// import { useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   useMotionValue,
//   useMotionTemplate,
//   useReducedMotion,
// } from 'framer-motion'
// import { ArrowRight, Target, Eye, Heart, Rocket, Compass, Telescope } from 'lucide-react'

// const GRADIENT = 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)'
// const BTN = 'linear-gradient(135deg,#6366f1,#8b5cf6)'
// const gradientText = {
//   background: GRADIENT,
//   WebkitBackgroundClip: 'text',
//   backgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
// }

// /* ================================================================== */
// /*  Shared building blocks (same system as Home.jsx)                    */
// /* ================================================================== */

// function TiltCard({ children, className = '', style, glow = 'rgba(99,102,241,0.16)', max = 8 }) {
//   const ref = useRef(null)
//   const reduced = useReducedMotion()
//   const px = useMotionValue(0.5)
//   const py = useMotionValue(0.5)
//   const sx = useSpring(px, { stiffness: 220, damping: 22 })
//   const sy = useSpring(py, { stiffness: 220, damping: 22 })
//   const rotateY = useTransform(sx, [0, 1], [-max, max])
//   const rotateX = useTransform(sy, [0, 1], [max, -max])
//   const gx = useTransform(sx, (v) => `${v * 100}%`)
//   const gy = useTransform(sy, (v) => `${v * 100}%`)
//   const spot = useMotionTemplate`radial-gradient(320px circle at ${gx} ${gy}, ${glow}, transparent 70%)`

//   const onMove = (e) => {
//     if (reduced || !ref.current) return
//     const r = ref.current.getBoundingClientRect()
//     px.set((e.clientX - r.left) / r.width)
//     py.set((e.clientY - r.top) / r.height)
//   }
//   const reset = () => {
//     px.set(0.5)
//     py.set(0.5)
//   }

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={onMove}
//       onMouseLeave={reset}
//       className={`group relative ${className}`}
//       style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: 'preserve-3d', ...style }}
//     >
//       <motion.div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         style={{ background: spot }}
//       />
//       {children}
//     </motion.div>
//   )
// }

// function Magnetic({ children, strength = 0.3, className = '' }) {
//   const ref = useRef(null)
//   const reduced = useReducedMotion()
//   const x = useMotionValue(0)
//   const y = useMotionValue(0)
//   const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
//   const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

//   const onMove = (e) => {
//     if (reduced || !ref.current) return
//     const r = ref.current.getBoundingClientRect()
//     x.set((e.clientX - (r.left + r.width / 2)) * strength)
//     y.set((e.clientY - (r.top + r.height / 2)) * strength)
//   }
//   const reset = () => {
//     x.set(0)
//     y.set(0)
//   }

//   return (
//     <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={reset} style={{ x: sx, y: sy }} className={`inline-block ${className}`}>
//       {children}
//     </motion.div>
//   )
// }

// function HeadingWord({ word, progress, range, gradient }) {
//   const y = useTransform(progress, range, ['110%', '0%'])
//   return (
//     <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em] mr-[0.25em]">
//       <motion.span className="inline-block" style={{ y, ...(gradient ? gradientText : {}) }}>
//         {word}
//       </motion.span>
//     </span>
//   )
// }

// function ScrollHeading({ text, accent = '', className = '' }) {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start 92%', 'start 55%'] })
//   const words = text.split(' ')
//   const accentSet = new Set(accent.split(' ').filter(Boolean))
//   return (
//     <h2 ref={ref} aria-label={text} className={className}>
//       {words.map((w, i) => {
//         const s = (i / words.length) * 0.6
//         return <HeadingWord key={i} word={w} progress={scrollYProgress} range={[s, s + 0.4]} gradient={accentSet.has(w)} />
//       })}
//     </h2>
//   )
// }

// function Eyebrow({ children }) {
//   return (
//     <motion.p
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-sm font-medium mb-3 tracking-wide"
//       style={{ color: '#6366f1' }}
//     >
//       {children}
//     </motion.p>
//   )
// }

// /* ================================================================== */
// /*  DATA                                                                */
// /* ================================================================== */
// const team = [
//   {
//     name: 'Sourabh Singh Mandloi',
//     role: 'CEO Founder',
//     bio: 'Backend systems architect. Scaled cloud infrastructure handling lakhs of users with high availability.',
//     avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
//     color: '#8b5cf6',
//   },
//   {
//     name: 'Tejasvi Solanki',
//     role: 'CTO & Co-founder',
//     bio: '3+ years building SaaS products for Indian startups. Led multiple successful product launches across fintech and edtech.',
//     avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
//     color: '#6366f1',
//   },
// ]

// const values = [
//   { icon: Target, title: 'Client-First', desc: 'Your success is our success. We measure outcomes, not hours.', color: '#6366f1' },
//   { icon: Eye, title: 'Radical Transparency', desc: 'Daily updates, open communication, no hidden surprises.', color: '#06b6d4' },
//   { icon: Heart, title: 'Craftsmanship', desc: 'We take pride in every line of code and pixel of design.', color: '#8b5cf6' },
//   { icon: Rocket, title: 'Move Fast', desc: 'Agile sprints, rapid iteration, and ship-ready builds.', color: '#f59e0b' },
// ]

// const timeline = [
//   { year: '2024', event: 'Founded in San Francisco with 2 engineers and a bold vision.' },
//   { year: '2024', event: 'Launched first enterprise SaaS platform serving 10,000+ users.' },
//   { year: '2025', event: 'Expanded to AI/ML services. Grew team to 25 specialists.' },
//   { year: '2025', event: 'Reached $10M ARR milestone. Opened offices in London and Singapore.' },
//   { year: '2026', event: '5+ products launched globally. Named Top SaaS Agency by Forbes.' },
// ]

// /* ================================================================== */
// /*  HERO                                                                */
// /* ================================================================== */
// function AboutHero() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
//   const y = useTransform(scrollYProgress, [0, 1], [0, 120])
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
//   const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.05])

//   const mx = useMotionValue(700)
//   const my = useMotionValue(200)
//   const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(99,102,241,0.16), transparent 65%)`
//   const onMove = (e) => {
//     if (!ref.current) return
//     const r = ref.current.getBoundingClientRect()
//     mx.set(e.clientX - r.left)
//     my.set(e.clientY - r.top)
//   }

//   const words = ["We're", 'a', 'Team', 'of', { t: 'Builders', g: true }]

//   return (
//     <section
//       ref={ref}
//       onMouseMove={onMove}
//       className="relative pt-36 pb-24 overflow-hidden"
//       style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)' }}
//     >
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           opacity: gridOpacity,
//           backgroundImage:
//             'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)',
//           backgroundSize: '60px 60px',
//           WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
//           maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
//         }}
//       />
//       <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

//       <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
//           style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc' }}
//         >
//           ABOUT JUSST CODE
//         </motion.div>

//         <motion.h1
//           aria-label="We're a Team of Builders"
//           className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6"
//           initial="hidden"
//           animate="visible"
//           variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
//         >
//           <span aria-hidden className="flex flex-wrap justify-center gap-x-[0.28em]">
//             {words.map((w, i) => {
//               const obj = typeof w === 'string' ? { t: w } : w
//               return (
//                 <span key={i} className="overflow-hidden pb-[0.12em] -mb-[0.12em]">
//                   <motion.span
//                     className="inline-block"
//                     style={obj.g ? gradientText : undefined}
//                     variants={{
//                       hidden: { y: '110%' },
//                       visible: { y: '0%', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
//                     }}
//                   >
//                     {obj.t}
//                   </motion.span>
//                 </span>
//               )
//             })}
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           className="text-gray-400 text-xl max-w-2xl mx-auto"
//         >
//           Since 2023, we've been the engineering partner behind some of the world's fastest-growing SaaS companies.
//         </motion.p>
//       </motion.div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  STORY + MISSION/VISION                                              */
// /* ================================================================== */
// function FlipPanel({ icon: Icon, label, text, delay }) {
//   const ref = useRef(null)
//   const reduced = useReducedMotion()
//   const [flipped, setFlipped] = useState(false)

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.6 }}
//       className="col-span-2 md:col-span-1 [perspective:1200px]"
//     >
//       <div
//         ref={ref}
//         onMouseEnter={() => !reduced && setFlipped(true)}
//         onMouseLeave={() => setFlipped(false)}
//         className="relative h-44 cursor-default [transform-style:preserve-3d]"
//         style={{
//           transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
//           transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
//         }}
//       >
//         <div
//           className="absolute inset-0 rounded-2xl p-6 [backface-visibility:hidden]"
//           style={{ background: '#030712', border: '1px solid rgba(99,102,241,0.2)' }}
//         >
//           <div className="flex h-11 w-11 items-center justify-center rounded-xl mb-3" style={{ background: 'rgba(99,102,241,0.15)' }}>
//             <Icon size={20} className="text-indigo-300" />
//           </div>
//           <h3 className="font-display font-bold text-white mb-1">{label}</h3>
//           <p className="text-gray-500 text-xs">Hover to read more</p>
//         </div>
//         <div
//           className="absolute inset-0 rounded-2xl p-6 flex items-center [backface-visibility:hidden]"
//           style={{ background: 'linear-gradient(160deg,#1a1040,#0a0f1e)', border: '1px solid rgba(99,102,241,0.4)', transform: 'rotateY(180deg)' }}
//         >
//           <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// function StorySection() {
//   return (
//     <section className="py-24" style={{ background: '#0a0f1e' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
//           <Eyebrow>OUR STORY</Eyebrow>
//           <h2 className="font-display font-extrabold text-4xl text-white mb-6">Built by Engineers, for Founders</h2>
//           <div className="space-y-4 text-gray-400 leading-relaxed">
//             <p>
//               Jusst Code was founded by two engineers who were tired of seeing great ideas fail because of poor
//               technical execution. We set out to build the agency we wished existed when we were founders ourselves.
//             </p>
//             <p>
//               Today we're a growing team of engineers, designers, and product thinkers united by one goal: building
//               software products that genuinely move the needle for our clients.
//             </p>
//             <p>We don't just write code — we become your technical co-founders, your architects, and your partners in building something lasting.</p>
//           </div>
//           <Magnetic>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 mt-8 font-semibold text-white px-8 py-4 rounded-xl"
//               style={{ background: BTN }}
//             >
//               Work With Us <ArrowRight size={16} />
//             </Link>
//           </Magnetic>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="grid grid-cols-2 gap-4"
//         >
//           <FlipPanel
//             icon={Compass}
//             label="Mission"
//             text="Empower every founder to build world-class software, regardless of their technical background."
//             delay={0}
//           />
//           <FlipPanel
//             icon={Telescope}
//             label="Vision"
//             text="A world where every great idea gets the technical execution it deserves."
//             delay={0.1}
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  VALUES                                                              */
// /* ================================================================== */
// function ValueCard({ v, i }) {
//   const Icon = v.icon
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: i * 0.1 }}
//     >
//       <TiltCard
//         className="h-full rounded-2xl p-6 text-center"
//         style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}
//         glow={`${v.color}2a`}
//       >
//         <div
//           className="inline-flex w-12 h-12 rounded-xl items-center justify-center mb-4"
//           style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, transform: 'translateZ(30px)' }}
//         >
//           <Icon size={22} style={{ color: v.color }} />
//         </div>
//         <h3 className="font-display font-semibold text-white mb-2" style={{ transform: 'translateZ(16px)' }}>
//           {v.title}
//         </h3>
//         <p className="text-gray-400 text-sm">{v.desc}</p>
//       </TiltCard>
//     </motion.div>
//   )
// }

// function ValuesSection() {
//   return (
//     <section className="py-24" style={{ background: '#030712' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <Eyebrow>WHAT DRIVES US</Eyebrow>
//           <ScrollHeading text="Our Core Values" className="font-display font-extrabold text-4xl text-white" />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {values.map((v, i) => (
//             <ValueCard key={v.title} v={v} i={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  TIMELINE: line fills in as you scroll, dots light up in sequence    */
// /* ================================================================== */
// function TimelineItem({ item, i }) {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start 92%', 'start 55%'] })
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1])
//   const x = useTransform(scrollYProgress, [0, 1], [-40, 0])
//   const dotBg = useTransform(scrollYProgress, [0.5, 1], ['#1e293b', '#8b5cf6'])
//   const dotScale = useTransform(scrollYProgress, [0.5, 1], [0.6, 1.15])

//   return (
//     <div ref={ref} className="flex items-start gap-6 pl-16 relative">
//       <div className="absolute left-0 w-16 flex items-center">
//         <motion.div
//           className="w-4 h-4 rounded-full shrink-0 ml-6 z-10"
//           style={{ background: dotBg, scale: dotScale, boxShadow: '0 0 12px rgba(139,92,246,0.6)' }}
//         />
//       </div>
//       <motion.div
//         style={{ opacity, x, background: '#030712', border: '1px solid rgba(99,102,241,0.15)' }}
//         className="p-5 rounded-xl flex-1"
//       >
//         <span className="text-xs font-bold text-indigo-400 mb-1 block">{item.year}</span>
//         <p className="text-gray-300 text-sm">{item.event}</p>
//       </motion.div>
//     </div>
//   )
// }

// function TimelineSection() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
//   const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

//   return (
//     <section className="py-24" style={{ background: '#0a0f1e' }}>
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <Eyebrow>OUR JOURNEY</Eyebrow>
//           <ScrollHeading text="2 Years of Building" className="font-display font-extrabold text-4xl text-white" />
//         </div>
//         <div ref={ref} className="relative">
//           <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
//           <motion.div
//             className="absolute left-8 top-0 bottom-0 w-px origin-top"
//             style={{ scaleY: line, background: 'linear-gradient(to bottom,#6366f1,#8b5cf6,#06b6d4)', boxShadow: '0 0 12px rgba(99,102,241,0.7)' }}
//           />
//           <div className="space-y-8">
//             {timeline.map((item, i) => (
//               <TimelineItem key={item.year + i} item={item} i={i} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  TEAM                                                                */
// /* ================================================================== */
// function TeamCard({ member, i }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: '-80px' }}
//       transition={{ delay: i * 0.1 }}
//     >
//       <TiltCard
//         className="rounded-2xl p-6"
//         style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}
//         glow={`${member.color}26`}
//       >
//         <div className="relative mb-5" style={{ transform: 'translateZ(30px)' }}>
//           <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-2xl object-cover" />
//           <div
//             className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2"
//             style={{ background: member.color, borderColor: '#0a0f1e' }}
//           />
//         </div>
//         <h3 className="font-display font-semibold text-lg text-white mb-1">{member.name}</h3>
//         <p className="text-xs font-medium mb-3" style={{ color: member.color }}>
//           {member.role}
//         </p>
//         <p className="text-gray-400 text-sm">{member.bio}</p>
//       </TiltCard>
//     </motion.div>
//   )
// }

// function TeamSection() {
//   return (
//     <section className="py-24" style={{ background: '#030712' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <Eyebrow>THE TEAM</Eyebrow>
//           <ScrollHeading text="Meet Our Experts" className="font-display font-extrabold text-4xl text-white" />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
//           {team.map((member, i) => (
//             <TeamCard key={member.name} member={member} i={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  PAGE                                                                */
// /* ================================================================== */
// export default function About() {
//   return (
//     <div style={{ background: '#030712' }}>
//       <AboutHero />
//       <StorySection />
//       <ValuesSection />
//       <TimelineSection />
//       <TeamSection />
//     </div>
//   )
// }

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Rocket,
  Compass,
  Telescope,
  Sparkles,
  Layers,
  Code2,
  Users,
  Zap,
  Orbit,
  Check,
} from 'lucide-react'

const GRADIENT = 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)'
const BTN = 'linear-gradient(135deg,#6366f1,#8b5cf6)'

const gradientText = {
  background: GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

function Magnetic({ children, strength = 0.28, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  const move = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

function TiltCard({ children, className = '', glow = 'rgba(99,102,241,.18)', max = 8 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 220, damping: 22 })
  const sy = useSpring(py, { stiffness: 220, damping: 22 })
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const gx = useTransform(sx, v => `${v * 100}%`)
  const gy = useTransform(sy, v => `${v * 100}%`)
  const spot = useMotionTemplate`radial-gradient(300px circle at ${gx} ${gy}, ${glow}, transparent 70%)`

  const move = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => { px.set(.5); py.set(.5) }}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: 'preserve-3d' }}
      className={`group relative ${className}`}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: spot }}
      />
      {children}
    </motion.div>
  )
}

function Eyebrow({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-3 text-xs md:text-sm font-semibold tracking-[.22em] text-indigo-400"
    >
      {children}
    </motion.p>
  )
}

function ScrollHeading({ text, accent = '', className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 55%'],
  })
  const words = text.split(' ')
  const accents = new Set(accent.split(' ').filter(Boolean))

  return (
    <h2 ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => {
        const start = (i / Math.max(words.length, 1)) * .55
        const y = useTransform(scrollYProgress, [start, start + .38], ['110%', '0%'])
        return (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[.25em] align-bottom pb-[.12em] -mb-[.12em]">
            <motion.span className="inline-block" style={{ y, ...(accents.has(word) ? gradientText : {}) }}>
              {word}
            </motion.span>
          </span>
        )
      })}
    </h2>
  )
}

const team = [
  {
    name: 'Sourabh Singh Mandloi',
    role: 'CEO Founder',
    bio: 'Backend systems architect. Scaled cloud infrastructure handling lakhs of users with high availability.',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    color: '#8b5cf6',
  },
  {
    name: 'Tejasvi Solanki',
    role: 'CTO & Co-founder',
    bio: '3+ years building SaaS products for Indian startups. Led multiple successful product launches across fintech and edtech.',
    avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
    color: '#6366f1',
  },
]

const values = [
  { icon: Target, title: 'Client-First', desc: 'Your success is our success. We measure outcomes, not hours.', color: '#6366f1' },
  { icon: Eye, title: 'Radical Transparency', desc: 'Daily updates, open communication, no hidden surprises.', color: '#06b6d4' },
  { icon: Heart, title: 'Craftsmanship', desc: 'We take pride in every line of code and pixel of design.', color: '#8b5cf6' },
  { icon: Rocket, title: 'Move Fast', desc: 'Agile sprints, rapid iteration, and ship-ready builds.', color: '#f59e0b' },
]

const timeline = [
  { year: '2024', event: 'Founded in San Francisco with 2 engineers and a bold vision.' },
  { year: '2024', event: 'Launched first enterprise SaaS platform serving 10,000+ users.' },
  { year: '2025', event: 'Expanded to AI/ML services. Grew team to 25 specialists.' },
  { year: '2025', event: 'Reached $10M ARR milestone. Opened offices in London and Singapore.' },
  { year: '2026', event: '5+ products launched globally. Named Top SaaS Agency by Forbes.' },
]

function OrbitalScene() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 18 })
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 18 })
  const scrollY = useTransform(scrollYProgress, [0, .5, 1], [70, 0, -70])
  const scrollRotate = useTransform(scrollYProgress, [0, .5, 1], [-18, 0, 18])
  const scrollScale = useTransform(scrollYProgress, [0, .5, 1], [.82, 1, .88])
  const tiltX = useTransform(smoothY, [-1, 1], [10, -10])
  const tiltY = useTransform(smoothX, [-1, 1], [-14, 14])
  const ringX = useTransform(smoothX, [-1, 1], [-10, 10])
  const ringY = useTransform(smoothY, [-1, 1], [-8, 8])

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mouseX.set(((e.clientX - r.left) / r.width - .5) * 2)
    mouseY.set(((e.clientY - r.top) / r.height - .5) * 2)
  }
  const reset = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative mx-auto h-[330px] w-[330px] md:h-[430px] md:w-[430px]"
      style={{ y: scrollY, scale: scrollScale, perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ rotateX: tiltX, rotateY: tiltY, rotate: scrollRotate, transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="absolute inset-8 rounded-full border border-indigo-400/20"
          style={{ x: ringX, y: ringY, rotateX: 62, transformStyle: 'preserve-3d' }}
          animate={reduced ? undefined : { rotateZ: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-16 rounded-full border border-cyan-400/20"
          style={{ x: useTransform(ringX, v => -v * .7), y: useTransform(ringY, v => -v * .7), rotateX: 62 }}
          animate={reduced ? undefined : { rotateZ: -360 }}
          transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[24%] rounded-full border border-white/10"
          style={{ rotateX: 70, rotateY: 18, x: ringX, y: ringY }}
          animate={reduced ? undefined : { rotateZ: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        />

        <motion.div
          className="absolute inset-[28%] rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 30%,#c4b5fd 0%,#8b5cf6 20%,#6366f1 45%,rgba(99,102,241,.18) 68%,transparent 73%)',
            boxShadow: '0 0 90px rgba(99,102,241,.45), inset -18px -18px 35px rgba(0,0,0,.35)',
            x: useTransform(smoothX, [-1, 1], [-7, 7]),
            y: useTransform(smoothY, [-1, 1], [-7, 7]),
          }}
          animate={reduced ? undefined : { scale: [1, 1.07, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {[
          { x: '7%', y: '20%', c: '#06b6d4', d: 0, depth: 1.2 },
          { x: '76%', y: '17%', c: '#8b5cf6', d: .7, depth: -.8 },
          { x: '82%', y: '70%', c: '#f59e0b', d: 1.3, depth: 1 },
          { x: '13%', y: '74%', c: '#6366f1', d: 1.8, depth: -.7 },
        ].map((p, i) => (
            <motion.span
              key={i}
              className="absolute h-3 w-3 rounded-full"
              style={{ left: p.x, top: p.y, background: p.c, boxShadow: `0 0 25px ${p.c}`, x: ringX, y: ringY }}
              animate={reduced ? undefined : { y: [0, -14, 0], opacity: [.55, 1, .55], scale: [1, 1.25, 1] }}
              transition={{ duration: 2.8, delay: p.d, repeat: Infinity, ease: 'easeInOut' }}
            />
          )
        )}

        <motion.div
          className="absolute inset-[20%] rounded-full border border-dashed border-indigo-300/10"
          animate={reduced ? undefined : { rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <motion.p className="text-[10px] tracking-[.35em] text-indigo-300" style={{ x: useTransform(smoothX, [-1, 1], [-3, 3]) }}>JUSST</motion.p>
          <motion.p className="font-display text-3xl font-black text-white" style={{ x: useTransform(smoothX, [-1, 1], [-5, 5]) }}>CODE</motion.p>
          <p className="mt-1 text-[9px] tracking-[.28em] text-gray-500">BUILD • SHIP • SCALE</p>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute inset-[10%] rounded-full border border-white/[.04] pointer-events-none"
        style={{ rotate: useTransform(smoothX, [-1, 1], [-6, 6]), y: useTransform(smoothY, [-1, 1], [-5, 5]) }}
      />
    </motion.div>
  )
}
function AboutHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, .78], [1, 0])
  const mx = useMotionValue(700)
  const my = useMotionValue(220)
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, rgba(99,102,241,.18), transparent 68%)`

  return (
    <section
      ref={ref}
      onMouseMove={e => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        mx.set(e.clientX - r.left)
        my.set(e.clientY - r.top)
      }}
      className="snap-start relative min-h-[92vh] overflow-hidden pt-32 pb-20"
      style={{ background: 'radial-gradient(ellipse at 50% 0%,#1a1040 0%,#070b17 45%,#030712 80%)' }}
    >
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(99,102,241,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.07) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center,black 20%,transparent 72%)',
      }} />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15, scale: .9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7 border border-indigo-400/20 bg-indigo-400/10 text-indigo-300 text-xs font-semibold tracking-[.2em]"
          >
            <Sparkles size={14} /> ABOUT JUSST CODE
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: .08 } } }}
            className="font-display text-5xl md:text-7xl xl:text-8xl font-black leading-[.92] text-white"
          >
            {['We', 'Build', 'What', 'Should', 'Exist.'].map((w, i) => (
              <span key={w} className="block overflow-hidden pb-[.1em]">
                <motion.span
                  variants={{ hidden: { y: '110%' }, visible: { y: 0, transition: { duration: .75, ease: [.22,1,.36,1] } } }}
                  style={i === 4 ? gradientText : undefined}
                  className="inline-block"
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .65 }}
            className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-gray-400"
          >
            We're an engineering-led product team turning ambitious ideas into software that is designed to launch, scale, and last.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }} className="mt-9 flex flex-wrap gap-3">
            <Magnetic>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white" style={{ background: BTN, boxShadow: '0 0 45px rgba(99,102,241,.3)' }}>
                Build With Us <ArrowRight size={16} />
              </Link>
            </Magnetic>
            <a href="#story" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.03] px-6 py-3.5 text-sm font-medium text-gray-300">
              Explore Our Story
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .75, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: .2 }}
        >
          <OrbitalScene />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[.3em] text-gray-600">SCROLL TO EXPLORE</div>
    </section>
  )
}

function StorySection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, .5, 1], [-80, 0, 80])
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4])

  return (
    <section id="story" ref={ref} className="snap-start relative overflow-hidden py-28" style={{ background: '#0a0f1e' }}>
      <motion.div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" style={{ x }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-16 items-center">
          <motion.div style={{ rotate }}>
            <Eyebrow>01 / THE STORY</Eyebrow>
            <ScrollHeading text="Built by Engineers, for Founders" accent="Founders" className="font-display text-4xl md:text-6xl font-black leading-tight text-white" />
            <div className="mt-7 space-y-4 text-gray-400 leading-relaxed">
              <p>Jusst Code was founded by two engineers who were tired of seeing great ideas fail because of poor technical execution.</p>
              <p>Today we're a growing team of engineers, designers, and product thinkers united by one goal: building software products that genuinely move the needle.</p>
              <p>We don't just write code — we become technical co-founders, architects, and partners in building something lasting.</p>
            </div>
            <Magnetic>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300">
                Work With Us <ArrowRight size={15} />
              </Link>
            </Magnetic>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Compass, title: 'Mission', text: 'Empower every founder to build world-class software, regardless of their technical background.', c: '#6366f1' },
              { icon: Telescope, title: 'Vision', text: 'A world where every great idea gets the technical execution it deserves.', c: '#06b6d4' },
              { icon: Code2, title: 'Craft', text: 'Architecture, interfaces, APIs, automation and infrastructure engineered as one system.', c: '#8b5cf6' },
              { icon: Users, title: 'Partner', text: 'Small enough to care deeply. Technical enough to solve difficult problems.', c: '#f59e0b' },
            ].map((item, i) => (
              <TiltCard key={item.title} className="rounded-3xl" glow={`${item.c}25`} max={10}>
                <div className="h-full min-h-48 rounded-3xl border border-white/[.07] bg-[#030712] p-6">
                  <motion.div
                    className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${item.c}18`, border: `1px solid ${item.c}35`, transform: 'translateZ(30px)' }}
                    whileHover={{ rotate: 10, scale: 1.08 }}
                  >
                    <item.icon size={20} style={{ color: item.c }} />
                  </motion.div>
                  <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.text}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8])

  return (
    <section ref={ref} className="snap-start relative overflow-hidden py-28" style={{ background: '#030712' }}>
      <motion.div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/10" style={{ rotate }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <Eyebrow>02 / HOW WE THINK</Eyebrow>
          <ScrollHeading text="Principles That Shape Every Build" accent="Shape" className="font-display text-4xl md:text-6xl font-black text-white" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * .09, duration: .6 }}
              >
                <TiltCard className="h-full rounded-3xl" glow={`${v.color}28`} max={9}>
                  <div className="relative h-full min-h-72 overflow-hidden rounded-3xl border border-white/[.07] bg-[#0a0f1e] p-7">
                    <span className="absolute right-5 top-5 text-6xl font-black text-white/[.025]">0{i + 1}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${v.color}18`, border: `1px solid ${v.color}35`, transform: 'translateZ(35px)' }}>
                      <Icon size={22} style={{ color: v.color }} />
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold text-white">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">{v.desc}</p>
                    <motion.div className="absolute bottom-0 left-0 h-1 origin-left" style={{ width: '100%', background: v.color }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: .25 + i * .1, duration: .7 }} />
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] })
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  return (
    <section ref={ref} className="snap-start relative overflow-hidden py-28" style={{ background: '#0a0f1e' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <Eyebrow>03 / THE JOURNEY</Eyebrow>
          <ScrollHeading text="Every Chapter Changed the Next" accent="Next" className="font-display text-4xl md:text-6xl font-black text-white" />
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
          <motion.div className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400" style={{ height: '100%', scaleY: line, boxShadow: '0 0 18px rgba(99,102,241,.7)' }} />

          <div className="space-y-5">
            {timeline.map((item, i) => (
              <TimelineCard key={`${item.year}-${i}`} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ item, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'start 55%'] })
  const x = useTransform(scrollYProgress, [0, 1], [i % 2 ? 60 : -60, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [.15, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [.94, 1])
  const dotScale = useTransform(scrollYProgress, [.4, 1], [.5, 1.25])

  return (
    <div ref={ref} className="relative pl-14 md:pl-20">
      <motion.div className="absolute left-0 top-8 flex h-10 w-10 items-center justify-center" style={{ scale: dotScale }}>
        <span className="h-3 w-3 rounded-full bg-indigo-400 shadow-[0_0_25px_rgba(129,140,248,.9)]" />
      </motion.div>

      <motion.div
        style={{ x, opacity, scale }}
        className="relative overflow-hidden rounded-3xl border border-white/[.07] bg-[#030712] p-6 md:p-8"
      >
        <div className="absolute right-5 top-3 text-7xl font-black text-white/[.025]">{item.year}</div>
        <div className="relative flex flex-col md:flex-row md:items-center gap-4">
          <span className="w-fit rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-bold text-indigo-300">{item.year}</span>
          <p className="max-w-3xl text-sm md:text-base leading-relaxed text-gray-300">{item.event}</p>
        </div>
      </motion.div>
    </div>
  )
}

function TeamCard({ member, i }) {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: i * .12, duration: .7 }}
    >
      <TiltCard className="rounded-2xl" glow={`${member.color}28`} max={6}>
        <div className="relative overflow-hidden rounded-2xl border border-white/[.07] bg-[#0a0f1e]">
          <div className="relative h-44 sm:h-48 overflow-hidden">
            <motion.img
              src={member.avatar}
              alt={member.name}
              className="h-full w-full object-cover grayscale"
              animate={{ scale: active ? 1.08 : 1, filter: active ? 'grayscale(0)' : 'grayscale(1)' }}
              transition={{ duration: .6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
            <motion.div className="absolute inset-0" style={{ background: `radial-gradient(circle at 70% 30%, ${member.color}25, transparent 45%)` }} />
            <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] tracking-[.18em] text-gray-300 backdrop-blur">LEADERSHIP</span>
          </div>

          <div className="p-4 sm:p-5" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <p className="text-xs font-semibold tracking-[.16em]" style={{ color: member.color }}>{member.role}</p>
            <h3 className="mt-2 font-display text-xl font-bold text-white">{member.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{member.bio}</p>
            <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
              <span className="h-2 w-2 rounded-full" style={{ background: member.color, boxShadow: `0 0 10px ${member.color}` }} />
              Building the next layer
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

function TeamSection() {
  return (
    <section className="snap-start relative overflow-hidden py-28" style={{ background: '#030712' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <Eyebrow>04 / THE PEOPLE</Eyebrow>
          <ScrollHeading text="Small Team. Big Systems." accent="Big" className="font-display text-4xl md:text-6xl font-black text-white" />
          <p className="mx-auto mt-5 max-w-2xl text-gray-500">A focused team of builders working across product, engineering, design, and infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {team.map((member, i) => <TeamCard key={member.name} member={member} i={i} />)}
        </div>
      </div>
    </section>
  )
}

function ClosingSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 25])
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section ref={ref} className="relative overflow-hidden py-36" style={{ background: 'radial-gradient(circle at 50% 20%,#17113b 0%,#080b17 45%,#030712 100%)' }}>
      <motion.div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/10" style={{ rotate, y }} />
      <motion.div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <Eyebrow>05 / WHAT'S NEXT</Eyebrow>
        <ScrollHeading text="Your idea is the next chapter" accent="chapter" className="font-display text-5xl md:text-7xl font-black leading-[.95] text-white" />
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-gray-500">Bring us the problem. We'll help turn it into something people can use.</p>
        <Magnetic>
          <Link to="/contact" className="mt-9 inline-flex items-center gap-2 rounded-xl px-9 py-4 font-semibold text-white" style={{ background: BTN, boxShadow: '0 0 60px rgba(99,102,241,.38)' }}>
            Start a Project <ArrowRight size={17} />
          </Link>
        </Magnetic>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; } @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }`}</style>
      <div className="relative overflow-hidden bg-[#030712] text-white">
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <ClosingSection />
      </div>
    </>
  )
}
