import React from "react";
import George from "./George.jpg";

import "./ContactCard.scss";

const ContactCard = (props) => {
  const { currentPage } = props;
  return (
    <div id="ContactCard" className="block">
      {currentPage !== "ContactUs" && <h4 className="title is-4">Contact</h4>}
      <div className="card contact">
        <div className="card-image pr-4">
          <figure className="image is-1by1 contact-image">
            <img src={George} alt="Quest en France Host George" />
          </figure>
        </div>
        <div className="card-content pt-2 pl-0 pr-0 pb-1">
          <div className="media">
            <div className="media-content">
              <p className="title is-4 mb-1">
                Hosted by George {currentPage === "ContactUs" && "Anthony"}
              </p>
              <a href="mailto:georgeanthony33@gmail.com">
                <div className="contact-links">
                  <i className="fas fa-envelope"></i>
                  <p className="ml-2 mb-1">Email</p>
                </div>
              </a>
              <a target="_blank" href="https://github.com/georgeanthony33">
                <div className="contact-links">
                  <i className="fab fa-github"></i>
                  <p className="ml-2 mb-1">GitHub</p>
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/george-anthony/"
              >
                <div className="contact-links">
                  <i className="fab fa-linkedin"></i>
                  <p className="ml-2 mb-1">LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
