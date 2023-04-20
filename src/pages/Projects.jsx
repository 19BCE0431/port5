import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.jpeg";
import kickstart from "../assets/projects/kickstart.jpg";
import chatimg from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatimg}
              isBlog={false}
              title="Chat Assistance with extractive text summarization"
              description="A chat bot assistance to a website helps in obtaining extractive text summarization of any website. Using this, users can able to obtain short summary over the gigantic text"
              ghLink="https://github.com/19BCE0431/chat-extractive-text-summarization"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Online Caarz Showroom"
              description="An online car showroom where the user can book the available car and also some of the basic accessories for the car."
              ghLink="https://github.com/19BCE0431/CaarZ-Website-Final-Project-IWP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Online-Diagrammatic Tool"
              description="An online diagrammatic tool to draw flow charts with real-time collaboration."
              ghLink="https://github.com/vishaka-mohan/diagrammatic-tool"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Stock Price Prediction"
              description="A web app that can be used to predict the stock price trend of a company."
              ghLink="https://github.com/19BCE0431/Stock-Price-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Keylogger-and-Anti-keylogger"
              description="the actual keylogger in the intent to capture the key strokes and also listen to the mouse events. This code is intented to understand how a code can become malicious and log user entered details on the keyboard and the mouse."
              ghLink="https://github.com/19BCE0431/Keylogger-and-Anti-Keylogger"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Leather Defect Detection"
              description="No more traditional way of defect detection in leathers as detecting defects in leathers has been automeated using our ensembler learning of deep learning neural networks."
              // ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects