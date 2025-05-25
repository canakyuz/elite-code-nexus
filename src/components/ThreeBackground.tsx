
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingBox = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshBasicMaterial wireframe color="#000000" transparent opacity={0.1} />
    </mesh>
  );
};

const FloatingSpheres = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2 + Math.sin(i * 0.5) * 0.3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.3) * 0.3;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.02]} />
            <meshBasicMaterial color="#000000" transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
};

const GridDots = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      linesRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.03;
    }
  });

  const dots = [];
  for (let i = -3; i <= 3; i++) {
    for (let j = -3; j <= 3; j++) {
      if (Math.abs(i) + Math.abs(j) < 3) {
        dots.push(
          <mesh key={`${i}-${j}`} position={[i * 0.4, j * 0.4, -2]}>
            <boxGeometry args={[0.01, 0.01, 0.01]} />
            <meshBasicMaterial color="#000000" transparent opacity={0.3} />
          </mesh>
        );
      }
    }
  }

  return <group ref={linesRef}>{dots}</group>;
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false
        }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
        
        <FloatingSpheres />
        <GridDots />
        
        <FloatingBox position={[-1.2, 0.8, 0]} />
        <FloatingBox position={[1.2, -0.8, 0]} />
        <FloatingBox position={[0, 1.2, -0.8]} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.2} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
