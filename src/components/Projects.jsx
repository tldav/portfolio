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
					<h1 className="proj-title yoda-title">YodaScope</h1>
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
					<img
						className="content-image"
						src="assets/alt-plum-360.jpg"
					/>
					<h1 className="proj-title plumm-title">plumm.it</h1>
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
					<img
						className="content-image"
						src="assets/alt-fit-360.jpg"
					/>
					<h1 className="proj-title fit-title">Fit Tracker</h1>
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
					<img
						className="content-image"
						src="assets/alt-charity-360.jpg"
					/>
					<h1 className="proj-title charity-title">
						Charity Tracker
					</h1>
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
