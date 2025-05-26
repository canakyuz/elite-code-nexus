
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WorldGlobe from './three/WorldGlobe';
import MobiusStrip from './three/MobiusStrip';
import FloatingParticles from './three/FloatingParticles';

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-90">
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
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2.5}
        />
        
        <FloatingParticles />
        <WorldGlobe />
        <MobiusStrip />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-3, 3, 3]} intensity={0.3} color="#0ea5e9" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
