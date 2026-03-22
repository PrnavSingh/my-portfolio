import { useState, useCallback, useRef, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Edge-Optimized Crop Disease Detection",
    category: "Machine Learning / Computer Vision",
    tools: "Python, OpenCV, SVM, Streamlit, HOG",
    image: "/images/cp.png",
    link: "https://github.com/PrnavSingh/Crop-Disease-Project",
  },
  {
    title: "Mental Health Simulation Bot",
    category: "Application / Chatbot",
    tools: "Java, Java Swing, Custom Data Structures",
    image: "/images/mh.png",
    link: "https://github.com/PrnavSingh/mental-health-sim-java",
  },
  {
    title: "Passive Income Chatbot",
    category: "Full-Stack AI Application",
    tools: "Python, FastAPI, JavaScript, SQLite",
    image: "/images/pi.png",
    link: "https://github.com/PrnavSingh/Passive-income-Chat-bot",
  },
];

// Build an infinite loop: [last, ...all, first]
const infiniteSlides = [
  projects[projects.length - 1],
  ...projects,
  projects[0],
];

const TRANSITION_MS = 500;

const Work = () => {
  // Start at index 1 (the real first slide — index 0 is the cloned last)
  const [trackIndex, setTrackIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const isAnimating = useRef(false);

  // The "real" dot index for display (0-based)
  const dotIndex =
    trackIndex === 0
      ? projects.length - 1
      : trackIndex === infiniteSlides.length - 1
      ? 0
      : trackIndex - 1;

  const advance = useCallback((dir: 1 | -1) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setTransitioning(true);
    setTrackIndex((prev) => prev + dir);

    setTimeout(() => {
      isAnimating.current = false;
    }, TRANSITION_MS);
  }, []);

  const goToPrev = useCallback(() => advance(-1), [advance]);
  const goToNext = useCallback(() => advance(1), [advance]);

  const goToDot = useCallback((dotIdx: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setTransitioning(true);
    setTrackIndex(dotIdx + 1); // +1 because slot 0 is the clone of last
    setTimeout(() => {
      isAnimating.current = false;
    }, TRANSITION_MS);
  }, []);

  // After landing on a clone, silently jump to the real slide
  useEffect(() => {
    if (trackIndex === 0) {
      // landed on clone-of-last → jump to real last
      const timer = setTimeout(() => {
        setTransitioning(false);
        setTrackIndex(projects.length);
      }, TRANSITION_MS);
      return () => clearTimeout(timer);
    }
    if (trackIndex === infiniteSlides.length - 1) {
      // landed on clone-of-first → jump to real first
      const timer = setTimeout(() => {
        setTransitioning(false);
        setTrackIndex(1);
      }, TRANSITION_MS);
      return () => clearTimeout(timer);
    }
  }, [trackIndex]);

  // Re-enable transition after silent jump
  useEffect(() => {
    if (!transitioning) {
      const t = setTimeout(() => setTransitioning(true), 20);
      return () => clearTimeout(t);
    }
  }, [transitioning]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${trackIndex * 100}%)`,
                transition: transitioning
                  ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`
                  : "none",
              }}
            >
              {infiniteSlides.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>
                          0
                          {index === 0
                            ? projects.length
                            : index === infiniteSlides.length - 1
                            ? 1
                            : index}
                        </h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === dotIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToDot(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
