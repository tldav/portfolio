import React from "react";
import { bool } from "prop-types";
import NavList from "../NavList";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
	const isHidden = open ? true : false;

	return (
		<StyledMenu
			className="nav-style"
			open={open}
			aria-hidden={!isHidden}
			{...props}
		>
			<NavList />
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired
};

export default Menu;
