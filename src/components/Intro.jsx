import React from "react";

const Intro = () => {
	const title = " <- Thomas Davis";
	return (
		<div className="intro stage">
			<img
				className="me"
				src="/assets/me.jpg"
				alt="Headshot of Thomas Davis"
			/>
			<h1>{title}</h1>
		</div>
	);
};

export default Intro;
