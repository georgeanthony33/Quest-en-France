import React, { useState } from "react";
import "./FAQs.scss";
import config from "../../util/Config";

const FAQs = () => {
  const [faqIndex, setFaqIndex] = useState("");
  const handleClick = (index) => {
    index === faqIndex ? setFaqIndex("") : setFaqIndex(index);
  };

  return (
    <div id="FAQs">
      <div className="top-banner">
        <h2 className="title has-text-weight-bold is-size-3" id="site-title">
          Your Questions Answered
        </h2>
        <h2
          className="title has-text-weight-bold is-size-5 is-marginless"
          id="check-availability"
        >
          We have put together a collection of frequently asked questions. If
          there is any other topic you would like to discuss please give us a
          call on 01204 415425 or 07985 093397, email us at
          sales@questenfrance.com or use our 'get in touch' form.
        </h2>
      </div>

      <section className="section has-background-dark">
        <div className="container">
          <article className="panel is-danger has-background-light">
            <p className="panel-heading" id="heading">
              <h3 className="title has-text-weight-bold is-size-3 has-text-white">
                Frequently Asked Questions (FAQs)
              </h3>
            </p>

            {config.faqQuestionsAnswers.map((item, index) => (
              <div key={index} className="outer-wrapper">
                <button
                  className="inner-wrapper anchor-button"
                  onClick={() => handleClick(index)}
                >
                  <div className="question">{Object.keys(item)}</div>
                  {index === faqIndex ? (
                    <i className="icon-minus"></i>
                  ) : (
                    <i className="icon-plus"></i>
                  )}
                </button>
                <div
                  className={
                    index === faqIndex ? "answer-visible" : "answer-invisible"
                  }
                >
                  <p className="answer-text">{Object.values(item)}</p>
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
