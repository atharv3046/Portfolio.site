import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Atharv Chaturvedi</span>{" "}
            from <span className="purple">India</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Software Developer</span> with a passion
            for building impactful and user-centric web applications.
            <br />I love learning new technologies and continuously improving my
            craft.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Discovering New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with passion!"{" "}
          </p>
          <footer className="blockquote-footer">Atharv</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
