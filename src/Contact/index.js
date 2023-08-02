import React, { useState, Fragment } from "react";
import "./styles.css";

const Loader = () => {
  return (
    <div className="loader" title="0">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40px"
        height="40px"
        viewBox="0 0 40 40"
        enableBackground="new 0 0 40 40"
      >
        <path
          opacity="0.2"
          fill="#000"
          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
        />
        <path
          fill="#000"
          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

const inProcess = "inProcess";
const success = "success";
const error = "error";

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
    setSubmitState(inProcess);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log("Form data sent successfully");
        // Reset form data
        setFormData({
          name: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitState(success);
      } else {
        // Handle error
        console.error("Failed to send form data");
        setSubmitState(error);
      }
    } catch (catchError) {
      setSubmitState(error);
      console.error("Failed to send form data", catchError);
    }
  };

  return (
    <div className="contactContainer">
      {!submitState && (
        <Fragment>
          <div className="contactInfo">
            <div
              className="phone"
              onClick={() => copyToClipboard("+1 954-931-4468")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                <path
                  fill="#fff"
                  d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z"
                />
              </svg>
              <p className="data">+1 954-931-4468</p>
              <p className="phoneMessage">copied!</p>
            </div>
            <div
              className="email"
              onClick={() => copyToClipboard("kelvin727631@gmail.com")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                <path
                  fill="#fff"
                  d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z"
                />
              </svg>
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
            {submitState === inProcess ? (
              <Loader />
            ) : (
              <button type="submit" className="submit">
                Submit
              </button>
            )}
          </form>
        </Fragment>
      )}
      {submitState === success && (
        <div className="thanksContainer">
          <div className="thanks">
            <p>Thank You!</p>
            <p className="thanksMessage">Your message has been sent.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
              className="check"
              fill="green"
            >
              <path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" />
            </svg>
            <svg width="300" height="300" className="circle">
              <circle
                cx="150"
                cy="150"
                r="149"
                stroke="#fff"
                strokeWidth="1"
                fill="none"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,251.2;251.3,0"
                  dur="1s"
                />
              </circle>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
