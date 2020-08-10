import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
	return (
		<div className="footer stage">
			<FontAwesomeIcon icon={faCopyright} /> Thomas Davis 2020 because
			everyone puts this here.
		</div>
	);
};

export default Footer;
