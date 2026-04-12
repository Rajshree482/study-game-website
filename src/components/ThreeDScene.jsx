import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float } from '@react-three/drei';
import { useGameStore } from '../store/gameStore';
import { allChapters } from '../data/chapters';

// Represents a single chapter node in 3D space
const ChapterNode = ({ position, chapter, isUnlocked, onClick }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      // Gentle bobbing
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + chapter.id) * 0.2;
    }
  });

  const baseColor = isUnlocked ? "#6366f1" : "#475569";
  const glowColor = isUnlocked ? "#818cf8" : "#1e293b";

  return (
    <group position={position} onClick={() => isUnlocked && onClick(chapter.id)}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color={baseColor} 
            emissive={glowColor}
            emissiveIntensity={isUnlocked ? 0.5 : 0.1}
            wireframe={!isUnlocked}
          />
        </mesh>
      </Float>
      
      <Text 
        position={[0, -1.8, 0]} 
        fontSize={0.4} 
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {`Chapter ${chapter.id}`}
      </Text>
      {!isUnlocked && (
        <Text 
          position={[0, -2.4, 0]} 
          fontSize={0.2} 
          color="#ef4444"
          anchorX="center"
        >
          Locked 🔒
        </Text>
      )}
    </group>
  );
};

const ThreeDScene = () => {
  const { unlockedChapters, setView, setCurrentChapterId } = useGameStore();

  const handleNodeClick = (id) => {
    setCurrentChapterId(id);
    setView('notes');
  };

  // Layout nodes in a circle/spiral
  const nodes = allChapters.map((chapter, index) => {
    const angle = (index / allChapters.length) * Math.PI * 2;
    const radius = 8;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    // Slighly vary y position for depth
    const y = (index % 3) - 1;

    return (
      <ChapterNode 
        key={chapter.id}
        chapter={chapter}
        position={[x, y, z]}
        isUnlocked={unlockedChapters.includes(chapter.id)}
        onClick={handleNodeClick}
      />
    );
  });

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
      <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ec4899" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <group position={[0, -2, 0]}>
          {nodes}
        </group>
        
        <OrbitControls 
          enablePan={false} 
          minDistance={10} 
          maxDistance={30}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      {/* Overlay Title */}
      <div style={{ position: 'absolute', bottom: '40px', left: '0', right: '0', textAlign: 'center', pointerEvents: 'none' }}>
        <h2 style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', fontSize: '1.2rem', textTransform: 'uppercase' }}>
          Explore the Knowledge Constellation
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '8px', fontSize: '0.9rem' }}>
          Drag to rotate • Scroll to zoom • Click unlocked crystals to study
        </p>
      </div>
    </div>
  );
};

export default ThreeDScene;
