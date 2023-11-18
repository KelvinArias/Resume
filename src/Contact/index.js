import React, { useState, Fragment } from "react";
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
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const copyToClipboard = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log(textToCopy);
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState(IN_PROCESS);
    const { name, lastName, email, subject, message } = formData;

    try {
      const response = await fetch(
        `https://resume-405301.uw.r.appspot.com/contact?name=${name}&lastName=${lastName}&email=${email}&subject=${subject}&message=${message}`
      );
      console.log(response);
      if (response.status === 200 && response.ok) {
        setFormData({
          name: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitState(SUCCESS);
      } else {
        console.error("Failed to send form data");
        setSubmitState(ERROR);
      }
    } catch (catchError) {
      setSubmitState(ERROR);
      console.error("Failed to send form data", catchError);
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
              onClick={() => copyToClipboard("kelvin727631@gmail.com")}
            >
              <EmailIcon />
              <p className="data">kelvin727631@gmail.com</p>
              <p className="emailMessage">copied!</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <label className="name">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Name"
              />
            </label>
            <label className="lastName">
              <span>Last Name</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
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
              />
            </label>
            <label className="subject">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
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
            {submitState === IN_PROCESS ? (
              <Loader />
            ) : (
              <button type="submit" className="submit">
                Submit
              </button>
            )}
          </form>
        </Fragment>
      )}
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
