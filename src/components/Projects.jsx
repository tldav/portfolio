import React from "react";
import projectInfo from "../project-info.json";

const Projects = () => {
	return (
		<div className="projects">
			<img src={projectInfo[0].image} alt="" />
			<img src={projectInfo[1].image} alt="" />
			<img src={projectInfo[2].image} alt="" />
			<img src={projectInfo[3].image} alt="" />
		</div>
	);
};

export default Projects;
