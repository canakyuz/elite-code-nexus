
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 800;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 2 + Math.random() * 3;
      
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Blue theme colors
      const blueIntensity = 0.3 + Math.random() * 0.7;
      colors[i * 3] = 0.1; // R - minimal red
      colors[i * 3 + 1] = 0.3 + Math.random() * 0.4; // G - some green for cyan tones
      colors[i * 3 + 2] = blueIntensity; // B - strong blue
    }
    
    return [positions, colors];
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
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
        size={0.015} 
        vertexColors 
        transparent 
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
};

const MobiusStrip = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geometry = new THREE.ParametricGeometry((u, v, target) => {
      u *= Math.PI * 2;
      v = (v - 0.5) * 0.3;
      
      const x = (1 + v * Math.cos(u / 2)) * Math.cos(u);
      const y = (1 + v * Math.cos(u / 2)) * Math.sin(u);
      const z = v * Math.sin(u / 2);
      
      target.set(x, y, z);
    }, 100, 20);
    
    return geometry;
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry} scale={0.8}>
      <meshBasicMaterial 
        wireframe 
        color="#4169E1" 
        transparent 
        opacity={0.7}
      />
    </mesh>
  );
};

const TorusKnot = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusKnotGeometry args={[0.6, 0.2, 100, 16, 3, 2]} />
      <meshBasicMaterial 
        wireframe 
        color="#0066CC" 
        transparent 
        opacity={0.8}
      />
    </mesh>
  );
};

const KleinBottle = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geometry = new THREE.ParametricGeometry((u, v, target) => {
      u *= Math.PI * 2;
      v *= Math.PI * 2;
      
      const a = 2;
      let x, y, z;
      
      if (u < Math.PI) {
        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v);
        z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
      } else {
        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI);
        z = -8 * Math.sin(u);
      }
      
      y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);
      
      target.set(x * 0.1, y * 0.1, z * 0.1);
    }, 50, 30);
    
    return geometry;
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry} scale={0.3}>
      <meshBasicMaterial 
        wireframe 
        color="#1E90FF" 
        transparent 
        opacity={0.6}
      />
    </mesh>
  );
};

const BoySurface = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geometry = new THREE.ParametricGeometry((u, v, target) => {
      u = u * Math.PI;
      v = v * Math.PI;
      
      const x = Math.cos(u) * Math.sin(v) * Math.cos(v/2);
      const y = Math.sin(u) * Math.sin(v) * Math.cos(v/2);
      const z = Math.cos(v) * Math.sin(v/2);
      
      target.set(x, y, z);
    }, 40, 40);
    
    return geometry;
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.18;
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry} scale={1.2}>
      <meshBasicMaterial 
        wireframe 
        color="#0080FF" 
        transparent 
        opacity={0.5}
      />
    </mesh>
  );
};

const WaveGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const gridSize = 15;
    const spacing = 0.3;
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
        const wave = Math.sin(x * 3 + state.clock.elapsedTime * 0.8) * 
                    Math.cos(z * 3 + state.clock.elapsedTime * 0.8) * 0.08;
        array[i * 3 + 1] = wave;
      }
      positions.needsUpdate = true;
    }
    
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.1;
      gridRef.current.position.z = -4;
    }
  });
  
  return (
    <group ref={gridRef}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial wireframe color="#336699" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
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
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
        />
        
        <ParticleField />
        <WaveGrid />
        
        <MobiusStrip position={[-2.5, 1, 0]} />
        <TorusKnot position={[2.5, -1, 0]} />
        <KleinBottle position={[0, 2, -1]} />
        <BoySurface position={[0, -2, 1]} />
        
        <ambientLight intensity={0.4} color="#E6F3FF" />
        <directionalLight position={[5, 5, 5]} intensity={0.3} color="#4169E1" />
        <pointLight position={[-5, -5, -5]} intensity={0.2} color="#0080FF" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
