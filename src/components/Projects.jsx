import React from "react";
import projectInfo from "../project-info.json";

const Projects = () => {
	return (
		<div className="projects">
			{/* <img src={projectInfo[0].image} alt="" />
			<img src={projectInfo[1].image} alt="" />
			<img src={projectInfo[2].image} alt="" />
			<img src={projectInfo[3].image} alt="" /> */}

			<div className="proj-container">
				<div className="content">
					<div className="content-overlay"></div>
					<img
						className="content-image"
						src="assets/alt-space-360.jpg"
					/>
					<h3 className="proj-title">YodaScope</h3>
					<div className="content-details fadeIn-bottom">
						<h3 className="content-title">This is a title</h3>
						<p className="content-text">
							This is a short description
						</p>
					</div>
				</div>
			</div>

			<div className="proj-container">
				<div className="content">
					<div className="content-overlay"></div>
					<img className="content-image" src="assets/plum-360.jpg" />
					<div className="content-details fadeIn-bottom">
						<h3 className="content-title">This is a title</h3>
						<p className="content-text">
							A forum with user signup and authentication. Created
							using JavaScript, jQuery, Node, Express, and MySQL
							with Sequelize.
						</p>
					</div>
				</div>
			</div>

			<div className="proj-container">
				<div className="content">
					<div className="content-overlay"></div>
					<img className="content-image" src="assets/fit.png" />
					<div className="content-details fadeIn-bottom">
						<h3 className="content-title">This is a title</h3>
						<p className="content-text">
							This is a short description
						</p>
					</div>
				</div>
			</div>

			<div className="proj-container">
				<div className="content">
					<div className="content-overlay"></div>
					<img className="content-image" src="assets/charity.png" />
					<div className="content-details fadeIn-bottom">
						<h3 className="content-title">This is a title</h3>
						<p className="content-text">
							This is a short description
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
