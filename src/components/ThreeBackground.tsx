
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WorldGlobe = () => {
  const globeRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create world outline points based on actual world coordinates
  const worldPoints = useMemo(() => {
    const points = [];
    const radius = 1.2;
    
    // Add more detailed world outline
    const worldCoordinates = [
      // North America
      { lat: 71, lng: -156 }, { lat: 60, lng: -165 }, { lat: 51, lng: -178 },
      { lat: 49, lng: -125 }, { lat: 48, lng: -123 }, { lat: 42, lng: -124 },
      { lat: 32, lng: -117 }, { lat: 25, lng: -97 }, { lat: 25, lng: -80 },
      { lat: 45, lng: -75 }, { lat: 60, lng: -95 }, { lat: 69, lng: -105 },
      
      // South America
      { lat: 12, lng: -69 }, { lat: 5, lng: -60 }, { lat: -5, lng: -35 },
      { lat: -15, lng: -39 }, { lat: -23, lng: -43 }, { lat: -34, lng: -58 },
      { lat: -41, lng: -65 }, { lat: -54, lng: -68 }, { lat: -22, lng: -68 },
      { lat: -18, lng: -70 }, { lat: -12, lng: -77 }, { lat: 1, lng: -79 },
      
      // Europe
      { lat: 71, lng: 25 }, { lat: 60, lng: 5 }, { lat: 54, lng: -2 },
      { lat: 50, lng: 2 }, { lat: 43, lng: 7 }, { lat: 39, lng: 22 },
      { lat: 36, lng: 25 }, { lat: 37, lng: 15 }, { lat: 46, lng: 14 },
      { lat: 52, lng: 21 }, { lat: 60, lng: 30 }, { lat: 67, lng: 33 },
      
      // Africa
      { lat: 37, lng: -10 }, { lat: 31, lng: 32 }, { lat: 11, lng: 43 },
      { lat: 0, lng: 38 }, { lat: -26, lng: 28 }, { lat: -34, lng: 18 },
      { lat: -22, lng: 14 }, { lat: -12, lng: 13 }, { lat: 0, lng: 9 },
      { lat: 15, lng: 0 }, { lat: 20, lng: -17 },
      
      // Asia
      { lat: 77, lng: 100 }, { lat: 70, lng: 60 }, { lat: 55, lng: 38 },
      { lat: 41, lng: 36 }, { lat: 36, lng: 138 }, { lat: 24, lng: 121 },
      { lat: 1, lng: 104 }, { lat: 22, lng: 88 }, { lat: 28, lng: 77 },
      { lat: 34, lng: 69 }, { lat: 43, lng: 87 }, { lat: 55, lng: 83 },
      { lat: 64, lng: 97 }, { lat: 71, lng: 129 },
      
      // Australia & Oceania
      { lat: -10, lng: 142 }, { lat: -26, lng: 153 }, { lat: -37, lng: 145 },
      { lat: -35, lng: 138 }, { lat: -32, lng: 116 }, { lat: -20, lng: 119 },
      { lat: -12, lng: 131 }, { lat: -9, lng: 147 },
    ];
    
    // Convert to 3D coordinates and add some randomness for organic look
    worldCoordinates.forEach(coord => {
      const phi = (90 - coord.lat) * (Math.PI / 180);
      const theta = (coord.lng + 180) * (Math.PI / 180);
      
      // Add multiple points around each coordinate for density
      for (let i = 0; i < 3; i++) {
        const offsetPhi = phi + (Math.random() - 0.5) * 0.05;
        const offsetTheta = theta + (Math.random() - 0.5) * 0.05;
        const offsetRadius = radius + (Math.random() - 0.5) * 0.02;
        
        points.push(
          offsetRadius * Math.sin(offsetPhi) * Math.cos(offsetTheta),
          offsetRadius * Math.cos(offsetPhi),
          offsetRadius * Math.sin(offsetPhi) * Math.sin(offsetTheta)
        );
      }
    });
    
    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.06;
    }
  });

  return (
    <group ref={globeRef} position={[4, 0, 0]}>
      {/* Base globe wireframe */}
      <mesh>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshBasicMaterial 
          wireframe 
          color="#0ea5e9" 
          transparent 
          opacity={0.4} 
        />
      </mesh>
      
      {/* World outline points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={worldPoints.length / 3}
            array={worldPoints}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.025} 
          color="#0ea5e9" 
          transparent 
          opacity={0.8}
          sizeAttenuation={true}
        />
      </points>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[1.0, 16, 16]} />
        <meshBasicMaterial 
          color="#0ea5e9" 
          transparent 
          opacity={0.15}
        />
      </mesh>
    </group>
  );
};

const MobiusStrip = () => {
  const mobiusRef = useRef<THREE.Mesh>(null);
  
  const mobiusGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];
    
    const segments = 100;
    const width = 0.4;
    
    // Daha düzgün Mobius şeridi oluştur
    for (let i = 0; i <= segments; i++) {
      const u = (i / segments) * Math.PI * 2;
      
      for (let j = -1; j <= 1; j += 0.2) {
        const v = j * width;
        
        // Mobius şeridi parametrik denklemleri
        const cosU2 = Math.cos(u / 2);
        const sinU2 = Math.sin(u / 2);
        const cosU = Math.cos(u);
        const sinU = Math.sin(u);
        
        const x = (1 + v * cosU2) * cosU;
        const y = (1 + v * cosU2) * sinU;
        const z = v * sinU2;
        
        vertices.push(x, y, z);
      }
    }
    
    // İndisleri oluştur
    const pointsPerRing = 11; // -1'den 1'e kadar 0.2 aralıklarla 11 nokta
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
      mobiusRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      mobiusRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      mobiusRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.05;
    }
  });

  return (
    <group position={[1, 2, 2]} scale={1.2}>
      <mesh ref={mobiusRef} geometry={mobiusGeometry}>
        <meshLambertMaterial 
          color="#8b5cf6"
          transparent 
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 150; i++) {
      positions.push(
        (Math.random() - 0.3) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }
    return new Float32Array(positions);
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
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
        size={0.01} 
        color="#64748b" 
        transparent 
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-90">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
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
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2.5}
        />
        
        <FloatingParticles />
        <WorldGlobe />
        <MobiusStrip />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
        <pointLight position={[-3, 3, 3]} intensity={0.4} color="#0ea5e9" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
