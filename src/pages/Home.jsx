// import { Suspense, lazy, useRef, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { motion, useInView } from 'framer-motion'
// import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Award, Globe, ChevronRight} from 'lucide-react'
// import CountUp from 'react-countup'
// import RadheImg from '../static/Radhe.png';
// import NamanImg from '../static/naman.jpeg';
// import { useInView as useIOInView } from 'react-intersection-observer'

// const HeroScene = lazy(() => import('../components/3d/HeroScene'))

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
// }

// const stagger = {
//   visible: { transition: { staggerChildren: 0.12 } },
// }

// // ─── HERO ──────────────────────────────────────────────────────────
// function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)' }}>
//       {/* Grid bg */}
//       <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

//       {/* 3D Scene */}
//       <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-80">
//         <Suspense fallback={null}>
//           <HeroScene />
//         </Suspense>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
//         <div className="max-w-3xl">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
//             style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc' }}
//           >
//             <span>Trusted by 10+ International SaaS Companies</span>
//           </motion.div>

//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
//           >
//             We Build{' '}
//             <span style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//               Future‑Ready
//             </span>
//             <br />
//             SaaS Products
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             transition={{ delay: 0.2 }}
//             className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
//           >
//             From zero to launch — we design and build scalable SaaS applications, web platforms, and AI-powered products that your users will love.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-wrap items-center gap-4"
//           >
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 font-semibold text-white px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
//               style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
//             >
//               Start Your Project <ArrowRight size={18} />
//             </Link>
//             <Link
//               to="/portfolio"
//               className="inline-flex items-center gap-2 font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
//               style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
//             >
//               <Play size={16} className="text-primary-400" /> View Our Work
//             </Link>
//           </motion.div>

//           {/* Trust badges */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//             className="mt-12 flex flex-wrap items-center gap-6"
//           >
//             {['Stripe-level Quality', 'On-time Delivery', '24/7 Support'].map((badge) => (
//               <div key={badge} className="flex items-center gap-2 text-sm text-gray-400">
//                 <CheckCircle size={15} className="text-green-400" />
//                 {badge}
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #030712, transparent)' }} />
//     </section>
//   )
// }

// // ─── STATS ──────────────────────────────────────────────────────────
// function StatsSection() {
//   const { ref, inView } = useIOInView({ triggerOnce: true, threshold: 0.3 })
//   const stats = [
//     { icon: TrendingUp, value: 5, suffix: '+', label: 'Products Launched', color: '#6366f1' },
//     { icon: Users, value: 99, suffix: '%', label: 'Client Satisfaction', color: '#06b6d4' },
//     { icon: Award, value: 2, suffix: '+', label: 'Years of Excellence', color: '#8b5cf6' },
//     { icon: Globe, value: 1, suffix: '+', label: 'Countries Served', color: '#f59e0b' },
//   ]
//   return (
//     <section ref={ref} className="py-20 relative" style={{ background: '#0a0f1e', borderTop: '1px solid rgba(99,102,241,0.1)', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map(({ icon: Icon, value, suffix, label, color }, i) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.1, duration: 0.6 }}
//               className="text-center"
//             >
//               <div className="inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-4" style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
//                 <Icon size={22} style={{ color }} />
//               </div>
//               <div className="font-display font-extrabold text-4xl text-white mb-1">
//                 {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
//               </div>
//               <p className="text-sm text-gray-400">{label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // ─── SERVICES ──────────────────────────────────────────────────────────
// const services = [
//   { icon: '☁️', title: 'SaaS Development', desc: 'End-to-end SaaS platforms with multi-tenancy, subscription billing, and enterprise scalability.', color: '#6366f1', delay: 0 },
//   { icon: '🌐', title: 'Web App Development', desc: 'High-performance progressive web applications that delight users across every device.', color: '#06b6d4', delay: 0.1 },
//   { icon: '📱', title: 'Android Development', desc: 'Native Android applications with seamless user experiences and robust performance.', color: '#8b5cf6', delay: 0.2 },
//   { icon: '🧠', title: 'AI Integration', desc: 'Supercharge your product with LLM integration, computer vision, and ML-powered automation.', color: '#8b5cf6', delay: 0.3 },
//   { icon: '🎨', title: 'UI/UX Design', desc: 'Award-worthy design systems and interfaces crafted for maximum conversion and user delight.', color: '#f59e0b', delay: 0.4 },
//   { icon: '🔌', title: 'API Development', desc: 'Scalable REST and GraphQL APIs built for speed, security, and developer experience.', color: '#10b981', delay: 0.5 },
//   { icon: '☁️', title: 'Cloud Solutions', desc: 'AWS, GCP, and Azure infrastructure design with Kubernetes orchestration and CI/CD pipelines.', color: '#ef4444', delay: 0.6   },
//   { icon: '🛠️', title: 'Maintenance & Support', desc: 'Ongoing support plans with 24/7 monitoring, performance optimization, and feature updates.', color: '#6366f1', delay: 0.7 },
//   { icon: '⚙️', title: 'Custom Software', desc: 'Tailored software solutions beyond SaaS, including internal tools, automation, and integrations.', color: '#06b6d4', delay: 0.8 },

// ]

// function ServicesSection() {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-100px' })
//   return (
//     <section className="py-28 relative" style={{ background: '#030712' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           variants={stagger}
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//           className="text-center mb-16"
//         >
//           <motion.p variants={fadeUp} className="text-sm font-medium mb-3" style={{ color: '#6366f1' }}>WHAT WE DO</motion.p>
//           <motion.h2 variants={fadeUp} className="font-display font-extrabold text-4xl md:text-5xl text-white mb-5">
//             Services Built for Scale
//           </motion.h2>
//           <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
//             We combine world-class engineering with stunning design to build products that stand out in any market.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((svc) => (
//             <motion.div
//               key={svc.title}
//               initial={{ opacity: 0, y: 40 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: svc.delay, duration: 0.6 }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="p-8 rounded-2xl group cursor-default"
//               style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}
//             >
//               <div className="text-4xl mb-5">{svc.icon}</div>
//               <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-primary-400 transition-colors">{svc.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed mb-5">{svc.desc}</p>
//               <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: svc.color }}>
//                 Learn more <ChevronRight size={14} />
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-white px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1" style={{ border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.08)' }}>
//             Explore All Services <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ─── PROCESS ──────────────────────────────────────────────────────────
// const steps = [
//   { num: '01', title: 'Discovery & Research', desc: 'Deep dive into your business goals, market, and technical requirements to define the perfect strategy.' },
//   { num: '02', title: 'Design & Prototyping', desc: 'We craft pixel-perfect wireframes and interactive prototypes validated with real user feedback.' },
//   { num: '03', title: 'Development', desc: 'Agile sprints with daily updates. Clean, documented code built on scalable modern architecture.' },
//   { num: '04', title: 'Testing & QA', desc: 'Rigorous automated and manual testing ensuring zero-defect delivery and performance at scale.' },
//   { num: '05', title: 'Deployment', desc: 'CI/CD-powered launch with monitoring, analytics, and 30-day post-launch support included.' },
// ]

// function ProcessSection() {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-100px' })
//   return (
//     <section className="py-28" style={{ background: '#0a0f1e' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16" ref={ref}>
//           <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-sm font-medium mb-3" style={{ color: '#6366f1' }}>HOW WE WORK</motion.p>
//           <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-display font-extrabold text-4xl md:text-5xl text-white mb-5">
//             Our Process
//           </motion.h2>
//           <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-gray-400 text-lg max-w-xl mx-auto">
//             A battle-tested 5-step process that takes your idea from concept to a product your users love.
//           </motion.p>
//         </div>

//         <div className="relative">
//           {/* Connecting line */}
//           <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-px h-[calc(100%-40px)]" style={{ background: 'linear-gradient(to bottom, #6366f1, transparent)' }} />

//           <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
//             {steps.map((step, i) => (
//               <motion.div
//                 key={step.num}
//                 initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: i * 0.15, duration: 0.6 }}
//                 className={`relative flex items-start gap-6 lg:w-[45%] ${i % 2 === 0 ? 'lg:ml-0' : 'lg:ml-auto'} mb-8 p-6 rounded-2xl`}
//                 style={{ background: 'rgba(10,15,30,0.8)', border: '1px solid rgba(99,102,241,0.15)' }}
//               >
//                 <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-sm" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white' }}>
//                   {step.num}
//                 </div>
//                 <div>
//                   <h3 className="font-display font-semibold text-lg text-white mb-2">{step.title}</h3>
//                   <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ─── TESTIMONIALS ──────────────────────────────────────────────────────────
// const testimonials = [
//   {
//     name: 'Radheshyam Pattaiya',
//     role: 'CTO, The Alpha School, India',
//     avatar: RadheImg,
//     text: 'JustCode delivered our SaaS platform on time with outstanding performance. 500+ Indian businesses rely on it daily — seamless and scalable.',
//     rating: 5
//   },
//   {
//     name: 'Naman Narware',
//     role: 'CEO, Zinger Grossery, India',
//     avatar: NamanImg,
//     text: 'They built a fast, reliable grocery platform that ensures seamless ordering, real-time tracking, and a smooth experience for both customers and delivery partners.',
//     rating: 5
//   },
//   {
//     name: 'Rohit Verma',
//     role: 'Product Lead, EduGrow',
//     avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
//     text: 'Our AI-based learning platform saw a 40% drop in student churn. The UI/UX and backend quality exceeded expectations.',
//     rating: 5
//   }
// ]

// function TestimonialsSection() {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-100px' })
//   return (
//     <section className="py-28" style={{ background: '#030712' }} ref={ref}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-sm font-medium mb-3" style={{ color: '#6366f1' }}>TESTIMONIALS</motion.p>
//           <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-display font-extrabold text-4xl md:text-5xl text-white">
//             Loved by Founders
//           </motion.h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={t.name}
//               initial={{ opacity: 0, y: 40 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.15 }}
//               className="p-8 rounded-2xl"
//               style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}
//             >
//               <div className="flex mb-4">
//                 {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} className="text-yellow-400" fill="#facc15" />)}
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
//               <div className="flex items-center gap-3">
//                 <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
//                 <div>
//                   <p className="text-sm font-semibold text-white">{t.name}</p>
//                   <p className="text-xs text-gray-500">{t.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // ─── PRICING PREVIEW ──────────────────────────────────────────────────────────
// function PricingPreviewSection() {
//   const plans = [
//     { name: 'Starter', price: '19,999', desc: 'Perfect for MVPs and early-stage startups.', features: ['Up to 3 core features', 'Mobile responsive design', 'Basic API integration', 'QA & testing', '2 weeks post-launch support'], color: '#6366f1', highlight: false },
//     { name: 'Professional', price: '49,999', desc: 'Ideal for growing products that need scale.', features: ['Unlimited features', '3D UI & animations', 'AI integration', 'Admin dashboard', 'Payment integration', '60-day support'], color: '#8b5cf6', highlight: true },
//     { name: 'Enterprise', price: 'Custom', desc: 'Full-scale enterprise SaaS solutions.', features: ['Custom architecture', 'Dedicated team', 'Multi-tenant system', 'Advanced security', 'SLA guarantee', 'Lifetime support'], color: '#06b6d4', highlight: false },
//   ]

//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-100px' })

//   return (
//     <section className="py-28" style={{ background: '#0a0f1e' }} ref={ref}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-sm font-medium mb-3" style={{ color: '#6366f1' }}>PRICING</motion.p>
//           <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-display font-extrabold text-4xl md:text-5xl text-white">
//             Transparent Pricing
//           </motion.h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {plans.map((plan, i) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 40 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.15 }}
//               className={`p-8 rounded-2xl relative ${plan.highlight ? 'ring-1 ring-primary-500/50' : ''}`}
//               style={{ background: plan.highlight ? 'rgba(99,102,241,0.08)' : '#030712', border: `1px solid ${plan.highlight ? 'rgba(99,102,241,0.4)' : 'rgba(255,255,255,0.06)'}` }}
//             >
//               {plan.highlight && (
//                 <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
//                   Most Popular
//                 </div>
//               )}
//               <h3 className="font-display font-bold text-xl text-white mb-1">{plan.name}</h3>
//               <p className="text-gray-400 text-sm mb-5">{plan.desc}</p>
//               <div className="font-display font-extrabold text-4xl text-white mb-6">{plan.price}</div>
//               <ul className="space-y-3 mb-8">
//                 {plan.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
//                     <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
//                     {f}
//                   </li>
//                 ))}
//               </ul>
//               <Link to="/pricing" className="block text-center font-semibold py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
//                 style={plan.highlight ? { background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white' } : { border: `1px solid ${plan.color}40`, color: plan.color }}>
//                 Get Started
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//         <p className="text-center text-gray-500 text-sm mt-8">
//           <Link to="/pricing" className="text-primary-400 hover:text-primary-300 transition-colors">View full pricing & feature comparison →</Link>
//         </p>
//       </div>
//     </section>
//   )
// }

// // ─── CTA ──────────────────────────────────────────────────────────
// function CTASection() {
//   return (
//     <section className="py-28 relative overflow-hidden" style={{ background: '#030712' }}>
//       <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, transparent 70%)' }} />
//       <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
//           <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
//             Ready to Build Your{' '}
//             <span style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//               Dream Product?
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
//             Join 50+ companies that trusted JusstCode to build their core product. Let's talk about yours.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-white px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 0 50px rgba(99,102,241,0.4)' }}>
//               Start Your Project <ArrowRight size={18} />
//             </Link>
//             <Link to="/portfolio" className="inline-flex items-center gap-2 font-semibold text-gray-300 hover:text-white px-10 py-4 rounded-xl transition-all duration-300" style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}>
//               See Our Work
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // ─── HOME PAGE ──────────────────────────────────────────────────────────
// export default function Home() {
//   return (
//     <div>
//       <HeroSection />
//       <StatsSection />
//       <ServicesSection />
//       <ProcessSection />
//       <TestimonialsSection />
//       <PricingPreviewSection />
//       <CTASection />
//     </div>
//   )
// }

import { Suspense, lazy, useRef, useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  useVelocity,
  useAnimationFrame,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  ChevronRight,
  Layers,
  Globe,
  Smartphone,
  Brain,
  Palette,
  Plug,
  Cloud,
  Wrench,
  Settings,
} from 'lucide-react'
import CountUp from 'react-countup'
import RadheImg from '../static/Radhe.png'
import NamanImg from '../static/naman.jpeg'

const HeroScene = lazy(() => import('../components/3d/HeroScene'))

const BRAND = 'Jusst Code'
const GRADIENT = 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)'
const BTN = 'linear-gradient(135deg,#6366f1,#8b5cf6)'
const gradientText = {
  background: GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}
const clamp01 = (v) => Math.min(1, Math.max(0, v))
const wrap = (min, max, v) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

/* ================================================================== */
/*  Shared building blocks                                              */
/* ================================================================== */

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setDesktop(mq.matches)
    const onChange = (e) => setDesktop(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return desktop
}

/* Card that tilts in 3D toward the cursor and lights up under it */
function TiltCard({ children, className = '', style, glow = 'rgba(99,102,241,0.16)', max = 8 }) {
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
  const spot = useMotionTemplate`radial-gradient(320px circle at ${gx} ${gy}, ${glow}, transparent 70%)`

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
      className={`group relative ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: 'preserve-3d', ...style }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spot }}
      />
      {children}
    </motion.div>
  )
}

/* Pulls its child slightly toward the cursor */
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

/* Heading whose words rise out of a mask as you scroll (reverses when you scroll back) */
function HeadingWord({ word, progress, range, gradient }) {
  const y = useTransform(progress, range, ['110%', '0%'])
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em] mr-[0.25em]">
      <motion.span className="inline-block" style={{ y, ...(gradient ? gradientText : {}) }}>
        {word}
      </motion.span>
    </span>
  )
}

function ScrollHeading({ text, accent = '', className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 92%', 'start 55%'] })
  const words = text.split(' ')
  const accentSet = new Set(accent.split(' ').filter(Boolean))
  return (
    <h2 ref={ref} aria-label={text} className={className}>
      {words.map((w, i) => {
        const s = (i / words.length) * 0.6
        return (
          <HeadingWord key={i} word={w} progress={scrollYProgress} range={[s, s + 0.4]} gradient={accentSet.has(w)} />
        )
      })}
    </h2>
  )
}

/* ================================================================== */
/*  HERO                                                                */
/* ================================================================== */
const headlineLines = [
  [{ t: 'We' }, { t: 'Build' }, { t: 'Future‑Ready', g: true }],
  [{ t: 'SaaS' }, { t: 'Products' }],
]

function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -80])

  const mx = useMotionValue(700)
  const my = useMotionValue(280)
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(99,102,241,0.16), transparent 65%)`
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)' }}
    >
      {/* grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      {/* cursor spotlight */}
      <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

      {/* 3D scene */}
      <motion.div style={{ y: sceneY }} className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-80">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </motion.div>

      {/* content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            </span>
            <span>Trusted by 10+ International SaaS Companies</span>
          </motion.div>

          <motion.h1
            aria-label="We Build Future‑Ready SaaS Products"
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
          >
            {headlineLines.map((line, li) => (
              <span key={li} aria-hidden className="flex flex-wrap gap-x-[0.28em]">
                {line.map((w) => (
                  <span key={w.t} className="overflow-hidden pb-[0.12em] -mb-[0.12em]">
                    <motion.span
                      className="inline-block"
                      style={w.g ? gradientText : undefined}
                      variants={{
                        hidden: { y: '110%' },
                        visible: { y: '0%', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                      }}
                    >
                      {w.t}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
          >
            From zero to launch — we design and build scalable SaaS applications, web platforms, and AI-powered
            products that your users will love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-semibold text-white px-8 py-4 rounded-xl"
                style={{ background: BTN, boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
              >
                <Play size={16} className="text-primary-400" /> View Our Work
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            {['Stripe-level Quality', 'On-time Delivery', '24/7 Support'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle size={15} className="text-green-400" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #030712, transparent)' }} />

      {/* scroll cue */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-xs text-gray-500"
      >
        <span>Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/15">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-indigo-400"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  )
}

/* ================================================================== */
/*  MARQUEE: speeds up and skews with your scroll velocity              */
/* ================================================================== */
const marqueeItems = [
  'SaaS Platforms',
  'Web Apps',
  'Android Apps',
  'AI Integration',
  'UI/UX Design',
  'APIs',
  'Cloud',
  'Custom Software',
]

function Marquee() {
  const reduced = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 })
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false })
  const skewX = useTransform(smooth, [-3000, 3000], [-10, 10])
  const x = useTransform(baseX, (v) => `${v}%`)
  const dir = useRef(1)

  useAnimationFrame((_, delta) => {
    if (reduced) return
    let move = dir.current * -4 * (delta / 1000)
    const f = factor.get()
    if (f < 0) dir.current = -1
    else if (f > 0) dir.current = 1
    move += dir.current * move * f
    baseX.set(wrap(-50, 0, baseX.get() + move))
  })

  return (
    <div className="relative overflow-hidden py-8" style={{ background: '#030712' }}>
      <motion.div style={{ x, skewX }} className="flex w-max whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} aria-hidden={k === 1} className="flex shrink-0 items-center">
            {marqueeItems.map((item, i) => (
              <div key={item} className="flex items-center">
                <span
                  className="font-display font-extrabold text-5xl md:text-7xl px-8"
                  style={
                    i % 2
                      ? { color: 'transparent', WebkitTextStroke: '1.5px rgba(165,180,252,0.55)' }
                      : { color: 'rgba(255,255,255,0.92)' }
                  }
                >
                  {item}
                </span>
                <span className="block h-3 w-3 shrink-0 rotate-45" style={{ background: GRADIENT }} />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

/* ================================================================== */
/*  STATS                                                               */
/* ================================================================== */
const stats = [
  { value: 5, suffix: '+', label: 'Products Launched', color: '#6366f1' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', color: '#06b6d4' },
  { value: 2, suffix: '+', label: 'Years of Excellence', color: '#8b5cf6' },
  { value: 1, suffix: '+', label: 'Countries Served', color: '#f59e0b' },
]

function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <section
      ref={ref}
      className="relative py-20"
      style={{ background: '#0a0f1e', borderTop: '1px solid rgba(99,102,241,0.1)', borderBottom: '1px solid rgba(99,102,241,0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {stats.map(({ value, suffix, label, color }, i) => (
          <div key={label} className={`px-4 lg:px-8 ${i > 0 ? 'lg:border-l lg:border-white/10' : ''}`}>
            <div className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-none">
              {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
            </div>
            <motion.span
              className="mt-4 block h-[3px] w-12 origin-left rounded-full"
              style={{ background: color, boxShadow: `0 0 14px ${color}` }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.7 }}
            />
            <p className="mt-3 text-sm text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SERVICES: pinned section, vertical scroll drives a horizontal track  */
/* ================================================================== */
const services = [
  { icon: Layers, title: 'SaaS Development', desc: 'End-to-end SaaS platforms with multi-tenancy, subscription billing, and enterprise scalability.', color: '#6366f1' },
  { icon: Globe, title: 'Web App Development', desc: 'High-performance progressive web applications that delight users across every device.', color: '#06b6d4' },
  { icon: Smartphone, title: 'Android Development', desc: 'Native Android applications with seamless user experiences and robust performance.', color: '#8b5cf6' },
  { icon: Brain, title: 'AI Integration', desc: 'Supercharge your product with LLM integration, computer vision, and ML-powered automation.', color: '#a78bfa' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Award-worthy design systems and interfaces crafted for maximum conversion and user delight.', color: '#f59e0b' },
  { icon: Plug, title: 'API Development', desc: 'Scalable REST and GraphQL APIs built for speed, security, and developer experience.', color: '#10b981' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'AWS, GCP, and Azure infrastructure design with Kubernetes orchestration and CI/CD pipelines.', color: '#ef4444' },
  { icon: Wrench, title: 'Maintenance & Support', desc: 'Ongoing support plans with 24/7 monitoring, performance optimization, and feature updates.', color: '#6366f1' },
  { icon: Settings, title: 'Custom Software', desc: 'Tailored software solutions beyond SaaS, including internal tools, automation, and integrations.', color: '#06b6d4' },
]

function ServiceCard({ svc }) {
  const Icon = svc.icon
  return (
    <TiltCard
      className="flex min-h-[300px] w-[78vw] shrink-0 flex-col rounded-3xl p-8 sm:w-[340px]"
      glow={`${svc.color}30`}
      style={{ background: 'linear-gradient(160deg,#0d1326,#0a0f1e)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div
        className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{
          background: `${svc.color}1f`,
          border: `1px solid ${svc.color}55`,
          boxShadow: `0 0 30px ${svc.color}33`,
          transform: 'translateZ(40px)',
        }}
      >
        <Icon size={26} style={{ color: svc.color }} />
      </div>
      <h3 className="font-display font-semibold text-xl text-white mb-3" style={{ transform: 'translateZ(24px)' }}>
        {svc.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{svc.desc}</p>
      <Link
        to="/services"
        className="mt-auto inline-flex items-center gap-1 text-sm font-medium"
        style={{ color: svc.color }}
      >
        Learn more <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </TiltCard>
  )
}

function ServicesSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const dist = useMotionValue(0)
  const [sectionHeight, setSectionHeight] = useState('100vh')

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      const d = Math.max(trackRef.current.scrollWidth - window.innerWidth, 0)
      dist.set(d)
      setSectionHeight(`calc(100vh + ${d}px)`)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [dist])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform([scrollYProgress, dist], ([p, d]) => -d * clamp01((p - 0.04) / 0.92))

  return (
    <section ref={sectionRef} className="relative" style={{ background: '#030712', height: sectionHeight }}>
      <div className="sticky top-0 flex flex-col justify-center overflow-hidden" style={{ height: '100vh' }}>
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-3">Services Built for Scale</h2>
            <p className="text-gray-400 max-w-xl">
              World-class engineering and stunning design, combined to build products that stand out in any market.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex w-fit items-center gap-2 font-semibold text-white px-6 py-3 rounded-xl transition-transform hover:-translate-y-0.5"
            style={{ border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.08)' }}
          >
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div
          ref={trackRef}
          className="flex w-max gap-5 pr-[10vw]"
          style={{ x, paddingLeft: 'max(1rem, calc((100vw - 80rem) / 2 + 2rem))' }}
        >
          {services.map((svc) => (
            <ServiceCard key={svc.title} svc={svc} />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8">
          <div className="h-[2px] rounded bg-white/10">
            <motion.div className="h-full origin-left rounded" style={{ scaleX: scrollYProgress, background: GRADIENT }} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  PROCESS: a line draws itself down the page, each step swings in      */
/* ================================================================== */
const steps = [
  { num: '01', title: 'Discovery & Research', desc: 'Deep dive into your business goals, market, and technical requirements to define the perfect strategy.' },
  { num: '02', title: 'Design & Prototyping', desc: 'We craft pixel-perfect wireframes and interactive prototypes validated with real user feedback.' },
  { num: '03', title: 'Development', desc: 'Agile sprints with daily updates. Clean, documented code built on scalable modern architecture.' },
  { num: '04', title: 'Testing & QA', desc: 'Rigorous automated and manual testing ensuring zero-defect delivery and performance at scale.' },
  { num: '05', title: 'Deployment', desc: 'CI/CD-powered launch with monitoring, analytics, and 30-day post-launch support included.' },
]

function ProcessStep({ step, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 95%', 'start 55%'] })
  const dir = i % 2 === 0 ? -1 : 1
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1])
  const x = useTransform(scrollYProgress, [0, 1], [dir * 50, 0])
  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0])
  const dot = useTransform(scrollYProgress, [0.6, 1], ['#1e293b', '#6366f1'])
  const dotScale = useTransform(scrollYProgress, [0.6, 1], [0.7, 1.25])

  return (
    <div ref={ref} className="relative pl-14 pb-10 last:pb-0 lg:pl-0">
      <motion.span
        aria-hidden
        className="absolute left-5 top-7 -ml-2 h-4 w-4 rounded-full lg:left-1/2"
        style={{ background: dot, scale: dotScale, boxShadow: '0 0 0 4px #0a0f1e, 0 0 18px rgba(99,102,241,0.6)' }}
      />
      <motion.div
        style={{
          opacity,
          x,
          rotateX,
          transformPerspective: 1000,
          background: 'rgba(10,15,30,0.8)',
          border: '1px solid rgba(99,102,241,0.15)',
        }}
        className={`relative flex items-start gap-5 rounded-2xl p-6 lg:w-[calc(50%_-_3rem)] ${i % 2 ? 'lg:ml-auto' : ''}`}
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
          style={{ background: BTN }}
        >
          {step.num}
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-white mb-2">{step.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
        </div>
      </motion.div>
    </div>
  )
}

function ProcessSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 60%', 'end 60%'] })
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section className="py-28 overflow-hidden" style={{ background: '#0a0f1e' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <ScrollHeading text="Our Process" className="font-display font-extrabold text-4xl md:text-5xl text-white mb-5" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A battle-tested 5-step process that takes your idea from concept to a product your users love.
          </p>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10 lg:left-1/2" />
          <motion.div
            className="absolute bottom-0 left-5 top-0 w-px origin-top lg:left-1/2"
            style={{ scaleY: line, background: 'linear-gradient(to bottom,#6366f1,#8b5cf6,#06b6d4)', boxShadow: '0 0 12px rgba(99,102,241,0.8)' }}
          />
          {steps.map((step, i) => (
            <ProcessStep key={step.num} step={step} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  TESTIMONIALS: cards drift at different speeds as you scroll         */
/* ================================================================== */
const testimonials = [
  {
    name: 'Radheshyam Pattaiya',
    role: 'CTO, The Alpha School, India',
    avatar: RadheImg,
    text: `${BRAND} delivered our SaaS platform on time with outstanding performance. 500+ Indian businesses rely on it daily — seamless and scalable.`,
    rating: 5,
  },
  {
    name: 'Naman Narware',
    role: 'CEO, Zinger Grossery, India',
    avatar: NamanImg,
    text: 'They built a fast, reliable grocery platform that ensures seamless ordering, real-time tracking, and a smooth experience for both customers and delivery partners.',
    rating: 5,
  },
  {
    name: 'Rohit Verma',
    role: 'Product Lead, EduGrow',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    text: 'Our AI-based learning platform saw a 40% drop in student churn. The UI/UX and backend quality exceeded expectations.',
    rating: 5,
  },
]

const driftRanges = [
  [70, -70],
  [-30, 30],
  [110, -110],
]

function TestimonialCard({ t, i, progress, desktop }) {
  const y = useTransform(progress, [0, 1], driftRanges[i % 3])
  return (
    <motion.div style={{ y: desktop ? y : 0 }}>
      <TiltCard
        className="h-full rounded-2xl p-8"
        style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}
        glow="rgba(139,92,246,0.16)"
        max={6}
      >
        <div className="flex mb-4">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} size={14} className="text-yellow-400" fill="#facc15" />
          ))}
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
        <div className="flex items-center gap-3">
          <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-gray-500">{t.role}</p>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

function TestimonialsSection() {
  const ref = useRef(null)
  const desktop = useIsDesktop()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  return (
    <section ref={ref} className="py-28" style={{ background: '#030712' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <ScrollHeading text="Loved by Founders" className="font-display font-extrabold text-4xl md:text-5xl text-white" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} progress={scrollYProgress} desktop={desktop} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  PRICING                                                             */
/* ================================================================== */
const plans = [
  { name: 'Starter', price: '19,999', desc: 'Perfect for MVPs and early-stage startups.', features: ['Up to 3 core features', 'Mobile responsive design', 'Basic API integration', 'QA & testing', '2 weeks post-launch support'], color: '#6366f1', highlight: false },
  { name: 'Professional', price: '49,999', desc: 'Ideal for growing products that need scale.', features: ['Unlimited features', '3D UI & animations', 'AI integration', 'Admin dashboard', 'Payment integration', '60-day support'], color: '#8b5cf6', highlight: true },
  { name: 'Enterprise', price: 'Custom', desc: 'Full-scale enterprise SaaS solutions.', features: ['Custom architecture', 'Dedicated team', 'Multi-tenant system', 'Advanced security', 'SLA guarantee', 'Lifetime support'], color: '#06b6d4', highlight: false },
]

function PriceCard({ plan }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 100%', 'start 65%'] })
  const y = useTransform(scrollYProgress, [0, 1], [90, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity, rotateX, transformPerspective: 1000 }} className="relative">
      {plan.highlight && (
        <div
          className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white"
          style={{ background: BTN }}
        >
          Most Popular
        </div>
      )}
      <div className={`relative h-full rounded-2xl ${plan.highlight ? 'overflow-hidden p-[1.5px]' : ''}`}>
        {plan.highlight && (
          <motion.span
            aria-hidden
            className="absolute -inset-[100%]"
            style={{ background: 'conic-gradient(from 0deg,#6366f1,#06b6d4,#8b5cf6,#6366f1)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
        )}
        <TiltCard
          className="relative h-full rounded-2xl p-8"
          max={5}
          glow={`${plan.color}26`}
          style={{
            background: plan.highlight ? '#0d1030' : '#030712',
            border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <h3 className="font-display font-bold text-xl text-white mb-1">{plan.name}</h3>
          <p className="text-gray-400 text-sm mb-5">{plan.desc}</p>
          <div className="font-display font-extrabold text-4xl text-white mb-6">{plan.price}</div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: plan.color }} />
                {f}
              </li>
            ))}
          </ul>
          <Link
            to="/pricing"
            className="block rounded-xl py-3 text-center font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            style={
              plan.highlight
                ? { background: BTN, color: 'white' }
                : { border: `1px solid ${plan.color}40`, color: plan.color }
            }
          >
            Get Started
          </Link>
        </TiltCard>
      </div>
    </motion.div>
  )
}

function PricingPreviewSection() {
  return (
    <section className="py-28 overflow-hidden" style={{ background: '#0a0f1e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <ScrollHeading text="Transparent Pricing" className="font-display font-extrabold text-4xl md:text-5xl text-white" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PriceCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-10">
          <Link to="/pricing" className="text-primary-400 hover:text-primary-300 transition-colors">
            View full pricing & feature comparison →
          </Link>
        </p>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  CTA: orbit rings turn with the scroll                               */
/* ================================================================== */
function Orbit({ size, rotate, dotColor, dashed = true }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute left-1/2 top-1/2 rounded-full border ${dashed ? 'border-dashed' : ''}`}
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        rotate,
        borderColor: 'rgba(129,140,248,0.22)',
      }}
    >
      <span
        className="absolute left-1/2 top-0 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full"
        style={{ background: dotColor, boxShadow: `0 0 20px ${dotColor}` }}
      />
    </motion.div>
  )
}

function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 200])
  const rotateRev = useTransform(scrollYProgress, [0, 1], [0, -160])

  return (
    <section ref={ref} className="relative overflow-hidden py-40" style={{ background: '#030712' }}>
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, transparent 70%)' }}
      />
      <Orbit size={640} rotate={rotate} dotColor="#6366f1" />
      <Orbit size={920} rotate={rotateRev} dotColor="#06b6d4" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <ScrollHeading
          text="Ready to Build Your Dream Product?"
          accent="Dream Product?"
          className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6 leading-[1.1]"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Join the companies that trust {BRAND} to build their core product. Let's talk about yours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-semibold text-white px-10 py-4 rounded-xl"
                style={{ background: BTN, boxShadow: '0 0 50px rgba(99,102,241,0.4)' }}
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-semibold text-gray-300 hover:text-white px-10 py-4 rounded-xl transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
              >
                See Our Work
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  HOME PAGE                                                           */
/* ================================================================== */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Marquee />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <CTASection />
    </div>
  )
}