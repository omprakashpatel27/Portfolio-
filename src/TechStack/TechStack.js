import React from "react";
import "./techstack.css";

const Skills = ({ skillValue1, val1, skillValue2, val2 }) => {
  return (
    <div id="techstack" className="outside-container-techstack">
      <div>
        <h3 style={{ color: "white", fontFamily: "Helvetica" }}>
          {skillValue1}
        </h3>
      </div>
      <div className="container-techstack">
        <div
          className="skill-techstack"
          style={{ width: val1, fontFamily: "Helvetica" }}
        >
          {val1}
        </div>
      </div>
      <div>
        <h3 style={{ color: "white", fontFamily: "Helvetica" }}>
          {skillValue2}
        </h3>
      </div>
      <div className="container-techstack">
        <div
          className="skill-techstack"
          style={{ width: val2, fontFamily: "Helvetica" }}
        >
          {val2}
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="outside-techstack">
      <h3
        style={{
          color: "white",
          padding: "4px",
          maxWidth: "100%",
          textAlign: "center",
          fontFamily: "Helvetica",
          fontSize: "large",
        }}
      >
        Tech Stack
      </h3>
      <Skills skillValue1="C++" val1="80%" skillValue2="Java" val2="60%" />
      <Skills skillValue1="C++" val1="50%" skillValue2="Java" val2="30%" />
      <Skills skillValue1="C++" val1="40%" skillValue2="Java" val2="20%" />
    </div>
  );
};

export default TechStack;
