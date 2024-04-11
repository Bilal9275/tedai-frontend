import axios from "axios";
import React, { useState } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { useNavigate } from "react-router-dom";
import tedAi from "../../asstes/AI-1.png";
import { toast } from "react-toastify";
const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async() => {
    try{
      const errors = {};
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      }
      if (!formData.password.trim()) {
        errors.password = "Password is required";
      }
      if (Object.keys(errors).length === 0) {
        setLoading(true)
        console.log("Email:", formData.email);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/users/login`,
          formData
        );
        if (response) {
          toast.success("User Login successfully.");
          localStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.result)
          );
          navigate("/dashboard");
        }
      } else {
        setErrors(errors);
      }
    }catch(err){
     console.log("err", err);
     if (err.response.status == 404) {
       toast.error(err.response.data.error)
     } else if(err.response.status == 401){
      toast.error(err.response.data.error)
     } else{
      toast.error(err.message)
     }
    } finally{
      setLoading(false)
    }
  };
  return (
    <div className="container">
      <div className="row mt-5 d-flex justify-content-center align-items-center">
        <div className="col-md-3 col-11 decoBanner mb-5  mt-5">
          <div className="position-absolute top-0 start-50 translate-middle">
            <img src={tedAi} alt="logo" width={80} height={80} />
          </div>
          <h5 className="signup-h5">Sign In</h5>
          <div className="row p-2">
            <div className="col-md-12 mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="name-input"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && !formData.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="col-md-12 mt-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="name-input"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && !formData.password && <div className="error-message">{errors.password}</div>}
            </div>
            <div className="col-md-12 mt-4 mb-4 text-start">
              <div className="d-grid gap-2">
                <button
                  className="join-btn"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading? (<>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="ms-1">Loading...</span>
                  </>): "Sign In"}
                  
                </button>
              </div>
            </div>
            <div className="mb-3">
              <span style={{ fontSize: "15px", color: "#6c757d" }}>
                Already have an account?
              </span>
              <span
                className="presale-h6-style"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                <b>Sign Up</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
