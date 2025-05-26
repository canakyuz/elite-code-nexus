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
    <group ref={globeRef} position={[0, 0, 0]}>
      {/* Base globe wireframe with glow */}
      <mesh>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshBasicMaterial 
          wireframe 
          color="#00d4ff" 
          transparent 
          opacity={0.6} 
        />
      </mesh>
      
      {/* World outline points - brighter */}
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
          size={0.035} 
          color="#00ffff" 
          transparent 
          opacity={0.9}
          sizeAttenuation={true}
        />
      </points>
      
      {/* Inner glow - brighter */}
      <mesh>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshBasicMaterial 
          color="#00d4ff" 
          transparent 
          opacity={0.2}
        />
      </mesh>
      
      {/* Outer glow effect */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshBasicMaterial 
          color="#0099cc" 
          transparent 
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

export default WorldGlobe;
