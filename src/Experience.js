import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Experience.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import MS from "./Images/morgan_stanley.jpg";
import Mthree from "./Images/mthree.jpg";
import UCF from "./Images/ucf.jpg";
import UCFAcademics from "./Images/ucf_academics.png";  
import PersonalProjects from "./Images/personal_projects.png";


const ExperienceCard = ({ title, role, duration, description, skills, image }) => (
  <div className="experience-card shadow-sm p-3 rounded">
<div className="experience-header">
    <h3>{title}</h3>
  {image && <img src={image} alt={title} className="experience-logo" />}
</div>
    {role && <p className="role">{role}{duration && ` · ${duration}`}</p>}
    <p className="description">{description}</p>
    {skills && (
      <div className="skills">
        <strong>Tech Stack:</strong>
        <div className="skill-tags">
          {skills.split(",").map((skill, idx) => (
            <span key={idx} className="skill-tag">{skill.trim()}</span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Experience = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar id="myNavbar" bg="light" expand="lg" className="w-100 shadow-sm">
        <Navbar.Brand as={Link} to="/" className="brand-margin py-0">
          Diego La Rosa Giraud
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="right-nav">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About Me</Nav.Link>
            <Nav.Link as={Link} to="/Experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Header */}
      <section className="text-center mt-5 mb-4">
        <span className="firstLineAbout">Take a Look at</span>
        <h2 className="mb-3">My Experience</h2>
      </section>

      {/* Professional Experience Row */}
      <Container fluid style={{ maxWidth: "1200px" }} className="experience-section">
        <h2 className="section-title mb-4">Professional Experience</h2>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <ExperienceCard
              title="Morgan Stanley"
              role="Software Engineer (Contractor)"
              duration="5 months"
              description="Contributed migrating a legacy codebase to a modern application using Java and Python in an Agile team environment."
              skills="Java, JDBC, Python, SQL, Git, Bitbucket, Agile, Scrum, Jira, Visual Studio, GitHub Copilot"
              image={MS}
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <ExperienceCard
              title="Mthree"
              role="Software Engineer (Apprenticeship)"
              duration="4 months"
              description="Developed full-stack web features using Java and React within an MVC architecture. Implemented unit tests and collaborated through GitHub."
              skills="Java, React, JDBC, Restfull API, JUnit, MVC, Spring, Spring Boot, GitHub, IntelliJ, GitHub Copilot"
              image={Mthree}
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <ExperienceCard
              title="UCF"
              role="Frontend Engineer"
              duration="7 months"
              description="Built a responsive web application for the Humanities Department using React and Bootstrap. Collaborated with faculty to deliver an accessible interface."
              skills="React, CSS, JavaScript, Bootstrap, Figma, GitHub, Visual Studio, GitHub Copilot"
              image={UCF}
            />
          </div>
        </div>

        {/* Academics & Projects Row */}
        <div className="row gy-4 justify-content-center mt-5">
          <h2 className="section-title mb-4">Academics and Personal Projects</h2>
          <div className="col-lg-6 col-md-6">
            <ExperienceCard
              title="University of Central Florida"
              role="B.S. Computer Science"
              description="Coursework included data structures, algorithms, and software engineering principles. Graduated Summa Cum Laude."
              skills="Java, C, C#, JavaScript, HTML, CSS, React, Unity, GitHub"
              image={UCFAcademics}
            />
          </div>

          <div className="col-lg-6 col-md-6">
            <ExperienceCard
              title="Personal Projects"
              description="Created full-stack and game development projects exploring new technologies and expanding technical versatility."
              skills="C++, C#, React, Node.js, Unreal Engine, Unity, Azure, MySQL"
              image={PersonalProjects}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Experience;
