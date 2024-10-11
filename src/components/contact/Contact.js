import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { HiMiniPhone } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mjg3nmi",
        "template_bni9d7g",
        form.current,
        "ICkryGMcTL8bCrQoB"
      )
      .then(() => {
        setIsEmailSent(true);
        e.target.reset();
        setTimeout(() => {
          setIsEmailSent(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="contact-container flex">
      <hr />
      <section id="contact" className="contact-sect flex">
        <div className="contact-title flex">
          <div>
            <h2>
              <span className="font-family-coiny about-color">JustCold</span>{" "}
              <span className="font-family-patua about-color">
                {" "}
                Refrigeration
              </span>
            </h2>
            <h4>Specialist Commercial Refrigeration Service</h4>
          </div>
          <div className="contact-sign-container">
            <HiMiniPhone className="contact-sign" />
            <div className="">
              <p className="">Phone</p>
              <p className="">07473319304</p>
            </div>
          </div>
          <div className="flex contact-sign-container">
            <IoLocation className="contact-sign" />
            <div className="">
              <p className="">Address</p>
              <p className="">
                Unit B 11 Troonway Business Centre Humberstone Lane Leicester
                LE4 9HA
              </p>
            </div>
          </div>
          <div className="flex contact-sign-container">
            <MdEmail className="contact-sign" />
            <div className="">
              <p className="">E-mail</p>
              <p className="">info@justcold.co.uk</p>
            </div>
          </div>
          <div />
        </div>
        <div className="form-container flex">
          <h3>
            Europe’s Top Refrigeration company. <br />
            Contact us
          </h3>
          <div className="container flex">
            {isEmailSent ? (
              <p className="">
                <span>Email successfully sent!</span>
              </p>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="form flex">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className=""
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone No"
                  required
                  className=""
                />

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                />
                <button type="submit" className="contact-btn read-more">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
