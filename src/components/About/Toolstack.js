import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFeatherAlt, FaCloud, FaHatWizard } from "react-icons/fa";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaFeatherAlt fontSize={"32px"} />
        <div className="tech-icons-text">Antigrivaty</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <FaHatWizard fontSize={"32px"} />
        <div className="tech-icons-text">Curse</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <FaCloud fontSize={"32px"} />
        <div className="tech-icons-text">Cloude Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
