import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
	faFile,
	faEnvelope,
	faComment
} from "@fortawesome/free-regular-svg-icons";
import {
	faPhone as faPhoneAlt,
	faMobileAlt,
	faDirections
} from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./Hamburger";
// import "../stylesheets/MidNav.css";

const MidNav = () => {
	const [open, setOpen] = useState(false);

	const navToggle = () => {
		setOpen(true);
	};

	// const navToggle = useCallback(() => setOpen((prevState) => !prevState), []);

	const hide = "nav-style hide";
	const show = "nav-style";

	return (
		<div className="mid-nav">
			<Hamburger onClick={navToggle} />
			<div className={open ? show : hide}>
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
			</div>
		</div>
	);
};

export default MidNav;
