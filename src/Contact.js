import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Contact.css";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
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
      <Row className="justify-content-md-center" style={{ height: "10%" }}>
        <Row className="TopAbout">
          <h2 className="TopText">
            <span className="firstLineAbout">Here is how to</span> <br />
            <span className="secondLineAbout">Contact me</span>
          </h2>
        </Row>
      </Row>
      <Row className="BottomAbout">
        <Card className="contactCard">
          <Card.Body>
            <Row className="contactRow">
              <Col md={8} className="contactCol">
                <div className="d-flex align-items-center hover-effect mt-3 ml-8">
                  <a href="mailto:larosagirauddiego@gmail.com" target="_blank" rel="noopener noreferrer" className="no-underline d-flex align-items-center">
                    <IoIosMail className="landingIcon" size={48} />
                    <h4 className="contactTextEmail">
                      larosagirauddiego@gmail.com
                    </h4>
                  </a>
                </div>
              </Col>
              <Col md={4} className="contactCol">
                <div className="d-flex align-items-center hover-effect mt-3 mr-8">
                  <a href="https://www.linkedin.com/in/diego-la-rosa/" target="_blank" rel="noopener noreferrer" className="no-underline d-flex align-items-center">
                    <FaLinkedin className="landingIcon" size={32} />
                    <h4 className="contactText">
                      LinkedIn
                    </h4>
                  </a>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row className="justify-content-md-center" style={{ height: "10%" }}>
        <Row className="TopAbout">
          <h2 className="TopText">
            <span className="firstLineAbout">Copyright &copy; 2025 Diego La Rosa Giraud. All Rights Reserved.</span> <br />
          </h2>
        </Row>
      </Row>
    </Container>
  );
};

export default Contact;
