import React from "react";
import NavList from "./NavList";
import "../stylesheets/Nav.css";

const SideNav = () => {
	return (
		<div className="side-nav">
			<div className="nav-style">
				<NavList />
			</div>
		</div>
	);
};

export default SideNav;
