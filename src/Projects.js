import React from "react";
import { Navbar, Nav, Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Projects.css";
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import MERNP from "./Images/VVPic.png";
import LAMPP from "./Images/WebPic.png";
import ThisWebP from "./Images/ThisWebPic.png";
import CapstoneP from "./Images/CapstoneP.png";
import GuitarP from "./Images/GuitarP.png";
import OnlineP from "./Images/onlinepic.png";
import GameJamP from "./Images/gameJamPic.png";
import RPGP from "./Images/RPGGamePic.png";
import FirstGameP from "./Images/FirstgamePic.png";
import SinglePlayerP from "./Images/singlePlayerPic.png";
import VRP from "./Images/VRP.png";
import TankP from "./Images/TankPic.png";
import GraphP from "./Images/RailroadsPic.png";
import PalP from "./Images/PalPic.png";
import ScheduleP from "./Images/SchedulesPic.png";
import VMP from "./Images/VMPic.png";
import BKP from "./Images/MazePic.png";
import Java from "./Images/java.png";
import MthreeEmail from "./Images/mthree_email.png";
import { SiUnrealengine } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { RiStackFill } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";

const Projects = () => {
  const professionalExperiences = [
    {
      name: "Morgan Stanley",
      image: Java, 
      role: "Backend Developer",
      link: "#MorganStanley",
      icon: <FaGear />
    },
    {
      name: "Mthree",
      image: MthreeEmail, 
      role: "Full-stack Developer",
      link: "#Mthree",
      icon: <RiStackFill />
    },
    {
      name: "University of Central Florida",
      image: CapstoneP, 
      role: "Frontend Developer",
      link: "#Capstone",
      icon: <FaReact />
    }
  ];

  const academics = [
    {
      name: "Virtual Closet",
      image: MERNP, 
      role: "Full-stack Developer",
      link: "#VirtualVogue",
      icon: <RiStackFill />
    },
    {
      name: "Contact Manager",
      image: LAMPP,
      role: "Frontend Developer",
      link: "#ContactManager",
      icon: <TiHtml5 />
    },
      {
        name: "Virtual Reality",
        image: VRP, 
        role: "VR Developer",
        link: "#VRProjects",
        icon: <FaUnity />
      },
    {
        name: "Magic Gears",
        image: RPGP, 
        role: "Unity Developer",
        link: "#RPG",
        icon: <FaUnity />
    },
    {
      name: "College Schedule Management System",
      image: ScheduleP, 
      role: "Java Developer",
      link: "#Schedules",
      icon: <FaJava />
    },
    {
      name: "Kruskal Algorithm",
      image: GraphP,
      role: "Java Developer",
      link: "#GraphProblem",
      icon: <FaJava />
    },
    {
      name: "Backtracking Algorithm",
      image: BKP,
      role: "Java Developer",
      link: "#Backtracking",
      icon: <FaJava />
    },
    {
      name: "Tiny Harvard Virtual Machine",
      image: VMP, 
      role: "C Developer",
      link: "#VM",
      icon: <FaMicrochip />
    }
  ];

  const personalProjects = [
    {
      name: "Guitar Enthusiast",
      image: GuitarP, 
      role: "Full-stack Developer",
      link: "#GuitarEnthusiast",
      icon: <RiStackFill />
    },
      {
        name: "Blaster",
        image: OnlineP, 
        role: "Unreal Engine Developer",
        link: "#OnlineMultiplayer",
        icon: <SiUnrealengine />
      },
    {
      name: "Portfolio",
      image: ThisWebP, 
      role: "Frontend Developer",
      link: "#PortfolioApp",
      icon: <FaReact />
    },
    {
      name: "PantryPal",
      image: PalP,
      role: "Frontend Developer",
      link: "#PantryPal",
      icon: <FaReact/>
    },
      {
        name: "Sun Striker",
        image: GameJamP,
        role: "Unity Developer",
        link: "#GameJam",
        icon: <FaUnity />
      },
    {
        name: "Belica",
        image: SinglePlayerP, 
        role: "Unreal Engine Developer",
        link: "#SinglePlayerShooter",
        icon: <SiUnrealengine />
      },
      {
        name: "Tanks",
        image: TankP,
        role: "Unreal Engine Developer",
        link: "#Tanks",
        icon: <SiUnrealengine />
      },
      {
        name: "Bulls Cows",
        image: FirstGameP,
        role: "Unreal Engine Developer",
        link: "#WordGame",
        icon: <SiUnrealengine />
      }

  ];

  const itemTemplate = (data) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"            
            src={data.image} 
            alt={data.name}
          />
          <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
            <div className="flex flex-column align-items-center lg:align-items-start gap-3">
              <div className="flex flex-column gap-1">
                <div className="text-2xl font-bold text-900">{data.name}</div>
                <div className="text-700">{data.description}</div>
              </div>
              <div className="flex flex-column gap-2">
  <span className="flex align-items-center gap-2">
    {data.icon && (
      <span className="icon">
        {React.cloneElement(data.icon, { size: "1.5em" })} {/* Adjust size here */}
      </span>
    )}
    <span className="font-semibold">{data.role}</span>
  </span>
</div>
            </div>
            <div className="flex flex-column align-items-center lg:align-items-end gap-4">
              <Button label="View Project" onClick={() => window.location.href = data.link}  className="projectButton"></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };




  return (
    <Container fluid className="main-container">
      <Row>
        <Navbar id="myNavbar" bg="light" expand="lg" className="w-100">
          <Nav>
          </Nav>
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
      </Row>
      <Row className="justify-content-md-center" style={{ height: "100%" }}>
        <Row className="TopAbout">
          <h2 className="TopText">
            <span className="firstLineAbout">These Are My </span> <br />
            <span className="secondLineAbout">Projects</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row>
            <Col>
                <DataScroller value={professionalExperiences} itemTemplate={itemTemplate} rows={3} inline scrollHeight="650px" buffer={0.4} header="Professional Experience" />
            </Col>
            <Col>
                <DataScroller value={academics} itemTemplate={itemTemplate} rows={7} inline scrollHeight="650px" buffer={0.4} header="Academics" />
            </Col>
            <Col>
                <DataScroller value={personalProjects} itemTemplate={itemTemplate} rows={10} inline scrollHeight="650px" buffer={0.4} header="Personal Projects" />
            </Col>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default Projects;
