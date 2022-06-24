import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Experiencecard from "./Experiencecards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Experience<strong className="purple">As Trainee Developer intern </strong>
        </h1>
        <p style={{ color: "white" }}>  
          Here are a few projects I've worked in WEERODA TECHNOLOGIES PVT LMT.
         <p style={{color: "violet"}}>September 2021-May 2022</p> 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Experiencecard
              imgPath={chatify}
              isBlog={false}
              title="Open-cv"
              description="Open-cv Hand Tracking"
            />
          </Col>
          <Col md={4} className="project-card">
            <Experiencecard
              imgPath={editor}
              isBlog={false}
              title="Prosync"
              description="Blockchain using hyperledger sawtooth and iroha for duplication"
            />
          </Col>
          <Col md={4} className="project-card">
            <Experiencecard
              imgPath="{editor}"
              isBlog={false}
              title="RPA"
              description="Blockchain using hyperledger sawtooth and iroha for duplication"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
