import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faGitAlt,
	faJs,
	faNodeJs
} from "@fortawesome/free-brands-svg-icons";

const Tools = () => {
	return (
		<div className="tools container">
			<ul>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
				<li>stuff</li>
			</ul>
			<div className="row fa-icons d-flex">
				<div className="col-md-3 col-6">
					<FontAwesomeIcon
						icon={faJs}
						className="js-icon"
						size={"6x"}
					/>
				</div>
				<div className="col-md-3 col-6">
					<FontAwesomeIcon
						icon={faReact}
						className="react-icon"
						size={"6x"}
					/>
				</div>
				<div className="col-md-3 col-6">
					<FontAwesomeIcon
						icon={faNodeJs}
						className="node-icon"
						size={"6x"}
					/>
				</div>
				<div className="col-md-3 col-6">
					<FontAwesomeIcon
						icon={faGitAlt}
						className="git-icon"
						size={"6x"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Tools;
