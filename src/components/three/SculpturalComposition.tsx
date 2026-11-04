"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function SculpturalComposition() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const satellitesRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particle positions with multi-hued stardust
  const [particlesPos] = useMemo(() => {
    const count = 160;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Smooth subtle pointer parallax on main group
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.45 + t * 0.06,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.35 + Math.sin(t * 0.5) * 0.05,
        0.05
      );
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.14;
    }

    // Core slow rotation
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.22;
      coreRef.current.rotation.y = t * 0.32;
    }

    // Differential orbital rings (Red, Pink, Purple)
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.16;
      ring1Ref.current.rotation.y = t * 0.26;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.2;
      ring2Ref.current.rotation.z = t * 0.14;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.12;
      ring3Ref.current.rotation.z = -t * 0.22;
    }

    // Satellites orbital orbit
    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = t * 0.38;
      satellitesRef.current.rotation.x = Math.sin(t * 0.3) * 0.22;
    }

    // Micro-particles shimmer & slow drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.035;
      particlesRef.current.rotation.x = t * 0.025;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Studio Lighting System: Purple, Pink, Crimson Red */}
      <ambientLight color="#1A0E2E" intensity={1.2} />

      {/* Neon Purple Key Light */}
      <directionalLight
        color="#C084FC"
        intensity={3.5}
        position={[5, 6, 4]}
      />

      {/* Neon Pink Rim Light */}
      <directionalLight
        color="#F43F5E"
        intensity={3.8}
        position={[-6, -4, -4]}
      />

      {/* Crimson Red Fill Light */}
      <pointLight
        color="#EF4444"
        intensity={3.0}
        position={[0, 1.5, 3]}
        distance={10}
      />

      {/* Deep Violet Back Light */}
      <pointLight
        color="#7E22CE"
        intensity={2.8}
        position={[0, -2, -2]}
        distance={8}
      />

      {/* Central Abstract Violet-Wine Glass Torus Knot Sculpture */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.05, 0.32, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#9333EA"
          emissive="#581C87"
          emissiveIntensity={0.35}
          roughness={0.14}
          metalness={0.35}
          transmission={0.72}
          thickness={1.5}
          clearcoat={1.0}
          clearcoatRoughness={0.08}
          reflectivity={0.95}
        />
      </mesh>

      {/* Inner Glowing Magenta Pink Octahedron Core Gem */}
      <mesh scale={[0.46, 0.46, 0.46]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#EC4899"
          roughness={0.15}
          metalness={0.92}
          emissive="#BE185D"
          emissiveIntensity={0.65}
        />
      </mesh>

      {/* Ring 1: Neon Magenta Pink Orbital Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.0, 0.026, 24, 100]} />
        <meshStandardMaterial
          color="#EC4899"
          metalness={0.9}
          roughness={0.18}
          emissive="#BE185D"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Ring 2: Electric Violet Purple Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.32, 0.022, 24, 100]} />
        <meshStandardMaterial
          color="#A855F7"
          metalness={0.88}
          roughness={0.2}
          emissive="#7E22CE"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Ring 3: Crimson Red Orbital Ring */}
      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.62, 0.02, 24, 100]} />
        <meshStandardMaterial
          color="#EF4444"
          metalness={0.85}
          roughness={0.25}
          emissive="#991B1B"
          emissiveIntensity={0.3}
          opacity={0.85}
          transparent
        />
      </mesh>

      {/* Orbiting Satellite Crystals (Red, Purple, Pink) */}
      <group ref={satellitesRef}>
        <mesh position={[2.45, 0.35, 0]} scale={[0.16, 0.16, 0.16]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#EC4899"
            metalness={0.9}
            roughness={0.15}
            emissive="#BE185D"
            emissiveIntensity={0.7}
          />
        </mesh>

        <mesh position={[-2.25, -0.65, 0.5]} scale={[0.14, 0.14, 0.14]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#A855F7"
            transmission={0.85}
            roughness={0.1}
            thickness={1.2}
            emissive="#7E22CE"
            emissiveIntensity={0.3}
          />
        </mesh>

        <mesh position={[0.5, 2.35, -0.8]} scale={[0.12, 0.12, 0.12]}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#EF4444"
            metalness={0.8}
            roughness={0.18}
            emissive="#B91C1C"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Cosmic Stardust Particles (Purple & Pink Glow) */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPos.length / 3}
            array={particlesPos}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.042}
          color="#F472B6"
          transparent
          opacity={0.85}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
