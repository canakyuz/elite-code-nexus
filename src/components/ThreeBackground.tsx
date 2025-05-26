
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import WorldGlobe from './three/WorldGlobe';
import MobiusStrip from './three/MobiusStrip';
import FloatingParticles from './three/FloatingParticles';

const Scene = () => {
  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={false}
        maxDistance={8}
        minDistance={3}
        enableDamping={true}
        dampingFactor={0.05}
      />
      
      <FloatingParticles />
      <WorldGlobe />
      <MobiusStrip />
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-3, 3, 3]} intensity={0.6} color="#0ea5e9" />
      <hemisphereLight 
        color="#ffffff"
        groundColor="#0ea5e9"
        intensity={0.4}
      />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed top-0 right-0 w-1/2 h-screen z-0 opacity-90">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
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
