import React from "react";
import "../stylesheets/Projects.css";
import projectInfo from "../project-info.json";

const Projects = () => {
	return (
		<div id="projects" className="stage">
			<h1>Some Garbo Apps</h1>
			<p>Here are a few things I've worked on recently.</p>
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
										href={project.appUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										App
									</a>
									<a
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