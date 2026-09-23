// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { ArrowRight, CheckCircle } from 'lucide-react'

// const services = [
//   { icon: '☁️', title: 'SaaS Development', slug: 'saas-development', desc: 'We architect and build robust, multi-tenant SaaS platforms from the ground up. Whether you need an MVP in 6 weeks or an enterprise system serving millions — we deliver.', color: '#6366f1', features: ['Multi-tenant architecture', 'Subscription billing with Stripe', 'OAuth & SSO integration', 'Real-time features with WebSockets', 'Analytics dashboard', 'API-first design'], tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Stripe', 'Socket.io'] },
//   { icon: '🌐', title: 'Web App Development', slug: 'web-app-development', desc: 'From marketing sites to complex web applications, we build fast, responsive, and scalable products using the latest technologies — optimized for performance and SEO.', color: '#06b6d4', features: ['Progressive Web Apps (PWA)', 'Real-time collaborative features', 'Offline-first architecture', 'Core Web Vitals optimization', 'SEO & semantic markup', 'WCAG accessibility compliance'], tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'Docker', 'Vercel'] },
//   { icon: '📱', title: 'Android Development', slug: 'android-development', desc: 'We create native Android applications with Kotlin that deliver seamless user experiences, robust performance, and deep integration with device features.', color: '#8b5cf6', features: ['Native Kotlin development', 'Material Design UI/UX', 'Offline data sync', 'Push notifications', 'In-app purchases', 'Google Play Store deployment'], tech: ['Kotlin', 'Android Jetpack', 'Firebase', 'Retrofit', 'Coroutines', 'Google Play Console'] },
//   { icon: '🧠', title: 'AI Integration', slug: 'ai-integration', desc: 'We embed AI capabilities into your product that actually make a difference — from GPT-powered copilots to computer vision pipelines and intelligent automation workflows.', color: '#8b5cf6', features: ['LLM integration (GPT-4, Claude, Gemini)', 'RAG & vector database setup', 'Computer vision pipelines', 'NLP & text analytics', 'Recommendation engines', 'Autonomous agent workflows'], tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Pinecone', 'TensorFlow', 'Hugging Face'] },
//   { icon: '🎨', title: 'UI/UX Design', slug: 'ui-ux-design', desc: 'Our design team creates beautiful, intuitive interfaces that convert visitors into customers. Every design decision is backed by user research and conversion data.', color: '#f59e0b', features: ['User research & journey mapping', 'Wireframing & prototyping', 'Design system creation', 'Usability testing', 'Motion & interaction design', 'Figma → production handoff'], tech: ['Figma', 'Framer', 'Adobe XD', 'Maze', 'Lottie', 'Storybook', 'Hotjar'] },
//   { icon: '🔌', title: 'API Development', slug: 'api-development', desc: 'We design and build APIs that developers love working with. Well-documented, versioned, performant REST and GraphQL APIs with enterprise-grade security.', color: '#10b981', features: ['REST API design & development', 'GraphQL schema & resolvers', 'JWT & OAuth 2.0 security', 'Rate limiting & throttling', 'OpenAPI / Swagger documentation', 'Webhook systems & event streaming'], tech: ['Node.js', 'Express', 'Go', 'Python', 'Kong', 'Swagger', 'Postman'] },
//   { icon: '☁️', title: 'Cloud & DevOps', slug: 'cloud-solutions', desc: "We design, deploy, and manage cloud infrastructure that scales effortlessly with your growth. Zero-downtime deployments, auto-scaling, and 99.99% uptime SLAs.", color: '#ef4444', features: ['AWS / GCP / Azure architecture', 'Kubernetes orchestration', 'CI/CD pipeline automation', 'Infrastructure as Code (Terraform)', 'Monitoring & alerting setup', 'Cost optimization audits'], tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog', 'Grafana'] },
//   { icon: '🛠️', title: 'Maintenance & Support', slug: 'maintenance-support', desc: 'Our job isn’t done at launch. We offer ongoing support plans with 24/7 monitoring, performance optimization, security updates, and feature development.', color: '#6366f1', features: ['24/7 monitoring & incident response', 'Performance optimization', 'Security patching & updates', 'Feature request handling', 'Monthly analytics reports', 'Dedicated support channels'], tech: ['New Relic', 'Sentry', 'PagerDuty', 'GitHub Issues', 'Slack', 'Google Analytics'] },
//   { icon: '⚙️', title: 'Custom Software', slug: 'custom-software', desc: 'Beyond SaaS, we build custom software solutions tailored to your unique needs — from internal tools and automation scripts to complex integrations and data pipelines.', color: '#06b6d4', features: ['Internal tool development', 'Automation scripts & bots', 'Third-party API integrations', 'Data processing pipelines', 'Custom CMS solutions', 'Legacy system modernization'], tech: ['Python', 'Node.js', 'Ruby on Rails', 'AWS Lambda', 'Zapier', 'Apache Airflow'] },
// ]

// export default function Services() {
//   return (
//     <div style={{ background: '#030712' }}>
//       {/* Hero */}
//       <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)' }}>
//         <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
//         <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
//           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium mb-4" style={{ color: '#6366f1' }}>SERVICES</motion.p>
//           <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6">
//             Everything You Need to{' '}
//             <span style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ship</span>
//           </motion.h1>
//           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-400 text-lg">
//             Full-stack software development services designed for modern SaaS companies and ambitious startups.
//           </motion.p>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="pb-28">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-8">
//             {services.map((svc, i) => (
//               <motion.div key={svc.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
//                 className="p-8 md:p-10 rounded-3xl" style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//                   <div>
//                     <div className="flex items-center gap-3 mb-5">
//                       <span className="text-4xl">{svc.icon}</span>
//                       <div className="w-px h-8 bg-white/10" />
//                       <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: `${svc.color}15`, color: svc.color, border: `1px solid ${svc.color}30` }}>
//                         Service 0{i + 1}
//                       </span>
//                     </div>
//                     <h2 className="font-display font-extrabold text-3xl text-white mb-4">{svc.title}</h2>
//                     <p className="text-gray-400 leading-relaxed mb-6">{svc.desc}</p>
//                     <Link to="/contact" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
//                       style={{ background: `${svc.color}18`, color: svc.color, border: `1px solid ${svc.color}35` }}>
//                       Start This Project <ArrowRight size={14} />
//                     </Link>
//                   </div>
//                   <div>
//                     <div className="mb-6">
//                       <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">What's Included</h4>
//                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                         {svc.features.map((f) => (
//                           <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
//                             <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: svc.color }} />
//                             {f}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {svc.tech.map((t) => (
//                           <span key={t} className="text-xs px-3 py-1 rounded-lg text-gray-300" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20" style={{ background: '#0a0f1e', borderTop: '1px solid rgba(99,102,241,0.1)' }}>
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <h2 className="font-display font-extrabold text-4xl text-white mb-5">Not sure which service you need?</h2>
//           <p className="text-gray-400 mb-8">Book a free 30-minute strategy call. We'll recommend the best path forward for your product.</p>
//           <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-white px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 0 40px rgba(99,102,241,0.35)' }}>
//             Book a Free Call <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }

// -------------------------------------------------------
// import { useRef } from 'react'
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
// import {
//   ArrowRight,
//   CheckCircle,
//   Layers,
//   Globe,
//   Smartphone,
//   Brain,
//   Palette,
//   Plug,
//   Cloud,
//   Wrench,
//   Settings,
// } from 'lucide-react'

// const GRADIENT = 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)'
// const BTN = 'linear-gradient(135deg,#6366f1,#8b5cf6)'
// const gradientText = {
//   background: GRADIENT,
//   WebkitBackgroundClip: 'text',
//   backgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
// }

// /* ================================================================== */
// /*  Shared building blocks (same system as Home.jsx / About.jsx)        */
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

// function Eyebrow({ children }) {
//   return (
//     <motion.p
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-sm font-medium mb-4 tracking-wide"
//       style={{ color: '#6366f1' }}
//     >
//       {children}
//     </motion.p>
//   )
// }

// /* ================================================================== */
// /*  DATA                                                                */
// /* ================================================================== */
// const services = [
//   { icon: Layers, title: 'SaaS Development', slug: 'saas-development', desc: 'We architect and build robust, multi-tenant SaaS platforms from the ground up. Whether you need an MVP in 6 weeks or an enterprise system serving millions — we deliver.', color: '#6366f1', features: ['Multi-tenant architecture', 'Subscription billing with Stripe', 'OAuth & SSO integration', 'Real-time features with WebSockets', 'Analytics dashboard', 'API-first design'], tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Stripe', 'Socket.io'] },
//   { icon: Globe, title: 'Web App Development', slug: 'web-app-development', desc: 'From marketing sites to complex web applications, we build fast, responsive, and scalable products using the latest technologies — optimized for performance and SEO.', color: '#06b6d4', features: ['Progressive Web Apps (PWA)', 'Real-time collaborative features', 'Offline-first architecture', 'Core Web Vitals optimization', 'SEO & semantic markup', 'WCAG accessibility compliance'], tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'Docker', 'Vercel'] },
//   { icon: Smartphone, title: 'Android Development', slug: 'android-development', desc: 'We create native Android applications with Kotlin that deliver seamless user experiences, robust performance, and deep integration with device features.', color: '#8b5cf6', features: ['Native Kotlin development', 'Material Design UI/UX', 'Offline data sync', 'Push notifications', 'In-app purchases', 'Google Play Store deployment'], tech: ['Kotlin', 'Android Jetpack', 'Firebase', 'Retrofit', 'Coroutines', 'Google Play Console'] },
//   { icon: Brain, title: 'AI Integration', slug: 'ai-integration', desc: 'We embed AI capabilities into your product that actually make a difference — from GPT-powered copilots to computer vision pipelines and intelligent automation workflows.', color: '#a78bfa', features: ['LLM integration (GPT-4, Claude, Gemini)', 'RAG & vector database setup', 'Computer vision pipelines', 'NLP & text analytics', 'Recommendation engines', 'Autonomous agent workflows'], tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Pinecone', 'TensorFlow', 'Hugging Face'] },
//   { icon: Palette, title: 'UI/UX Design', slug: 'ui-ux-design', desc: 'Our design team creates beautiful, intuitive interfaces that convert visitors into customers. Every design decision is backed by user research and conversion data.', color: '#f59e0b', features: ['User research & journey mapping', 'Wireframing & prototyping', 'Design system creation', 'Usability testing', 'Motion & interaction design', 'Figma → production handoff'], tech: ['Figma', 'Framer', 'Adobe XD', 'Maze', 'Lottie', 'Storybook', 'Hotjar'] },
//   { icon: Plug, title: 'API Development', slug: 'api-development', desc: 'We design and build APIs that developers love working with. Well-documented, versioned, performant REST and GraphQL APIs with enterprise-grade security.', color: '#10b981', features: ['REST API design & development', 'GraphQL schema & resolvers', 'JWT & OAuth 2.0 security', 'Rate limiting & throttling', 'OpenAPI / Swagger documentation', 'Webhook systems & event streaming'], tech: ['Node.js', 'Express', 'Go', 'Python', 'Kong', 'Swagger', 'Postman'] },
//   { icon: Cloud, title: 'Cloud & DevOps', slug: 'cloud-solutions', desc: "We design, deploy, and manage cloud infrastructure that scales effortlessly with your growth. Zero-downtime deployments, auto-scaling, and 99.99% uptime SLAs.", color: '#ef4444', features: ['AWS / GCP / Azure architecture', 'Kubernetes orchestration', 'CI/CD pipeline automation', 'Infrastructure as Code (Terraform)', 'Monitoring & alerting setup', 'Cost optimization audits'], tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog', 'Grafana'] },
//   { icon: Wrench, title: 'Maintenance & Support', slug: 'maintenance-support', desc: "Our job isn't done at launch. We offer ongoing support plans with 24/7 monitoring, performance optimization, security updates, and feature development.", color: '#6366f1', features: ['24/7 monitoring & incident response', 'Performance optimization', 'Security patching & updates', 'Feature request handling', 'Monthly analytics reports', 'Dedicated support channels'], tech: ['New Relic', 'Sentry', 'PagerDuty', 'GitHub Issues', 'Slack', 'Google Analytics'] },
//   { icon: Settings, title: 'Custom Software', slug: 'custom-software', desc: 'Beyond SaaS, we build custom software solutions tailored to your unique needs — from internal tools and automation scripts to complex integrations and data pipelines.', color: '#06b6d4', features: ['Internal tool development', 'Automation scripts & bots', 'Third-party API integrations', 'Data processing pipelines', 'Custom CMS solutions', 'Legacy system modernization'], tech: ['Python', 'Node.js', 'Ruby on Rails', 'AWS Lambda', 'Zapier', 'Apache Airflow'] },
// ]

// /* ================================================================== */
// /*  HERO                                                                */
// /* ================================================================== */
// function ServicesHero() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
//   const y = useTransform(scrollYProgress, [0, 1], [0, 100])
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
//   const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.05])

//   const mx = useMotionValue(700)
//   const my = useMotionValue(200)
//   const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(99,102,241,0.16), transparent 65%)`
//   const onMove = (e) => {
//     if (!ref.current) return
//     const r = ref.current.getBoundingClientRect()
//     mx.set(e.clientX - r.left)
//     my.set(e.clientY - r.top)
//   }

//   const words = ['Everything', 'You', 'Need', 'to', { t: 'Ship', g: true }]

//   return (
//     <section
//       ref={ref}
//       onMouseMove={onMove}
//       className="relative pt-36 pb-20 overflow-hidden"
//       style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)' }}
//     >
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           opacity: gridOpacity,
//           backgroundImage:
//             'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)',
//           backgroundSize: '60px 60px',
//         }}
//       />
//       <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

//       <motion.div style={{ y, opacity }} className="relative z-10 max-w-3xl mx-auto px-4 text-center">
//         <Eyebrow>SERVICES</Eyebrow>
//         <motion.h1
//           aria-label="Everything You Need to Ship"
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
//           className="text-gray-400 text-lg"
//         >
//           Full-stack software development services designed for modern SaaS companies and ambitious startups.
//         </motion.p>
//       </motion.div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  SERVICE ROW: icon tilts in 3D, chips + tags cascade in on scroll     */
// /* ================================================================== */
// function ServiceIcon({ Icon, color }) {
//   const ref = useRef(null)
//   const reduced = useReducedMotion()
//   const px = useMotionValue(0.5)
//   const py = useMotionValue(0.5)
//   const sx = useSpring(px, { stiffness: 200, damping: 18 })
//   const sy = useSpring(py, { stiffness: 200, damping: 18 })
//   const rotateY = useTransform(sx, [0, 1], [-22, 22])
//   const rotateX = useTransform(sy, [0, 1], [22, -22])

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
//       className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
//       style={{
//         rotateX,
//         rotateY,
//         transformPerspective: 500,
//         background: `${color}18`,
//         border: `1px solid ${color}45`,
//         boxShadow: `0 0 30px ${color}30`,
//       }}
//     >
//       <Icon size={28} style={{ color, transform: 'translateZ(20px)' }} />
//     </motion.div>
//   )
// }

// function ServiceRow({ svc, i }) {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'start 45%'] })
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
//   const y = useTransform(scrollYProgress, [0, 1], [50, 0])
//   const barScale = useTransform(scrollYProgress, [0.15, 0.9], [0, 1])

//   return (
//     <motion.div
//       ref={ref}
//       style={{ opacity, y }}
//       className="p-8 md:p-10 rounded-3xl relative overflow-hidden"
//       // scoped anchor for scroll-linked reveal children below
//       id={svc.slug}
//     >
//       <div className="absolute inset-0 rounded-3xl" style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }} />
//       <motion.div
//         aria-hidden
//         className="absolute left-0 top-0 bottom-0 w-1 origin-top rounded-l-3xl"
//         style={{ scaleY: barScale, background: svc.color, boxShadow: `0 0 16px ${svc.color}` }}
//       />

//       <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//         <div>
//           <div className="flex items-center gap-4 mb-6">
//             <ServiceIcon Icon={svc.icon} color={svc.color} />
//             <div className="w-px h-10 bg-white/10" />
//             <span
//               className="text-xs font-medium px-3 py-1 rounded-full"
//               style={{ background: `${svc.color}15`, color: svc.color, border: `1px solid ${svc.color}30` }}
//             >
//               Service 0{i + 1}
//             </span>
//           </div>
//           <h2 className="font-display font-extrabold text-3xl text-white mb-4">{svc.title}</h2>
//           <p className="text-gray-400 leading-relaxed mb-6">{svc.desc}</p>
//           <Magnetic>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
//               style={{ background: `${svc.color}18`, color: svc.color, border: `1px solid ${svc.color}35` }}
//             >
//               Start This Project <ArrowRight size={14} />
//             </Link>
//           </Magnetic>
//         </div>

//         <div>
//           <div className="mb-6">
//             <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">What's Included</h4>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//               {svc.features.map((f, fi) => (
//                 <motion.li
//                   key={f}
//                   initial={{ opacity: 0, x: -12 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: '-40px' }}
//                   transition={{ delay: fi * 0.05, duration: 0.4 }}
//                   className="flex items-start gap-2 text-sm text-gray-300"
//                 >
//                   <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: svc.color }} />
//                   {f}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
//             <div className="flex flex-wrap gap-2">
//               {svc.tech.map((t, ti) => (
//                 <motion.span
//                   key={t}
//                   initial={{ opacity: 0, scale: 0.85 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true, margin: '-40px' }}
//                   transition={{ delay: ti * 0.04, duration: 0.35 }}
//                   whileHover={{ y: -2, borderColor: svc.color, color: svc.color }}
//                   className="text-xs px-3 py-1 rounded-lg text-gray-300"
//                   style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
//                 >
//                   {t}
//                 </motion.span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// function ServicesList() {
//   return (
//     <section className="pb-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="space-y-8">
//           {services.map((svc, i) => (
//             <ServiceRow key={svc.title} svc={svc} i={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  Progress rail: dots for each service, fills as you scroll past them */
// /*  (desktop only, fixed to the right edge)                             */
// /* ================================================================== */
// function ProgressRail() {
//   const { scrollYProgress } = useScroll()
//   const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
//   return (
//     <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
//       <div className="relative h-64 w-px bg-white/10">
//         <motion.div
//           className="absolute top-0 left-0 w-px origin-top"
//           style={{ scaleY, height: '100%', background: GRADIENT }}
//         />
//       </div>
//     </div>
//   )
// }

// /* ================================================================== */
// /*  CTA                                                                 */
// /* ================================================================== */
// function CTASection() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

//   return (
//     <section ref={ref} className="relative py-20 overflow-hidden" style={{ background: '#0a0f1e', borderTop: '1px solid rgba(99,102,241,0.1)' }}>
//       <motion.div
//         aria-hidden
//         className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-dashed border-indigo-500/20"
//         style={{ rotate }}
//       />
//       <div className="relative max-w-3xl mx-auto px-4 text-center">
//         <ScrollHeading text="Not sure which service you need?" className="font-display font-extrabold text-4xl text-white mb-5" />
//         <p className="text-gray-400 mb-8">
//           Book a free 30-minute strategy call. We'll recommend the best path forward for your product.
//         </p>
//         <Magnetic>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 font-semibold text-white px-10 py-4 rounded-xl"
//             style={{ background: BTN, boxShadow: '0 0 40px rgba(99,102,241,0.35)' }}
//           >
//             Book a Free Call <ArrowRight size={16} />
//           </Link>
//         </Magnetic>
//       </div>
//     </section>
//   )
// }

// /* ================================================================== */
// /*  PAGE                                                                */
// /* ================================================================== */
// export default function Services() {
//   return (
//     <div style={{ background: '#030712' }}>
//       <ProgressRail />
//       <ServicesHero />
//       <ServicesList />
//       <CTASection />
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
  CheckCircle,
  Layers,
  Globe,
  Smartphone,
  Brain,
  Palette,
  Plug,
  Cloud,
  Wrench,
  Settings,
  Sparkles,
  MousePointer2,
} from 'lucide-react'

const GRADIENT = 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)'
const BTN = 'linear-gradient(135deg,#6366f1,#8b5cf6)'

const gradientText = {
  background: GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

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

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

function ScrollHeading({ text, accent = '', className = '', as: Tag = 'h2' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', 'start 55%'],
  })

  const words = text.split(' ')
  const accentSet = new Set(accent.split(' ').filter(Boolean))

  return (
    <Tag ref={ref} aria-label={text} className={className}>
      {words.map((word, i) => {
        const start = (i / Math.max(words.length, 1)) * 0.6
        const y = useTransform(
          scrollYProgress,
          [start, start + 0.4],
          ['110%', '0%']
        )

        return (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em] mr-[0.25em]"
          >
            <motion.span
              className="inline-block"
              style={{
                y,
                ...(accentSet.has(word) ? gradientText : {}),
              }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}

function Eyebrow({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-sm font-medium mb-4 tracking-[0.18em]"
      style={{ color: '#818cf8' }}
    >
      {children}
    </motion.p>
  )
}

const services = [
  {
    icon: Layers,
    title: 'SaaS Development',
    slug: 'saas-development',
    desc: 'We architect and build robust, multi-tenant SaaS platforms from the ground up. Whether you need an MVP in 6 weeks or an enterprise system serving millions — we deliver.',
    color: '#6366f1',
    features: ['Multi-tenant architecture', 'Subscription billing with Stripe', 'OAuth & SSO integration', 'Real-time features with WebSockets', 'Analytics dashboard', 'API-first design'],
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Stripe', 'Socket.io'],
  },
  {
    icon: Globe,
    title: 'Web App Development',
    slug: 'web-app-development',
    desc: 'From marketing sites to complex web applications, we build fast, responsive, and scalable products using the latest technologies — optimized for performance and SEO.',
    color: '#06b6d4',
    features: ['Progressive Web Apps (PWA)', 'Real-time collaborative features', 'Offline-first architecture', 'Core Web Vitals optimization', 'SEO & semantic markup', 'WCAG accessibility compliance'],
    tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'Docker', 'Vercel'],
  },
  {
    icon: Smartphone,
    title: 'Android Development',
    slug: 'android-development',
    desc: 'We create native Android applications with Kotlin that deliver seamless user experiences, robust performance, and deep integration with device features.',
    color: '#8b5cf6',
    features: ['Native Kotlin development', 'Material Design UI/UX', 'Offline data sync', 'Push notifications', 'In-app purchases', 'Google Play Store deployment'],
    tech: ['Kotlin', 'Android Jetpack', 'Firebase', 'Retrofit', 'Coroutines', 'Google Play Console'],
  },
  {
    icon: Brain,
    title: 'AI Integration',
    slug: 'ai-integration',
    desc: 'We embed AI capabilities into your product that actually make a difference — from GPT-powered copilots to computer vision pipelines and intelligent automation workflows.',
    color: '#a78bfa',
    features: ['LLM integration (GPT-4, Claude, Gemini)', 'RAG & vector database setup', 'Computer vision pipelines', 'NLP & text analytics', 'Recommendation engines', 'Autonomous agent workflows'],
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Pinecone', 'TensorFlow', 'Hugging Face'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    desc: 'Our design team creates beautiful, intuitive interfaces that convert visitors into customers. Every design decision is backed by user research and conversion data.',
    color: '#f59e0b',
    features: ['User research & journey mapping', 'Wireframing & prototyping', 'Design system creation', 'Usability testing', 'Motion & interaction design', 'Figma → production handoff'],
    tech: ['Figma', 'Framer', 'Adobe XD', 'Maze', 'Lottie', 'Storybook', 'Hotjar'],
  },
  {
    icon: Plug,
    title: 'API Development',
    slug: 'api-development',
    desc: 'We design and build APIs that developers love working with. Well-documented, versioned, performant REST and GraphQL APIs with enterprise-grade security.',
    color: '#10b981',
    features: ['REST API design & development', 'GraphQL schema & resolvers', 'JWT & OAuth 2.0 security', 'Rate limiting & throttling', 'OpenAPI / Swagger documentation', 'Webhook systems & event streaming'],
    tech: ['Node.js', 'Express', 'Go', 'Python', 'Kong', 'Swagger', 'Postman'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    slug: 'cloud-solutions',
    desc: 'We design, deploy, and manage cloud infrastructure that scales effortlessly with your growth. Zero-downtime deployments, auto-scaling, and 99.99% uptime SLAs.',
    color: '#ef4444',
    features: ['AWS / GCP / Azure architecture', 'Kubernetes orchestration', 'CI/CD pipeline automation', 'Infrastructure as Code (Terraform)', 'Monitoring & alerting setup', 'Cost optimization audits'],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog', 'Grafana'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    slug: 'maintenance-support',
    desc: "Our job isn't done at launch. We offer ongoing support plans with 24/7 monitoring, performance optimization, security updates, and feature development.",
    color: '#6366f1',
    features: ['24/7 monitoring & incident response', 'Performance optimization', 'Security patching & updates', 'Feature request handling', 'Monthly analytics reports', 'Dedicated support channels'],
    tech: ['New Relic', 'Sentry', 'PagerDuty', 'GitHub Issues', 'Slack', 'Google Analytics'],
  },
  {
    icon: Settings,
    title: 'Custom Software',
    slug: 'custom-software',
    desc: 'Beyond SaaS, we build custom software solutions tailored to your unique needs — from internal tools and automation scripts to complex integrations and data pipelines.',
    color: '#06b6d4',
    features: ['Internal tool development', 'Automation scripts & bots', 'Third-party API integrations', 'Data processing pipelines', 'Custom CMS solutions', 'Legacy system modernization'],
    tech: ['Python', 'Node.js', 'Ruby on Rails', 'AWS Lambda', 'Zapier', 'Apache Airflow'],
  },
]

function ServicesHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  const mx = useMotionValue(700)
  const my = useMotionValue(200)
  const spotlight = useMotionTemplate`
    radial-gradient(520px circle at ${mx}px ${my}px, rgba(99,102,241,0.18), transparent 65%)
  `

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
      className="relative min-h-[78vh] flex items-center pt-32 pb-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, #1a1040 0%, #080b18 45%, #030712 78%)',
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full border border-indigo-400/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_35px_rgba(129,140,248,.8)]"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: 'rgba(99,102,241,.09)',
            border: '1px solid rgba(129,140,248,.25)',
          }}
        >
          <Sparkles size={14} className="text-indigo-300" />
          <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300">
            THE JUSSTCODE SYSTEM
          </span>
        </motion.div>

        <ScrollHeading
          as="h1"
          text="Everything You Need to Ship"
          accent="Ship"
          className="font-display font-extrabold text-5xl md:text-7xl leading-[0.95] text-white mb-7"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Scroll through the stack. One capability at a time. Each service
          becomes a layer in the product we build with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 inline-flex items-center gap-2 text-xs text-gray-500"
        >
          <MousePointer2 size={14} />
          Scroll to enter the system
        </motion.div>
      </motion.div>
    </section>
  )
}

function ServiceIcon({ Icon, color, active = false }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const sx = useSpring(px, { stiffness: 200, damping: 18 })
  const sy = useSpring(py, { stiffness: 200, damping: 18 })

  const rotateY = useTransform(sx, [0, 1], [-20, 20])
  const rotateX = useTransform(sy, [0, 1], [20, -20])

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0.5)
        py.set(0.5)
      }}
      className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 600,
        background: `${color}${active ? '22' : '12'}`,
        border: `1px solid ${color}${active ? '65' : '35'}`,
        boxShadow: active
          ? `0 0 55px ${color}35`
          : `0 0 25px ${color}18`,
      }}
      animate={active ? { y: [0, -6, 0] } : { y: 0 }}
      transition={{
        duration: 3.5,
        repeat: active ? Infinity : 0,
        ease: 'easeInOut',
      }}
    >
      <Icon size={34} style={{ color }} />

      {active && (
        <motion.span
          className="absolute inset-[-8px] rounded-[30px] border"
          style={{ borderColor: `${color}25` }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.7, 0.15, 0.7],
          }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
}

function ServiceExperience({ svc, index, total, onActive }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 82%', 'end 18%'],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.5, 0.84, 1],
    [0.22, 1, 1, 1, 0.22]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.5, 0.82, 1],
    [0.9, 1, 1, 1, 0.9]
  )

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [5, 0, 0, -5]
  )

  const x = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [
      index % 2 === 0 ? -70 : 70,
      0,
      0,
      index % 2 === 0 ? 55 : -55,
    ]
  )

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  })

  return (
    <section
      ref={ref}
      id={svc.slug}
      className="min-h-[115vh] flex items-center py-20"
    >
      <motion.div
        style={{ opacity, scale, rotateX, x }}
        onViewportEnter={() => onActive(index)}
        viewport={{ amount: 0.55 }}
        className="w-full"
      >
        <div
          className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden"
          style={{
            background:
              'linear-gradient(145deg, rgba(15,23,42,.96), rgba(4,9,20,.98))',
            border: `1px solid ${svc.color}30`,
            boxShadow: `0 35px 120px ${svc.color}12`,
          }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-px origin-left"
            style={{
              scaleX: progress,
              background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)`,
              boxShadow: `0 0 20px ${svc.color}`,
            }}
          />

          <div className="absolute inset-0 pointer-events-none opacity-50">
            <div
              className="absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
              style={{ background: `${svc.color}12` }}
            />
            <div
              className="absolute -left-32 -bottom-32 h-72 w-72 rounded-full blur-3xl"
              style={{ background: `${svc.color}09` }}
            />
          </div>

          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 p-7 md:p-12 lg:p-16">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-5 mb-8">
                <ServiceIcon
                  Icon={svc.icon}
                  color={svc.color}
                  active
                />

                <div>
                  <span
                    className="text-xs font-semibold tracking-[0.18em]"
                    style={{ color: svc.color }}
                  >
                    {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>

                  <p className="text-xs text-gray-600 mt-1">
                    CAPABILITY
                  </p>
                </div>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-6"
              >
                {svc.title}
              </motion.h2>

              <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
                {svc.desc}
              </p>

              <Magnetic strength={0.18}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl text-sm"
                  style={{
                    background: `${svc.color}18`,
                    color: svc.color,
                    border: `1px solid ${svc.color}40`,
                  }}
                >
                  Start This Project
                  <ArrowRight size={15} />
                </Link>
              </Magnetic>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-9">
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-5">
                  WHAT WE BUILD
                </p>

                <div className="space-y-3">
                  {svc.features.map((feature, fi) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 35 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        delay: fi * 0.06,
                        duration: 0.45,
                      }}
                      whileHover={{ x: 7 }}
                      className="flex items-center gap-3 p-3.5 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.055)',
                      }}
                    >
                      <CheckCircle
                        size={16}
                        className="shrink-0"
                        style={{ color: svc.color }}
                      />
                      <span className="text-sm text-gray-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 mb-4">
                  TECHNOLOGY LAYER
                </p>

                <div className="flex flex-wrap gap-2">
                  {svc.tech.map((tech, ti) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.75, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 + ti * 0.045,
                        duration: 0.35,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.05,
                        color: svc.color,
                      }}
                      className="text-xs px-3 py-1.5 rounded-lg text-gray-400 cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.045)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute right-6 top-6 text-[10px] tracking-[0.3em] font-semibold"
            style={{ color: `${svc.color}70` }}
          >
            JUSSTCODE
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ServiceRail({ active, items }) {
  return (
    <div className="hidden xl:flex fixed right-7 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3">
      {items.map((svc, i) => (
        <a
          key={svc.slug}
          href={`#${svc.slug}`}
          className="group flex items-center gap-3"
          aria-label={`Go to ${svc.title}`}
        >
          <span
            className="text-[10px] font-medium max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-32 group-hover:opacity-100 whitespace-nowrap"
            style={{
              color: active === i ? svc.color : '#6b7280',
            }}
          >
            {svc.title}
          </span>

          <motion.span
            animate={{
              width: active === i ? 28 : 7,
              opacity: active === i ? 1 : 0.35,
            }}
            className="h-1.5 rounded-full"
            style={{
              background:
                active === i ? svc.color : 'rgba(255,255,255,.35)',
              boxShadow:
                active === i ? `0 0 14px ${svc.color}` : 'none',
            }}
          />
        </a>
      ))}
    </div>
  )
}

function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.25])

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at center, #151034 0%, #0a0f1e 42%, #030712 100%)',
        borderTop: '1px solid rgba(99,102,241,0.1)',
      }}
    >
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/10"
        style={{ rotate, scale }}
      />

      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20"
        style={{ background: '#6366f1' }}
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <Eyebrow>THE FINAL LAYER</Eyebrow>

        <ScrollHeading
          text="Turn the idea into a product"
          accent="product"
          className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6"
        />

        <p className="text-gray-400 mb-9 text-lg">
          Bring us the problem. We'll engineer the system.
        </p>

        <Magnetic>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold text-white px-10 py-4 rounded-xl"
            style={{
              background: BTN,
              boxShadow: '0 0 50px rgba(99,102,241,0.38)',
            }}
          >
            Start a Project
            <ArrowRight size={16} />
          </Link>
        </Magnetic>
      </div>
    </section>
  )
}

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <div
      style={{ background: '#030712' }}
      className="relative text-white"
    >
      <ServicesHero />

      <ServiceRail active={active} items={services} />

      <main className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px opacity-10"
          style={{ background: GRADIENT }}
        />

        {services.map((svc, i) => (
          <ServiceExperience
            key={svc.slug}
            svc={svc}
            index={i}
            total={services.length}
            onActive={setActive}
          />
        ))}
      </main>

      <CTASection />
    </div>
  )
}
