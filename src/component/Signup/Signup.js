import React, { useState } from "react";
import tedAi from "../../asstes/AI-1.png";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cryptocurrency: "Ethereum(ETH)",
    password: "",
    confirmPassword: "",
    emailNotifications: true,
    agreeTerms: true,
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [passowrdError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setErrorMessage(true);
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setPasswordError(true);
        return;
      }
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/register`,
        formData
      );
      if (response) {
        toast.success("User register successfully.");
        localStorage.setItem(
          "userDetails",
          JSON.stringify(response.data.result)
        );
        navigate("/dashboard");
      }
    } catch (e) {
      console.log("e", e.response.status);
      if (e.response.status == 400) {
        toast.error("Email already registered.Please use another email.");
      } else {
        toast.error(e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-md-6 col-11 decoBanner mb-5">
          <div className="position-absolute top-0 start-50 translate-middle">
            <img src={tedAi} alt="logo" width={80} height={80} />
          </div>
          <h5 className="signup-h5">Sign Up</h5>
          <div className="row p-2">
            <div className="col-md-6 mt-4">
              <input
                type="text"
                placeholder="First Name"
                className="name-input"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errorMessage && !formData.firstName && (
                <p className="error-message">Please fill the input</p>
              )}
            </div>
            <div className="col-md-6 mt-4">
              <input
                type="text"
                placeholder="Last Name"
                className="name-input"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errorMessage && !formData.lastName && (
                <p className="error-message">Please fill the input</p>
              )}
            </div>
            <div className="col-md-6 mt-4">
              <input
                type="email"
                placeholder="Email"
                className="name-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errorMessage && !formData.email && (
                <p className="error-message">Please fill the input</p>
              )}
            </div>
            <div className="col-md-6 mt-4">
              <select
                className="name-input-select"
                name="cryptocurrency"
                value={formData.cryptocurrency}
                onChange={handleChange}
              >
                <option>Ethereum(ETH)</option>
                <option>Bitcoin(BTC)</option>
                <option>Litecoin(LTC)</option>
                <option>Tether ERC-20(usdterc20)</option>
                <option>USDC (ERC20)</option>
                <option>Tether TRC-20(USDTTRC20)</option>
                <option>Dogecoin (DOGE)</option>
                <option>Polygon (MATIC)</option>
                <option>Chainlink (LINK)</option>
                <option>Bitcoin Cash (BCH)</option>
              </select>
            </div>

            <div className="col-md-6 mt-4">
              <input
                type="password"
                placeholder="Password"
                className="name-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errorMessage && !formData.password && (
                <p className="error-message">Please fill the input</p>
              )}
            </div>
            <div className="col-md-6 mt-4">
              <input
                type="password"
                placeholder="confirm password"
                className="name-input"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errorMessage && !formData.confirmPassword ? (
                <p className="error-message">Please fill the input</p>
              ) : (
                passowrdError && (
                  <p className="error-message">
                    Password and Confirm Password do not match.
                  </p>
                )
              )}
            </div>
            <div className="col-md-12 mt-4 text-start">
              <Form>
                <Form.Check
                  type="checkbox"
                  id="custom-one"
                  label="Yes! Sign me up to receive email notifications from SHIBABUDZ with exclusive deals, sales and updates."
                  style={{ fontSize: "15px" }}
                  name="emailNotifications"
                  checked={formData.emailNotifications}
                  onChange={handleChange}
                />
              </Form>
            </div>
            <div className="col-md-12 mt-3 text-start">
              <Form>
                <Form.Check
                  type="checkbox"
                  id="custom-switch"
                  label="I agree to the Terms and Conditions and Privacy Policy."
                  style={{ fontSize: "15px" }}
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
              </Form>
            </div>
            <div className="col-md-12 mt-3 mb-4 text-start">
              <div className="d-grid gap-2">
                <button
                  className="join-btn"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="ms-1">Loading...</span>
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </div>
            <div className="mb-3">
              <span style={{ fontSize: "15px", color: "#6c757d" }}>
                Already have an account?{" "}
              </span>
              <span
                className="presale-h6-style"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/signin")}
              >
                {" "}
                <b>Sign In</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
