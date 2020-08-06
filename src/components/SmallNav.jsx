import React, { useState, useRef } from "react";
import Hamburger from "./Hamburger";
import FocusLock from "react-focus-lock";
import Menu from "./Menu";
import { useOnClickOutside } from "../hooks";

const SmallNav = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = "main-menu";

	useOnClickOutside(node, () => setOpen(false));

	return (
		<div className="small-nav">
			<div ref={node}>
				<FocusLock disabled={!open}>
					<Hamburger
						open={open}
						setOpen={setOpen}
						aria-controls={menuId}
					/>
					<Menu open={open} setOpen={setOpen} id={menuId} />
				</FocusLock>
			</div>
		</div>
	);
};

export default SmallNav;
