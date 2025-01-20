import React from "react";

const Footer = ({ sendEmail }) => {
  return (
    <>
      <div className="foot">
        <div className="foot-content1">
          <h3>Get In Touch</h3>
          <p>
            As a <strong>Frontend Developer</strong>, I am always excited to
            connect with fellow developers, clients, and collaborators. Whether
            you have a project idea, want to discuss the latest trends in web
            development, or simply want to say hello, Feel free to reach out to
            me via Social Media preferred communication channel.
          </p>
        </div>
        <div className="foot-content">
          <h4>Follow Me On</h4>
          <a href="https://www.linkedin.com/in/krushnashahane">
            <i className="fa-brands fa-linkedin footicon" id="linkedin"></i>
          </a>
          <a href="https://github.com/krushna7222">
            <i className="fa-brands fa-github footicon" id="github"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram footicon" id="instagram"></i>
          </a>

          <a href="https://wa.link/90jlc2">
            <i className="fa-brands fa-whatsapp footicon" id="whatsapp"></i>
          </a>
        </div>

        <div className="foot-content">
          <h4>Contact Me</h4>
          <a href="">
            <i
              className="fa-solid fa-envelope footmailicon"
              onClick={sendEmail}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
