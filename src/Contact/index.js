import React, { useState } from "react";
import styles from "./styles.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like send it to a server
    console.log(formData);
  };

  return (
    <div className="contactContainer">
      <div className="contactInfo">
        <div className="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path
              fill="#fff"
              d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z"
            />
          </svg>
          <p>+1 954-931-4468</p>
        </div>
        <div className="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path
              fill="#fff"
              d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z"
            />
          </svg>
          <p>kelvin727631@gmail.com</p>
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
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
