import React from "react";
import { useNavigate } from "react-router-dom";
import tedAi from "../../asstes/AI-1.png";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-md-between justify-content-center">
        <div className="col-md-5 text-start d-flex flex-column justify-content-center align-items-start">
          <h5 className="presale-h5">Token Sale Launch Soon</h5>
          <h5 className="presale-h5-style">
            Register and Stay in Touch With Ted News
          </h5>
          <p className="unleashing-p mt-4">
            Embark on a journey with TedAI.
            <br />
            Your token awaits, opening doors to learning,
            <br />
            creating, and growing.
            <br />
            Join our community sale and become a cornerstone of change
          </p>
        </div>
        <div className="col-md-6 col-11 decoBanner mt-5">
          <div className="position-absolute top-0 start-50 translate-middle">
            <img src={tedAi} alt="logo" width={80} height={80} />
          </div>
          <h6 className="presale-h6 mt-5">
            Join <span className="presale-h6-style">TedAI</span> Presale Now!
          </h6>
          <p className="until-h6">change $BUDZ with TED 26.4 Billion TED</p>
          <div className="d-flex justify-content-between align-items-center p-2 mt-4">
            <div className="text-start">
              <span className="stage-span">Stage 1</span>
              <br />
              <span className="live-span">Live Now</span>
            </div>
            <div>
              <span className="presale-h6 presale-h6-style">1,408,307,371</span>
              <br />
              <span className="live-span-number">/ 1,542,000,000</span>
            </div>
          </div>
          <div className="p-2">
            <div className="progress-bar__wrapper">
              <label className="progress-bar__value" htmlFor="progress-bar">
                40%
              </label>
              <progress id="progress-bar" value={40} max={100}></progress>
            </div>
          </div>
          <div className="row p-2 mt-1">
            <div className="col-md-6 text-start">
              <span>0.04745536 USDT = 1 $BUDZ</span>
            </div>
            <div className="col-md-6 text-end">
              <span>
                <b>USDT Raised:</b>
                <span className="live-span-number-1"> 3,186,623.65</span>
              </span>
            </div>
          </div>
          <div className="mb-5 mt-5">
            <button className="join-btn" onClick={() => navigate("/signup")}>
              Join Presale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
