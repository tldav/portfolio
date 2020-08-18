import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/Projects.css";
import projectInfo from "../project-info.js";

const Projects = () => {
	const githubLink = (
		<a
			href="https://github.com/tldav"
			target="_blank"
			rel="noopener noreferrer"
			className="github-link"
		>
			Github.
		</a>
	);
	return (
		<div id="projects" className="stage">
			<h1>Recent Work</h1>
			<p>
				Here are a few things I've worked on recently. See more of my
				work on {githubLink}
			</p>
			<div className="proj-container">
				{projectInfo.map((project) => {
					return (
						<div className="proj-box" key={project.name}>
							<div className="content">
								<div className="content-overlay"></div>
								<img
									className="content-image"
									src={project.image}
									alt={project.name}
								/>
								<h1 className="proj-title" id={project.css}>
									{project.name}
								</h1>
								<div className="content-details fadeIn-bottom">
									<p className="content-text">
										{project.description}
									</p>
									<a
										className="app-link"
										href={project.appUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										App
									</a>
									<FontAwesomeIcon
										className="code-icon"
										icon={faCode}
									/>
									<a
										className="code-link"
										href={project.repoUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										Code
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
