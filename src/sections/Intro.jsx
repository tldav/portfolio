import React from "react";
import "../stylesheets/Intro.css";

const Intro = () => {
	return (
		<div className="intro stage ">
			<div className="intro-flex-container">
				<img
					className="me"
					src="/assets/me.jpg"
					alt="Headshot of Thomas Davis"
				/>
				<h1>Thomas L. Davis</h1>
				<p>Full Stack Developer</p>
			</div>
		</div>
	);
};

export default Intro;
