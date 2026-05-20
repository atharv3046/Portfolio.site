import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartsathi from "../../Assets/Projects/smartsathi.png";
import studysync from "../../Assets/Projects/studysync.png";
import hospitalbedfinder from "../../Assets/Projects/hospitalbedfinder.png";

const projects = [
  {
    imgPath: smartsathi,
    title: "SmartSathi – AI Digital Literacy Tutor",
    date: "June 2025",
    award: "Top 5 · Gwalior AI Summit 2026",
    description:
      "AI-powered Hindi chatbot for first-time smartphone users covering UPI safety, scam detection, and government app usage. Trained an ML model on Hindi SMS Spam Dataset achieving 90%+ accuracy. Integrated Tesseract OCR for screenshot scam detection and Speech-to-Text API for voice input, cutting support interactions by ~35%.",
    tags: ["Flask", "GPT API", "Scikit-learn", "Tesseract OCR", "Firebase", "Python"],
    ghLink: "https://github.com/atharv3046/smartsathi",
  },
  {
    imgPath: studysync,
    title: "StudySync – YouTube Playlist Manager",
    date: "October 2025",
    description:
      "Full-stack web app that organizes YouTube playlists into structured, trackable study schedules — used by 20+ active students. Firebase Authentication for secure login, Firestore for real-time cross-session data sync. Responsive React.js UI with progress tracking, reducing study setup time by ~40%.",
    tags: ["React.js", "Node.js", "Firebase Auth", "Firestore"],
    ghLink: "https://github.com/atharv3046/studysync",
    demoLink: "https://studysyncs-chi.vercel.app/",
  },
  {
    imgPath: hospitalbedfinder,
    title: "Hospital Bed Finder",
    description:
      "Cross-platform web and mobile app to locate nearby hospitals with live bed availability. GPS-based location services surface the nearest hospitals — emergency search results returned within 2 seconds. Supabase Realtime for live bed count updates and Supabase Auth for secure, role-based staff access.",
    tags: ["React.js", "Node.js", "Supabase Realtime", "Supabase Auth", "GPS APIs"],
    ghLink: "https://github.com/atharv3046/Hospital-Bed-Finder",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Header */}
        <div className="proj-section-header">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p className="proj-section-sub">
            A collection of projects I've built — from AI chatbots to real-time healthcare tools.
          </p>
        </div>

        {/* Stats bar */}
        <div className="proj-stats-bar">
          <div className="proj-stat">
            <span className="proj-stat-num">3</span>
            <span className="proj-stat-label">Projects</span>
          </div>
          <div className="proj-stat-divider" />
          <div className="proj-stat">
            <span className="proj-stat-num">1</span>
            <span className="proj-stat-label">Hackathon Award</span>
          </div>
          <div className="proj-stat-divider" />
          <div className="proj-stat">
            <span className="proj-stat-num">20+</span>
            <span className="proj-stat-label">Active Users</span>
          </div>
          <div className="proj-stat-divider" />
          <div className="proj-stat">
            <span className="proj-stat-num">90%+</span>
            <span className="proj-stat-label">ML Accuracy</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <Row className="proj-grid">
          {projects.map((project, index) => (
            <Col md={4} key={index} className="proj-col">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>

        {/* Bottom CTA */}
        <div className="proj-cta">
          <p className="proj-cta-text">Want to see more?</p>
          <a
            href="https://github.com/atharv3046"
            target="_blank"
            rel="noreferrer"
            className="proj-cta-btn"
          >
            View All on GitHub →
          </a>
        </div>

      </Container>
    </Container>
  );
}

export default Projects;
