import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: data.username,
      email: data.email,
      message: data.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">
        <span>Contact</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            thangnd111220@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:0355234584" className="p-text">
            0355234584
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              {...register("username", { required: true })}
            />
          </div>
          <p className="app__footer-form--error">
            {errors.username && <span>This name is required</span>}
          </p>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <p className="app__footer-form--error">
            {errors.email && <span>This email is required</span>}
          </p>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              {...register("message", { required: true })}
            />
          </div>
          <p className="app__footer-form--error">
            {errors.message && <span>This message is required</span>}
          </p>
          <button type="submit" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
