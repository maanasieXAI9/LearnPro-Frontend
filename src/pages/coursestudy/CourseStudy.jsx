import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import "./coursestudy.css";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { fetchCourse, course } = CourseData();

  // Redirect user if not subscribed or not admin
  useEffect(() => {
    if (
      user &&
      user.role !== "admin" &&
      !user.subscription?.includes(params.id)
    ) {
      navigate("/");
    }
  }, [user, params.id, navigate]);

  // Fetch course data
  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id, fetchCourse]);

  return (
    <>
      {course && (
        <div className="course-study-page">
          <img src={`${server}/${course.image}`} alt="" width={350} />
          <h2>{course.title}</h2>
          <h4>{course.description}</h4>
          <h5>by - {course.createdBy}</h5>
          <h5>Duration - {course.duration} weeks</h5>
          <Link to={`/lectures/${course._id}`}>
            <h2>Lectures</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
