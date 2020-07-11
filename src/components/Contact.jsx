import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

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
		<div className="contact">
			<form
				className="contact-form"
				onSubmit={submitForm}
				action="https://formspree.io/xleppyja"
				method="POST"
			>
				<input
					type="text"
					name="name"
					placeholder="Name"
					onFocus={(e) => (e.target.placeholder = "")}
					onBlur={(e) => (e.target.placeholder = "Name")}
				/>

				<input
					type="email"
					name="email"
					placeholder="Email"
					onFocus={(e) => (e.target.placeholder = "")}
					onBlur={(e) => (e.target.placeholder = "Email")}
				/>

				<textarea
					rows="4"
					type="text"
					name="message"
					placeholder="Message"
					onFocus={(e) => (e.target.placeholder = "")}
					onBlur={(e) => (e.target.placeholder = "Message")}
				/>

				{status === "SUCCESS" ? (
					<p>Thanks!</p>
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
				{status === "ERROR" && <p>Ooops! There was an error.</p>}
			</form>
		</div>
	);
};

export default Contact;

// className="ui form"
