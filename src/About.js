import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import "./About.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import AboutPic from "./Images/AboutPic.jpg";
import { Link } from 'react-router-dom';
import { ImBriefcase } from "react-icons/im";

const About = () => {
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
            <span className="firstLineAbout">Get a Moment to Know</span> <br />
            <span className="secondLineAbout">About Me</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row>
            <Col md={3} className="leftColAbout">
              <Image
                src={AboutPic}
                alt="Selected"
                className="picture"
                rounded
                style={{ width: '300px', height: '400px' }}
              />
            </Col>
            <Col md={9} className="rightColAbout">
              <Row>
                <Col md={3}>
                  <Card className="aboutCards text-center">
                    <Card.Body>
                      <FaCity  size={36} />
                      <Card.Title>Based in</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">West New York, NJ</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="aboutCards text-center">
                    <Card.Body>
                      <ImBriefcase   size={36} />
                      <Card.Title>Professional Experience</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">1.3 Years</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="aboutCards">
                    <Card.Body>
                      <FaCheckCircle size={36} />
                      <Card.Title>GPA</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">3.96</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="aboutCards">
                    <Card.Body>
                      <FaGraduationCap size={36} />
                      <Card.Title>Graduation</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Fall 2024</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="infoRow">
                <p className="aboutMeInfo">
                Hello! I’m Diego, a Computer Science graduate from the University of Central Florida and former Software Engineer at Morgan Stanley. With professional experience in both frontend and backend development, I am excited to continue my career.
                </p>
                <p className="aboutMeInfo">
                I consider myself a motivated and responsible engineer and teammate. I value collaboration, clear communication, punctuality, and shared learning. What I enjoy the most about software development is the sense of accomplishment after solving challening problems.
                </p>
                <p className="aboutMeInfo">
                Some of my achievements include successfully migrating a complex legacy application to a modern framework at Morgan Stanley and developing, from the ground up, the frontend of a web application for the Humanities Department at UCF. I’m also proud to have graduated Summa Cum Laude from the University of Central Florida.
                </p>
                <p className="aboutMeInfo">
                  In my next role, I am looking for a team where I can feel a strong sense of belonging and contribute to different layers of the tech stack. I’m flexible about location and work setup — what matters most to me is joining a place where I can continue learning and grow together with the company on the long term.
                </p>
                <p className="aboutMeInfo">
                I’m excited to see what the next chapter of my career brings. If my background resonates with your team, feel free to reach out via email or LinkedIn.
                </p>
              </Row>
            </Col>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default About;
