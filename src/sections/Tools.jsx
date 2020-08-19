import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faGitAlt,
	faJs,
	faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/Tools.css";

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
						<li>Rest API</li>
					</ul>
					<ul>
						<li>Git</li>
						<li>Jest</li>
						<li>Redux</li>
						<li>Webpack</li>
						<li>Material-UI</li>
					</ul>
				</div>
			);
		}
		return (
			<p className="tools-p">
				JavaScript React HTML CSS Bootstrap Express Node MySQL MongoDB
				Rest API Redux Git Webpack Jest Material-UI
			</p>
		);
	};

	return (
		<div className="tools stage dark">
			<div ref={element}>
				<h1>Tools I Use</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quasi voluptate aut tenetur ea molestias at, pariatur rerum
					asperiores reprehenderit labore deserunt vel sed optio
					impedit minus ipsa, dignissimos facilis ut!
				</p>
				{renderToolsList()}
				<div className="tools-icons">
					<FontAwesomeIcon icon={faJs} className="js-icon" />
					<FontAwesomeIcon icon={faReact} className="react-icon" />
					<FontAwesomeIcon icon={faNodeJs} className="node-icon" />
					<FontAwesomeIcon icon={faGitAlt} className="git-icon" />
				</div>
			</div>
		</div>
	);
};

export default Tools;
