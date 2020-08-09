import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faGitAlt,
	faJs,
	faNodeJs
} from "@fortawesome/free-brands-svg-icons";

const Tools = ({ element }) => {
	const [isDestkop, setDesktop] = useState(window.innerWidth > 360);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 360);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	const renderToolsList = () => {
		if (isDestkop) {
			return (
				<div className="tools-list">
					<ul>
						<li>JavaScript</li>
						<li>React</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>Bootstrap</li>
					</ul>
					<ul>
						<li>Express</li>
						<li>Node</li>
						<li>MySQL</li>
						<li>MongoDB</li>
						<li>Rest APi</li>
					</ul>
					<ul>
						<li>Git</li>
						<li>Jest</li>
						<li>Material-UI</li>
						<li>stuff</li>
						<li>stuff</li>
					</ul>
				</div>
			);
		}
		return (
			<p className="tools-p">
				JavaScript React HTML CSS Bootstrap Express Node MySQL MongoDB
				Rest API Git Jest Material-UI stuff stuff
			</p>
		);
	};

	return (
		<div className="tools stage dark">
			<div ref={element}>
				<h1>Tools</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quasi voluptate aut tenetur ea molestias at, pariatur rerum
					asperiores reprehenderit labore deserunt vel sed optio
					impedit minus ipsa, dignissimos facilis ut!
				</p>
				{renderToolsList()}
				<div className="fa-icons">
					<FontAwesomeIcon
						icon={faJs}
						className="js-icon"
						// size={isDestkop ? "6x" : "4x"}
					/>

					<FontAwesomeIcon
						icon={faReact}
						className="react-icon"
						// size={isDestkop ? "6x" : "5x"}
					/>

					<FontAwesomeIcon
						icon={faNodeJs}
						className="node-icon"
						// size={isDestkop ? "6x" : "5x"}
					/>

					<FontAwesomeIcon
						icon={faGitAlt}
						className="git-icon"
						// size={isDestkop ? "6x" : "5x"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Tools;
