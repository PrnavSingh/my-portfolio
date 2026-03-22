import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-photo-wrapper">
          <img
            src="/images/pranav-profile.png"
            alt="Pranav Singh"
            className="about-photo"
          />
        </div>
        <h3 className="title">About Me</h3>
        <p className="para">
          AI/ML enthusiast and Computer Science student with a strong foundation in
          Python, Java, and C++. Focused on building practical Machine Learning applications,
          including Edge-Optimized Crop Disease Detection and Full-Stack AI Chatbots.
          Passionate about model optimization, data structures, and solving complex
          real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;
