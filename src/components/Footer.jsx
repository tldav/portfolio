import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
	return (
		<div className="footer stage">
			<FontAwesomeIcon icon={faCopyright} /> 2020 Thomas L. Davis
		</div>
	);
};

export default Footer;
