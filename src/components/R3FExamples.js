import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// ==================== EXAMPLE 1: Basic Rotating Cube ====================
function RotatingCube({ position }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta * 0.5;
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3498db" />
    </mesh>
  );
}

// ==================== EXAMPLE 2: Interactive Sphere ====================
function InteractiveSphere({ position }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    meshRef.current.rotation.y += 0.01;
  });
  
  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      scale={clicked ? 1.5 : 1}
    >
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial 
        color={hovered ? '#2ecc71' : '#e74c3c'} 
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

// ==================== EXAMPLE 3: Animated Particles ====================
function AnimatedParticles({ position }) {
  const pointsRef = useRef();
  const count = 500;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.2;
      pointsRef.current.rotation.x = time * 0.1;
    }
  });
  
  return (
    <points ref={pointsRef} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#f39c12" 
        sizeAttenuation 
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// ==================== EXAMPLE 4: Morphing Torus ====================
function MorphingTorus({ position }) {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.scale.x = 1 + Math.sin(time) * 0.3;
    meshRef.current.scale.y = 1 + Math.cos(time) * 0.3;
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.8, 0.3, 16, 100]} />
      <meshStandardMaterial 
        color="#9b59b6" 
        wireframe 
        emissive="#9b59b6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

// ==================== EXAMPLE 5: Distorted Sphere (using drei) ====================
function DistortedSphere({ position }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <MeshDistortMaterial 
          color="#1abc9c" 
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// ==================== EXAMPLE 6: Wave Grid ====================
function WaveGrid({ position }) {
  const gridRef = useRef();
  const gridSize = 20;
  const spacing = 0.5;
  
  const meshes = useMemo(() => {
    const temp = [];
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        temp.push({ x, z });
      }
    }
    return temp;
  }, []);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    gridRef.current.children.forEach((child, i) => {
      const mesh = meshes[i];
      const distance = Math.sqrt(
        Math.pow(mesh.x - gridSize / 2, 2) + 
        Math.pow(mesh.z - gridSize / 2, 2)
      );
      child.position.y = Math.sin(distance * 0.5 - time * 2) * 0.5;
    });
  });
  
  return (
    <group ref={gridRef} position={position}>
      {meshes.map((mesh, i) => (
        <mesh
          key={i}
          position={[
            (mesh.x - gridSize / 2) * spacing,
            0,
            (mesh.z - gridSize / 2) * spacing
          ]}
        >
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#e67e22" />
        </mesh>
      ))}
    </group>
  );
}

// ==================== MAIN COMPONENT ====================
const R3FExamples = () => {
  const [example, setExample] = useState(1);
  
  const examples = [
    { id: 1, name: 'Rotating Cube', component: <RotatingCube position={[0, 0, 0]} /> },
    { id: 2, name: 'Interactive Sphere', component: <InteractiveSphere position={[0, 0, 0]} /> },
    { id: 3, name: 'Animated Particles', component: <AnimatedParticles position={[0, 0, 0]} /> },
    { id: 4, name: 'Morphing Torus', component: <MorphingTorus position={[0, 0, 0]} /> },
    { id: 5, name: 'Distorted Sphere', component: <DistortedSphere position={[0, 0, 0]} /> },
    { id: 6, name: 'Wave Grid', component: <WaveGrid position={[0, -2, 0]} /> },
  ];
  
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0a0a0a' }}>
      {/* Navigation */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '90%',
        padding: '10px',
        background: 'rgba(0,0,0,0.8)',
        borderRadius: '10px'
      }}>
        {examples.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setExample(ex.id)}
            style={{
              padding: '10px 20px',
              background: example === ex.id ? '#3498db' : '#2c3e50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              if (example !== ex.id) e.target.style.background = '#34495e';
            }}
            onMouseLeave={(e) => {
              if (example !== ex.id) e.target.style.background = '#2c3e50';
            }}
          >
            {ex.name}
          </button>
        ))}
      </div>
      
      {/* Instructions */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'rgba(0,0,0,0.8)',
        padding: '15px 30px',
        borderRadius: '10px',
        color: 'white',
        textAlign: 'center',
        maxWidth: '90%',
        border: '2px solid #3498db'
      }}>
        <p style={{ margin: 0, fontSize: '14px' }}>
          {example === 2 ? '🖱️ Click and hover the sphere!' : '🖱️ Drag to rotate • Scroll to zoom'}
        </p>
      </div>
      
      {/* Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3498db" />
        
        {examples.find(ex => ex.id === example)?.component}
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={3}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
};

export default R3FExamples;