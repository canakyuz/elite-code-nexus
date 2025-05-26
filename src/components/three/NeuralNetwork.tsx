
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralNetwork = () => {
  const networkRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Points>(null);
  const connectionsRef = useRef<THREE.LineSegments>(null);
  
  const { nodePositions, nodeColors, connectionPositions, connectionColors } = useMemo(() => {
    const nodePositions = [];
    const nodeColors = [];
    const connectionPositions = [];
    const connectionColors = [];
    
    const nodeCount = 150;
    const nodes = [];
    
    // Generate neural nodes in 3D space
    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;
      
      nodes.push({ x, y, z, id: i });
      nodePositions.push(x, y, z);
      
      // Neural node colors (blue to cyan gradient)
      const intensity = Math.random() * 0.5 + 0.5;
      nodeColors.push(0.1 * intensity, 0.6 * intensity, 1.0 * intensity);
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const nodeA = nodes[i];
        const nodeB = nodes[j];
        
        const distance = Math.sqrt(
          Math.pow(nodeA.x - nodeB.x, 2) +
          Math.pow(nodeA.y - nodeB.y, 2) +
          Math.pow(nodeA.z - nodeB.z, 2)
        );
        
        // Only connect nearby nodes
        if (distance < 3 && Math.random() > 0.7) {
          connectionPositions.push(nodeA.x, nodeA.y, nodeA.z);
          connectionPositions.push(nodeB.x, nodeB.y, nodeB.z);
          
          // Connection colors
          const intensity = Math.random() * 0.3 + 0.2;
          connectionColors.push(0.2 * intensity, 0.8 * intensity, 1.0 * intensity);
          connectionColors.push(0.2 * intensity, 0.8 * intensity, 1.0 * intensity);
        }
      }
    }
    
    return {
      nodePositions: new Float32Array(nodePositions),
      nodeColors: new Float32Array(nodeColors),
      connectionPositions: new Float32Array(connectionPositions),
      connectionColors: new Float32Array(connectionColors)
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (networkRef.current) {
      networkRef.current.rotation.y = time * 0.02;
      networkRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
    
    if (nodesRef.current) {
      // Pulsing neural nodes
      const colors = nodesRef.current.geometry.attributes.color.array as Float32Array;
      const positions = nodesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Neural activity waves
        const activity = Math.sin(time * 4 + i * 0.1) * 0.5 + 0.5;
        const pulse = Math.sin(time * 6 + i * 0.05) * 0.3 + 0.7;
        
        colors[i] = 0.1 * activity; // Red
        colors[i + 1] = 0.6 * pulse; // Green
        colors[i + 2] = 1.0 * activity; // Blue
        
        // Slight movement for living effect
        const offset = Math.sin(time * 2 + i * 0.01) * 0.02;
        positions[i] += offset * 0.1;
      }
      
      nodesRef.current.geometry.attributes.color.needsUpdate = true;
      nodesRef.current.geometry.attributes.position.needsUpdate = true;
    }
    
    if (connectionsRef.current) {
      // Neural signal transmission
      const colors = connectionsRef.current.geometry.attributes.color.array as Float32Array;
      
      for (let i = 0; i < colors.length; i += 6) {
        // Signal wave traveling through connections
        const wave = Math.sin(time * 5 + i * 0.02) * 0.5 + 0.5;
        const fade = Math.sin(time * 3 + i * 0.01) * 0.3 + 0.4;
        
        // Start point
        colors[i] = 0.2 * wave;
        colors[i + 1] = 0.8 * fade;
        colors[i + 2] = 1.0 * wave;
        
        // End point
        colors[i + 3] = 0.2 * fade;
        colors[i + 4] = 0.8 * wave;
        colors[i + 5] = 1.0 * fade;
      }
      
      connectionsRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group ref={networkRef} position={[-2, 0, 0]}>
      {/* Neural nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={nodeColors.length / 3}
            array={nodeColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.08}
          transparent
          opacity={0.9}
          sizeAttenuation={true}
          vertexColors={true}
        />
      </points>
      
      {/* Neural connections */}
      <lineSegments ref={connectionsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connectionPositions.length / 3}
            array={connectionPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={connectionColors.length / 3}
            array={connectionColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          transparent
          opacity={0.6}
          vertexColors={true}
          linewidth={2}
        />
      </lineSegments>
    </group>
  );
};

export default NeuralNetwork;
