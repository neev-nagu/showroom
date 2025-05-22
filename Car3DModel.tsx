import  { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, useTexture } from '@react-three/drei';
import { Mesh } from 'three';

function CarModel({ texture }: { texture: string }) {
  const meshRef = useRef<Mesh>(null);
  const textureMap = useTexture(texture);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[4, 1.5, 9]} />
      <meshStandardMaterial 
        map={textureMap} 
        metalness={0.8} 
        roughness={0.2} 
      />
    </mesh>
  );
}

interface Car3DModelProps {
  image: string;
}

export default function Car3DModel({ image }: Car3DModelProps) {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 4, 8]} />
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <Suspense fallback={null}>
          <CarModel texture={image} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls 
          autoRotate={isRotating} 
          enableZoom={true} 
          enablePan={false} 
          autoRotateSpeed={3}
        />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 rounded-md p-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="text-white text-sm px-3 py-1 rounded bg-red-600 hover:bg-red-700"
        >
          {isRotating ? "Pause Rotation" : "Resume Rotation"}
        </button>
      </div>
      
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md">
        <span className="text-sm">Drag to rotate | Scroll to zoom</span>
      </div>
    </div>
  );
}
  