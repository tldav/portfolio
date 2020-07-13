import React from "react";
import projectInfo from "../project-info.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Projects = () => {
// 	return (

// 	);
// };

// export default Projects;

export default () => (
	<Carousel>
		<div>
			<img alt="" src={projectInfo[0].image} />
			<p className="legend">Legend 1</p>
		</div>
		<div>
			<img alt="" src={projectInfo[1].image} />
			<p className="legend">Legend 2</p>
		</div>
		<div>
			<img alt="" src={projectInfo[2].image} />
			<p className="legend">Legend 3</p>
		</div>
		<div>
			<img alt="" src={projectInfo[3].image} />
			<p className="legend">Legend 4</p>
		</div>
	</Carousel>
);
