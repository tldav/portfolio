import React, { useState, useRef } from "react";
import FocusLock from "react-focus-lock";
import "./stylesheets/App.css";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { theme } from "./theme";
import { GlobalStyles } from "./global";
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
	Hamburger
} from "./components";

const App = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = "main-menu";

	useOnClickOutside(node, () => setOpen(false));

	return (
		<ThemeProvider theme={theme}>
			{/* <GlobalStyles /> */}
			<div className="app-container ">
				<div className="left">
					{/* <SideNav /> */}
					{/* <div ref={node}>
						<FocusLock disabled={!open}>
							<Burger
								open={open}
								setOpen={setOpen}
								aria-controls={menuId}
							/>
							<Menu open={open} setOpen={setOpen} id={menuId} />
						</FocusLock>
					</div> */}
				</div>
				<div className="mid">
					<div ref={node}>
						<FocusLock disabled={!open}>
							<Burger
								open={open}
								setOpen={setOpen}
								aria-controls={menuId}
							/>
							<Menu open={open} setOpen={setOpen} id={menuId} />
						</FocusLock>
					</div>
					{/* <MidNav /> */}
					<Intro />
					<Hamburger />
					<Temp />
					<Tools />
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
