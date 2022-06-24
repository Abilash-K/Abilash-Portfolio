import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abilash Konganar </span>
            from <span className="purple"> Chennai, India.</span>
            <br />I am a Engineer Student pursuing BE in CSE @Vels University
            <br />
            <br />
            Apart from coding, some other activities that I do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Article-Crime_Thriller investigating cases.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A small change makes a Big Turn!"{" "}
          </p>
          <footer className="blockquote-footer">Butterfly Effect</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
