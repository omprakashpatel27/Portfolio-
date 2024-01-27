import "./about.css";

const About = () => {
  return (
    <div id="about" className="outer-container-about">
      <div className="inner-contaienr-about-1">
        <img
          className="img-inside-container-about"
          src="https://media.licdn.com/dms/image/D5603AQFmi8ZrUbIdHg/profile-displayphoto-shrink_800_800/0/1704533878200?e=1709769600&v=beta&t=EZvA55WTstO12C8xGDPNTldGyHNSmn-dIpbBzZkgi6k"
        />
      </div>
      <div className="inner-container-about-2">
        <p className="inner-container-text">
          Hello, I am Omprakash Patel , Associate Software Engineer at
          ServiceNow. Ex- SDE Intern at Tekion Corp. Information Technology
          Graduate from NIT Raipur.
        </p>
      </div>
    </div>
  );
};

export default About;
