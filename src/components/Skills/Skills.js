import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Environment } from "@react-three/drei";
import * as THREE from "three";
import { 
  FaJs, FaPhp, FaNodeJs, FaDocker, FaCloud, FaReact, FaAws,
  FaGithub, FaDatabase, FaPython, FaHtml5, FaCss3Alt, 
  FaAngular
} from "react-icons/fa";
import { SiTypescript, SiOpenjdk, SiSpring, SiKubernetes, SiMongodb, SiPostgresql, SiFirebase } from "react-icons/si";
import './Skills.css';

// Dati delle skills organizzati per categoria
const SKILLS_DATA = {
  frontend: [
    { name: "JavaScript", color: "#f7df1e", icon: <FaJs />, level: 95 },
    { name: "TypeScript", color: "#3178c6", icon: <SiTypescript />, level: 90 },
    { name: "React", color: "#61dafb", icon: <FaReact />, level: 85 },
    { name: "Angular", color: "#dd0031", icon: <FaAngular />, level: 70 },
    { name: "HTML5", color: "#e34f26", icon: <FaHtml5 />, level: 90 },
    { name: "CSS3", color: "#1572b6", icon: <FaCss3Alt />, level: 85 }
  ],
  backend: [
    { name: "JavaScript", color: "#f7df1e", icon: <FaJs />, level: 95 },
    { name: "TypeScript", color: "#3178c6", icon: <SiTypescript />, level: 90 },
    { name: "Node.js", color: "#3c873a", icon: <FaNodeJs />, level: 90 },
    { name: "PHP", color: "#4f5b93", icon: <FaPhp />, level: 80 },
    { name: "Java", color: "#e76f00", icon: <SiOpenjdk />, level: 75 },
    { name: "Spring", color: "#6db33f", icon: <SiSpring />, level: 70 },
    { name: "Python", color: "#3776ab", icon: <FaPython />, level: 65 }
  ],
  devops: [
    { name: "Docker", color: "#0db7ed", icon: <FaDocker />, level: 85 },
    { name: "Cloud (Railway, Vercel)", color: "#4285f4", icon: <FaCloud />, level: 85 },
    { name: "Git", color: "#f1502f", icon: <FaGithub />, level: 90 }
  ],
  database: [
    { name: "MongoDB", color: "#47a248", icon: <SiMongodb />, level: 80 },
    { name: "SQL Server", color: "#00618a", icon: <FaDatabase />, level: 85 },
    { name: "PostgreSQL", color: "#336791", icon: <SiPostgresql />, level: 85 },
    { name: "Firebase", color: "#ffca28", icon: <SiFirebase />, level: 75 }
  ]
};

// Skill Icon 3D semplificata
function SkillIcon3D({ skill, position, index }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Rotazione lenta
      meshRef.current.rotation.y += 0.01;
      
      // Orbita
      const time = state.clock.getElapsedTime();
      const angle = time * 0.2 + (index * Math.PI * 2) / 15;
      const radius = 5;
      
      meshRef.current.position.x = Math.cos(angle) * radius;
      meshRef.current.position.z = Math.sin(angle) * radius;
      meshRef.current.position.y = Math.sin(time + index) * 0.5;
      
      // Effetto hover
      const scale = hovered ? 1.4 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Geometria principale */}
        <mesh castShadow>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color={skill.color}
            roughness={0.1}
            metalness={0.9}
            emissive={skill.color}
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </mesh>
        
        {/* Anello esterno */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.05, 16, 32]} />
          <meshBasicMaterial
            color={skill.color}
            transparent
            opacity={hovered ? 0.5 : 0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Sistema solare delle skills
function SkillsSolarSystem() {
  const skills = Object.values(SKILLS_DATA).flat();
  
  return (
    <group>
      {/* Sole centrale */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#3498db"
          emissive="#3498db"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      
      {/* Skill planetes */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 5 + Math.random() * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <SkillIcon3D
            key={skill.name}
            skill={skill}
            position={[x, 0, z]}
            index={index}
          />
        );
      })}
      
      {/* Anelli orbitali */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4, 4.5, 64]} />
        <meshBasicMaterial
          color="#3498db"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[6, 6.5, 64]} />
        <meshBasicMaterial
          color="#9b59b6"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Componente principale Skills
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <h2 className="skills-title">
            <span className="title-gradient">Tech</span> Skills
          </h2>
          <p className="skills-subtitle">
            Interactive visualization of my technical expertise
          </p>
        </div>
        
        {/* Categories */}
        <div className="categories-nav">
          {Object.keys(SKILLS_DATA).map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="skills-grid-container">
          <div className="skills-grid">
            {SKILLS_DATA[activeCategory].map((skill) => (
              <div 
                key={skill.name}
                className="skill-card"
                style={{ '--skill-color': skill.color }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <div className="skill-icon-bg" />
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
                
                <div className="skill-progress">
                  <div className="progress-label">
                    <span>Proficiency</span>
                    <span className="progress-value">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
                
                <div className="skill-level-indicator">
                  {skill.level > 80 ? 'Expert' : 
                   skill.level > 60 ? 'Advanced' : 'Intermediate'}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Stats */}
        {/*<div className="skills-stats">
          <div className="stat-card">
            <div className="stat-number">
              {Object.values(SKILLS_DATA).flat().length}
            </div>
            <div className="stat-label">Technologies</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">
              {Math.round(
                Object.values(SKILLS_DATA).flat().reduce((acc, skill) => acc + skill.level, 0) / 
                Object.values(SKILLS_DATA).flat().length
              )}%
            </div>
            <div className="stat-label">Avg. Proficiency</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Skills;