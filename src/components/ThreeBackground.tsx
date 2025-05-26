
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralWorldMap = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const { nodes, connections } = useMemo(() => {
    // Major world cities coordinates (simplified)
    const worldCities = [
      { name: 'New York', lat: 40.7128, lng: -74.0060 },
      { name: 'London', lat: 51.5074, lng: -0.1278 },
      { name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
      { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
      { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
      { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
      { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
      { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
      { name: 'Cape Town', lat: -33.9249, lng: 18.4241 },
      { name: 'Moscow', lat: 55.7558, lng: 37.6176 },
      { name: 'Beijing', lat: 39.9042, lng: 116.4074 },
      { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
      { name: 'Paris', lat: 48.8566, lng: 2.3522 },
      { name: 'Berlin', lat: 52.5200, lng: 13.4050 },
      { name: 'Istanbul', lat: 41.0082, lng: 28.9784 }
    ];

    // Convert lat/lng to 3D sphere coordinates
    const nodes = worldCities.map(city => {
      const phi = (90 - city.lat) * (Math.PI / 180);
      const theta = (city.lng + 180) * (Math.PI / 180);
      const radius = 1.5;
      
      return {
        name: city.name,
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta)
        ] as [number, number, number]
      };
    });

    // Create connections between nearby nodes
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
          Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
          Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        );
        
        // Connect nodes that are reasonably close
        if (distance < 2.5 && Math.random() > 0.3) {
          connections.push({ from: i, to: j });
        }
      }
    }

    return { nodes, connections };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#60a5fa" />
        </mesh>
      ))}
      
      {/* Connections */}
      {connections.map((connection, index) => {
        const start = nodes[connection.from].position;
        const end = nodes[connection.to].position;
        const midPoint = [
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2,
          (start[2] + end[2]) / 2
        ] as [number, number, number];
        
        const distance = Math.sqrt(
          Math.pow(end[0] - start[0], 2) +
          Math.pow(end[1] - start[1], 2) +
          Math.pow(end[2] - start[2], 2)
        );

        return (
          <line key={index}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([...start, ...end])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#3b82f6" transparent opacity={0.4} />
          </line>
        );
      })}
    </group>
  );
};

const MobiusStrip = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const uSegments = 120;
    const vSegments = 20;
    const vertices = [];
    const indices = [];
    
    for (let i = 0; i <= uSegments; i++) {
      for (let j = 0; j <= vSegments; j++) {
        const u = (i / uSegments) * Math.PI * 2;
        const v = ((j / vSegments) - 0.5) * 0.4;
        
        const x = (2 + v * Math.cos(u / 2)) * Math.cos(u);
        const y = (2 + v * Math.cos(u / 2)) * Math.sin(u);
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
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={1.2}>
      <meshBasicMaterial 
        wireframe 
        color="#3b82f6" 
        transparent 
        opacity={0.3}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
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
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.3}
          minPolarAngle={Math.PI / 2.7}
        />
        
        <NeuralWorldMap />
        <MobiusStrip />
        
        <ambientLight intensity={0.4} color="#f8fafc" />
        <directionalLight position={[10, 10, 5]} intensity={0.3} color="#3b82f6" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
