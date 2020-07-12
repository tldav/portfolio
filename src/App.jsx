import React from "react";
import Intro from "./components/Intro";
import Temp from "./components/Temp";
import SideNav from "./components/SideNav";
import Contact from "./components/Contact";
import Tools from "./components/Tools";
import "./stylesheets/App.css";

const App = () => {
	return (
		<div className="app-container ">
			<div className="left"></div>
			<div className="mid">
				<Intro />
				<Temp />
				<Tools />
				<Temp />
				<Temp />
				<Temp />
				<div className="contact-container">
					<Contact className="contact-left" />
				</div>
			</div>
			<div className="right">
				<SideNav />
			</div>
		</div>
	);
};

export default App;
