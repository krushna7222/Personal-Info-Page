import React from "react";

function Home({ sendEmail }) {
  return (
    <>
      <div className="imgdiv">
        <div>
          <img src="images/krushna.jpg" alt="" />
          <h3 align="center" id="role">
            Front-End Developer
          </h3>
        </div>
      </div>
      <div>
        <h5 align="center">Name :- Krushna Shahane</h5>
        <h5 align="center">Email :- krushnashahane1759@gmail.com</h5>
        <br />
      </div>

      <div className="social" align="center">
        <a href="https://www.linkedin.com/in/krushnashahane">
          <i className="fa-brands fa-linkedin" id="linkedin"></i>
        </a>
        <a href="https://github.com/krushna7222">
          <i className="fa-brands fa-github" id="github"></i>
        </a>
        <a href="https://www.instagram.com/krushna_shahane_96k">
          <i className="fa-brands fa-instagram" id="instagram"></i>
        </a>

        <a href="https://wa.link/90jlc2">
          <i className="fa-brands fa-whatsapp" id="whatsapp"></i>
        </a>
        <a href="">
          <i
            className="fa-solid fa-envelope"
            onClick={sendEmail}
            id="emailIcon"
          ></i>
        </a>
        <br />

        <a href="resume/Resume.pdf">
          <input type="button" value="Download CV" id="downloadcv" />
        </a>
        <a href="https://www.linkedin.com/in/krushnashahane">
          <input type="button" value="Contact Me" />
        </a>
      </div>
    </>
  );
}

export default Home;
