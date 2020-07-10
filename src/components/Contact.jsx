import React, { useState } from "react";

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
		<form
			onSubmit={submitForm}
			action="https://formspree.io/xleppyja"
			method="POST"
		>
			<label>Email:</label>
			<input type="email" name="email" />
			<label>Message:</label>
			<input type="text" name="message" />
			{status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
			{status === "ERROR" && <p>Ooops! There was an error.</p>}
		</form>
	);
};

export default Contact;
