import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTelegramPlane,
	faLinkedin,
	faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
					{/* <label htmlFor="name" style={{fontSize: "15px"}}>
						Use the form or email to tldavis09@yahoo.com
					</label> */}
					<input
						className="input-style"
						type="text"
						name="name"
						placeholder="Name"
						onFocus={(e) => (e.target.placeholder = "")}
						onBlur={(e) => (e.target.placeholder = "Name")}
					/>
					<input
						className="input-style"
						type="email"
						name="email"
						placeholder="Email"
						onFocus={(e) => (e.target.placeholder = "")}
						onBlur={(e) => (e.target.placeholder = "Email")}
					/>
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
					<FontAwesomeIcon
						className="contact-icons"
						title="https://www.github.com/tldav"
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
						title="https://www.linkedin.com/in/tldav/"
						icon={faLinkedin}
						onClick={() =>
							window.open(
								"https://www.linkedin.com/in/tldav/",
								"_blank"
							)
						}
					/>
					<FontAwesomeIcon
						className="contact-icons"
						title="tldavis09@yahoo.com"
						icon={faEnvelope}
						onClick={() =>
							window.open("mailto:tldavis09@yahoo.com")
						}
					/>
				</div>
			</div>
		</div>
	);
};
export default Contact;
