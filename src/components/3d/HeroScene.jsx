// import { useRef, useMemo } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Sphere, MeshDistortMaterial, Float, Stars, OrbitControls } from '@react-three/drei'
// import * as THREE from 'three'

// function AnimatedSphere() {
//   const meshRef = useRef()
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
//     }
//   })
//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
//       <Sphere ref={meshRef} args={[1.4, 100, 200]} scale={1}>
//         <MeshDistortMaterial
//           color="#6366f1"
//           attach="material"
//           distort={0.45}
//           speed={2.5}
//           roughness={0.1}
//           metalness={0.8}
//           emissive="#3730a3"
//           emissiveIntensity={0.3}
//         />
//       </Sphere>
//     </Float>
//   )
// }

// function ParticleField() {
//   const count = 800
//   const positions = useMemo(() => {
//     const arr = new Float32Array(count * 3)
//     for (let i = 0; i < count; i++) {
//       arr[i * 3] = (Math.random() - 0.5) * 20
//       arr[i * 3 + 1] = (Math.random() - 0.5) * 20
//       arr[i * 3 + 2] = (Math.random() - 0.5) * 20
//     }
//     return arr
//   }, [])

//   const particlesRef = useRef()
//   useFrame((state) => {
//     if (particlesRef.current) {
//       particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
//       particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
//     }
//   })

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
//       </bufferGeometry>
//       <pointsMaterial color="#8b5cf6" size={0.04} transparent opacity={0.7} sizeAttenuation />
//     </points>
//   )
// }

// function RingOrbit() {
//   const ringRef = useRef()
//   useFrame((state) => {
//     if (ringRef.current) {
//       ringRef.current.rotation.x = Math.PI / 2.5
//       ringRef.current.rotation.z = state.clock.elapsedTime * 0.3
//     }
//   })
//   return (
//     <mesh ref={ringRef}>
//       <torusGeometry args={[2.2, 0.02, 16, 100]} />
//       <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.6} transparent opacity={0.6} />
//     </mesh>
//   )
// }

// function RingOrbit2() {
//   const ringRef = useRef()
//   useFrame((state) => {
//     if (ringRef.current) {
//       ringRef.current.rotation.x = Math.PI / 3.5
//       ringRef.current.rotation.z = -state.clock.elapsedTime * 0.2
//     }
//   })
//   return (
//     <mesh ref={ringRef}>
//       <torusGeometry args={[2.8, 0.015, 16, 100]} />
//       <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} transparent opacity={0.4} />
//     </mesh>
//   )
// }

// export default function HeroScene() {
//   return (
//     <div className="absolute inset-0 w-full h-full">
//       <Canvas
//         camera={{ position: [0, 0, 5], fov: 45 }}
//         gl={{ antialias: true, alpha: true }}
//         style={{ background: 'transparent' }}
//       >
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} color="#6366f1" />
//         <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
//         <pointLight position={[10, -5, -10]} intensity={0.3} color="#8b5cf6" />
//         <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
//         <ParticleField />
//         <AnimatedSphere />
//         <RingOrbit />
//         <RingOrbit2 />
//       </Canvas>
//     </div>
//   )
// }

import { Component, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Stars, Sphere, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const { clamp, damp } = THREE.MathUtils

/* ------------------------------------------------------------------ */
/*  Shared state (written by DOM listeners, read every frame)           */
/*  target = raw scroll progress 0..1, smooth = eased version           */
/*  tx/ty  = raw pointer -1..1,        px/py  = eased version           */
/* ------------------------------------------------------------------ */
const makeStore = () => ({ target: 0, smooth: 0, tx: 0, ty: 0, px: 0, py: 0 })

/* ------------------------------------------------------------------ */
/*  Camera: eases toward pointer, pulls back + drifts as you scroll     */
/* ------------------------------------------------------------------ */
function CameraRig({ store }) {
  useFrame((state, delta) => {
    const s = store.current
    s.smooth = damp(s.smooth, s.target, 3.5, delta)
    s.px = damp(s.px, s.tx, 3, delta)
    s.py = damp(s.py, s.ty, 3, delta)

    const narrow = state.size.width < 768
    const cam = state.camera
    cam.position.x = s.px * 0.7
    cam.position.y = s.py * 0.45 - s.smooth * 0.6
    cam.position.z = (narrow ? 7.4 : 5.4) + s.smooth * 2.4
    cam.lookAt(0, 0, 0)
  })
  return null
}

/* ------------------------------------------------------------------ */
/*  Core: distorted sphere that gets wilder and shifts colour on scroll */
/* ------------------------------------------------------------------ */
function Core({ store }) {
  const mesh = useRef()
  const mat = useRef()
  const indigo = useMemo(() => new THREE.Color('#6366f1'), [])
  const cyan = useMemo(() => new THREE.Color('#06b6d4'), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const s = store.current.smooth
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.1
      mesh.current.rotation.y = t * 0.15
      mesh.current.scale.setScalar(1 - s * 0.25)
    }
    if (mat.current) {
      mat.current.distort = 0.38 + s * 0.35
      mat.current.color.copy(indigo).lerp(cyan, s)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={mesh} args={[1.4, 128, 128]}>
        <MeshDistortMaterial
          ref={mat}
          color="#6366f1"
          distort={0.4}
          speed={2.5}
          roughness={0.1}
          metalness={0.8}
          emissive="#3730a3"
          emissiveIntensity={0.3}
        />
      </Sphere>
      {/* soft halo */}
      <mesh scale={1.32}>
        <sphereGeometry args={[1.4, 48, 48]} />
        <meshBasicMaterial color="#6366f1" side={THREE.BackSide} transparent opacity={0.08} depthWrite={false} />
      </mesh>
    </Float>
  )
}

/* Wireframe shell counter-rotating around the core */
function Shell({ store }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = -t * 0.12
    ref.current.rotation.x = t * 0.06
    ref.current.scale.setScalar(1 + store.current.smooth * 0.5)
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.95, 1]} />
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.22} />
    </mesh>
  )
}

/* ------------------------------------------------------------------ */
/*  Orbit rings                                                         */
/* ------------------------------------------------------------------ */
function Ring({ store, radius, tube, color, tilt, speed, opacity }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * speed
    ref.current.scale.setScalar(1 + store.current.smooth * 0.3)
  })
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, tube, 16, 128]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={opacity} />
    </mesh>
  )
}

/* ------------------------------------------------------------------ */
/*  Particles: slow drift, extra spin + parallax on scroll              */
/* ------------------------------------------------------------------ */
function ParticleField({ store, count }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 20
    return arr
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const s = store.current
    ref.current.rotation.y = t * 0.02 + s.smooth * 0.8
    ref.current.rotation.x = t * 0.01 + s.smooth * 0.3
    ref.current.position.x = -s.px * 0.4
    ref.current.position.y = -s.py * 0.3
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#8b5cf6" size={0.04} transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  )
}

/* ------------------------------------------------------------------ */
/*  Floating product panels: browser windows and phones orbit the core  */
/*  and fly outward as the visitor scrolls                              */
/* ------------------------------------------------------------------ */
const CODE_COLORS = ['#818cf8', '#22d3ee', '#a78bfa', '#e2e8f0']

function Browser({ accent, index }) {
  const lines = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const r = Math.abs(Math.sin(index * 12.9898 + i * 78.233))
      const indent = i % 3 === 1 ? 0.12 : i % 4 === 2 ? 0.24 : 0
      const w = 0.25 + r * 0.6
      return { w, x: -0.6 + indent + w / 2, y: 0.28 - i * 0.095, c: CODE_COLORS[(i + index) % 4] }
    })
  }, [index])

  return (
    <group>
      {/* glow edge */}
      <RoundedBox args={[1.56, 1.06, 0.04]} radius={0.08} smoothness={4} position={[0, 0, -0.03]}>
        <meshBasicMaterial color={accent} transparent opacity={0.4} toneMapped={false} />
      </RoundedBox>
      {/* body */}
      <RoundedBox args={[1.5, 1, 0.06]} radius={0.07} smoothness={4}>
        <meshStandardMaterial color="#0b1020" metalness={0.6} roughness={0.3} emissive="#1e1b4b" emissiveIntensity={0.4} />
      </RoundedBox>
      {/* title bar */}
      <mesh position={[0, 0.43, 0.034]}>
        <boxGeometry args={[1.46, 0.13, 0.004]} />
        <meshBasicMaterial color="#141c38" />
      </mesh>
      {['#f87171', '#fbbf24', '#4ade80'].map((c, i) => (
        <mesh key={c} position={[-0.65 + i * 0.075, 0.43, 0.04]}>
          <sphereGeometry args={[0.022, 12, 12]} />
          <meshBasicMaterial color={c} toneMapped={false} />
        </mesh>
      ))}
      {/* code lines */}
      {lines.map((l, i) => (
        <mesh key={i} position={[l.x, l.y, 0.036]}>
          <boxGeometry args={[l.w, 0.04, 0.006]} />
          <meshBasicMaterial color={l.c} toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}

function Phone({ accent }) {
  return (
    <group>
      <RoundedBox args={[0.78, 1.46, 0.04]} radius={0.12} smoothness={4} position={[0, 0, -0.03]}>
        <meshBasicMaterial color={accent} transparent opacity={0.4} toneMapped={false} />
      </RoundedBox>
      <RoundedBox args={[0.72, 1.4, 0.07]} radius={0.11} smoothness={4}>
        <meshStandardMaterial color="#0b1020" metalness={0.6} roughness={0.3} emissive="#1e1b4b" emissiveIntensity={0.4} />
      </RoundedBox>
      <mesh position={[0, 0.62, 0.04]}>
        <boxGeometry args={[0.22, 0.045, 0.006]} />
        <meshBasicMaterial color="#020617" />
      </mesh>
      <mesh position={[0, 0.3, 0.04]}>
        <boxGeometry args={[0.56, 0.36, 0.006]} />
        <meshBasicMaterial color={accent} transparent opacity={0.85} toneMapped={false} />
      </mesh>
      {[-0.02, -0.24].map((y) => (
        <mesh key={y} position={[0, y, 0.04]}>
          <boxGeometry args={[0.56, 0.16, 0.006]} />
          <meshBasicMaterial color="#1c2547" />
        </mesh>
      ))}
      <mesh position={[0, -0.5, 0.04]}>
        <boxGeometry args={[0.4, 0.1, 0.006]} />
        <meshBasicMaterial color="#22d3ee" toneMapped={false} />
      </mesh>
    </group>
  )
}

const PANELS = [
  { kind: 'browser', a: 0.0, r: 3.1, y: 0.5, s: 1.0, speed: 0.12, accent: '#6366f1' },
  { kind: 'phone', a: 1.3, r: 3.0, y: -0.5, s: 1.0, speed: 0.12, accent: '#06b6d4' },
  { kind: 'browser', a: 2.6, r: 3.4, y: -0.9, s: 0.75, speed: 0.12, accent: '#8b5cf6' },
  { kind: 'browser', a: 3.9, r: 3.2, y: 0.9, s: 0.85, speed: 0.12, accent: '#06b6d4' },
  { kind: 'phone', a: 5.2, r: 3.3, y: 0.3, s: 0.85, speed: 0.12, accent: '#8b5cf6' },
]

function Panel({ cfg, index, store }) {
  const ref = useRef()
  useFrame((state) => {
    const g = ref.current
    if (!g) return
    const t = state.clock.elapsedTime
    const s = store.current.smooth
    const angle = cfg.a + t * cfg.speed + s * 1.6
    const radius = cfg.r + s * 2.2
    const y = cfg.y * (1 + s * 0.6) + Math.sin(t * 0.8 + cfg.a) * 0.12
    g.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
    g.lookAt(state.camera.position) // cards always face the visitor
    g.rotateZ(Math.sin(cfg.a) * 0.12)
    g.scale.setScalar(cfg.s * (1 - s * 0.2))
  })
  return (
    <group ref={ref}>
      {cfg.kind === 'browser' ? <Browser accent={cfg.accent} index={index} /> : <Phone accent={cfg.accent} />}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  World: everything that turns as a unit                              */
/* ------------------------------------------------------------------ */
function World({ store, isMobile, offsetX }) {
  const group = useRef()
  useFrame((state) => {
    if (!group.current) return
    const s = store.current
    group.current.rotation.y = state.clock.elapsedTime * 0.05 + s.smooth * 1.2 + s.px * 0.25
    group.current.rotation.x = -s.py * 0.15
    group.current.position.x = offsetX
  })

  return (
    <group ref={group}>
      <Stars radius={80} depth={50} count={isMobile ? 1200 : 3000} factor={3} saturation={0} fade speed={0.5} />
      <ParticleField store={store} count={isMobile ? 400 : 800} />
      <Core store={store} />
      <Shell store={store} />
      <Ring store={store} radius={2.2} tube={0.02} color="#06b6d4" tilt={Math.PI / 2.5} speed={0.3} opacity={0.6} />
      <Ring store={store} radius={2.8} tube={0.015} color="#8b5cf6" tilt={Math.PI / 3.5} speed={-0.2} opacity={0.4} />
      {PANELS.map((cfg, i) => (
        <Panel key={i} cfg={cfg} index={i} store={store} />
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  If WebGL is unavailable the hero simply renders without the scene   */
/* ------------------------------------------------------------------ */
class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/*   persistent: true  -> canvas is fixed behind the whole page and the */
/*                        scene evolves across the full page scroll.    */
/*                false -> scene lives inside the hero (default) and    */
/*                        reacts to the first screen of scrolling.      */
/*   offsetX:     shift the scene sideways (e.g. 1.6 to sit right of    */
/*                left-aligned hero text).                              */
/* ------------------------------------------------------------------ */
export default function HeroScene({ persistent = false, offsetX = 0 }) {
  const wrapRef = useRef(null)
  const store = useRef(makeStore())
  const [visible, setVisible] = useState(true)
  const reduced = usePrefersReducedMotion()
  const isMobile = useMemo(() => typeof window !== 'undefined' && window.innerWidth < 768, [])

  useEffect(() => {
    const onScroll = () => {
      const range = persistent
        ? document.documentElement.scrollHeight - window.innerHeight
        : window.innerHeight
      store.current.target = clamp(window.scrollY / Math.max(range, 1), 0, 1)
    }
    const onMove = (e) => {
      store.current.tx = (e.clientX / window.innerWidth) * 2 - 1
      store.current.ty = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', onMove)
    }
  }, [persistent])

  // stop rendering when the hero is off-screen (saves battery and GPU)
  useEffect(() => {
    if (persistent || !wrapRef.current) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 })
    io.observe(wrapRef.current)
    return () => io.disconnect()
  }, [persistent])

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={`pointer-events-none ${persistent ? 'fixed' : 'absolute'} inset-0 w-full h-full`}
    >
      <SceneBoundary>
        <Canvas
          frameloop={reduced ? 'demand' : visible ? 'always' : 'never'}
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 5.4], fov: 45 }}
          gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#6366f1" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
          <pointLight position={[10, -5, -10]} intensity={0.3} color="#8b5cf6" />
          <CameraRig store={store} />
          <World store={store} isMobile={isMobile} offsetX={offsetX} />
        </Canvas>
      </SceneBoundary>
    </div>
  )
}