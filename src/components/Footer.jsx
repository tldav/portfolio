import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
	return (
		<div className="footer stage">
			<FontAwesomeIcon icon={faCopyright} /> 2020 Thomas L. Davis because
			everyone puts this here. Thank you for coming to my TED Talk.
		</div>
	);
};

export default Footer;
