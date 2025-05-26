
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
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }
    return new Float32Array(positions);
  }, []);

  const particlePositions2 = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 600; i++) {
      positions.push(
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
    }
    return new Float32Array(positions);
  }, []);

  const particlePositions3 = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 400; i++) {
      positions.push(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
    }
    return new Float32Array(positions);
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.005;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.003) * 0.1;
      
      // Yıldız titremi etkisi
      const material = particlesRef.current.material as THREE.PointsMaterial;
      material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }

    if (particlesRef2.current) {
      particlesRef2.current.rotation.y = -state.clock.elapsedTime * 0.003;
      particlesRef2.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.004) * 0.08;
      
      // Farklı hızda titremi
      const material = particlesRef2.current.material as THREE.PointsMaterial;
      material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2.5 + 1) * 0.4;
    }

    if (particlesRef3.current) {
      particlesRef3.current.rotation.y = state.clock.elapsedTime * 0.002;
      particlesRef3.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.002) * 0.05;
      
      // En yavaş titremi
      const material = particlesRef3.current.material as THREE.PointsMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 1.8 + 2) * 0.25;
    }
  });

  return (
    <>
      {/* Parlak mavi yıldızlar */}
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
          size={0.03} 
          color="#00ffff" 
          transparent 
          opacity={0.7}
          sizeAttenuation={true}
        />
      </points>

      {/* Yeşil-mavi karışımı yıldızlar */}
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
          size={0.025} 
          color="#9de3cb" 
          transparent 
          opacity={0.8}
          sizeAttenuation={true}
        />
      </points>

      {/* Büyük parlak yıldızlar */}
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
          size={0.04} 
          color="#96ca6b" 
          transparent 
          opacity={0.5}
          sizeAttenuation={true}
        />
      </points>
    </>
  );
};

export default FloatingParticles;
