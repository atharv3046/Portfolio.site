import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaTrophy } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <div className="proj-card">
      {/* Award Badge */}
      {props.award && (
        <div className="proj-award-badge">
          <FaTrophy style={{ marginRight: 5, fontSize: "0.8em" }} />
          {props.award}
        </div>
      )}

      {/* Image with overlay */}
      <div className="proj-img-wrapper">
        <img src={props.imgPath} alt={props.title} className="proj-img" />
        <div className="proj-img-overlay">
          <div className="proj-overlay-btns">
            <a href={props.ghLink} target="_blank" rel="noreferrer" className="proj-overlay-btn">
              <BsGithub /> &nbsp;Code
            </a>
            {props.demoLink && (
              <a href={props.demoLink} target="_blank" rel="noreferrer" className="proj-overlay-btn proj-overlay-demo">
                <CgWebsite /> &nbsp;Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="proj-body">
        {/* Date */}
        {props.date && <span className="proj-date">{props.date}</span>}

        {/* Title */}
        <h3 className="proj-title">{props.title}</h3>

        {/* Description */}
        <p className="proj-desc">{props.description}</p>

        {/* Tech Stack Pills */}
        {props.tags && (
          <div className="proj-tags">
            {props.tags.map((tag, i) => (
              <span className="proj-tag" key={i}>{tag}</span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="proj-actions">
          <a href={props.ghLink} target="_blank" rel="noreferrer" className="proj-btn proj-btn-ghost">
            <BsGithub /> &nbsp;GitHub
          </a>
          {props.demoLink && (
            <a href={props.demoLink} target="_blank" rel="noreferrer" className="proj-btn proj-btn-primary">
              <CgWebsite /> &nbsp;Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
