import React from "react";
import "../stylesheets/Projects.css";
import projectInfo from "../project-info.json";

const Projects = () => {
	return (
		<div className="projects">
			{projectInfo.map((project) => {
				return (
					<div className="proj-container">
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
								<h3 className="content-title">
									This is a title
								</h3>
								<p className="content-text">
									{project.description}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Projects;
