import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" id="skills">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>ARTIFICIAL INTELLIGENCE</h3>
              <h4>Machine Learning & Core Concepts</h4>
              <p>
                Designing predictive models and utilizing strong algorithmic fundamentals to solve complex problems effectively.
              </p>
              <h5>Machine Learning & AI</h5>
              <div className="what-content-flex" style={{ marginBottom: "10px" }}>
                <div className="what-tags">Scikit-learn</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">NumPy</div>
                <div className="what-tags">OpenCV</div>
              </div>
              <h5>Core Concepts</h5>
              <div className="what-content-flex" style={{ marginBottom: "10px" }}>
                <div className="what-tags">Machine Learning</div>
                <div className="what-tags">DSA</div>
                <div className="what-tags">OOP</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Model Optimization</div>
                <div className="what-tags">Edge AI</div>
              </div>
              <h5>Soft Skills</h5>
              <div className="what-content-flex">
                <div className="what-tags">Leadership</div>
                <div className="what-tags">Problem Solving</div>
                <div className="what-tags">Communication</div>
                <div className="what-tags">Project Management</div>
                <div className="what-tags">Adaptability</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>SOFTWARE & DEV</h3>
              <h4>Building Applications & APIs</h4>
              <p>
                Creating robust applications and APIs. Strong foundation in object-oriented design, performance, and deployment.
              </p>
              <h5>Programming Languages</h5>
              <div className="what-content-flex" style={{ marginBottom: "10px" }}>
                <div className="what-tags">C</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">JavaScript</div>
              </div>
              <h5>Frameworks & Libraries</h5>
              <div className="what-content-flex" style={{ marginBottom: "10px" }}>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">Streamlit</div>
                <div className="what-tags">Scikit-image</div>
              </div>
              <h5>Tools & Platforms</h5>
              <div className="what-content-flex">
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Kaggle</div>
                <div className="what-tags">Postman</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
