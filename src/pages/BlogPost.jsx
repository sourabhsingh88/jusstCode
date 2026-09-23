// import { useEffect, useState } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { Clock, ArrowLeft, Tag } from 'lucide-react'
// import { blogAPI } from '../api'

// const staticBlogs = {
//   'future-of-saas-trends-2025': {
//     title: 'The Future of SaaS: Trends Shaping 2025 and Beyond',
//     content: '<h2>The SaaS Revolution Continues</h2><p>The Software as a Service industry has undergone a massive transformation over the past decade, and 2025 promises even more disruption. With AI becoming table stakes and developer tools evolving rapidly, companies that adapt will thrive.</p><h3>1. AI-Native Products</h3><p>The era of "AI-powered" as a differentiator is over. The new frontier is AI-native products — applications built from the ground up with intelligence at their core, not as a bolt-on feature. Products like Cursor, Notion AI, and Linear are showing what this looks like at its best.</p><h3>2. Vertical SaaS Dominance</h3><p>Generic horizontal SaaS tools are giving way to deeply specialized vertical solutions. Healthcare, legal, construction — every industry now has SaaS players that understand the domain deeply. These vertical players command premium pricing and much higher retention.</p><h3>3. Usage-Based Pricing</h3><p>The subscription model is evolving. Usage-based pricing aligns vendor success with customer success, creating a more sustainable and fair business model for all parties. Companies like Stripe, Twilio, and AWS have proven this model at massive scale.</p><h3>4. The Developer-Led Era</h3><p>Bottom-up growth through developer adoption continues to be the most effective go-to-market in SaaS. Companies that invest in great developer experience — excellent docs, generous free tiers, powerful APIs — consistently win market share.</p>',
//     excerpt: 'Discover the key trends transforming the SaaS industry.',
//     category: 'Industry Trends',
//     tags: ['SaaS', 'AI', 'Trends'],
//     readTime: 8,
//     authorName: 'JusstCode Team',
//     thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80',
//     createdAt: '2024-12-15',
//   },
//   'building-multi-tenant-saas-architecture': {
//     title: 'Building Multi-Tenant SaaS Architecture: A Complete Guide',
//     content: '<h2>Understanding Multi-Tenancy</h2><p>Multi-tenancy is the backbone of scalable SaaS products. Choosing the right isolation strategy affects your security, performance, and cost structure dramatically.</p><h3>Database Strategies</h3><p>There are three primary approaches: shared database with shared schema, shared database with separate schemas, and separate databases per tenant. Each has trade-offs that must be weighed against your security requirements, scale goals, and cost constraints.</p><h3>Shared Schema (Row-Level Isolation)</h3><p>The simplest approach. Every tenant shares the same tables, with a tenant_id column identifying records. This is cheapest to operate but requires extreme care to prevent data leakage.</p><h3>Schema-Per-Tenant</h3><p>Each tenant gets their own schema within the same database. Stronger isolation, easier backups, but more complex migrations and schema management.</p><h3>Database-Per-Tenant</h3><p>Maximum isolation. Each tenant gets a dedicated database. Best for enterprise clients with compliance requirements, but operationally complex and expensive to run.</p>',
//     excerpt: 'Learn the best practices for multi-tenant SaaS architecture.',
//     category: 'Engineering',
//     tags: ['Architecture', 'Multi-Tenant', 'Backend'],
//     readTime: 12,
//     authorName: 'JusstCode Team',
//     thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
//     createdAt: '2024-12-08',
//   },
// }

// export default function BlogPost() {
//   const { slug } = useParams()
//   const [blog, setBlog] = useState(staticBlogs[slug] || null)
//   const [loading, setLoading] = useState(!staticBlogs[slug])

//   useEffect(() => {
//     if (!staticBlogs[slug]) {
//       blogAPI.getOne(slug).then(({ data }) => { setBlog(data.data); setLoading(false) }).catch(() => setLoading(false))
//     }
//   }, [slug])

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center" style={{ background: '#030712' }}>
//       <div className="w-12 h-12 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
//     </div>
//   )

//   if (!blog) return (
//     <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#030712' }}>
//       <h1 className="font-display font-bold text-3xl text-white mb-4">Post not found</h1>
//       <Link to="/blog" className="text-primary-400 hover:text-primary-300">← Back to Blog</Link>
//     </div>
//   )

//   return (
//     <div style={{ background: '#030712' }}>
//       {/* Hero image */}
//       <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
//         <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover" />
//         <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(3,7,18,0.3) 0%, rgba(3,7,18,0.9) 100%)' }} />
//         <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
//           <div className="max-w-4xl mx-auto">
//             <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-4 transition-colors">
//               <ArrowLeft size={14} /> Back to Blog
//             </Link>
//             <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: 'rgba(99,102,241,0.3)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.4)' }}>
//               {blog.category}
//             </span>
//             <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight">{blog.title}</h1>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Meta */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center gap-5 mb-12 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
//           <div className="flex items-center gap-2">
//             <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>N</div>
//             <span className="text-sm font-medium text-gray-300">{blog.authorName}</span>
//           </div>
//           <span className="flex items-center gap-1.5 text-sm text-gray-500"><Clock size={14} /> {blog.readTime} min read</span>
//           <span className="text-sm text-gray-500">{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
//         </motion.div>

//         {/* Body */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
//           className="prose-dark"
//           dangerouslySetInnerHTML={{ __html: blog.content }}
//         />

//         {/* Tags */}
//         {blog.tags?.length > 0 && (
//           <div className="mt-12 pt-8 flex flex-wrap items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
//             <Tag size={14} className="text-gray-500" />
//             {blog.tags.map((tag) => (
//               <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(99,102,241,0.12)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.25)' }}>{tag}</span>
//             ))}
//           </div>
//         )}

//         {/* CTA */}
//         <div className="mt-16 p-8 rounded-3xl text-center" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)' }}>
//           <h3 className="font-display font-bold text-2xl text-white mb-3">Ready to build your SaaS product?</h3>
//           <p className="text-gray-400 mb-6 text-sm">Turn your idea into a production-ready product with JusstCode.</p>
//           <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-white px-8 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
//             Start a Project →
//           </Link>
//         </div>
//       </article>
//     </div>
//   )
// }

import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion'
import { Clock, ArrowLeft, Tag } from 'lucide-react'
import { blogAPI } from '../api'

const BTN = 'linear-gradient(135deg,#6366f1,#8b5cf6)'

const staticBlogs = {
  'future-of-saas-trends-2025': {
    title: 'The Future of SaaS: Trends Shaping 2025 and Beyond',
    content: '<h2>The SaaS Revolution Continues</h2><p>The Software as a Service industry has undergone a massive transformation over the past decade, and 2025 promises even more disruption. With AI becoming table stakes and developer tools evolving rapidly, companies that adapt will thrive.</p><h3>1. AI-Native Products</h3><p>The era of "AI-powered" as a differentiator is over. The new frontier is AI-native products — applications built from the ground up with intelligence at their core, not as a bolt-on feature. Products like Cursor, Notion AI, and Linear are showing what this looks like at its best.</p><h3>2. Vertical SaaS Dominance</h3><p>Generic horizontal SaaS tools are giving way to deeply specialized vertical solutions. Healthcare, legal, construction — every industry now has SaaS players that understand the domain deeply. These vertical players command premium pricing and much higher retention.</p><h3>3. Usage-Based Pricing</h3><p>The subscription model is evolving. Usage-based pricing aligns vendor success with customer success, creating a more sustainable and fair business model for all parties. Companies like Stripe, Twilio, and AWS have proven this model at massive scale.</p><h3>4. The Developer-Led Era</h3><p>Bottom-up growth through developer adoption continues to be the most effective go-to-market in SaaS. Companies that invest in great developer experience — excellent docs, generous free tiers, powerful APIs — consistently win market share.</p>',
    excerpt: 'Discover the key trends transforming the SaaS industry.',
    category: 'Industry Trends',
    tags: ['SaaS', 'AI', 'Trends'],
    readTime: 8,
    authorName: 'Jusst Code Team',
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80',
    createdAt: '2024-12-15',
  },
  'building-multi-tenant-saas-architecture': {
    title: 'Building Multi-Tenant SaaS Architecture: A Complete Guide',
    content: '<h2>Understanding Multi-Tenancy</h2><p>Multi-tenancy is the backbone of scalable SaaS products. Choosing the right isolation strategy affects your security, performance, and cost structure dramatically.</p><h3>Database Strategies</h3><p>There are three primary approaches: shared database with shared schema, shared database with separate schemas, and separate databases per tenant. Each has trade-offs that must be weighed against your security requirements, scale goals, and cost constraints.</p><h3>Shared Schema (Row-Level Isolation)</h3><p>The simplest approach. Every tenant shares the same tables, with a tenant_id column identifying records. This is cheapest to operate but requires extreme care to prevent data leakage.</p><h3>Schema-Per-Tenant</h3><p>Each tenant gets their own schema within the same database. Stronger isolation, easier backups, but more complex migrations and schema management.</p><h3>Database-Per-Tenant</h3><p>Maximum isolation. Each tenant gets a dedicated database. Best for enterprise clients with compliance requirements, but operationally complex and expensive to run.</p>',
    excerpt: 'Learn the best practices for multi-tenant SaaS architecture.',
    category: 'Engineering',
    tags: ['Architecture', 'Multi-Tenant', 'Backend'],
    readTime: 12,
    authorName: 'Jusst Code Team',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    createdAt: '2024-12-08',
  },
}

/* ================================================================== */
/*  Shared building block                                               */
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
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={reset} style={{ x: sx, y: sy }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  )
}

/* ================================================================== */
/*  Hero: parallax image + fading title as the article scrolls under it */
/* ================================================================== */
function ArticleHero({ blog }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.25])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.55])

  return (
    <div ref={ref} className="relative h-[50vh] min-h-[320px] overflow-hidden">
      <motion.img
        src={blog.thumbnail}
        alt={blog.title}
        style={{ y: imgY, scale: imgScale }}
        className="w-full h-full object-cover"
      />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(3,7,18,0.3) 0%, rgba(3,7,18,0.9) 100%)' }}
        />
      </motion.div>
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
            style={{ background: 'rgba(99,102,241,0.3)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.4)' }}
          >
            {blog.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight"
          >
            {blog.title}
          </motion.h1>
        </div>
      </motion.div>
    </div>
  )
}

/* ================================================================== */
/*  Page                                                                */
/* ================================================================== */
export default function BlogPost() {
  const { slug } = useParams()
  const [blog, setBlog] = useState(staticBlogs[slug] || null)
  const [loading, setLoading] = useState(!staticBlogs[slug])

  // reading progress, tracked across the whole document
  const { scrollYProgress } = useScroll()
  const readingProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    if (!staticBlogs[slug]) {
      blogAPI
        .getOne(slug)
        .then(({ data }) => {
          setBlog(data.data)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [slug])

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#030712' }}>
        <div className="w-12 h-12 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
      </div>
    )

  if (!blog)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#030712' }}>
        <h1 className="font-display font-bold text-3xl text-white mb-4">Post not found</h1>
        <Link to="/blog" className="text-primary-400 hover:text-primary-300">
          ← Back to Blog
        </Link>
      </div>
    )

  return (
    <div style={{ background: '#030712' }}>
      {/* Reading progress bar */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left"
        style={{ scaleX: readingProgress, background: BTN }}
      />

      <ArticleHero blog={blog} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-5 mb-12 pb-8"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ background: BTN }}
            >
              {blog.authorName?.[0] ?? 'J'}
            </div>
            <span className="text-sm font-medium text-gray-300">{blog.authorName}</span>
          </div>
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            <Clock size={14} /> {blog.readTime} min read
          </span>
          <span className="text-sm text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose-dark"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="mt-12 pt-8 flex flex-wrap items-center gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Tag size={14} className="text-gray-500" />
            {blog.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -2 }}
                className="text-xs px-3 py-1 rounded-full"
                style={{ background: 'rgba(99,102,241,0.12)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.25)' }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl text-center relative overflow-hidden"
          style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)' }}
        >
          <motion.div
            aria-hidden
            className="absolute -inset-1 opacity-30"
            style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(99,102,241,0.4), transparent 70%)' }}
          />
          <div className="relative">
            <h3 className="font-display font-bold text-2xl text-white mb-3">Ready to build your SaaS product?</h3>
            <p className="text-gray-400 mb-6 text-sm">Turn your idea into a production-ready product with Jusst Code.</p>
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-semibold text-white px-8 py-3 rounded-xl"
                style={{ background: BTN }}
              >
                Start a Project →
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </article>
    </div>
  )
}