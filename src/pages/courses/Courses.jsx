import CourseCard from "../../components/coursecard/CourseCard";
import { CourseData } from "../../context/CourseContext";
import "./courses.css";

const Courses = () => {
  const { courses } = CourseData();

  return (
    <div className="courses-wrapper">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/bg-video.mp4" // same video path as Home
        type="video/mp4"
        
      />
      <div className="courses-overlay" />
      <div className="courses-content glass-card">
        <h2 className="courses-title">Available Courses</h2>
        <div className="course-grid">
          {courses && courses.length > 0 ? (
            courses.map((e) => <CourseCard key={e._id} course={e} />)
          ) : (
            <p className="no-course">No Courses Yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
