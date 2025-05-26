import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 500;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 8 + Math.random() * 5;
      
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Subtle blue particles
      const blueIntensity = 0.5 + Math.random() * 0.5;
      colors[i * 3] = 0.2; // R
      colors[i * 3 + 1] = 0.4; // G
      colors[i * 3 + 2] = blueIntensity; // B
    }
    
    return [positions, colors];
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
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
        size={0.008} 
        vertexColors 
        transparent 
        opacity={0.4}
        sizeAttenuation={true}
      />
    </points>
  );
};

const MobiusStrip = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const uSegments = 100;
    const vSegments = 20;
    const vertices = [];
    const indices = [];
    
    for (let i = 0; i <= uSegments; i++) {
      for (let j = 0; j <= vSegments; j++) {
        const u = (i / uSegments) * Math.PI * 2;
        const v = ((j / vSegments) - 0.5) * 0.3;
        
        const x = (1 + v * Math.cos(u / 2)) * Math.cos(u);
        const y = (1 + v * Math.cos(u / 2)) * Math.sin(u);
        const z = v * Math.sin(u / 2);
        
        vertices.push(x, y, z);
      }
    }
    
    for (let i = 0; i < uSegments; i++) {
      for (let j = 0; j < vSegments; j++) {
        const a = i * (vSegments + 1) + j;
        const b = a + vSegments + 1;
        const c = a + 1;
        const d = b + 1;
        
        indices.push(a, b, c);
        indices.push(b, d, c);
      }
    }
    
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();
    
    return geometry;
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={1.5}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshBasicMaterial 
        wireframe 
        color="#3b82f6" 
        transparent 
        opacity={0.3}
      />
    </mesh>
  );
};

const TorusKnot = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={0.8}>
      <torusKnotGeometry args={[1, 0.3, 100, 16, 3, 2]} />
      <meshBasicMaterial 
        wireframe 
        color="#60a5fa" 
        transparent 
        opacity={0.4}
      />
    </mesh>
  );
};

const WaveGrid = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const gridSize = 20;
    const spacing = 0.5;
    return new THREE.PlaneGeometry(gridSize * spacing, gridSize * spacing, gridSize - 1, gridSize - 1);
  }, []);
  
  useFrame((state) => {
    if (meshRef.current && meshRef.current.geometry) {
      const positions = meshRef.current.geometry.attributes.position;
      const array = positions.array as Float32Array;
      
      for (let i = 0; i < positions.count; i++) {
        const x = array[i * 3];
        const z = array[i * 3 + 2];
        const wave = Math.sin(x * 2 + state.clock.elapsedTime * 0.5) * 
                    Math.cos(z * 2 + state.clock.elapsedTime * 0.5) * 0.3;
        array[i * 3 + 1] = wave;
      }
      positions.needsUpdate = true;
    }
  });
  
  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, -5]}>
      <meshBasicMaterial wireframe color="#cbd5e1" transparent opacity={0.2} />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
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
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2.5}
        />
        
        <ParticleField />
        <WaveGrid />
        
        <MobiusStrip position={[4, 2, 0]} />
        <TorusKnot position={[4, -2, -2]} />
        
        <ambientLight intensity={0.3} color="#f8fafc" />
        <directionalLight position={[10, 10, 5]} intensity={0.2} color="#3b82f6" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
