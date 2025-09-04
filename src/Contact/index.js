import { useState, Fragment } from "react";
import "./styles.css";
import EmailIcon from "../icons/email";
import PhoneIcon from "../icons/phone";
import Loader from "../icons/loader";
import Message from "./Message";
import CheckIcon from "../icons/check";
import ErrorIcon from "../icons/error";
import { IN_PROCESS, SUCCESS, ERROR } from "../const";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .catch((err) => console.error("Failed to copy text:", err));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState(IN_PROCESS);

    try {
      // Build x-www-form-urlencoded body matching PHP field names
      const body = new URLSearchParams();
      body.set("name", formData.name.trim());
      body.set("lastname", formData.lastname.trim());
      body.set("email", formData.email.trim());
      body.set("subject", formData.subject.trim());
      body.set("message", formData.message.trim());
      console.log("Submitting form data:", body.toString());
      const response = await fetch("https://kresume.dev/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
        credentials: "same-origin",
      });

      const data = await response.json().catch(() => null);
      console.log("Received response:", data, response);
      if (response.ok && data && data.ok) {
        setFormData({
          name: "",
          lastname: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitState(SUCCESS);
      } else {
        console.error("Failed to send form data", data);
        setSubmitState(ERROR);
      }
    } catch (err) {
      console.error("Failed to send form data", err);
      setSubmitState(ERROR);
    }
  };

  return (
    <article className="contactContainer">
      {!submitState && (
        <Fragment>
          <div className="contactInfo">
            <div
              className="phone"
              onClick={() => copyToClipboard("+1 786-894-7674")}
            >
              <PhoneIcon />
              <p className="data">+1 786-894-7674</p>
              <p className="phoneMessage">copied!</p>
            </div>
            <div
              className="email"
              onClick={() => copyToClipboard("kelvin@kresume.dev")}
            >
              <EmailIcon />
              <p className="data">kelvin@kresume.dev</p>
              <p className="emailMessage">copied!</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form" noValidate>
            <label className="name">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Name"
                autoComplete="name"
              />
            </label>

            <label className="lastName">
              <span>Last Name</span>
              <input
                type="text"
                name="lastname" // <-- exact key expected by PHP
                value={formData.lastname}
                onChange={handleChange}
                required
                aria-label="Last Name"
                autoComplete="family-name"
              />
            </label>

            <label className="email">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email"
                autoComplete="email"
              />
            </label>

            <label className="subject">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-label="Subject"
              />
            </label>

            <label className="message">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Message"
              />
            </label>

            <button
              type="submit"
              className="submit"
              disabled={submitState === IN_PROCESS}
            >
              {submitState === IN_PROCESS ? "Sending..." : "Submit"}
            </button>
          </form>
        </Fragment>
      )}

      {submitState === IN_PROCESS && <Loader />}
      {submitState === SUCCESS && (
        <Message
          header="Thank You!"
          message="Your message has been sent."
          icon={<CheckIcon />}
        />
      )}
      {submitState === ERROR && (
        <Message
          header="Sorry!"
          message="Your message hasn't been sent."
          icon={<ErrorIcon />}
        />
      )}
    </article>
  );
};

export default ContactForm;
