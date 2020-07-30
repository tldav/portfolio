import React, { useState, useCallback } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";

const App = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleButton = useCallback(
		() => setIsActive((prevState) => !prevState),
		[]
	);

	return (
		<div className="hamburger">
			<HamburgerSqueeze
				style={{ padding: "0" }}
				buttonWidth={30}
				buttonColor="#f0ecec"
				barColor="black"
				{...{ isActive, toggleButton }}
			/>
		</div>
	);
};

export default App;
