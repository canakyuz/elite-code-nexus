
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 1000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Create mathematical distribution patterns
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 3 + Math.random() * 2;
      
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Gradient colors from black to gray
      const intensity = Math.random() * 0.5;
      colors[i * 3] = intensity;
      colors[i * 3 + 1] = intensity;
      colors[i * 3 + 2] = intensity;
    }
    
    return [positions, colors];
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        vertexColors 
        transparent 
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

const FractalGeometry = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.5, 2]} />
      <meshBasicMaterial 
        wireframe 
        color="#000000" 
        transparent 
        opacity={0.3}
      />
    </mesh>
  );
};

const WaveGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const gridSize = 20;
    const spacing = 0.2;
    const geometry = new THREE.PlaneGeometry(gridSize * spacing, gridSize * spacing, gridSize - 1, gridSize - 1);
    
    return geometry;
  }, []);
  
  useFrame((state) => {
    if (meshRef.current && meshRef.current.geometry) {
      const positions = meshRef.current.geometry.attributes.position;
      const array = positions.array as Float32Array;
      
      for (let i = 0; i < positions.count; i++) {
        const x = array[i * 3];
        const z = array[i * 3 + 2];
        const wave = Math.sin(x * 5 + state.clock.elapsedTime) * 
                    Math.cos(z * 5 + state.clock.elapsedTime) * 0.05;
        array[i * 3 + 1] = wave;
      }
      positions.needsUpdate = true;
    }
    
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      gridRef.current.position.z = -3;
    }
  });
  
  return (
    <group ref={gridRef}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial wireframe color="#000000" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

const FloatingTorus = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Floating movement
      torusRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <mesh ref={torusRef} position={position} scale={scale}>
      <torusGeometry args={[0.3, 0.1, 16, 100]} />
      <meshBasicMaterial 
        wireframe 
        color="#000000" 
        transparent 
        opacity={0.4}
      />
    </mesh>
  );
};

const DNAHelix = () => {
  const helixRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  
  const helixPoints = useMemo(() => {
    const points = [];
    const segments = 50;
    const height = 4;
    const radius = 0.5;
    
    for (let i = 0; i < segments; i++) {
      const t = i / segments;
      const angle1 = t * Math.PI * 4;
      const angle2 = angle1 + Math.PI;
      const y = (t - 0.5) * height;
      
      points.push({
        position1: [Math.cos(angle1) * radius, y, Math.sin(angle1) * radius] as [number, number, number],
        position2: [Math.cos(angle2) * radius, y, Math.sin(angle2) * radius] as [number, number, number]
      });
    }
    
    return points;
  }, []);
  
  return (
    <group ref={helixRef} position={[2, 0, -1]}>
      {helixPoints.map((point, index) => (
        <group key={index}>
          <mesh position={point.position1}>
            <sphereGeometry args={[0.02]} />
            <meshBasicMaterial color="#000000" transparent opacity={0.7} />
          </mesh>
          <mesh position={point.position2}>
            <sphereGeometry args={[0.02]} />
            <meshBasicMaterial color="#000000" transparent opacity={0.7} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false,
          powerPreference: "high-performance"
        }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        <ParticleField />
        <WaveGrid />
        <DNAHelix />
        
        <FractalGeometry position={[-2, 1, 0]} />
        <FractalGeometry position={[2, -1, 0]} />
        <FractalGeometry position={[0, 2, -1]} />
        
        <FloatingTorus position={[-1.5, -0.5, 1]} scale={0.8} />
        <FloatingTorus position={[1.5, 0.5, 1]} scale={1.2} />
        <FloatingTorus position={[0, -1.5, 0.5]} scale={0.6} />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.1} />
        <pointLight position={[-5, -5, -5]} intensity={0.1} color="#444" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
