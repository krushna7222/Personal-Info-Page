import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import "./Portfolio.css";
import Project from "./Project";
import Skills from "./Skills";

function Portfolio() {
  function sendEmail() {
    const recipient = "krushnashahane17592@gmail.com";
    const subject = "";
    const body = "";

    // Construct the mailto URL
    const mailtoURL = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the mailto link
    window.location.href = mailtoURL;
  }

  return (
    <>
      <NavBar></NavBar>

      <section id="home">
        <Home sendEmail={sendEmail}></Home>
      </section>

      <section id="about">
        <About></About>
      </section>

      <section id="skills">
        <Skills></Skills>
      </section>

      <section id="projects">
        <Project></Project>
      </section>

      <Footer sendEmail={sendEmail}></Footer>
    </>
  );
}

export default Portfolio;
