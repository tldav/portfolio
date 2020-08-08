import React, { useState, useRef } from "react";
import Hamburger from "./Hamburger";
import FocusLock from "react-focus-lock";
import Menu from "./Menu";
import Burger from "./Burger";
import { useOnClickOutside } from "../hooks";

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
						open={open}
						setOpen={setOpen}
						aria-controls={menuId}
						buttonColor="transparent"
					/>
					<Menu open={open} setOpen={setOpen} id={menuId} />
				</FocusLock>
			</div>
		</nav>
	);
};

export default MidNav;
