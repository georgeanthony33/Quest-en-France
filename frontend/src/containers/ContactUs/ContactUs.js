import React, { useState } from "react";
import config from "../../util/Config";
import ContactCard from "../../components/ContactCard/ContactCard";
import emailjs from "emailjs-com";

import "./ContactUs.scss";

const {
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_USER_ID,
  REACT_APP_EMAILJS_SERVICE_ID,
} = process.env;

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("general_enquiry");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactUsParams = {
      from_name: name,
      email,
      subject,
      message,
    };

    emailjs.send(
      REACT_APP_EMAILJS_SERVICE_ID,
      REACT_APP_EMAILJS_TEMPLATE_ID,
      contactUsParams,
      REACT_APP_EMAILJS_USER_ID,
    );

    resetForm();
    setMessageSent(true);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("general_enquiry");
    setMessage("");
  };

  const disabledSubmitButton = !(name && email && subject && message);

  return (
    <div id="ContactUs">
      <div className="top-banner">
        <h2 className="title has-text-weight-bold is-size-2 mb-0">
          Contact Us
        </h2>
      </div>
      <section className="section outer-container pt-6 pr-6 pl-6 pb-6 has-background-dark">
        <div className="main-body has-background-light">
          {!messageSent ? (
            <>
              <ContactCard currentPage="ContactUs" />

              <div className="contact-form pr-6 pl-6">
                <p className="mb-4">
                  To get in touch, please use the form below.
                </p>
                <div className="field mb-5">
                  <label className="label mb-0">Name</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                    <span className="icon is-small is-left contact-icon">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>

                <div className="field mb-5">
                  <label className="label mb-0">Email</label>
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input
                      // className="input is-success"
                      className="input"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="icon is-small is-left contact-icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>

                <div className="field mb-5">
                  <label className="label">Subject</label>
                  <div className="control subject-dropdown">
                    <div className="select">
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      >
                        {config.contactUsSubjects.map((el) => (
                          <option key={el.key} value={el.label}>
                            {el.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field mb-5">
                  <label className="label mb-0">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="field is-grouped is-flex is-justify-content-center">
                  <div className="control">
                    <button
                      className="button is-danger"
                      disabled={disabledSubmitButton}
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="message-sent p-6">
              <h3 className="title has-text-weight-bold is-size-3 mb-5">
                Message sent
                <span className="icon has-text-success">
                  <i className="fas fa-check-square"></i>
                </span>
              </h3>
              <p className="mb-5">
                We have received your message and will get back to you as soon
                as we can.
              </p>
              <div className="field is-grouped is-flex is-justify-content-center">
                <div className="control">
                  <button
                    className="button is-danger"
                    onClick={() => setMessageSent(true)}
                  >
                    Back to contact form
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
