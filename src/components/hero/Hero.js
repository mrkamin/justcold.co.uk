import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import IMG from "../../assets/banner.jpg";
import "./hero.css";

const Hero = () => {
  const rightAnimition = useRef();
  const leftAnimation = useRef();

  useLayoutEffect(() => {
    const bannerAninmation = gsap.context(() => {
      gsap.from(".bannerMsgBtnleft", {
        duration: 1,
        x: "-600%",
        ease: "",
      });
      gsap.to(leftAnimation.current, {
        duration: 1,
        x: "0%",
        ease: "",
      });
      gsap.from(".bannerMsgBtnright", {
        duration: 1,
        x: "400%",
        ease: "",
      });
      gsap.to(rightAnimition.current, {
        duration: 1,
        x: "0%",
        ease: "",
      });
      gsap.from(".bannerUpAnimation", {
        duration: 1,
        y: "-400%",
        ease: "",
      });
      gsap.to(rightAnimition.current, {
        duration: 1,
        y: "0%",
        ease: "",
      });
    });
    return () => bannerAninmation.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home">
      <div className="banner-container">
        <img src={IMG} alt="banner" className="banner-img" />
        <div className="overlay" />
      </div>
      <div className="banner-msg flex">
        <div className="banner-msg-p flex">
          <h1 className="bannerUpAnimation" ref={rightAnimition}>
            <span className="font-family-coiny">JustCold</span>
            <span className="font-family-patua"> Refrigeration</span>
          </h1>
          <p className="paragraphAminiation" ref={leftAnimation}>
            Specialist Fridges Installation & Commercial Refrigeration Service
          </p>
        </div>
        <div className="banner-link">
          <Link
            to="our-projects"
            className="bannerMsgBtnleft bannerbtn"
            ref={leftAnimation}
            onClick={scrollToTop}
          >
            OUR PROJECTS
          </Link>
          <Link
            to="contact-us"
            className="bannerMsgBtnright bannerbtn"
            ref={rightAnimition}
            onClick={scrollToTop}
          >
            DISCUSS YOUER PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
