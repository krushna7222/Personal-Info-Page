import React from "react";

function Skills() {
  return (
    <>
      <h2 align="center">Skills</h2>
      <hr />

      <div className="skills">
        <div id="softskill">
          <h3>Soft Skills</h3>
          <ul>
            <li>Adaptability</li>
            <li>Problem-solving</li>
            <li>Time management</li>
            <li>Communication Skills</li>
            <li>Collabration and Teamwork</li>
            <li>Critical Thinking</li>
            <li>Leadership</li>
          </ul>
        </div>

        <div id="hardskill">
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>C</li>
            <li>Bootstrap</li>
            <li>React Bootstrap</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
