
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WorldGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  // Create globe geometry with more detail
  const globeGeometry = useMemo(() => new THREE.SphereGeometry(3, 64, 64), []);
  
  // Create points on globe surface
  const { positions, colors } = useMemo(() => {
    const positions = [];
    const colors = [];
    const pointCount = 2000;
    
    for (let i = 0; i < pointCount; i++) {
      // Generate points on sphere surface
      const phi = Math.acos(-1 + (2 * i) / pointCount);
      const theta = Math.sqrt(pointCount * Math.PI) * phi;
      
      const x = 3.1 * Math.cos(theta) * Math.sin(phi);
      const y = 3.1 * Math.sin(theta) * Math.sin(phi);
      const z = 3.1 * Math.cos(phi);
      
      positions.push(x, y, z);
      
      // Vary colors for a more dynamic look
      const intensity = Math.random() * 0.5 + 0.5;
      colors.push(0.2 * intensity, 0.8 * intensity, 1.0 * intensity);
    }
    
    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors)
    };
  }, []);

  // Create connection lines between points
  const connectionLines = useMemo(() => {
    const linePositions = [];
    const lineColors = [];
    const connectionCount = 500;
    
    for (let i = 0; i < connectionCount; i++) {
      const start = Math.floor(Math.random() * (positions.length / 3)) * 3;
      const end = Math.floor(Math.random() * (positions.length / 3)) * 3;
      
      // Start point
      linePositions.push(
        positions[start],
        positions[start + 1],
        positions[start + 2]
      );
      
      // End point
      linePositions.push(
        positions[end],
        positions[end + 1],
        positions[end + 2]
      );
      
      // Colors for the line
      const intensity = Math.random() * 0.3 + 0.2;
      lineColors.push(0.0, 0.7 * intensity, 1.0 * intensity);
      lineColors.push(0.0, 0.7 * intensity, 1.0 * intensity);
    }
    
    return {
      positions: new Float32Array(linePositions),
      colors: new Float32Array(lineColors)
    };
  }, [positions]);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }

    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      pointsRef.current.rotation.y = time * 0.05;
      
      // Pulsing effect for points
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const colors = pointsRef.current.geometry.attributes.color.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const pulse = Math.sin(time * 3 + i * 0.01) * 0.1 + 1;
        colors[i + 1] = (0.8 * pulse); // Green component
        colors[i + 2] = (1.0 * pulse); // Blue component
      }
      
      pointsRef.current.geometry.attributes.color.needsUpdate = true;
    }

    if (linesRef.current) {
      const time = state.clock.elapsedTime;
      const colors = linesRef.current.geometry.attributes.color.array as Float32Array;
      
      for (let i = 0; i < colors.length; i += 3) {
        const wave = Math.sin(time * 2 + i * 0.02) * 0.5 + 0.5;
        colors[i + 1] = 0.7 * wave; // Green
        colors[i + 2] = 1.0 * wave; // Blue
      }
      
      linesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group position={[2, 0, 0]}>
      {/* Main globe structure */}
      <mesh ref={globeRef} geometry={globeGeometry}>
        <meshPhongMaterial 
          color="#0a1a2a"
          transparent
          opacity={0.3}
          wireframe={true}
          wireframeLinewidth={0.5}
        />
      </mesh>
      
      {/* Surface points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.03}
          transparent
          opacity={0.8}
          sizeAttenuation={true}
          vertexColors={true}
        />
      </points>
      
      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connectionLines.positions.length / 3}
            array={connectionLines.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={connectionLines.colors.length / 3}
            array={connectionLines.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          transparent
          opacity={0.4}
          vertexColors={true}
        />
      </lineSegments>
    </group>
  );
};

export default WorldGlobe;
