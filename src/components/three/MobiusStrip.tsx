
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MobiusStrip = () => {
  const mobiusRef = useRef<THREE.Mesh>(null);
  
  const mobiusGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];
    
    const segments = 120;
    const width = 0.5;
    
    for (let i = 0; i <= segments; i++) {
      const u = (i / segments) * Math.PI * 2;
      
      for (let j = -1; j <= 1; j += 0.15) {
        const v = j * width;
        
        const cosU2 = Math.cos(u / 2);
        const sinU2 = Math.sin(u / 2);
        const cosU = Math.cos(u);
        const sinU = Math.sin(u);
        
        const radius = 1.5;
        const x = (radius + v * cosU2) * cosU;
        const y = (radius + v * cosU2) * sinU;
        const z = v * sinU2;
        
        vertices.push(x, y, z);
      }
    }
    
    const pointsPerRing = 15;
    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < pointsPerRing - 1; j++) {
        const current = i * pointsPerRing + j;
        const next = ((i + 1) % (segments + 1)) * pointsPerRing + j;
        
        indices.push(current, next, current + 1);
        indices.push(next, next + 1, current + 1);
      }
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    
    return geometry;
  }, []);
  
  useFrame((state) => {
    if (mobiusRef.current) {
      mobiusRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      mobiusRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      mobiusRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <group position={[1.5, 1.8, 1.5]} scale={1.4}>
      <mesh ref={mobiusRef} geometry={mobiusGeometry}>
        <meshLambertMaterial 
          color="#8b5cf6"
          transparent 
          opacity={0.95}
          side={THREE.DoubleSide}
          emissive="#4c1d95"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
};

export default MobiusStrip;
