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
					<FontAwesomeIcon icon={faGithub} />{" "}
					<a href="https://github.com/tldav" target="_blank">
						Github
					</a>
				</li>
				<li>
					<FontAwesomeIcon icon={faLinkedin} />{" "}
					<a
						href="https://www.linkedin.com/in/tldav/"
						target="_blank"
					>
						Linkedin
					</a>
				</li>
				<li>
					<FontAwesomeIcon icon={faFile} />{" "}
					<a href="/assets/tdavis-resume.pdf" target="_blank">
						Resume
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SideNav;
