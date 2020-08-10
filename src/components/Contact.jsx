import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTelegramPlane,
	faGithub,
	faLinkedin,
	faLinkedinIn,
	faGit
} from "@fortawesome/free-brands-svg-icons";

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
			<div className="contact-flex-container">
				<form
					className="contact-form"
					onSubmit={submitForm}
					action="https://formspree.io/xleppyja"
					method="POST"
				>
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
						<p className="success">Thanks!</p>
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
						<p className="error">Email is required.</p>
					)}
				</form>
				<div className="contact-info-flex-container">
					<FontAwesomeIcon
						className="contact-icons"
						icon={faGithub}
					/>
					<FontAwesomeIcon
						className="contact-icons"
						icon={faLinkedinIn}
					/>
					<h5>tldavis09@yahoo.com</h5>
					<h5>469-450-6708</h5>
				</div>
			</div>
		</div>
	);
};
export default Contact;
