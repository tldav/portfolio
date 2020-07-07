import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile as faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const SideNav = () => {
	return (
		<div className="side-nav">
			<ul>
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
		</div>
	);
};

export default SideNav;
