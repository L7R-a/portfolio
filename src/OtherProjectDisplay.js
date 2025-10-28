import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import { MdOutlineWeb } from "react-icons/md";

const OtherProjectDisplay = ({
  title,
  subtitle,
  githubLink,
  websiteLink, // Optional website link
  storyText,
  challenges,
  learningText,
}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active tab index

  const handleTabChange = (e) => {
    if (e.index === 3 && githubLink) {
      // If the GitHub tab is clicked, open the link in a new tab
      window.open(githubLink, "_blank", "noopener,noreferrer");
    } else if (e.index === 4 && websiteLink) {
      // If the Website tab is clicked, open the link in a new tab
      window.open(websiteLink, "_blank", "noopener,noreferrer");
    } else {
      // Update the active index for other tabs
      setActiveIndex(e.index);
    }
  };

  return (
    <Container fluid className="main-container">
      <Row>
        <Navbar id="myNavbar" bg="light" expand="lg" className="w-100">
          <Nav></Nav>
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
            <span className="firstLineAbout">{title}</span> <br />
            <span className="secondLineAbout">{subtitle}</span><br />
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Col md={12} className="scrollable-column-other">
            <TabView activeIndex={activeIndex} onTabChange={handleTabChange} scrollable>
              <TabPanel header="Story" rightIcon="pi pi-book ml-2">
                <div className="scrollable-content">
                  {storyText.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </TabPanel>
              <TabPanel header="Learning Outcome" rightIcon="pi pi-check-circle ml-2">
                <div className="scrollable-content">
                  {Array.isArray(learningText) && learningText.map((item, index) => (
                    typeof item === "string" ? (
                      // Handle simple text version
                      <p key={index} className="whitespace-pre-line">{item}</p>
                    ) : (
                      // Handle detailed object version
                      <div key={index} className="mb-3">
                        <strong>{item.title}</strong>
                        <ul>
                          {item.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  ))}
                </div>
              </TabPanel>
              <TabPanel header="Challenges & Solutions" rightIcon="pi pi-exclamation-circle ml-2">
                <div className="scrollable-content">
                  {challenges.map((item, index) => (
                    <div key={index} className="mb-3">
                      <strong>{item.title}</strong>
                      <ul>
                        <li>
                          <strong>Challenge:</strong> {item.challenge}
                        </li>
                        <li>
                          <strong>Solution:</strong> {item.solution}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </TabPanel>
              {githubLink && (
                <TabPanel header="GitHub" rightIcon={<FaGithub className="ml-2" />}>
                  <div className="scrollable-content">
                    Clicking this tab will open the GitHub repository in a new tab.
                  </div>
                </TabPanel>
              )}
              {websiteLink && (
                <TabPanel header="Website" rightIcon={<MdOutlineWeb className="ml-2" />}>
                  <div className="scrollable-content">
                    Clicking this tab will open the website link in a new tab.
                  </div>
                </TabPanel>
              )}
            </TabView>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default OtherProjectDisplay;
