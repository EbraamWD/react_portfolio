import React from "react";
import "./Certifications.css";
import kreativstorm from "../../images/kreativstorm_certificate.png";
import databricks from "../../images/databricks.png";

const Certifications = () => {
  const certifications = [
    {
      name: "Software Engineering Hands On Training Program",
      image: kreativstorm,
      description:
        "Training program based on 4 real business case projects, covering the full software development lifecycle from planning to deployment. The program also focused on selecting the right technologies and development approaches for each project, providing hands-on experience with modern web stacks, agile practices, and teamwork in realistic industry scenarios."
    },
    {
      name: "Academy Accreditation - Generative AI Fundamentals",
      image: databricks,
      description:
        "Accreditation focused on the fundamentals of Generative AI, covering core concepts, practical applications, and the use of Databricks tools to build and manage AI-driven solutions."
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-title">
        <h2>My Certifications</h2>
      </div>
      <div className="certifications-container">
        {certifications.map((certification, index) => (
          <div key={index} className="cert-card">
            <img
              src={certification.image}
              alt={certification.name}
              className="cert-image"
            />
            <h3 className="cert-name">{certification.name}</h3>
            <p className="cert-description">{certification.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
