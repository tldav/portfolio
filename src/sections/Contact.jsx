import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTelegramPlane,
	faGithub,
	faLinkedin,
	faLinkedinIn,
	faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import {
	faSquare,
	faCircle,
	faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/Contact.css";

const Contact = () => {
	const [status, setStatus] = useState("");
	const submitForm = (ev) => {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus("SUCCESS");
			} else {
				setStatus("ERROR");
			}
		};
		xhr.send(data);
	};
	return (
		<div className="stage dark" id="contact">
			<h1>Contact </h1>
			{/* <p>
				here's a form contact me blah blah fill it out or don't red fox
				jumped over the sleepy dog while the cat watched from the
				closet.{" "}
			</p> */}
			<p>
				Feel free to reach out to me, whether it's to discuss a new
				opportunity or to say hello. You can also learn more about me
				and my work on Linkedin and Github.
			</p>
			<div className="contact-flex-container">
				<form
					className="contact-form"
					onSubmit={submitForm}
					action="https://formspree.io/xleppyja"
					method="POST"
				>
					{/* <p>here's a form contact me blah</p> */}
					{/* <label htmlFor="name">Name</label> */}
					<input
						className="input-style"
						type="text"
						name="name"
						placeholder="Name"
						onFocus={(e) => (e.target.placeholder = "")}
						onBlur={(e) => (e.target.placeholder = "Name")}
					/>
					{/* <label htmlFor="email">Email</label> */}

					<input
						className="input-style"
						type="email"
						name="email"
						placeholder="Email"
						onFocus={(e) => (e.target.placeholder = "")}
						onBlur={(e) => (e.target.placeholder = "Email")}
					/>
					{/* <label htmlFor="message">Message</label> */}

					<textarea
						className="input-style"
						rows="4"
						type="text"
						name="message"
						placeholder="Message"
						onFocus={(e) => (e.target.placeholder = "")}
						onBlur={(e) => (e.target.placeholder = "Message")}
					/>
					{status === "SUCCESS" ? (
						<h3 className="success">Thanks!</h3>
					) : (
						<button className="send-button">
							{" "}
							<FontAwesomeIcon
								icon={faTelegramPlane}
								size={"2x"}
								className="send-icon"
							/>
						</button>
					)}
					{status === "ERROR" && (
						<h3 className="error">Email is required!</h3>
					)}
				</form>

				<div className="contact-info-flex-container">
					{/* <FontAwesomeIcon
						className="contact-icons absol purple layer-2 square"
						icon={faSquare}
					/> */}
					<FontAwesomeIcon
						className="contact-icons"
						icon={faGithubSquare}
						onClick={() =>
							window.open(
								"https://www.github.com/tldav",
								"_blank"
							)
						}
					/>
					<FontAwesomeIcon
						className="contact-icons"
						icon={faLinkedin}
						onClick={() =>
							window.open(
								"https://www.linkedin.com/in/tldav/",
								"_blank"
							)
						}
					/>
					{/* <a
						href="https://www.linkedin.com/in/tldav/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							className="contact-icons"
							icon={faLinkedin}
						/>
					</a> */}
					<h6
						className="contact-icons"
						onClick={() =>
							window.open("mailto:tldavis09@yahoo.com")
						}
					>
						tldavis09@yahoo.com
					</h6>
				</div>
			</div>
		</div>
	);
};
export default Contact;
