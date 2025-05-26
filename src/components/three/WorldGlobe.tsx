
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WorldGlobe = () => {
  const globeRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const innerGlowRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  
  // Dünya kıtalarının koordinatları - daha detaylı
  const worldPoints = useMemo(() => {
    const points = [];
    const radius = 1.4;
    
    const worldCoordinates = [
      // Kuzey Amerika - daha yoğun
      { lat: 71, lng: -156 }, { lat: 60, lng: -165 }, { lat: 51, lng: -178 },
      { lat: 49, lng: -125 }, { lat: 48, lng: -123 }, { lat: 42, lng: -124 },
      { lat: 32, lng: -117 }, { lat: 25, lng: -97 }, { lat: 25, lng: -80 },
      { lat: 45, lng: -75 }, { lat: 60, lng: -95 }, { lat: 69, lng: -105 },
      { lat: 40, lng: -100 }, { lat: 35, lng: -95 }, { lat: 30, lng: -90 },
      
      // Güney Amerika
      { lat: 12, lng: -69 }, { lat: 5, lng: -60 }, { lat: -5, lng: -35 },
      { lat: -15, lng: -39 }, { lat: -23, lng: -43 }, { lat: -34, lng: -58 },
      { lat: -41, lng: -65 }, { lat: -54, lng: -68 }, { lat: -22, lng: -68 },
      { lat: -18, lng: -70 }, { lat: -12, lng: -77 }, { lat: 1, lng: -79 },
      
      // Avrupa - yoğun
      { lat: 71, lng: 25 }, { lat: 60, lng: 5 }, { lat: 54, lng: -2 },
      { lat: 50, lng: 2 }, { lat: 43, lng: 7 }, { lat: 39, lng: 22 },
      { lat: 36, lng: 25 }, { lat: 37, lng: 15 }, { lat: 46, lng: 14 },
      { lat: 52, lng: 21 }, { lat: 60, lng: 30 }, { lat: 67, lng: 33 },
      { lat: 55, lng: 12 }, { lat: 47, lng: 8 }, { lat: 41, lng: 12 },
      
      // Afrika
      { lat: 37, lng: -10 }, { lat: 31, lng: 32 }, { lat: 11, lng: 43 },
      { lat: 0, lng: 38 }, { lat: -26, lng: 28 }, { lat: -34, lng: 18 },
      { lat: -22, lng: 14 }, { lat: -12, lng: 13 }, { lat: 0, lng: 9 },
      { lat: 15, lng: 0 }, { lat: 20, lng: -17 }, { lat: 6, lng: 7 },
      
      // Asya - çok yoğun
      { lat: 77, lng: 100 }, { lat: 70, lng: 60 }, { lat: 55, lng: 38 },
      { lat: 41, lng: 36 }, { lat: 36, lng: 138 }, { lat: 24, lng: 121 },
      { lat: 1, lng: 104 }, { lat: 22, lng: 88 }, { lat: 28, lng: 77 },
      { lat: 34, lng: 69 }, { lat: 43, lng: 87 }, { lat: 55, lng: 83 },
      { lat: 64, lng: 97 }, { lat: 71, lng: 129 }, { lat: 39, lng: 116 },
      { lat: 35, lng: 139 }, { lat: 37, lng: 127 }, { lat: 31, lng: 121 },
      
      // Avustralya & Okyanusya
      { lat: -10, lng: 142 }, { lat: -26, lng: 153 }, { lat: -37, lng: 145 },
      { lat: -35, lng: 138 }, { lat: -32, lng: 116 }, { lat: -20, lng: 119 },
      { lat: -12, lng: 131 }, { lat: -9, lng: 147 },
    ];
    
    // 3D koordinatlara çevir ve daha çok nokta ekle
    worldCoordinates.forEach(coord => {
      const phi = (90 - coord.lat) * (Math.PI / 180);
      const theta = (coord.lng + 180) * (Math.PI / 180);
      
      // Her koordinat etrafında daha çok nokta
      for (let i = 0; i < 8; i++) {
        const offsetPhi = phi + (Math.random() - 0.5) * 0.1;
        const offsetTheta = theta + (Math.random() - 0.5) * 0.1;
        const offsetRadius = radius + (Math.random() - 0.5) * 0.05;
        
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
      
      // Kıtalar için titreşim efekti
      const time = state.clock.elapsedTime;
      const material = pointsRef.current.material as THREE.PointsMaterial;
      material.opacity = 0.9 + Math.sin(time * 2.5) * 0.1;
    }

    if (innerGlowRef.current) {
      const time = state.clock.elapsedTime;
      const material = innerGlowRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.25 + Math.sin(time * 1.8) * 0.1;
    }

    if (atmosphereRef.current) {
      const time = state.clock.elapsedTime;
      const material = atmosphereRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.15 + Math.sin(time * 1.2) * 0.05;
    }
  });

  return (
    <group ref={globeRef} position={[0, 0, 0]}>
      {/* Ana dünya küresi - DAT.Globe renklerinde */}
      <mesh>
        <sphereGeometry args={[1.35, 64, 64]} />
        <meshBasicMaterial 
          wireframe 
          color="#9de3cb" 
          transparent 
          opacity={0.3} 
        />
      </mesh>
      
      {/* Kıtalar - DAT.Globe HSL renklerini kullanarak */}
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
          size={0.05} 
          color="#96ca6b" 
          transparent 
          opacity={1.0}
          sizeAttenuation={true}
        />
      </points>
      
      {/* İç parlama - yeşil ton */}
      <mesh ref={innerGlowRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial 
          color="#9de3cb" 
          transparent 
          opacity={0.25}
        />
      </mesh>
      
      {/* Atmosfer katmanları - DAT.Globe tarzı */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial 
          color="#96ca6b" 
          transparent 
          opacity={0.15}
        />
      </mesh>
      
      <mesh>
        <sphereGeometry args={[1.7, 32, 32]} />
        <meshBasicMaterial 
          color="#9de3cb" 
          transparent 
          opacity={0.08}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshBasicMaterial 
          color="#96ca6b" 
          transparent 
          opacity={0.04}
        />
      </mesh>
    </group>
  );
};

export default WorldGlobe;
