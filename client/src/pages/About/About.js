import React from "react";
import "./About.css";
import img from "../../assets/docs/imgss.jpg"
import bimg from "../../assets/docs/blurimg.jpeg"
const About = () => {
  return (
    <>
      
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              {/* <img
                src={bimg}
                className="backgrnd"
              /> */}
              <img
                src={img}
                className="mainimg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              {/* Hello there , <strong>My name is <strong style={{fontSize: '18px'}}>Vaibhav Singh.</strong></strong>
              <br/> */}
              I'm a passionate Web Developer . With a keen eye for <strong>innovation</strong> and a thirst for knowledge, I'm constantly seeking new technologies and methodologies to craft user-friendly web applications.
              <br/>

              My competitive programming background has honed my problem-solving abilities and instilled <strong>a deep understanding of Algorithms and Data Structures</strong>. This invaluable experience allows me to approach web development with a logical and efficient mindset.
              <br/>
              I'm a <strong>Quick Learner</strong> who thrives in collaborative environments, always eager to <strong>contribute to team success</strong> . As I look towards the future, I'm filled with excitement for the opportunities to challenge myself and refine my skills as a developer.
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default About;
