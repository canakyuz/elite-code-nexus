
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import WorldGlobe from './three/WorldGlobe';
import FloatingParticles from './three/FloatingParticles';

const Scene = () => {
  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.3}
        maxDistance={12}
        minDistance={4}
        enableDamping={true}
        dampingFactor={0.05}
      />
      
      <FloatingParticles />
      <WorldGlobe />
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
      <pointLight position={[-3, 3, 3]} intensity={0.6} color="#9de3cb" />
      <pointLight position={[3, -3, -3]} intensity={0.5} color="#96ca6b" />
      <hemisphereLight 
        color="#ffffff"
        groundColor="#9de3cb"
        intensity={0.2}
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
