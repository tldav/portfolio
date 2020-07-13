import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faGitAlt,
	faJs,
	faNodeJs
} from "@fortawesome/free-brands-svg-icons";

const Tools = () => {
	const [isDestkop, setDesktop] = useState(window.innerWidth > 500);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 500);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	return (
		<div className="tools">
			<ul>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
			</ul>
			<div className="fa-icons">
				<div className="">
					<FontAwesomeIcon
						icon={faJs}
						className="js-icon"
						size={isDestkop ? "6x" : "5x"}
					/>
				</div>
				<div className="">
					<FontAwesomeIcon
						icon={faReact}
						className="react-icon"
						size={isDestkop ? "6x" : "5x"}
					/>
				</div>
				<div className="">
					<FontAwesomeIcon
						icon={faNodeJs}
						className="node-icon"
						size={isDestkop ? "6x" : "5x"}
					/>
				</div>
				<div className="">
					<FontAwesomeIcon
						icon={faGitAlt}
						className="git-icon"
						size={isDestkop ? "6x" : "5x"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Tools;
