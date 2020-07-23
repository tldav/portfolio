import React from "react";
import "../stylesheets/Projects.css";
import projectInfo from "../project-info.json";

const Projects = () => {
	return (
		<div id="projects" className="stage">
			<h1>Title</h1>
			<div className="proj-container">
				{projectInfo.map((project) => {
					return (
						<div className="proj-box">
							<div className="content">
								<div className="content-overlay"></div>
								<img
									className="content-image"
									src={project.image}
								/>
								<h1 className="proj-title" id={project.css}>
									{project.name}
								</h1>
								<div className="content-details fadeIn-bottom">
									<p className="content-text">
										{project.description}
									</p>
									<a href={project.appUrl}>App</a>
									<a href={project.repoUrl}>Code</a>
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
