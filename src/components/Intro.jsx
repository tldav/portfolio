import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faGitAlt,
	faJs,
	faNodeJs
} from "@fortawesome/free-brands-svg-icons";

const Intro = () => {
	return (
		<div className="intro">
			<img
				className="me"
				src="/assets/me.jpg"
				alt="Headshot of Thomas Davis"
			/>
			<FontAwesomeIcon
				icon={faReact}
				className="react-icon"
				size={"6x"}
			/>
			<FontAwesomeIcon icon={faGitAlt} className="git-icon" size={"6x"} />
			<FontAwesomeIcon icon={faJs} className="js-icon" size={"6x"} />
			<FontAwesomeIcon
				icon={faNodeJs}
				className="node-icon"
				size={"6x"}
			/>
		</div>
	);
};

export default Intro;
