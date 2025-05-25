
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MathematicalShape = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.3, 0.3, 0.3]}>
      <meshBasicMaterial wireframe color="#000000" transparent opacity={0.1} />
    </Box>
  );
};

const GeometricSpheres = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 15 }, (_, i) => {
        const angle = (i / 15) * Math.PI * 2;
        const radius = 2 + Math.sin(i * 0.5) * 0.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.3) * 0.5;
        
        return (
          <Sphere key={i} position={[x, y, z]} args={[0.02]}>
            <meshBasicMaterial color="#000000" transparent opacity={0.6} />
          </Sphere>
        );
      })}
    </group>
  );
};

const GridPattern = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      linesRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.05;
    }
  });

  const lines = [];
  for (let i = -5; i <= 5; i++) {
    for (let j = -5; j <= 5; j++) {
      if (Math.abs(i) + Math.abs(j) < 4) {
        lines.push(
          <Box key={`${i}-${j}`} position={[i * 0.4, j * 0.4, -2]} args={[0.01, 0.01, 0.01]}>
            <meshBasicMaterial color="#000000" transparent opacity={0.3} />
          </Box>
        );
      }
    }
  }

  return <group ref={linesRef}>{lines}</group>;
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <GeometricSpheres />
        <GridPattern />
        
        <MathematicalShape position={[-1.5, 1, 0]} />
        <MathematicalShape position={[1.5, -1, 0]} />
        <MathematicalShape position={[0, 1.5, -1]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
