
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particlesRef2 = useRef<THREE.Points>(null);
  const particlesRef3 = useRef<THREE.Points>(null);
  
  const particlePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 800; i++) {
      positions.push(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18
      );
    }
    return new Float32Array(positions);
  }, []);

  const particlePositions2 = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 500; i++) {
      positions.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }
    return new Float32Array(positions);
  }, []);

  const particlePositions3 = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 300; i++) {
      positions.push(
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
    }
    return new Float32Array(positions);
  }, []);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.015;
      particlesRef.current.rotation.x = Math.sin(time * 0.01) * 0.2;
      
      // Dynamic particle movement
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const wave = Math.sin(time * 2 + i * 0.01);
        const pulse = Math.cos(time * 3 + i * 0.005);
        
        positions[i] += wave * 0.003;
        positions[i + 1] += pulse * 0.002;
        positions[i + 2] += Math.sin(time * 1.5 + i * 0.008) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (particlesRef2.current) {
      particlesRef2.current.rotation.y = -time * 0.008;
      particlesRef2.current.rotation.z = Math.cos(time * 0.009) * 0.15;
      
      // Slower, more ambient movement
      const positions = particlesRef2.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(time * 1.2 + i * 0.005) * 0.001;
        positions[i + 1] += Math.cos(time * 0.8 + i * 0.007) * 0.001;
      }
      particlesRef2.current.geometry.attributes.position.needsUpdate = true;
    }

    if (particlesRef3.current) {
      particlesRef3.current.rotation.x = time * 0.005;
      particlesRef3.current.rotation.z = Math.sin(time * 0.006) * 0.1;
      
      // Very subtle background movement
      const positions = particlesRef3.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time * 0.5 + i * 0.003) * 0.0005;
      }
      particlesRef3.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Primary dynamic particles */}
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
          size={0.025} 
          color="#38bdf8" 
          transparent 
          opacity={0.7}
          sizeAttenuation={true}
        />
      </points>

      {/* Secondary ambient particles */}
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
          size={0.018} 
          color="#0ea5e9" 
          transparent 
          opacity={0.5}
          sizeAttenuation={true}
        />
      </points>

      {/* Background depth particles */}
      <points ref={particlesRef3}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions3.length / 3}
            array={particlePositions3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.012} 
          color="#64748b" 
          transparent 
          opacity={0.3}
          sizeAttenuation={true}
        />
      </points>
    </>
  );
};

export default FloatingParticles;
