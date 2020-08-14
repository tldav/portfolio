import React, { useState, useRef } from "react";
import Burger from "./Burger";
import FocusLock from "react-focus-lock";
import Menu from "./Menu";
import useOnClickOutside from "../hooks/useOnClickOutside";
import "../stylesheets/Nav.css";

const SmallNav = ({ sticky }) => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = "main-menu";

	useOnClickOutside(node, () => setOpen(false));

	return (
		<nav className={sticky ? "small-nav small-nav-sticky" : "small-nav"}>
			<div ref={node}>
				<FocusLock disabled={!open}>
					<Burger
						className="burger-button"
						open={open}
						setOpen={setOpen}
						aria-controls={menuId}
						buttonColor={"#EFFFFA"}
					/>
					<Menu open={open} setOpen={setOpen} id={menuId} />
				</FocusLock>
			</div>
		</nav>
	);
};

export default SmallNav;
