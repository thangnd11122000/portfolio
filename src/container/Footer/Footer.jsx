import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import Contact from "../../Contact/Contact";

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

      <div className="app__footer-content">
        <div className="app__footer-contact">
          <Contact />
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
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
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
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
