import React, { useRef, useMemo } from 'react';
import './Hero.css';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';

function EpicParticles() {
    const pointsRef = useRef();
    const groupRef = useRef();
    const count = 3000;

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const radius = Math.random() * 15 + 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);

            const colorChoice = Math.random();
            if (colorChoice < 0.33) {
                colors[i3] = 0.38; colors[i3 + 1] = 0.59; colors[i3 + 2] = 0.86;
            } else if (colorChoice < 0.66) {
                colors[i3] = 0.18; colors[i3 + 1] = 0.8; colors[i3 + 2] = 0.44;
            } else {
                colors[i3] = 0.97; colors[i3 + 1] = 0.42; colors[i3 + 2] = 0.71;
            }
        }

        return { positions, colors };
    }, [count]);

    useFrame(({ clock, mouse }) => {
        const time = clock.getElapsedTime();

        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.05 + mouse.x * 0.3;
            groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1 + mouse.y * 0.2;
        }

        if (pointsRef.current) {
            const positions = pointsRef.current.geometry.attributes.position.array;

            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const y = positions[i3 + 1];
                const z = positions[i3 + 2];

                const wave = Math.sin(time + i * 0.01) * 0.5;
                const distance = Math.sqrt(x * x + y * y + z * z);
                const pulse = Math.sin(time * 2 + distance * 0.1) * 0.3;

                positions[i3 + 1] = y + wave * 0.02 + pulse * 0.05;
            }

            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <group ref={groupRef}>
            <Points ref={pointsRef} positions={particles.positions}>
                <PointMaterial
                    size={0.08}
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                />
            </Points>
        </group>
    );
}

function FloatingGeometry() {
    const torusRef = useRef();
    const octahedronRef = useRef();
    const icosahedronRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();

        if (torusRef.current) {
            torusRef.current.rotation.x = time * 0.3;
            torusRef.current.rotation.y = time * 0.4;
            torusRef.current.position.y = Math.sin(time) * 2;
        }

        if (octahedronRef.current) {
            octahedronRef.current.rotation.x = time * 0.5;
            octahedronRef.current.rotation.z = time * 0.2;
            octahedronRef.current.position.y = Math.cos(time * 1.2) * 2;
        }

        if (icosahedronRef.current) {
            icosahedronRef.current.rotation.y = time * 0.6;
            icosahedronRef.current.rotation.x = time * 0.3;
            icosahedronRef.current.position.y = Math.sin(time * 0.8) * 2;
        }
    });

    return (
        <>
            <mesh ref={torusRef} position={[-8, 0, -5]}>
                <torusGeometry args={[1.5, 0.4, 16, 100]} />
                <meshStandardMaterial
                    color="#3498db"
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#3498db"
                    emissiveIntensity={0.5}
                />
            </mesh>

            <mesh ref={octahedronRef} position={[8, 0, -3]}>
                <octahedronGeometry args={[2]} />
                <meshStandardMaterial
                    color="#2ecc71"
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#2ecc71"
                    emissiveIntensity={0.5}
                />
            </mesh>

            <mesh ref={icosahedronRef} position={[0, -5, -8]}>
                <icosahedronGeometry args={[1.8]} />
                <meshStandardMaterial
                    color="#f78fb3"
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#f78fb3"
                    emissiveIntensity={0.5}
                />
            </mesh>
        </>
    );
}

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <Canvas className="hero-canvas" camera={{ position: [0, 0, 15], fov: 75 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#3498db" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2ecc71" />
                <spotLight position={[0, 20, 0]} intensity={0.8} angle={0.3} penumbra={1} color="#f78fb3" />
                <EpicParticles />
                <FloatingGeometry />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>

            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hey, I'm <span className="text-highlight">Ebraam Saad</span>
                    </h1>
                    <h2 className="hero-subtitle">Full-Stack Developer</h2>
                    <p className="hero-description">
                        I transform ideas into modern, responsive web applications.
                        As a full-stack developer, I work across multiple stacks — JavaScript,
                        TypeScript, PHP, and Node.js — with strong experience in Docker and cloud technologies.
                        From design to deployment, I build complete, scalable solutions.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            View my last project
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToContact}>
                            Let's get in touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;