import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Atharv_Chaturvedi.pdf";
import { AiOutlineDownload, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaPrint, FaExternalLinkAlt, FaCode, FaBrain, FaRocket } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const stats = [
  { icon: <FaRocket />, value: "Top 5", label: "Gwalior AI Summit 2026" },
  { icon: <FaCode />, value: "3+", label: "Live Projects" },
  { icon: <FaBrain />, value: "90%+", label: "ML Model Accuracy" },
];

const skills = [
  "React.js", "Node.js", "Python", "Flask", "Firebase",
  "Supabase", "Scikit-learn", "JavaScript", "MongoDB", "Git",
];

const socialLinks = [
  { icon: <AiFillGithub />, href: "https://github.com/atharv3046", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/atharvchaturvedi/", label: "LinkedIn" },
  { icon: <AiFillInstagram />, href: "https://www.instagram.com/atharrvv16/", label: "Instagram" },
];

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePrint = () => {
    window.open(pdf, "_blank");
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ── Hero Header ── */}
        <Container>
          <div
            className="resume-hero"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease",
            }}
          >
            <h1 className="resume-hero-title">
              Atharv <span style={{ color: "#c770f0" }}>Chaturvedi</span>
            </h1>
            <p className="resume-hero-subtitle">
              Full Stack Developer &nbsp;·&nbsp; AI/ML Enthusiast &nbsp;·&nbsp; Open Source Contributor
            </p>

            {/* Stats Row */}
            <Row className="resume-stats-row">
              {stats.map((stat, i) => (
                <Col md={4} key={i} className="resume-stat-card">
                  <div className="resume-stat-icon">{stat.icon}</div>
                  <div className="resume-stat-value">{stat.value}</div>
                  <div className="resume-stat-label">{stat.label}</div>
                </Col>
              ))}
            </Row>

            {/* Action Buttons */}
            <Row className="resume-btn-row">
              <Col className="d-flex justify-content-center flex-wrap gap-3">
                <a href={pdf} download="Atharv_Chaturvedi_Resume.pdf" className="resume-action-btn primary-btn">
                  <AiOutlineDownload style={{ marginRight: 8 }} />
                  Download CV
                </a>
                <button onClick={handlePrint} className="resume-action-btn secondary-btn">
                  <FaExternalLinkAlt style={{ marginRight: 8 }} />
                  Open in New Tab
                </button>
                <button onClick={() => window.print()} className="resume-action-btn ghost-btn">
                  <FaPrint style={{ marginRight: 8 }} />
                  Print
                </button>
              </Col>
            </Row>

            {/* Skills Pills */}
            <div className="resume-skills-section">
              <p className="resume-skills-heading">Quick Skills</p>
              <div className="resume-skills-pills">
                {skills.map((skill, i) => (
                  <span className="resume-skill-pill" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="resume-divider" />

          {/* ── PDF Viewer ── */}
          <h2 className="resume-viewer-heading">
            My <span style={{ color: "#c770f0" }}>Resume</span>
          </h2>

          <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>

          {/* ── Bottom Action Row ── */}
          <Row className="resume-btn-row" style={{ paddingBottom: "60px" }}>
            <Col className="d-flex justify-content-center flex-wrap gap-3">
              <a href={pdf} download="Atharv_Chaturvedi_Resume.pdf" className="resume-action-btn primary-btn">
                <AiOutlineDownload style={{ marginRight: 8 }} />
                Download CV
              </a>
              <button onClick={handlePrint} className="resume-action-btn secondary-btn">
                <FaExternalLinkAlt style={{ marginRight: 8 }} />
                Open in New Tab
              </button>
            </Col>
          </Row>

          {/* ── Social Connect ── */}
          <div className="resume-social-section">
            <p className="resume-skills-heading">Connect With Me</p>
            <div className="resume-social-links">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-social-pill"
                  title={link.label}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
