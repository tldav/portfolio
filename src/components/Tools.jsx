import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faGitAlt,
	faJs,
	faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import { faSquare, fas } from "@fortawesome/free-solid-svg-icons";

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
		<div className="tools stage">
			<h1>Title</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
				voluptate aut tenetur ea molestias at, pariatur rerum asperiores
				reprehenderit labore deserunt vel sed optio impedit minus ipsa,
				dignissimos facilis ut!
			</p>
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

				{/* <span className="fa-layers fa-fw">
					<FontAwesomeIcon
						icon={faSquare}
						color={"black"}
						size={isDestkop ? "6x" : "5x"}
					/>
					<FontAwesomeIcon
						icon={faJs}
						color={"yellow"}
						size={isDestkop ? "6x" : "5x"}
					/>
				</span> */}

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
