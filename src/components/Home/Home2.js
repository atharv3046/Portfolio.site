import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Software Developer who loves transforming ideas
              into elegant, high-impact products. I'm always exploring new
              technologies and pushing the boundaries of what's possible.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, Java, React.js, and Node.js{" "}
                </b>
              </i>
              — and I enjoy working across both frontend and backend stacks.
              <br />
              <br />
              My key areas of interest include building
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, AI-powered Solutions,{" "}
                </b>
              </i>
              and contributing to open-source communities.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js </b> and modern full-stack
              frameworks like{" "}
              <i>
                <b className="purple">Next.js</b> and{" "}
                <b className="purple">Express.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
