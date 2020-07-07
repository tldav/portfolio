import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const SideNav = () => {
	return (
		<ul className="side-nav">
			<li>
				<FontAwesomeIcon icon={faGithub} /> Github
			</li>
			<li>
				<FontAwesomeIcon icon={faLinkedin} /> Linkedin
			</li>
			<li>
				<FontAwesomeIcon icon={faFile} /> Resume
			</li>
		</ul>
	);
};

export default SideNav;
