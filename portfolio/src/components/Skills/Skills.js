import React from "react";
import { FaJs, FaPhp, FaNodeJs, FaDocker, FaCloud } from "react-icons/fa";
import { SiTypescript, SiOpenjdk } from "react-icons/si";
import './Skills.css';

const Skills = () => {

    const skills = [
        { name: "JavaScript", icon: <FaJs />, className: "js" },
        { name: "TypeScript", icon: <SiTypescript />, className: "ts" },
        { name: "PHP", icon: <FaPhp />, className: "php" },
        { name: 'Java', icon: <SiOpenjdk />, className: "java" },
        { name: "Node.js", icon: <FaNodeJs />, className: "node" },
        { name: "Docker", icon: <FaDocker />, className: "docker" },
        { name: "Cloud", icon: <FaCloud />, className: "cloud" },
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills">
                <section className="skills">
                    <h2 className="skills-title">💻 Tech Stack</h2>
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <span key={index} className={`skill-badge ${skill.className}`}>
                                {skill.icon}
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
export default Skills;