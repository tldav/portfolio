import React from "react";
import "../stylesheets/Intro.css";

const Intro = () => {
	return (
		<div className="intro stage ">
			<div className="intro-flex-container">
				<img
					className="me"
					src={process.env.PUBLIC_URL + "/assets/me.jpg"}
					alt="Headshot of Thomas Davis"
				/>
				<h1>Thomas L. Davis</h1>
				<p className="job-title">Full Stack Developer</p>
			</div>
			<p>
				Full stack web and software developer with a background in
				insurance fraud analysis and special investigations. With a
				recently earned certificate in Full Stack Development from
				Southern Methodist University, my ambition is to construct
				captivating applications that focus on the user first. Ardent
				love for aesthetic design and a penchant for abstract
				problem-solving inspire perpetual elevation of my proficiency as
				a developer.
			</p>
		</div>
	);
};

export default Intro;
