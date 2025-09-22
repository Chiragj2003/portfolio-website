"use client"

import { useRef, useMemo, useCallback, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Mesh, BufferGeometry, PointsMaterial, Points, Color, Vector3, MathUtils } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Sphere, useTexture, Trail, Float } from "@react-three/drei"
import { motion } from "framer-motion"

function Sun() {
  const meshRef = useRef<Mesh>(null)
  const coronaRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y = -state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group>
      {/* Sun core with pulsing effect */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshBasicMaterial 
            color="#ffd700" 
            emissive="#ff6b35" 
            emissiveIntensity={0.8 + Math.sin(Date.now() * 0.001) * 0.2}
          />
        </Sphere>
      </Float>
      
      {/* Sun corona with rotation */}
      <Sphere ref={coronaRef} args={[1.2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#ffa500" 
          transparent 
          opacity={0.3 + Math.sin(Date.now() * 0.002) * 0.1}
        />
      </Sphere>
      
      {/* Sun flares */}
      <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#ff4500" 
          transparent 
          opacity={0.1 + Math.sin(Date.now() * 0.0015) * 0.05}
        />
      </Sphere>
      
      {/* Solar flares */}
      <Trail
        width={0.5}
        length={8}
        color="#ff6b35"
        attenuation={(width) => width}
      >
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#ff6b35" />
        </mesh>
      </Trail>
    </group>
  )
}

function Planet({ 
  radius, 
  distance, 
  speed, 
  color, 
  emissive, 
  emissiveIntensity = 0,
  hasRings = false,
  trailColor = "#6366f1"
}: {
  radius: number
  distance: number
  speed: number
  color: string
  emissive?: string
  emissiveIntensity?: number
  hasRings?: boolean
  trailColor?: string
}) {
  const meshRef = useRef<Mesh>(null)
  const [position] = useState(() => new Vector3())

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * speed
      const x = Math.cos(time) * distance
      const z = Math.sin(time) * distance
      
      position.set(x, 0, z)
      meshRef.current.position.copy(position)
      meshRef.current.rotation.y = state.clock.elapsedTime * 2
    }
  })

  return (
    <group>
      {/* Planet trail */}
      <Trail
        width={radius * 0.3}
        length={20}
        color={trailColor}
        attenuation={(width) => width * 0.8}
      >
        <Sphere ref={meshRef} args={[radius, 16, 16]}>
          <meshStandardMaterial 
            color={color} 
            emissive={emissive} 
            emissiveIntensity={emissiveIntensity}
          />
        </Sphere>
      </Trail>
      
      {/* Planet atmosphere with shimmer */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.1}>
        <Sphere args={[radius * 1.1, 16, 16]} position={position}>
          <meshBasicMaterial 
            color={color} 
            transparent 
            opacity={0.2 + Math.sin(Date.now() * 0.003) * 0.1}
          />
        </Sphere>
      </Float>
      
      {/* Saturn rings with rotation */}
      {hasRings && (
        <mesh rotation={[Math.PI / 2, 0, 0]} position={position}>
          <ringGeometry args={[radius * 1.3, radius * 2, 32]} />
          <meshBasicMaterial 
            color="#8c7853" 
            transparent 
            opacity={0.6 + Math.sin(Date.now() * 0.001) * 0.1}
          />
        </mesh>
      )}
    </group>
  )
}

function OrbitRing({ radius }: { radius: number }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.1} />
    </mesh>
  )
}

function AsteroidBelt() {
  const points = useMemo(() => {
    const positions = []
    for (let i = 0; i < 200; i++) {
      const angle = (i / 200) * Math.PI * 2
      const radius = 5 + Math.random() * 0.5
      positions.push(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
    }
    return new Float32Array(positions)
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#8c7853" size={0.01} />
    </points>
  )
}

function Nebula() {
  const points = useMemo(() => {
    const positions = []
    const colors = []
    for (let i = 0; i < 2000; i++) {
      positions.push(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      )
      
      // Color variation for nebula
      const color = new Color()
      const hue = Math.random() * 0.3 + 0.7 // Purple to pink range
      color.setHSL(hue, 0.8, 0.6)
      colors.push(color.r, color.g, color.b)
    }
    return { positions: new Float32Array(positions), colors: new Float32Array(colors) }
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.positions.length / 3}
          array={points.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={points.colors.length / 3}
          array={points.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        transparent 
        opacity={0.4}
        vertexColors
        sizeAttenuation={false}
      />
    </points>
  )
}

function ShootingStars() {
  const stars = useMemo(() => {
    const starData = []
    for (let i = 0; i < 50; i++) {
      starData.push({
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        ],
        speed: Math.random() * 0.02 + 0.01,
        delay: Math.random() * 10
      })
    }
    return starData
  }, [])

  return (
    <group>
      {stars.map((star, index) => (
        <Float
          key={index}
          speed={star.speed}
          rotationIntensity={0.1}
          floatIntensity={0.1}
        >
          <mesh position={star.position as [number, number, number]}>
            <sphereGeometry args={[0.01, 4, 4]} />
            <meshBasicMaterial 
              color="#ffffff" 
              emissive="#ffffff" 
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function CosmicDust() {
  const dustParticles = useMemo(() => {
    const positions = []
    for (let i = 0; i < 500; i++) {
      positions.push(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120
      )
    }
    return new Float32Array(positions)
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={dustParticles.length / 3}
          array={dustParticles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        color="#888888" 
        size={0.005} 
        transparent 
        opacity={0.3}
        sizeAttenuation={false}
      />
    </points>
  )
}

function SolarSystem() {
  const planets = [
    { radius: 0.15, distance: 2, speed: 1.5, color: "#8c7853", name: "Mercury", trailColor: "#8c7853" },
    { radius: 0.2, distance: 2.8, speed: 1.2, color: "#ffc649", name: "Venus", trailColor: "#ffc649" },
    { radius: 0.25, distance: 3.5, speed: 1, color: "#6b93d6", name: "Earth", trailColor: "#6b93d6" },
    { radius: 0.18, distance: 4.2, speed: 0.8, color: "#c1440e", name: "Mars", trailColor: "#c1440e" },
    { radius: 0.6, distance: 6, speed: 0.6, color: "#ffa500", name: "Jupiter", trailColor: "#ffa500" },
    { radius: 0.5, distance: 7.5, speed: 0.4, color: "#ffff80", name: "Saturn", hasRings: true, trailColor: "#ffff80" },
    { radius: 0.35, distance: 9, speed: 0.3, color: "#4fd0e7", name: "Uranus", trailColor: "#4fd0e7" },
    { radius: 0.32, distance: 10.5, speed: 0.2, color: "#4b70dd", name: "Neptune", trailColor: "#4b70dd" },
  ]

  return (
    <group>
      <Sun />
      <AsteroidBelt />
      <Nebula />
      <ShootingStars />
      <CosmicDust />
      {planets.map((planet, index) => (
        <group key={planet.name}>
          <OrbitRing radius={planet.distance} />
          <Planet {...planet} />
        </group>
      ))}
    </group>
  )
}

export default function SolarSystemBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 -z-10"
    >
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 75 }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Enhanced lighting setup */}
        <ambientLight intensity={0.3} color="#4a148c" />
        <pointLight position={[0, 0, 0]} intensity={3} color="#ffd700" />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b35" />
        
        <SolarSystem />
        
        {/* Enhanced starfield */}
        <Stars 
          radius={300} 
          depth={60} 
          count={8000} 
          factor={6} 
          saturation={0} 
          fade 
          speed={2}
          size={0.5}
        />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#0a0a0a', 10, 100]} />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.1}
          maxDistance={25}
          minDistance={5}
          enableDamping
          dampingFactor={0.03}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>
    </motion.div>
  )
}
