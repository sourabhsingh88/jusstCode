// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import { X, ExternalLink, ArrowRight } from 'lucide-react'

// const projects = [
//   { id: 1, title: 'The Alpha School', category: 'SaaS', image: 'https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/469981655_122111077196627507_7187180421328268391_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_ohc=QrELANDxi1sQ7kNvwH8ePYB&_nc_oc=Adrb2i4J_-nxfu_BcT494LXQO2V5BNzqQ85tAuXH1gpjMo6bsrtJe7Eb2ttPDkVTKUaR0-sQ7WLO2YKZO_ZsDWlC&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=asc6bEp-OFv_e4QqMJY8xw&_nc_ss=7a389&oh=00_Af0H91q2FzrlmyMMwKTrPiKc_250sYD8f_IC_5qq_W3U_g&oe=69E3EAC0', desc: 'A comprehensive financial management platform built for SMBs. Features include invoicing, expense tracking, payroll, and real-time reporting. Serves 500+ businesses globally.', tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'], url: 'https://thealphaSchool-demo.com', client: 'FinTech Solutions Inc.', color: '#6366f1' },
//   {
//     id: 2, title: 'Zinger - The Grocery App',category: 'Web App',image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',desc: 'A smart grocery delivery platform enabling seamless ordering, real-time tracking, and efficient management for customers, stores, and delivery partners.',
//     tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],url: 'https://zinger-demo.com',client: 'Zinger',color: '#22c55e'},
//    { id: 3, title: 'EduSpark Learning Platform', category: 'SaaS', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', desc: 'A next-generation LMS with AI-powered adaptive learning paths, live virtual classrooms, gamification, and progress analytics.', tech: ['React', 'Node.js', 'OpenAI', 'WebRTC', 'MongoDB', 'AWS'], url: 'https://eduspark-demo.com', client: 'EduTech Ventures', color: '#8b5cf6' },
//   { id: 4, title: 'ShopSphere E-commerce', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', desc: 'A high-performance headless commerce platform with omnichannel capabilities, AI-powered recommendations, and real-time inventory management.', tech: ['Next.js', 'GraphQL', 'Prisma', 'Stripe', 'Elasticsearch'], url: 'https://shopsphere-demo.com', client: 'RetailPro Ltd', color: '#f59e0b' },
//   { id: 5, title: 'DataSense AI Analytics', category: 'AI/ML', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80', desc: 'An AI-powered business intelligence platform that transforms raw data into actionable insights with predictive analytics and custom dashboards.', tech: ['Python', 'React', 'TensorFlow', 'ClickHouse', 'FastAPI', 'Grafana'], url: 'https://datasense-demo.com', client: 'Analytics Corp', color: '#10b981' },
//   { id: 6, title: 'TaskFlow Project Manager', category: 'SaaS', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', desc: 'A modern project management tool with real-time collaboration, AI task prioritization, time tracking, and comprehensive reporting for agile teams.', tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'], url: 'https://taskflow-demo.com', client: 'ProductivityHQ', color: '#ef4444' },
// ]

// const categories = ['All', 'SaaS', 'Web App', 'E-commerce', 'AI/ML']

// export default function Portfolio() {
//   const [activeCategory, setActiveCategory] = useState('All')
//   const [selectedProject, setSelectedProject] = useState(null)

//   const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

//   return (
//     <div style={{ background: '#030712' }}>
//       {/* Hero */}
//       <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)' }}>
//         <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
//         <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
//           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium mb-4" style={{ color: '#6366f1' }}>OUR WORK</motion.p>
//           <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6">
//             Products We've{' '}
//             <span style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Built</span>
//           </motion.h1>
//           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-400 text-lg">
//             50+ products shipped. Each one crafted with obsessive attention to detail, scalability, and user experience.
//           </motion.p>
//         </div>
//       </section>

//       {/* Filter */}
//       <section className="py-10" style={{ background: '#0a0f1e', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
//         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
//           {categories.map((cat) => (
//             <button key={cat} onClick={() => setActiveCategory(cat)}
//               className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
//               style={activeCategory === cat
//                 ? { background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white' }
//                 : { background: 'rgba(255,255,255,0.04)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }}>
//               {cat}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatePresence mode="wait">
//             <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filtered.map((project, i) => (
//                 <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
//                   whileHover={{ y: -8 }}
//                   onClick={() => setSelectedProject(project)}
//                   className="group cursor-pointer rounded-2xl overflow-hidden"
//                   style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}>
//                   <div className="relative overflow-hidden h-52">
//                     <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: 'rgba(99,102,241,0.85)' }}>
//                       <span className="text-white font-semibold text-sm flex items-center gap-2">View Details <ArrowRight size={16} /></span>
//                     </div>
//                     <div className="absolute top-3 left-3">
//                       <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: `${project.color}25`, color: project.color, border: `1px solid ${project.color}40` }}>
//                         {project.category}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-primary-400 transition-colors">{project.title}</h3>
//                     <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
//                     <div className="flex flex-wrap gap-1.5">
//                       {project.tech.slice(0, 4).map((t) => (
//                         <span key={t} className="text-xs px-2 py-0.5 rounded text-gray-400" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>{t}</span>
//                       ))}
//                       {project.tech.length > 4 && <span className="text-xs px-2 py-0.5 rounded text-gray-500">+{project.tech.length - 4}</span>}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Project Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             style={{ background: 'rgba(3,7,18,0.9)', backdropFilter: 'blur(10px)' }}
//             onClick={() => setSelectedProject(null)}>
//             <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="max-w-2xl w-full rounded-3xl overflow-hidden"
//               style={{ background: '#0a0f1e', border: '1px solid rgba(99,102,241,0.25)', maxHeight: '90vh', overflowY: 'auto' }}>
//               <div className="relative h-56">
//                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
//                 <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0f1e, transparent)' }} />
//                 <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center text-white transition-colors" style={{ background: 'rgba(0,0,0,0.6)' }}>
//                   <X size={18} />
//                 </button>
//               </div>
//               <div className="p-8">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <span className="text-xs font-medium px-2.5 py-1 rounded-full mb-2 inline-block" style={{ background: `${selectedProject.color}20`, color: selectedProject.color }}>{selectedProject.category}</span>
//                     <h2 className="font-display font-bold text-2xl text-white">{selectedProject.title}</h2>
//                     <p className="text-sm text-gray-500 mt-1">Client: {selectedProject.client}</p>
//                   </div>
//                   <a href={selectedProject.url} target="_blank" rel="noopener noreferrer"
//                     className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl transition-all"
//                     style={{ background: `${selectedProject.color}20`, color: selectedProject.color, border: `1px solid ${selectedProject.color}30` }}>
//                     <ExternalLink size={14} /> Live Demo
//                   </a>
//                 </div>
//                 <p className="text-gray-400 leading-relaxed mb-6">{selectedProject.desc}</p>
//                 <div>
//                   <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Technologies Used</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProject.tech.map((t) => (
//                       <span key={t} className="text-sm px-3 py-1 rounded-lg text-gray-300" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="mt-8">
//                   <Link to="/contact" onClick={() => setSelectedProject(null)}
//                     className="inline-flex items-center gap-2 font-semibold text-white px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
//                     style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
//                     Build Something Like This <ArrowRight size={16} />
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* CTA */}
//       <section className="py-20" style={{ background: '#0a0f1e', borderTop: '1px solid rgba(99,102,241,0.1)' }}>
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <h2 className="font-display font-extrabold text-4xl text-white mb-5">Have a Project in Mind?</h2>
//           <p className="text-gray-400 mb-8">Let's build something great together. Tell us about your idea and we'll respond within 24 hours.</p>
//           <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-white px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 0 40px rgba(99,102,241,0.35)' }}>
//             Start a Project <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }

// import { useRef, useState } from 'react'
// import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, useReducedMotion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import { X, ExternalLink, ArrowRight } from 'lucide-react'

// const GRADIENT = 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)'
// const BTN = 'linear-gradient(135deg,#6366f1,#8b5cf6)'
// const gradientText = {
//   background: GRADIENT,
//   WebkitBackgroundClip: 'text',
//   backgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
// }

// /* ================================================================== */
// /*  Shared building blocks (same system as the rest of the site)        */
// /* ================================================================== */
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

// function TiltCard({ children, className = '', style, glow = 'rgba(99,102,241,0.16)', max = 6, onClick }) {
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
//   const spot = useMotionTemplate`radial-gradient(300px circle at ${gx} ${gy}, ${glow}, transparent 70%)`

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
//       onClick={onClick}
//       className={`group relative ${className}`}
//       style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: 'preserve-3d', ...style }}
//     >
//       <motion.div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
//         style={{ background: spot }}
//       />
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

// function ScrollHeading({ text, accent = '', className = '', as: Tag = 'h2' }) {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start 92%', 'start 55%'] })
//   const words = text.split(' ')
//   const accentSet = new Set(accent.split(' ').filter(Boolean))
//   return (
//     <Tag ref={ref} aria-label={text} className={className}>
//       {words.map((w, i) => {
//         const s = (i / words.length) * 0.6
//         return <HeadingWord key={i} word={w} progress={scrollYProgress} range={[s, s + 0.4]} gradient={accentSet.has(w)} />
//       })}
//     </Tag>
//   )
// }

// /* ================================================================== */
// /*  DATA                                                                */
// /* ================================================================== */
// const projects = [
//   { id: 1, title: 'The Alpha School', category: 'SaaS', image: 'https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/469981655_122111077196627507_7187180421328268391_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_ohc=QrELANDxi1sQ7kNvwH8ePYB&_nc_oc=Adrb2i4J_-nxfu_BcT494LXQO2V5BNzqQ85tAuXH1gpjMo6bsrtJe7Eb2ttPDkVTKUaR0-sQ7WLO2YKZO_ZsDWlC&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=asc6bEp-OFv_e4QqMJY8xw&_nc_ss=7a389&oh=00_Af0H91q2FzrlmyMMwKTrPiKc_250sYD8f_IC_5qq_W3U_g&oe=69E3EAC0', desc: 'A comprehensive financial management platform built for SMBs. Features include invoicing, expense tracking, payroll, and real-time reporting. Serves 500+ businesses globally.', tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'], url: 'https://thealphaSchool-demo.com', client: 'FinTech Solutions Inc.', color: '#6366f1' },
//   { id: 2, title: 'Zinger - The Grocery App', category: 'Web App', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80', desc: 'A smart grocery delivery platform enabling seamless ordering, real-time tracking, and efficient management for customers, stores, and delivery partners.', tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Socket.io'], url: 'https://zinger-demo.com', client: 'Zinger', color: '#22c55e' },
//   { id: 3, title: 'EduSpark Learning Platform', category: 'SaaS', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', desc: 'A next-generation LMS with AI-powered adaptive learning paths, live virtual classrooms, gamification, and progress analytics.', tech: ['React', 'Node.js', 'OpenAI', 'WebRTC', 'MongoDB', 'AWS'], url: 'https://eduspark-demo.com', client: 'EduTech Ventures', color: '#8b5cf6' },
//   { id: 4, title: 'ShopSphere E-commerce', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', desc: 'A high-performance headless commerce platform with omnichannel capabilities, AI-powered recommendations, and real-time inventory management.', tech: ['Next.js', 'GraphQL', 'Prisma', 'Stripe', 'Elasticsearch'], url: 'https://shopsphere-demo.com', client: 'RetailPro Ltd', color: '#f59e0b' },
//   { id: 5, title: 'DataSense AI Analytics', category: 'AI/ML', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80', desc: 'An AI-powered business intelligence platform that transforms raw data into actionable insights with predictive analytics and custom dashboards.', tech: ['Python', 'React', 'TensorFlow', 'ClickHouse', 'FastAPI', 'Grafana'], url: 'https://datasense-demo.com', client: 'Analytics Corp', color: '#10b981' },
//   { id: 6, title: 'TaskFlow Project Manager', category: 'SaaS', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', desc: 'A modern project management tool with real-time collaboration, AI task prioritization, time tracking, and comprehensive reporting for agile teams.', tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'], url: 'https://taskflow-demo.com', client: 'ProductivityHQ', color: '#ef4444' },
// ]

// const categories = ['All', 'SaaS', 'Web App', 'E-commerce', 'AI/ML']

// /* ================================================================== */
// /*  HERO                                                                */
// /* ================================================================== */
// function PortfolioHero() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
//   const y = useTransform(scrollYProgress, [0, 1], [0, 100])
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

//   const mx = useMotionValue(700)
//   const my = useMotionValue(200)
//   const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(99,102,241,0.16), transparent 65%)`
//   const onMove = (e) => {
//     if (!ref.current) return
//     const r = ref.current.getBoundingClientRect()
//     mx.set(e.clientX - r.left)
//     my.set(e.clientY - r.top)
//   }

//   return (
//     <section
//       ref={ref}
//       onMouseMove={onMove}
//       className="relative pt-36 pb-20 overflow-hidden"
//       style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)' }}
//     >
//       <div
//         className="absolute inset-0 opacity-25"
//         style={{
//           backgroundImage:
//             'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)',
//           backgroundSize: '60px 60px',
//         }}
//       />
//       <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

//       <motion.div style={{ y, opacity }} className="relative z-10 max-w-3xl mx-auto px-4 text-center">
//         <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium mb-4" style={{ color: '#6366f1' }}>
//           OUR WORK
//         </motion.p>
//         <ScrollHeading as="h1" text="Products We've Built" accent="Built" className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6" />
//         <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-gray-400 text-lg">
//           50+ products shipped. Each one crafted with obsessive attention to detail, scalability, and user experience.
//         </motion.p>
//       </motion.div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  Category filter with a sliding pill background                      */
// /* ================================================================== */
// function CategoryFilter({ active, onChange }) {
//   return (
//     <section className="py-10" style={{ background: '#0a0f1e', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
//       <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
//         {categories.map((cat) => {
//           const isActive = active === cat
//           return (
//             <button
//               key={cat}
//               onClick={() => onChange(cat)}
//               className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
//               style={isActive ? { color: 'white' } : { color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
//             >
//               {isActive && (
//                 <motion.span
//                   layoutId="portfolio-pill"
//                   className="absolute inset-0 rounded-xl"
//                   style={{ background: BTN }}
//                   transition={{ type: 'spring', stiffness: 380, damping: 32 }}
//                 />
//               )}
//               <span className="relative">{cat}</span>
//             </button>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  Project card                                                        */
// /* ================================================================== */
// function ProjectCard({ project, i, onSelect }) {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ delay: i * 0.07, duration: 0.4 }}
//     >
//       <TiltCard
//         onClick={() => onSelect(project)}
//         className="cursor-pointer rounded-2xl overflow-hidden"
//         style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}
//         glow={`${project.color}26`}
//         max={5}
//       >
//         <div className="relative overflow-hidden h-52">
//           <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//           <div
//             className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
//             style={{ background: 'rgba(99,102,241,0.85)' }}
//           >
//             <span className="text-white font-semibold text-sm flex items-center gap-2">
//               View Details <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
//             </span>
//           </div>
//           <div className="absolute top-3 left-3">
//             <span
//               className="text-xs font-medium px-3 py-1 rounded-full"
//               style={{ background: `${project.color}25`, color: project.color, border: `1px solid ${project.color}40` }}
//             >
//               {project.category}
//             </span>
//           </div>
//         </div>
//         <div className="relative p-6">
//           <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
//           <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
//           <div className="flex flex-wrap gap-1.5">
//             {project.tech.slice(0, 4).map((t) => (
//               <span key={t} className="text-xs px-2 py-0.5 rounded text-gray-400" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
//                 {t}
//               </span>
//             ))}
//             {project.tech.length > 4 && <span className="text-xs px-2 py-0.5 rounded text-gray-500">+{project.tech.length - 4}</span>}
//           </div>
//         </div>
//       </TiltCard>
//     </motion.div>
//   )
// }

// /* ================================================================== */
// /*  Project modal                                                       */
// /* ================================================================== */
// function ProjectModal({ project, onClose }) {
//   return (
//     <AnimatePresence>
//       {project && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           style={{ background: 'rgba(3,7,18,0.9)', backdropFilter: 'blur(10px)' }}
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.92, opacity: 0, y: 20 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.92, opacity: 0, y: 20 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 28 }}
//             onClick={(e) => e.stopPropagation()}
//             className="max-w-2xl w-full rounded-3xl overflow-hidden"
//             style={{ background: '#0a0f1e', border: '1px solid rgba(99,102,241,0.25)', maxHeight: '90vh', overflowY: 'auto' }}
//           >
//             <div className="relative h-56">
//               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
//               <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0f1e, transparent)' }} />
//               <Magnetic strength={0.25} className="absolute top-4 right-4">
//                 <button
//                   onClick={onClose}
//                   aria-label="Close"
//                   className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-colors hover:bg-black/80"
//                   style={{ background: 'rgba(0,0,0,0.6)' }}
//                 >
//                   <X size={18} />
//                 </button>
//               </Magnetic>
//             </div>
//             <div className="p-8">
//               <div className="flex items-start justify-between mb-4 gap-4">
//                 <div>
//                   <span className="text-xs font-medium px-2.5 py-1 rounded-full mb-2 inline-block" style={{ background: `${project.color}20`, color: project.color }}>
//                     {project.category}
//                   </span>
//                   <h2 className="font-display font-bold text-2xl text-white">{project.title}</h2>
//                   <p className="text-sm text-gray-500 mt-1">Client: {project.client}</p>
//                 </div>
//                 <Magnetic strength={0.15}>
//                   <a
//                     href={project.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap"
//                     style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
//                   >
//                     <ExternalLink size={14} /> Live Demo
//                   </a>
//                 </Magnetic>
//               </div>
//               <p className="text-gray-400 leading-relaxed mb-6">{project.desc}</p>
//               <div>
//                 <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Technologies Used</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((t, ti) => (
//                     <motion.span
//                       key={t}
//                       initial={{ opacity: 0, scale: 0.85 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.1 + ti * 0.04 }}
//                       className="text-sm px-3 py-1 rounded-lg text-gray-300"
//                       style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
//                     >
//                       {t}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//               <div className="mt-8">
//                 <Magnetic>
//                   <Link
//                     to="/contact"
//                     onClick={onClose}
//                     className="inline-flex items-center gap-2 font-semibold text-white px-6 py-3 rounded-xl"
//                     style={{ background: BTN }}
//                   >
//                     Build Something Like This <ArrowRight size={16} />
//                   </Link>
//                 </Magnetic>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// /* ================================================================== */
// /*  PAGE                                                                */
// /* ================================================================== */
// export default function Portfolio() {
//   const [activeCategory, setActiveCategory] = useState('All')
//   const [selectedProject, setSelectedProject] = useState(null)

//   const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

//   return (
//     <div style={{ background: '#030712' }}>
//       <PortfolioHero />
//       <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <AnimatePresence mode="popLayout">
//               {filtered.map((project, i) => (
//                 <ProjectCard key={project.id} project={project} i={i} onSelect={setSelectedProject} />
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>

//       <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

//       {/* CTA */}
//       <section className="py-20" style={{ background: '#0a0f1e', borderTop: '1px solid rgba(99,102,241,0.1)' }}>
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <ScrollHeading text="Have a Project in Mind?" className="font-display font-extrabold text-4xl text-white mb-5" />
//           <p className="text-gray-400 mb-8">Let's build something great together. Tell us about your idea and we'll respond within 24 hours.</p>
//           <Magnetic>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 font-semibold text-white px-10 py-4 rounded-xl"
//               style={{ background: BTN, boxShadow: '0 0 40px rgba(99,102,241,0.35)' }}
//             >
//               Start a Project <ArrowRight size={16} />
//             </Link>
//           </Magnetic>
//         </div>
//       </section>
//     </div>
//   )
// }

import { useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, ExternalLink, ArrowRight, Sparkles } from 'lucide-react'

const GRADIENT = 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)'
const BTN = 'linear-gradient(135deg,#6366f1,#8b5cf6)'

const gradientText = {
  background: GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

/* ================================================================== */
/*  Shared motion building blocks                                      */
/* ================================================================== */

function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
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
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

function TiltCard({
  children,
  className = '',
  style,
  glow = 'rgba(99,102,241,0.16)',
  max = 6,
  onClick,
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 220, damping: 22 })
  const sy = useSpring(py, { stiffness: 220, damping: 22 })
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const gx = useTransform(sx, (v) => `${v * 100}%`)
  const gy = useTransform(sy, (v) => `${v * 100}%`)
  const spot = useMotionTemplate`radial-gradient(300px circle at ${gx} ${gy}, ${glow}, transparent 70%)`

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }

  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={`group relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{ background: spot }}
      />
      {children}
    </motion.div>
  )
}

function Reveal({
  children,
  className = '',
  delay = 0,
  y = 32,
  scale = 0.98,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

function HeadingWord({ word, progress, range, gradient }) {
  const y = useTransform(progress, range, ['110%', '0%'])

  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em] mr-[0.25em]">
      <motion.span
        className="inline-block"
        style={{ y, ...(gradient ? gradientText : {}) }}
      >
        {word}
      </motion.span>
    </span>
  )
}

function ScrollHeading({
  text,
  accent = '',
  className = '',
  as: Tag = 'h2',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', 'start 55%'],
  })
  const words = text.split(' ')
  const accentSet = new Set(accent.split(' ').filter(Boolean))

  return (
    <Tag ref={ref} aria-label={text} className={className}>
      {words.map((w, i) => {
        const s = (i / words.length) * 0.6
        return (
          <HeadingWord
            key={i}
            word={w}
            progress={scrollYProgress}
            range={[s, s + 0.4]}
            gradient={accentSet.has(w)}
          />
        )
      })}
    </Tag>
  )
}

/* ================================================================== */
/*  DATA                                                               */
/* ================================================================== */

const projects = [
  {
    id: 2,
    title: 'Zinger - The Grocery App',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    desc: 'A smart grocery delivery platform enabling seamless ordering, real-time tracking, and efficient management for customers, stores, and delivery partners.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    url: 'https://zinger-demo.com',
    client: 'Zinger',
    color: '#22c55e',
  },
  {
    id: 3,
    title: 'EduSpark Learning Platform',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    desc: 'A next-generation LMS with AI-powered adaptive learning paths, live virtual classrooms, gamification, and progress analytics.',
    tech: ['React', 'Node.js', 'OpenAI', 'WebRTC', 'MongoDB', 'AWS'],
    url: 'https://eduspark-demo.com',
    client: 'EduTech Ventures',
    color: '#8b5cf6',
  },
  {
    id: 4,
    title: 'ShopSphere E-commerce',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    desc: 'A high-performance headless commerce platform with omnichannel capabilities, AI-powered recommendations, and real-time inventory management.',
    tech: ['Next.js', 'GraphQL', 'Prisma', 'Stripe', 'Elasticsearch'],
    url: 'https://shopsphere-demo.com',
    client: 'RetailPro Ltd',
    color: '#f59e0b',
  },
  {
    id: 5,
    title: 'DataSense AI Analytics',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    desc: 'An AI-powered business intelligence platform that transforms raw data into actionable insights with predictive analytics and custom dashboards.',
    tech: ['Python', 'React', 'TensorFlow', 'ClickHouse', 'FastAPI', 'Grafana'],
    url: 'https://datasense-demo.com',
    client: 'Analytics Corp',
    color: '#10b981',
  },
  {
    id: 6,
    title: 'TaskFlow Project Manager',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    desc: 'A modern project management tool with real-time collaboration, AI task prioritization, time tracking, and comprehensive reporting for agile teams.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'],
    url: 'https://taskflow-demo.com',
    client: 'ProductivityHQ',
    color: '#ef4444',
  },
]

const categories = ['All', 'SaaS', 'Web App', 'E-commerce', 'AI/ML']

/* ================================================================== */
/*  HERO                                                               */
/* ================================================================== */

function PortfolioHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  const mx = useMotionValue(700)
  const my = useMotionValue(200)
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(99,102,241,0.18), transparent 65%)`

  const onMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative pt-36 pb-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      {/* Ambient floating orbs */}
      <motion.div
        aria-hidden
        className="absolute left-[8%] top-28 h-32 w-32 rounded-full blur-3xl opacity-20"
        style={{ background: '#6366f1' }}
        animate={{ y: [0, -25, 0], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[8%] top-44 h-40 w-40 rounded-full blur-3xl opacity-15"
        style={{ background: '#06b6d4' }}
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: 'rgba(99,102,241,0.09)',
            border: '1px solid rgba(99,102,241,0.22)',
          }}
        >
          <Sparkles size={14} className="text-indigo-400" />
          <span className="text-xs font-semibold tracking-[0.18em] text-indigo-300">
            OUR WORK
          </span>
        </motion.div>

        <ScrollHeading
          as="h1"
          text="Products We've Built"
          accent="Built"
          className="font-display font-extrabold text-5xl md:text-7xl leading-[0.98] text-white mb-7"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          50+ products shipped. Each one crafted with obsessive attention to
          detail, scalability, and user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mx-auto mt-9 h-px w-32"
          style={{
            background:
              'linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}

/* ================================================================== */
/*  Category filter                                                    */
/* ================================================================== */

function CategoryFilter({ active, onChange }) {
  return (
    <section
      className="py-10 sticky top-16 md:top-20 z-20"
      style={{
        background: 'rgba(10,15,30,0.78)',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
        backdropFilter: 'blur(18px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => {
          const isActive = active === cat

          return (
            <motion.button
              key={cat}
              onClick={() => onChange(cat)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
              style={
                isActive
                  ? { color: 'white' }
                  : {
                      color: '#9ca3af',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.04)',
                    }
              }
            >
              {isActive && (
                <motion.span
                  layoutId="portfolio-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: BTN }}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 32,
                  }}
                />
              )}
              <span className="relative">{cat}</span>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}

/* ================================================================== */
/*  Project card                                                       */
/* ================================================================== */

function ProjectCard({ project, i, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 55, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      exit={{ opacity: 0, y: -25, scale: 0.96 }}
      transition={{
        delay: i * 0.08,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <TiltCard
        onClick={() => onSelect(project)}
        className="cursor-pointer rounded-3xl overflow-hidden h-full"
        style={{
          background:
            'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(7,12,25,0.98))',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 18px 60px rgba(0,0,0,0.18)',
        }}
        glow={`${project.color}30`}
        max={5}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-56">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          <div
            className="absolute inset-0 transition-all duration-500 group-hover:opacity-100 opacity-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}e8, rgba(3,7,18,0.75))`,
            }}
          >
            <motion.span
              initial={{ y: 12, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="text-white font-semibold text-sm flex items-center gap-2"
            >
              View Details
              <ArrowRight size={16} />
            </motion.span>
          </div>

          <div className="absolute top-4 left-4">
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{
                background: `${project.color}25`,
                color: project.color,
                border: `1px solid ${project.color}55`,
              }}
            >
              {project.category}
            </span>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(7,12,25,1), transparent)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative p-6 pt-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>

            <motion.div
              className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 group-hover:text-white"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              whileHover={{ x: 3, y: -3 }}
            >
              <ArrowRight size={15} />
            </motion.div>
          </div>

          <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md text-gray-400"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {t}
              </span>
            ))}

            {project.tech.length > 4 && (
              <span className="text-xs px-2.5 py-1 rounded-md text-gray-500">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <motion.div
            className="absolute bottom-0 left-6 right-6 h-px origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.06, duration: 0.8 }}
            style={{
              background: `linear-gradient(90deg, ${project.color}, transparent)`,
            }}
          />
        </div>
      </TiltCard>
    </motion.div>
  )
}

/* ================================================================== */
/*  Project modal                                                      */
/* ================================================================== */

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'rgba(3,7,18,0.9)',
            backdropFilter: 'blur(14px)',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 35 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 25 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 28,
            }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full rounded-3xl overflow-hidden"
            style={{
              background: '#0a0f1e',
              border: `1px solid ${project.color}40`,
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: `0 30px 100px ${project.color}18`,
            }}
          >
            <div className="relative h-60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, #0a0f1e, transparent 65%)',
                }}
              />

              <Magnetic strength={0.25} className="absolute top-4 right-4">
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:bg-black/80 hover:scale-105"
                  style={{ background: 'rgba(0,0,0,0.6)' }}
                >
                  <X size={18} />
                </button>
              </Magnetic>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-5 gap-4">
                <div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full mb-3 inline-block"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>

                  <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                    {project.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Client: {project.client}
                  </p>
                </div>

                <Magnetic strength={0.15}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </Magnetic>
              </div>

              <p className="text-gray-400 leading-relaxed mb-7">
                {project.desc}
              </p>

              <div>
                <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, ti) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.85, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + ti * 0.04,
                        duration: 0.3,
                      }}
                      className="text-sm px-3 py-1.5 rounded-lg text-gray-300"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Magnetic>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 font-semibold text-white px-6 py-3 rounded-xl"
                    style={{
                      background: BTN,
                      boxShadow:
                        '0 12px 35px rgba(99,102,241,0.25)',
                    }}
                  >
                    Build Something Like This
                    <ArrowRight size={16} />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div
      className="relative overflow-hidden"
      style={{ background: '#030712' }}
    >
      <PortfolioHero />

      <CategoryFilter
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {/* Portfolio grid */}
      <section className="relative py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
          style={{ background: '#6366f1' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 mb-3">
                  SELECTED PROJECTS
                </p>
                <ScrollHeading
                  text="Built for real-world impact"
                  accent="impact"
                  className="font-display font-bold text-3xl md:text-4xl text-white"
                />
              </div>

              <div className="hidden sm:block text-sm text-gray-500">
                {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              </div>
            </div>
          </Reveal>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  i={i}
                  onSelect={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* CTA */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at center, #141034 0%, #0a0f1e 42%, #030712 100%)',
          borderTop: '1px solid rgba(99,102,241,0.1)',
        }}
      >
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20"
          style={{ background: '#6366f1' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-5 text-indigo-400">
              <Sparkles size={16} />
              <span className="text-xs font-semibold tracking-[0.18em]">
                LET'S CREATE
              </span>
            </div>

            <ScrollHeading
              text="Have a Project in Mind?"
              accent="Project"
              className="font-display font-extrabold text-4xl md:text-5xl text-white mb-5"
            />

            <p className="text-gray-400 mb-9 text-base md:text-lg leading-relaxed">
              Let's build something great together. Tell us about your idea
              and we'll respond within 24 hours.
            </p>

            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-semibold text-white px-10 py-4 rounded-xl"
                style={{
                  background: BTN,
                  boxShadow:
                    '0 0 40px rgba(99,102,241,0.35)',
                }}
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>
  )
}