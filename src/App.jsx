import React from "react";
import "./stylesheets/App.css";
import {
	Intro,
	Temp,
	SideNav,
	MidNav,
	Contact,
	Tools,
	Projects,
	Hamburger,
	Menu
} from "./components";

const App = () => {
	return (
		<div className="app-container ">
			<div className="left"></div>
			<div className="mid">
				<MidNav />
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
