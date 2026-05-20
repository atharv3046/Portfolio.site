import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">

            {/* ── Left: Text Block ── */}
            <Col md={7} className="home-header">

              {/* Greeting */}
              <div className={`home-anim home-anim-1 ${loaded ? "home-anim-in" : ""}`}>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
              </div>

              {/* Name */}
              <div className={`home-anim home-anim-2 ${loaded ? "home-anim-in" : ""}`}>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name name-glow"> ATHARV CHATURVEDI</strong>
                </h1>
              </div>

              {/* Typewriter */}
              <div
                className={`home-anim home-anim-3 ${loaded ? "home-anim-in" : ""}`}
                style={{ padding: 50, textAlign: "left" }}
              >
                <Type />
              </div>

              {/* Quick tag pills */}
              <div className={`home-anim home-anim-4 ${loaded ? "home-anim-in" : ""}`}>
                <div className="home-tag-row">
                  {["Full Stack Dev", "AI Enthusiast", "Open Source"].map((tag, i) => (
                    <span className="home-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </Col>

            {/* ── Right: Floating Illustration ── */}
            <Col md={5} className="home-img-col">
              <div className={`home-anim home-anim-5 ${loaded ? "home-anim-in" : ""}`}>
                <div className="home-img-glow-ring">
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid home-float-img"
                    style={{ maxHeight: "450px" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ── Introduce Section ── */}
      <Home2 />

      {/* ── Social Connect ── */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">

            <div className="home-social-heading-wrap">
              <h1 className="home-social-heading">Find Me On</h1>
              <div className="home-social-underline" />
            </div>

            <p className="home-social-sub">
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
              {[
                { href: "https://github.com/atharv3046", icon: <AiFillGithub />, delay: "0s" },
                { href: "https://www.linkedin.com/in/atharvchaturvedi/", icon: <FaLinkedinIn />, delay: "0.12s" },
                { href: "https://www.instagram.com/atharrvv16/", icon: <AiFillInstagram />, delay: "0.24s" },
              ].map((link, i) => (
                <li
                  className="social-icons"
                  key={i}
                  style={{ animationDelay: link.delay }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons social-icon-bounce"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
