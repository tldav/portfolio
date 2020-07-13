import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
	faFile,
	faEnvelope,
	faComment
} from "@fortawesome/free-regular-svg-icons";
import {
	faPhone as faPhoneAlt,
	faMobileAlt
} from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
	const cLink = "  Contact";
	return (
		<div className="side-nav">
			<ul>
				<li>
					<FontAwesomeIcon icon={faGithub} />{" "}
					<a
						href="https://github.com/tldav"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
				</li>
				<li>
					<FontAwesomeIcon icon={faLinkedin} />{" "}
					<a
						href="https://www.linkedin.com/in/tldav/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Linkedin
					</a>
				</li>
				<li>
					<FontAwesomeIcon icon={faFile} />{" "}
					<a
						href="/assets/tdavis-resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</li>
				<li>
					<FontAwesomeIcon icon={faMobileAlt} />
					<a href="#contact" rel="noopener noreferrer">
						{cLink}
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SideNav;
