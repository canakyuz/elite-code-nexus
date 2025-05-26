
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particlesRef2 = useRef<THREE.Points>(null);
  
  const particlePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 300; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
    }
    return new Float32Array(positions);
  }, []);

  const particlePositions2 = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 200; i++) {
      positions.push(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18
      );
    }
    return new Float32Array(positions);
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.15;
      
      // Sinir sistemi benzeri nabız etkisi
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const pulse = Math.sin(state.clock.elapsedTime * 2 + i * 0.01) * 0.02;
        positions[i] += pulse;
        positions[i + 1] += pulse * 0.5;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (particlesRef2.current) {
      particlesRef2.current.rotation.y = -state.clock.elapsedTime * 0.005;
      particlesRef2.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.006) * 0.1;
    }
  });

  return (
    <>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.02} 
          color="#64748b" 
          transparent 
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>

      <points ref={particlesRef2}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions2.length / 3}
            array={particlePositions2}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.015} 
          color="#00d4ff" 
          transparent 
          opacity={0.4}
          sizeAttenuation={true}
        />
      </points>
    </>
  );
};

export default FloatingParticles;
