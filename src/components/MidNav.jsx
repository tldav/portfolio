import React, { useState, useRef } from "react";
import FocusLock from "react-focus-lock";
import Menu from "./Menu";
import Burger from "./Burger";
import useOnClickOutside from "../hooks/useOnClickOutside";
import "../stylesheets/Nav.css";

const MidNav = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = "main-menu";

	useOnClickOutside(node, () => setOpen(false));

	return (
		<nav className="mid-nav">
			<div ref={node}>
				<FocusLock disabled={!open}>
					<Burger
						className="hamburger-button"
						open={open}
						setOpen={setOpen}
						aria-controls={menuId}
					/>
					<Menu open={open} setOpen={setOpen} id={menuId} />
				</FocusLock>
			</div>
		</nav>
	);
};

export default MidNav;
