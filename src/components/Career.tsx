import { MdArrowOutward } from "react-icons/md";
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech CSE (AI & ML)</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Completed BTech in Computer Science & Engineering with a focus on Artificial Intelligence and Machine Learning.
              Maintained a strong academic record with a CGPA of 6.58.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate - PCM</h4>
                <h5>Jawahar Navodaya Vidyalaya, Pilibhit, UP</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Completed Intermediate education with Physics, Chemistry and Mathematics from Jawahar Navodaya Vidyalaya, Pilibhit, Uttar Pradesh.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>Jawahar Navodaya Vidyalaya, Pilibhit, UP</h5>
              </div>
              <h3>2020 - 2022</h3>
            </div>
            <p>
              Completed Matriculation from Jawahar Navodaya Vidyalaya, Pilibhit, Uttar Pradesh.
            </p>
          </div>
          <div className="career-info-box career-info-box-certs">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Training & Certifications</h4>
                <div className="career-cert-links">
                  <a
                    href="https://drive.google.com/file/d/1dKqPQW_Bb8TpGF60AuNTq3khxVKgW17x/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="career-cert-link"
                    data-cursor="disable"
                  >
                    Project Completion Certificate <MdArrowOutward />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1i3lqdBtRtsoGrSAo4XOvW_iDyuvWuOGQ/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="career-cert-link"
                    data-cursor="disable"
                  >
                    M.L. Workshop(IIT Delhi) <MdArrowOutward />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1x9i6uHc2kc01hswtf5-ymsAHi0o_TdUd/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="career-cert-link"
                    data-cursor="disable"
                  >
                    PreGrad Certificate <MdArrowOutward />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1oMV5UjtvGFHcFGObc99gpOBneWUG9SNg/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="career-cert-link"
                    data-cursor="disable"
                  >
                    CipherSchools Certificate <MdArrowOutward />
                  </a>
                </div>
              </div>
              <h3>Certificates</h3>
            </div>
            <p>
              Underwent intensive training in Data Structures and Algorithms (CipherSchools) covering advanced algorithms.
              Completed AI/ML certification with PreGrad, training on supervised/unsupervised learning and data preprocessing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Achievements & Problem Solving</h4>
                <h5>HackerRank & LeetCode</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Solved 100+ problems on LeetCode. Achieved 5⭐ ratings in Python and Java on HackerRank.
              Participated in AWS Student Community Day and CODE OFF DUTY Hackathon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
