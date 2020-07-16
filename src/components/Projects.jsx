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
					<a
						href="https://unsplash.com/photos/HkTMcmlMOUQ"
						target="_blank"
					>
						<div className="content-overlay"></div>
						<img
							className="content-image"
							src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
						/>
						<div className="content-details fadeIn-bottom">
							<h3 className="content-title">This is a title</h3>
							<p className="content-text">
								This is a short description
							</p>
						</div>
					</a>
				</div>
			</div>

			<div className="proj-container">
				<div className="content">
					<a
						href="https://unsplash.com/photos/HkTMcmlMOUQ"
						target="_blank"
					>
						<div className="content-overlay"></div>
						<img
							className="content-image"
							src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
						/>
						<div className="content-details fadeIn-bottom">
							<h3 className="content-title">This is a title</h3>
							<p className="content-text">
								This is a short description
							</p>
						</div>
					</a>
				</div>
			</div>

			<div className="proj-container">
				<div className="content">
					<a
						href="https://unsplash.com/photos/HkTMcmlMOUQ"
						target="_blank"
					>
						<div className="content-overlay"></div>
						<img
							className="content-image"
							src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
						/>
						<div className="content-details fadeIn-bottom">
							<h3 className="content-title">This is a title</h3>
							<p className="content-text">
								This is a short description
							</p>
						</div>
					</a>
				</div>
			</div>

			<div className="proj-container">
				<div className="content">
					<a
						href="https://unsplash.com/photos/HkTMcmlMOUQ"
						target="_blank"
					>
						<div className="content-overlay"></div>
						<img
							className="content-image"
							src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
						/>
						<div className="content-details fadeIn-bottom">
							<h3 className="content-title">This is a title</h3>
							<p className="content-text">
								This is a short description
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
