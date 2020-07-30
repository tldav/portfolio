import React from "react";
import Intro from "./components/Intro";
import Temp from "./components/Temp";
import SideNav from "./components/SideNav";
import MidNav from "./components/MidNav";
import Contact from "./components/Contact";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Hamburger from "./components/Hamburger";
import "./stylesheets/App.css";

const App = () => {
	return (
		<div className="app-container ">
			<div className="left"></div>
			<div className="mid">
				<MidNav />
				<Hamburger className="hamburger" />

				<Intro />
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
	);
};

export default App;
