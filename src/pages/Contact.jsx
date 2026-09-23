// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
// import { contactAPI } from '../api'
// import toast from 'react-hot-toast'

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', budget: '', service: '', message: '' })
//   const [loading, setLoading] = useState(false)
//   const [sent, setSent] = useState(false)
//   const [errors, setErrors] = useState({})

//   const validate = () => {
//     const e = {}
//     if (!form.name.trim()) e.name = 'Name is required'
//     if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email required'
//     if (!form.message.trim()) e.message = 'Message is required'
//     setErrors(e)
//     return Object.keys(e).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validate()) return
//     setLoading(true)
//     try {
//       await contactAPI.submit(form)
//       setSent(true)
//       toast.success('Message sent! We\'ll reply within 24 hours.')
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Failed to send. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const InputField = ({ name, label, type = 'text', placeholder, required }) => (
//     <div>
//       <label className="block text-sm font-medium text-gray-300 mb-1.5">{label}{required && <span className="text-red-400 ml-1">*</span>}</label>
//       <input
//         type={type}
//         value={form[name]}
//         onChange={(e) => setForm({ ...form, [name]: e.target.value })}
//         placeholder={placeholder}
//         className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm transition-all duration-200 focus:outline-none"
//         style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${errors[name] ? '#ef4444' : 'rgba(255,255,255,0.1)'}` }}
//       />
//       {errors[name] && <p className="text-red-400 text-xs mt-1">{errors[name]}</p>}
//     </div>
//   )

//   return (
//     <div style={{ background: '#030712' }}>
//       {/* Hero */}
//       <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 60%)' }}>
//         <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
//         <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
//           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium mb-4" style={{ color: '#6366f1' }}>CONTACT</motion.p>
//           <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6">
//             Let's Build{' '}
//             <span style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Together</span>
//           </motion.h1>
//           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-400 text-lg">
//             Tell us about your project. We'll get back to you within 24 hours with a plan.
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
//           {/* Info */}
//           <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
//             <div>
//               <h2 className="font-display font-bold text-2xl text-white mb-4">Get in Touch</h2>
//               <p className="text-gray-400 leading-relaxed">Whether you have a detailed spec or just a napkin sketch — we want to hear about it. No project is too big or too small.</p>
//             </div>
//             {[
//               { icon: Mail, label: 'Email', value: 'hello@saasagency.com', href: 'mailto:hello@saasagency.com' },
//               { icon: Phone, label: 'Phone', value: '+91 97133 18696', href: 'tel:+919713318696' },
//               { icon: MapPin, label: 'Office', value: 'vijay nagar indore 453221', href: '#' },
//             ].map(({ icon: Icon, label, value, href }) => (
//               <div key={label} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: '#0a0f1e', border: '1px solid rgba(99,102,241,0.15)' }}>
//                 <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}>
//                   <Icon size={18} style={{ color: '#6366f1' }} />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-0.5">{label}</p>
//                   <a href={href} className="text-sm text-gray-200 hover:text-primary-400 transition-colors">{value}</a>
//                 </div>
//               </div>
//             ))}

//             <div className="p-5 rounded-2xl" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
//               <h4 className="font-semibold text-white mb-2 text-sm">Response time</h4>
//               <p className="text-gray-400 text-sm">We typically respond within <strong className="text-primary-400">4 business hours</strong>. For urgent inquiries, call us directly.</p>
//             </div>
//           </motion.div>

//           {/* Form */}
//           <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
//             {sent ? (
//               <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 rounded-3xl" style={{ background: '#0a0f1e', border: '1px solid rgba(99,102,241,0.2)' }}>
//                 <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(99,102,241,0.15)' }}>
//                   <CheckCircle size={40} style={{ color: '#6366f1' }} />
//                 </div>
//                 <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
//                 <p className="text-gray-400 max-w-sm">Thanks for reaching out. Our team will review your project and get back to you within 24 hours.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="p-8 rounded-3xl space-y-5" style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.06)' }}>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <InputField name="name" label="Full Name" placeholder="Dipesh Tiwari" required />
//                   <InputField name="email" label="Work Email" type="email" placeholder="dipesh@company.com" required />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <InputField name="company" label="Company Name" placeholder="Acme Inc." />
//                   <InputField name="phone" label="Phone" placeholder="+91 (000) 000-000" />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1.5">Budget Range</label>
//                     <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
//                       className="w-full px-4 py-3 rounded-xl text-sm text-gray-300 focus:outline-none"
//                       style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
//                       <option value="" style={{ background: '#0a0f1e' }}>Select budget</option>
//                       {['< 5k', '5k - 15k', '15k - 50k', '50k - 100k', '100k+', 'Not sure'].map((b) => (
//                         <option key={b} value={b} style={{ background: '#0a0f1e' }}>{b}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1.5">Service Needed</label>
//                     <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
//                       className="w-full px-4 py-3 rounded-xl text-sm text-gray-300 focus:outline-none"
//                       style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
//                       <option value="" style={{ background: '#0a0f1e' }}>Select service</option>
//                       {['SaaS Development', 'Web App Development', 'AI Integration', 'UI/UX Design', 'API Development', 'Cloud Solutions', 'Not sure'].map((s) => (
//                         <option key={s} value={s} style={{ background: '#0a0f1e' }}>{s}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-1.5">Tell us about your project <span className="text-red-400">*</span></label>
//                   <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
//                     placeholder="Describe your idea, goals, and any specific requirements..."
//                     className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none resize-none"
//                     style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${errors.message ? '#ef4444' : 'rgba(255,255,255,0.1)'}` }}
//                   />
//                   {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
//                 </div>
//                 <button type="submit" disabled={loading}
//                   className="w-full flex items-center justify-center gap-2 font-semibold text-white py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
//                   style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}>
//                   {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send size={16} /> Send Message</>}
//                 </button>
//                 <p className="text-center text-xs text-gray-600">By submitting, you agree to our Privacy Policy. We never share your information.</p>
//               </form>
//             )}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Sparkles, Orbit } from 'lucide-react'
import { contactAPI } from '../api'
import toast from 'react-hot-toast'

const GRADIENT = 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)'
const BTN = 'linear-gradient(135deg,#6366f1,#8b5cf6)'

const gradientText = {
  background: GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

function Magnetic({ children, strength = 0.18 }) {
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
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

function TiltPanel({ children, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 20 })
  const sy = useSpring(my, { stiffness: 180, damping: 20 })
  const rotateY = useTransform(sx, [-1, 1], [-5, 5])
  const rotateX = useTransform(sy, [-1, 1], [5, -5])

  const move = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width * 2 - 1)
    my.set((e.clientY - r.top) / r.height * 2 - 1)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}


function PhoneAnimation() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [ringing, setRinging] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto w-full max-w-[310px] h-[280px] flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => !reduced && setRinging(true)}
      onMouseLeave={() => setRinging(false)}
      aria-hidden="true"
    >
      <motion.div
        className="absolute w-52 h-52 rounded-full border border-indigo-400/10"
        animate={reduced ? {} : { scale: [1, 1.18, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-cyan-400/10"
        animate={reduced ? {} : { scale: [1.1, 1, 1.1], rotate: [0, 360] }}
        transition={{ scale: { duration: 3.5, repeat: Infinity }, rotate: { duration: 18, repeat: Infinity, ease: 'linear' } }}
      />

      <motion.div
        className="relative w-28 h-48 rounded-[2rem] p-2"
        style={{
          background: 'linear-gradient(145deg,#1f2937,#080b18)',
          border: '1px solid rgba(129,140,248,.45)',
          boxShadow: '0 25px 70px rgba(99,102,241,.3), inset 0 0 25px rgba(255,255,255,.04)',
          transform: 'perspective(700px) rotateY(-14deg) rotateX(5deg)',
        }}
        animate={
          reduced || !ringing
            ? { y: [0, -5, 0] }
            : { rotate: [-3, 3, -3, 3, 0], y: [0, -8, 0] }
        }
        transition={{ duration: ringing ? 0.55 : 3.2, repeat: ringing ? 2 : Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative" style={{ background: 'radial-gradient(circle at 50% 20%,#312e81,#080b18 65%)' }}>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/10" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border border-indigo-300/20 flex items-center justify-center">
            <Phone size={24} className="text-indigo-300" />
          </div>
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border border-white/10" />
        </div>
      </motion.div>

      {!reduced && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-indigo-400"
              style={{ width: 5 + i * 2, height: 5 + i * 2, left: `${27 + i * 12}%`, top: `${26 + (i % 2) * 35}%` }}
              animate={{ y: [0, -18 - i * 5, 0], opacity: [0.15, 0.9, 0.15] }}
              transition={{ duration: 2.1 + i * 0.35, repeat: Infinity, delay: i * 0.25 }}
            />
          ))}
        </>
      )}
    </motion.div>
  )
}

function ContactPlanet() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const sx = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const sy = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.72])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.15])

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mouseX.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    mouseY.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      className="absolute right-[4%] top-16 hidden lg:block w-[430px] h-[430px] pointer-events-auto"
      style={{ y, opacity }}
      aria-hidden
    >
      <motion.div
        className="absolute inset-[16%] rounded-full"
        style={{
          scale,
          rotate,
          rotateX: useTransform(sy, [-1, 1], [8, -8]),
          rotateY: useTransform(sx, [-1, 1], [-10, 10]),
          transformPerspective: 900,
          background: 'radial-gradient(circle at 32% 28%, #9aa4ff 0%, #6366f1 17%, #28165d 46%, #080b18 72%)',
          boxShadow: '0 0 80px rgba(99,102,241,.28), inset -35px -25px 70px rgba(0,0,0,.65)',
        }}
      >
        <motion.div
          className="absolute inset-[15%] rounded-full border border-white/10"
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute top-[23%] left-[25%] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.9)]" />
        <div className="absolute top-[62%] left-[68%] w-2 h-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,.8)]" />
        <div className="absolute top-[43%] left-[47%] w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-indigo-400/20"
          style={{
            rotate: i * 38,
            scaleX: i === 1 ? 0.72 : 1,
            scaleY: i === 2 ? 0.72 : 1,
            rotateX: useTransform(sy, [-1, 1], [5 + i * 3, -5 - i * 3]),
            rotateY: useTransform(sx, [-1, 1], [-7 - i * 2, 7 + i * 2]),
            transformPerspective: 900,
          }}
          animate={reduced ? {} : { rotate: [i * 38, i * 38 + 360] }}
          transition={{ duration: 22 + i * 5, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        animate={reduced ? {} : { scale: [1, 1.6, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        style={{ boxShadow: '0 0 35px rgba(139,92,246,.9)' }}
      />
    </motion.div>
  )
}

function InfoCard({ icon: Icon, label, value, href, index }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ x: 8 }}
      className="group flex items-start gap-4 p-4 rounded-2xl"
      style={{ background: '#0a0f1e', border: '1px solid rgba(99,102,241,0.14)' }}
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.08 }}
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}
      >
        <Icon size={18} style={{ color: '#818cf8' }} />
      </motion.div>
      <div className="min-w-0">
        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
        <span className="text-sm text-gray-200 group-hover:text-indigo-300 transition-colors">{value}</span>
      </div>
      <ArrowRight size={15} className="ml-auto mt-1 text-gray-700 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
    </motion.a>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', budget: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      await contactAPI.submit(form)
      setSent(true)
      toast.success("Message sent! We'll reply within 24 hours.")
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const InputField = ({ name, label, type = 'text', placeholder, required }) => (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1.5">
        {label}{required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${errors[name] ? '#ef4444' : 'rgba(255,255,255,0.1)'}` }}
      />
      {errors[name] && <p className="text-red-400 text-xs mt-1">{errors[name]}</p>}
    </div>
  )

  return (
    <div className="overflow-hidden" style={{ background: '#030712' }}>
      <section className="relative min-h-[560px] pt-36 pb-28 overflow-hidden" style={{ background: 'radial-gradient(ellipse at top, #1a1040 0%, #030712 62%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div
          className="absolute -left-40 top-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <ContactPlanet />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-medium mb-4 tracking-widest" style={{ color: '#818cf8' }}>
              CONTACT
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 45, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-5xl md:text-7xl text-white mb-6 leading-[0.95]"
            >
              Let's Build{' '}
              <span style={gradientText}>Together</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Tell us about your project. We'll get back to you within 24 hours with a plan.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 flex items-center gap-3 text-gray-500 text-sm">
              <Sparkles size={16} className="text-indigo-400" />
              <span>Ideas in. Working products out.</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(99,102,241,.06), transparent 35%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <p className="text-sm font-medium mb-3 tracking-wide text-indigo-400">START A CONVERSATION</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5">Get in Touch</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you have a detailed spec or just a napkin sketch — we want to hear about it. No project is too big or too small.
            </p>

            <div className="space-y-3">
              <InfoCard index={0} icon={Mail} label="Email" value="hello@saasagency.com" href="mailto:hello@saasagency.com" />
              <div className="relative">
  <InfoCard index={1} icon={Phone} label="Phone" value="+91 97133 18696" href="tel:+919713318696" />
  <div className="mt-3 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,.08), rgba(6,182,212,.04))', border: '1px solid rgba(99,102,241,.12)' }}>
    <PhoneAnimation />
  </div>
</div>
              <InfoCard index={2} icon={MapPin} label="Office" value="vijay nagar indore 453221" href="#" />
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="mt-5 p-5 rounded-2xl"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
            >
              <h4 className="font-semibold text-white mb-2 text-sm">Response time</h4>
              <p className="text-gray-400 text-sm">We typically respond within <strong className="text-indigo-400">4 business hours</strong>. For urgent inquiries, call us directly.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 12 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center justify-center h-full min-h-[500px] text-center p-8 rounded-3xl"
                style={{ background: '#0a0f1e', border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.12, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(99,102,241,0.15)' }}
                >
                  <CheckCircle size={40} className="text-indigo-400" />
                </motion.div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 max-w-sm">Thanks for reaching out. Our team will review your project and get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <TiltPanel className="rounded-3xl">
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl space-y-5" style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 30px 80px rgba(0,0,0,.25)' }}>
                  <div className="mb-2">
                    <h3 className="font-display font-bold text-xl text-white">Project details</h3>
                    <p className="text-gray-500 text-sm mt-1">A few details help us understand where to start.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField name="name" label="Full Name" placeholder="Dipesh Tiwari" required />
                    <InputField name="email" label="Work Email" type="email" placeholder="dipesh@company.com" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField name="company" label="Company Name" placeholder="Acme Inc." />
                    <InputField name="phone" label="Phone" placeholder="+91 (000) 000-000" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Budget Range</label>
                      <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm text-gray-300 focus:outline-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <option value="" style={{ background: '#0a0f1e' }}>Select budget</option>
                        {['< 5k', '5k - 15k', '15k - 50k', '50k - 100k', '100k+', 'Not sure'].map((b) => <option key={b} value={b} style={{ background: '#0a0f1e' }}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Service Needed</label>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm text-gray-300 focus:outline-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <option value="" style={{ background: '#0a0f1e' }}>Select service</option>
                        {['SaaS Development', 'Web App Development', 'AI Integration', 'UI/UX Design', 'API Development', 'Cloud Solutions', 'Not sure'].map((s) => <option key={s} value={s} style={{ background: '#0a0f1e' }}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Tell us about your project <span className="text-red-400">*</span></label>
                    <textarea rows={5} maxLength={1200} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are you building, what problem should it solve, and when do you need it?" className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none resize-none focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300" style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${errors.message ? '#ef4444' : 'rgba(255,255,255,0.1)'}` }} />
                    <div className="flex items-center justify-between mt-1">
  {errors.message ? <p className="text-red-400 text-xs">{errors.message}</p> : <p className="text-gray-600 text-xs">No need for a perfect brief.</p>}
  <p className="text-gray-600 text-xs">{form.message.length}/1200</p>
</div>
                  </div>

                  <Magnetic strength={0.08}>
                    <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 font-semibold text-white py-4 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed" style={{ background: BTN, boxShadow: '0 0 35px rgba(99,102,241,0.25)' }}>
                      {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send size={16} /> Send Message</>}
                    </button>
                  </Magnetic>
                  <p className="text-center text-xs text-gray-600">By submitting, you agree to our Privacy Policy. We never share your information.</p>
<p className="text-center text-[11px] text-gray-700">Required fields are marked with *</p>
                </form>
              </TiltPanel>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
