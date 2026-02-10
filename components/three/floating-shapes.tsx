'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, shape }: { position: [number, number, number]; shape: 'sphere' | 'box' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.3;
  });

  const material = (
    <meshStandardMaterial
      color="#0ea5e9"
      emissive="#d946ef"
      emissiveIntensity={0.2}
      roughness={0.3}
      metalness={0.8}
    />
  );

  return (
    <mesh ref={meshRef} position={position}>
      {shape === 'sphere' && <Sphere args={[1, 32, 32]}>{material}</Sphere>}
      {shape === 'box' && <Box args={[1.5, 1.5, 1.5]}>{material}</Box>}
      {shape === 'torus' && <Torus args={[1, 0.4, 16, 32]}>{material}</Torus>}
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />
      
      <FloatingShape position={[-3, 0, -2]} shape="sphere" />
      <FloatingShape position={[3, -1, -3]} shape="box" />
      <FloatingShape position={[0, 2, -4]} shape="torus" />
      <FloatingShape position={[-4, -2, -5]} shape="sphere" />
      <FloatingShape position={[4, 1, -2]} shape="torus" />
    </>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
