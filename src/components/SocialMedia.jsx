import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://github.com/thangnd11122000"
        data-tip
        data-for="social-github"
      >
        <AiFillGithub />
        <ReactTooltip id="social-github" place="right" effect="solid">
          Github
        </ReactTooltip>
      </a>
      <a
        href="https://www.facebook.com/doanthang2000"
        data-tip
        data-for="social-facebook"
      >
        <FaFacebookF />
        <ReactTooltip id="social-facebook" place="right" effect="solid">
          Facebook
        </ReactTooltip>
      </a>
      <a
        href="https://www.topcv.vn/xem-cv/BAgDUVQDUgYHBgsFUF5TUV1QUQEKBVBWB1wFVgd153"
        data-tip
        data-for="social-cv"
      >
        <ImProfile />
        <ReactTooltip id="social-cv" place="right" effect="solid">
          CV
        </ReactTooltip>
      </a>
    </div>
  );
};

export default SocialMedia;
