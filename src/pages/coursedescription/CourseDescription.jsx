import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { CourseData } from "../../context/CourseContext";
import { UserData } from "../../context/UserContext";
import { server } from "../../main";
import "./coursedescription.css";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { fetchUser } = UserData();
  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id, fetchCourse]);

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const {
        data: { order },
      } = await axios.post(
        `${server}/api/course/checkout/${params.id}`,
        {},
        { headers: { token } }
      );

      const options = {
        key: "rzp_test_pDBramBrXqFK16",
        amount: order.id,
        currency: "INR",
        name: "E learning",
        description: "Learn with us",
        order_id: order.id,
        method: { upi: true, netbanking: true, card: true, wallet: true },
        handler: async (response) => {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;
          const { data } = await axios.post(
            `${server}/api/verification/${params.id}`,
            { razorpay_order_id, razorpay_payment_id, razorpay_signature },
            { headers: { token } }
          );
          await fetchUser();
          await fetchCourses();
          await fetchMyCourse();
          toast.success(data.message);
          setLoading(false);
          navigate(`/payment-success/${razorpay_payment_id}`);
        },
        theme: { color: "#8a4baf" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error(error.response?.data?.message || "Payment failed");
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  if (!course) return null;

  return (
    <div className="course-description">
      <div className="course-header">
        {/* Left side - course image */}
        <img
          src={`${server}/${course.image}`}
          alt={course.title}
          className="course-image"
        />

        {/* Right side - course info */}
        <div className="course-info">
          <h1 className="course-title">{course.title}</h1>

          <div className="course-meta">
            <span className="duration">Duration: {course.duration} weeks</span>
            <span className="instructor">Instructor: {course.createdBy}</span>
          </div>

          <p className="course-desc">{course.description}</p>

          <p className="course-price">Price: ₹{course.price}</p>

          {user && user.subscription.includes(course._id) ? (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          ) : (
            <button onClick={checkoutHandler} className="common-btn">
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
