import React, { useState, useRef } from "react";
import FocusLock from "react-focus-lock";
import "./stylesheets/App.css";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { theme } from "./theme";
import useSticky from "./useSticky.js";
import {
	Intro,
	Temp,
	SideNav,
	MidNav,
	Contact,
	Tools,
	Projects,
	Burger,
	Menu,
	Hamburger,
	SmallNav
} from "./components";

const App = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = "main-menu";

	const { isSticky, element } = useSticky();

	useOnClickOutside(node, () => setOpen(false));

	return (
		<ThemeProvider theme={theme}>
			<div className="app-container ">
				<div className="left"></div>
				<div className="mid">
					{/* <div ref={node}>
						<FocusLock disabled={!open}>
							<Hamburger
								open={open}
								setOpen={setOpen}
								aria-controls={menuId}
							/>
							<Menu open={open} setOpen={setOpen} id={menuId} />
						</FocusLock>
					</div> */}
					<MidNav />
					<SmallNav sticky={isSticky} />
					<Intro />
					<Temp />
					<Tools element={element} />
					<Projects />
					<Contact />
					<Temp />
				</div>
				<div className="right">
					<SideNav />
				</div>
			</div>
		</ThemeProvider>
	);
};

export default App;

// burger section is 44 px            nav padding is 32px
