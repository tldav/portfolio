import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
	return (
		<ul>
			<li>
				<a
					href="https://github.com/tldav"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
				<FontAwesomeIcon className="pap" icon={faGithub} />{" "}
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/tldav/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Linkedin
				</a>
				<FontAwesomeIcon className="pap" icon={faLinkedin} />{" "}
			</li>
			<li>
				<a
					href="/assets/tdavis-resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</a>
				<FontAwesomeIcon className="pap" icon={faFile} />{" "}
			</li>
			<li>
				<a href="#contact" rel="noopener noreferrer">
					Contact
				</a>
				<FontAwesomeIcon className="pap" icon={faMobileAlt} />
			</li>
		</ul>
	);
};

export default NavList;
