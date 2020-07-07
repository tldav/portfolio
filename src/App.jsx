import React from "react";
import Intro from "./components/Intro";
import Temp from "./components/Temp";
import SideNav from "./components/SideNav";
import "./stylesheets/App.css";

const App = () => {
	return (
		<div className="app-container">
			<div className="left"></div>
			<div className="mid">
				<Intro />
				<Temp />
				<Temp />
				<Temp />
				<Temp />
				<Temp />
				<Temp />
				<Temp />
				<Temp />
			</div>
			<div className="right">
				<SideNav />
			</div>
		</div>
	);
};

export default App;
