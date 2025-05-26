
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import WorldGlobe from './three/WorldGlobe';
import NeuralNetwork from './three/NeuralNetwork';
import FloatingParticles from './three/FloatingParticles';

const Scene = () => {
  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxDistance={12}
        minDistance={4}
        enableDamping={true}
        dampingFactor={0.05}
      />
      
      <FloatingParticles />
      <WorldGlobe />
      <NeuralNetwork />
      
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-3, 3, 3]} intensity={0.8} color="#00d4ff" />
      <pointLight position={[3, -3, -3]} intensity={0.6} color="#8b5cf6" />
      <hemisphereLight 
        color="#ffffff"
        groundColor="#0ea5e9"
        intensity={0.3}
      />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
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
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
