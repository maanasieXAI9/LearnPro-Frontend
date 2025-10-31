import toast from "react-hot-toast";
import { IoMdLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import "./account.css";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const logoutHandler = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      setUser(null);
      setIsAuth(false);
      toast.success("Logged Out");
      navigate("/login");
    }
  };

  return (
    <div className="account-page">
      <video
        className="account-video"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/bg-video.mp4"
      />
      <div className="overlay" />

      {user && (
        <div className="profile-box">
          <h2>Welcome, {user.name}</h2>
          <p>{user.email}</p>

          <div className="actions">
            <button onClick={() => navigate(`/${user._id}/dashboard`)}>
              <MdDashboard />
              Dashboard
            </button>

            {user.role === "admin" && (
              <button onClick={() => navigate("/admin/dashboard")}>
                <MdDashboard />
                Admin Panel
              </button>
            )}

            <button className="logout" onClick={logoutHandler}>
              <IoMdLogOut />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
