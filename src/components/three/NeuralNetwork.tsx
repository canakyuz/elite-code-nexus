
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralNetwork = () => {
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  
  const { linePositions, nodePositions } = useMemo(() => {
    const linePositions = [];
    const nodePositions = [];
    const nodes = [];
    
    // Düğüm pozisyonları oluştur
    for (let i = 0; i < 40; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;
      nodes.push([x, y, z]);
      nodePositions.push(x, y, z);
    }
    
    // Yakın düğümler arasında bağlantı oluştur
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i][0] - nodes[j][0], 2) +
          Math.pow(nodes[i][1] - nodes[j][1], 2) +
          Math.pow(nodes[i][2] - nodes[j][2], 2)
        );
        
        if (distance < 4) {
          linePositions.push(
            nodes[i][0], nodes[i][1], nodes[i][2],
            nodes[j][0], nodes[j][1], nodes[j][2]
          );
        }
      }
    }
    
    return {
      linePositions: new Float32Array(linePositions),
      nodePositions: new Float32Array(nodePositions)
    };
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
    
    if (nodesRef.current) {
      nodesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      
      // Düğümlerde nabız etkisi
      const time = state.clock.elapsedTime;
      for (let i = 0; i < nodePositions.length / 3; i++) {
        const matrix = new THREE.Matrix4();
        const pulse = 1 + Math.sin(time * 3 + i * 0.5) * 0.3;
        matrix.makeScale(pulse, pulse, pulse);
        matrix.setPosition(
          nodePositions[i * 3],
          nodePositions[i * 3 + 1],
          nodePositions[i * 3 + 2]
        );
        nodesRef.current.setMatrixAt(i, matrix);
      }
      nodesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Sinir bağlantıları */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.4}
        />
      </lineSegments>
      
      {/* Sinir düğümleri */}
      <instancedMesh
        ref={nodesRef}
        args={[undefined, undefined, nodePositions.length / 3]}
      >
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial 
          color="#00ffff" 
          transparent 
          opacity={0.8}
        />
      </instancedMesh>
    </group>
  );
};

export default NeuralNetwork;
