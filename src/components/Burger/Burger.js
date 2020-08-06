import React, { useState, useCallback } from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";
import Hamburger from "../Hamburger";
import { HamburgerSqueeze } from "react-animated-burgers";

const Burger = ({ open, setOpen, ...props }) => {
	const isExpanded = open ? true : false;

	// const [isActive, setIsActive] = useState(false);

	// const toggleButton = useCallback(
	// 	() => setIsActive((prevState) => !prevState),
	// 	[]
	// );

	return (
		// <div className="hamburger">
		// 	<HamburgerSqueeze
		// 		aria-label="Toggle menu"
		// 		aria-expanded={isExpanded}
		// 		open={open}
		// 		onClick={() => setOpen(!open)}
		// 		{...props}
		// 		style={{
		// 			padding: "12px",
		// 			zIndex: "10",
		// 			paddingBottom: "5px"
		// 		}}
		// 		buttonWidth={30}
		// 		buttonColor="#f0ecec"
		// 		barColor="black"
		// 		{...{ isActive, toggleButton }}
		// 	/>
		// </div>

		<StyledBurger
			aria-label="Toggle menu"
			aria-expanded={isExpanded}
			open={open}
			onClick={() => setOpen(!open)}
			{...props}
		>
			<span />
			<span />
			<span />
		</StyledBurger>
	);
};

Burger.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired
};

export default Burger;
