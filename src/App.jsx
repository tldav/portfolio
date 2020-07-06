import React from "react";
import Navbar from "./components/Navbar";
import Temp from "./components/Temp";
import "./stylesheets/App.css";

const App = () => {
	return (
		<div className="app-container">
			<div className="left"></div>
			<div className="mid">
				<Navbar />
				<Temp className="dark" />
				<Temp className="light" />
				<Temp className="dark" />
				<Temp className="light" />
			</div>
			<div className="right"></div>
		</div>
	);
};

export default App;
