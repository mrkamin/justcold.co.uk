import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { HiMiniPhone } from 'react-icons/hi2';
import { IoLocation } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
    const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mjg3nmi',
        'template_bni9d7g',
        form.current,
        'ICkryGMcTL8bCrQoB',
      )
      .then(() => {
        setIsEmailSent(true);
        e.target.reset();
        setTimeout(() => {
          setIsEmailSent(false);
        }, 4000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contact-container flex">
      <hr />
      <section id="contact" className="contact-sect flex">
        <div className="contact-title">
          <div>
            <h2>The Uk Everest Refrigeration and Air-Conditioning</h2>
            <h4>
              Specialist Commercial Air Conditioning & Refrigeration Service
            </h4>
          </div>
          <div className="">
            <HiMiniPhone className="" />
            <div className="">
              <p className="">Phone</p>
              <p className="">07473319304</p>
            </div>
          </div>
          <div className="">
            <IoLocation className="" />
            <div className="">
              <p className="">Address</p>
              <p className="">
                Unit B 11 Troonway Business Centre Humberstone Lane Leicester
                LE4 9HA
              </p>
            </div>
          </div>
          <div className="">
            <MdEmail className="" />
            <div className="">
              <p className="">E-mail</p>
              <p className="">info@theukeverest.co.uk</p>
            </div>
          </div>
          <div />
        </div>
        <div>
          <h3>
            Europe’s Top Refrigeration company.
            {' '}
            <br />
            Contact us
          </h3>
          <div className="container">
            {isEmailSent ? (
              <p className="">
                <span>Email successfully sent!</span>
              </p>
            ) : (
              <form
                ref={form}
                onSubmit={sendEmail}
                className=""
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <div className="">
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
                </div>

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                />
                <button
                  type="submit"
                  className="contact-btn read-more"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;