import { useEffect, useRef, useState } from "react";
import "./IntroVideo.css";

const IntroVideo = ({ onEnd }) => {
  const videoRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  // Called when video ends
  const handleEnd = () => {
    setFadeOut(true);
    setTimeout(() => onEnd(), 1000); // Wait for fade out animation
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`intro-container ${fadeOut ? "fade-out" : "fade-in"}`}>
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        className="intro-video"
      />

      <div className="overlay-content">
        <h1 className="brand-text animated-text">Welcome to LearnPro</h1>

        <div className="progress-bar-container" aria-label="Video progress">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
