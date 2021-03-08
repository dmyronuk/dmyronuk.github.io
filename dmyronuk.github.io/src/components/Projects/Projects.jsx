import React, { useState } from "react";
import { PROJECTS_STATIC } from "../../data/projects.static";
import GithubIcon from "../../icons/github.svg";
import LinkArrow from "../../icons/grey_link_arrow.png";
import "./Projects.css";

const Projects = () => {
  const [currentProjectPopup, setProjectPopup] = useState(null);

  return (
    <div className="flex-row justify-content-center projects-container">
      {currentProjectPopup &&
        <div className="flex-row justify-content-center align-items-center project-popup" >
          <div className="page-mask" onClick={() => setProjectPopup(null)} />
          <div className="project-popup-content">
            <img
              alt={currentProjectPopup.name}
              src={currentProjectPopup.imageURL}
            />
          </div>
        </div>
      }

      <div className="content-mid-container">
        <div id="projects" />
        <section>
          <h2>Projects</h2>
          <div className="projects-grid">
            {PROJECTS_STATIC.map((project, i) =>
              <div
                key={"project_" + i}
                className="projects-item"
                onClick={() => setProjectPopup(project)}
              >
                <a
                  className="project-github-link"
                  href={project.githubURL}
                  onClick={e => e.stopPropagation()}
                >
                  <h3>
                    {project.name}
                    {project.githubURL &&
                      <img alt="Github" src={GithubIcon} />
                    }
                  </h3>
                </a>
                <div className="tech default-light-grey">{project.tech}</div>
                <section>{project.description}</section>
              </div>
            )}
          </div>
        </section>

        <div className="link-arrow-container">
          <a href="/#awards">
            <img alt="Awards Link" src={LinkArrow} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;