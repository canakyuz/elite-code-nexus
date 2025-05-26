
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
        autoRotateSpeed={0.3}
        maxDistance={15}
        minDistance={5}
        enableDamping={true}
        dampingFactor={0.05}
        maxPolarAngle={Math.PI * 0.8}
        minPolarAngle={Math.PI * 0.2}
      />
      
      <FloatingParticles />
      <WorldGlobe />
      <NeuralNetwork />
      
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.3} color="#0f172a" />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#38bdf8" />
      <pointLight position={[-4, 3, 4]} intensity={1.2} color="#0ea5e9" />
      <pointLight position={[4, -3, -4]} intensity={0.8} color="#8b5cf6" />
      <spotLight 
        position={[0, 10, 0]} 
        intensity={0.5} 
        color="#00d4ff"
        angle={Math.PI / 6}
        penumbra={0.5}
      />
      <hemisphereLight 
        color="#38bdf8"
        groundColor="#1e293b"
        intensity={0.4}
      />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
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
