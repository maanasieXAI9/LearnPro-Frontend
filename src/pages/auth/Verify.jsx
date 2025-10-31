import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import "./auth.css";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault()
    await verifyOtp(Number(otp), navigate);
  }
  return (
    <div className="auth-page">
      <video
    className="auth-video-bg"
    autoPlay
    muted
    loop
    playsInline
    src="/videos/bg-video.mp4"
  />
  <div className="auth-overlay" />


      <div className="auth-form">
        <h2>Verify Account</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="otp">Otp</label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          
 <button disabled={btnLoading} type="submit" className="common-btn">
              {btnLoading ? "Please Wait..." : "Verify"}
            </button>
        </form>
        <p>
          Go to <Link to="/login">Login</Link> page
        </p>
      </div>
    </div>
  );
};

export default Verify;
