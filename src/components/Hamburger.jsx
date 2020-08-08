import React, { useState, useCallback } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";

const Hamburger = ({ open, setOpen, buttonColor, ...props }) => {
	const isExpanded = open ? true : false;
	const [isActive, setIsActive] = useState(false);

	const toggleButton = useCallback(
		() => setIsActive((prevState) => !prevState),
		[]
	);

	return (
		<div className="hamburger">
			<HamburgerSqueeze
				aria-label="Toggle menu"
				aria-expanded={isExpanded}
				open={open}
				onClick={() => setOpen(!open)}
				{...props}
				style={{
					padding: "12px",
					paddingBottom: "5px"
				}}
				buttonWidth={30}
				buttonColor={buttonColor}
				barColor="black"
				{...{ isActive, toggleButton }}
			/>
		</div>
	);
};

export default Hamburger;
