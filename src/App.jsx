import React from "react";
import "./stylesheets/App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import useSticky from "./hooks/useSticky";
import { SideNav, MidNav, SmallNav, Footer } from "./components";
import { Contact, Intro, Projects, Tools } from "./sections";

const App = () => {
	const { isSticky, element } = useSticky();

	return (
		<ThemeProvider theme={theme}>
			<div className="app-container ">
				<div className="left"></div>
				<div className="mid">
					<MidNav />
					<SmallNav sticky={isSticky} />
					<Intro />
					<Tools element={element} />
					<Projects />
					<Contact />
					<Footer />
				</div>
				<div className="right">
					<SideNav />
				</div>
			</div>
		</ThemeProvider>
	);
};

export default App;
