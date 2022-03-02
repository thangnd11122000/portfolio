import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";
import { useForm } from "react-hook-form";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const demo = {
      _type: "demo",
      name: data.username,
      company: data.company,
      feedback: data.feedback,
    };
    client
      .create(demo)
      .then(() => alert("success"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">
        <span>Testimonials</span>
      </h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(testimonials[currentIndex].imgUrl)}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

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
            type="text"
            placeholder="Your company"
            {...register("company", { required: true })}
          />
        </div>
        <p className="app__footer-form--error">
          {errors.company && <span>This company is required</span>}
        </p>
        <div>
          <textarea
            className="p-text"
            placeholder="Your feedback"
            {...register("feedback", { required: true })}
          />
        </div>
        <p className="app__footer-form--error">
          {errors.feedback && <span>This feedback is required</span>}
        </p>
        <button type="submit" className="p-text" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
