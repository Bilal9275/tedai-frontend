import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebr";
import { IoIosLink } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { MdCatchingPokemon } from "react-icons/md";
import { toast } from "react-toastify";
export const Profile = () => {
  const [status, setStatus] = useState("personal_info");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonloading, setButtonLoading] = useState(false);
  const [eidtState, setEditState] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordButtonLoading, setPasswordButtonLoading] = useState(false)
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setButtonLoading(true);
      const object = {
        firstName: userDetails?.firstName,
        lastName: userDetails?.lastName,
        email: userDetails?.email,
        id: userDetails?._id,
      };
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/users/user-update`;
      const response = await axios.post(apiUrl, object);
      if (response) {
        toast.success(response?.data?.message);
        userGet();
        setEditState(false);
      }
    } catch (e) {
      console.log("Error:", e);
    } finally {
      setButtonLoading(false);
    }
  };
  const userGet = async () => {
    try {
      if (userData && userData.userId) {
        setLoading(true);
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/users/users-record/${userData.userId}`;
        const response = await axios.get(apiUrl);
        setUserDetails(response.data.user);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePassword = async() => {
    try {
      if (!currentPassword || !newPassword || !confirmPassword) {
        setError(true);
        return;
      }

      if (newPassword !== confirmPassword) {
        setPasswordError(true);
        return;
      }
      setPasswordButtonLoading(true)
      const object = {
        currentPassword : currentPassword,
        newPassword: newPassword,
        id: userData?.userId
      }
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/users/update-Password`;
        const response = await axios.post(apiUrl, object);
        if(response){
          toast.success(response?.data?.message)
          setCurrentPassword("")
          setNewPassword("")
          setConfirmPassword("")
        }
    } catch (e) {
      console.error("Error updating password:", e);
      if(e?.response?.status){
        toast.error(e?.response?.data?.message)
      }
      else{
        toast.error(e?.message)
      }
    } finally{
      setPasswordButtonLoading(false)
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("userDetails");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    if (userData) {
      userGet();
    }
  }, [userData]);
  return (
    <Sidebar>
      <div className="container">
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80vh" }}
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            <div className="row mt-4">
              <div
                className="col-md-12 text-start"
                style={{ borderBottom: "1px solid rgb(24, 13, 73)" }}
              >
                <button
                  className={
                    status == "personal_info"
                      ? "perfoile-btn-active "
                      : "perfoile-btn"
                  }
                  id="personal_info"
                  onClick={() => setStatus("personal_info")}
                >
                  Personal Info
                </button>
                <button
                  className={
                    status == "wallet_details"
                      ? "perfoile-btn-active ms-4"
                      : "perfoile-btn ms-4"
                  }
                  id="wallet_details"
                  onClick={() => setStatus("wallet_details")}
                >
                  Wallet Details
                </button>
                <button
                  className={
                    status == "security"
                      ? "perfoile-btn-active ms-4"
                      : "perfoile-btn ms-4"
                  }
                  id="security"
                  onClick={() => setStatus("security")}
                >
                  Security
                </button>
              </div>
            </div>
            {status == "wallet_details" ? (
              <div className="row d-flex justify-content-between">
                <div className="col-md-6 box-dashboard-down-profile text-start mt-4 pb-4">
                  <h6 className="Token-Balance">Wallet Details</h6>
                  <div className="wallet-box mt-4 pt-2 pb-2">
                    <div>
                      <span className="ms-2">
                        https://app.shibabudz.org/sign-up/?ref=B3hvhAhK
                      </span>
                    </div>
                    <span>
                      <FaRegCopy />
                    </span>
                  </div>
                </div>
              </div>
            ) : status == "security" ? (
              <div className="row d-flex justify-content-between">
                <div className="col-md-6 box-dashboard-down-profile mt-4 pb-5">
                  <div className="d-flex justify-content-between">
                    <h6 className="Token-Balance">Password Settings</h6>
                  </div>
                  <div className="text-start">
                    <label className="label-referrals mb-2 mt-3">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="select-style"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    {error && !currentPassword && (
                      <span className="text-danger">Please fill input</span>
                    )}
                  </div>
                  <div className="text-start">
                    <label className="label-referrals mb-2 mt-3">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="select-style"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {error && !newPassword && (
                      <span className="text-danger">Please fill input</span>
                    )}
                  </div>
                  <div className="text-start">
                    <label className="label-referrals mb-2 mt-3">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="select-style"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && !confirmPassword ? (
                      <span className="text-danger">Please fill input</span>
                    ) : (
                      passwordError && (
                        <span className="text-danger">
                          New password and confirm password do not match.
                        </span>
                      )
                    )}
                  </div>
                  <div className="text-start">
                    <button
                      className="join-btn-buy mt-4"
                      onClick={handlePassword}
                      disabled={passwordButtonLoading}
                    >
                      {passwordButtonLoading ? (
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
                          "Submit"
                        )}
                      
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row d-flex justify-content-between">
                <div className="col-md-6 box-dashboard-down-profile mt-4 pb-5">
                  <div className="text-end">
                    <button
                      className="btn-edit"
                      onClick={() => setEditState(true)}
                    >
                      Edit
                    </button>
                  </div>
                  {eidtState ? (
                    <>
                      <div className="text-start">
                        <label className="label-referrals mb-2 mt-3">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          className="select-style"
                          value={userDetails.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="text-start">
                        <label className="label-referrals mb-2 mt-3">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          className="select-style"
                          value={userDetails.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="text-start">
                        <label className="label-referrals mb-2 mt-3">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="select-style"
                          value={userDetails.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-start">
                        <label className="label-referrals mb-2 mt-3">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          className="select-style"
                          value={userDetails?.firstName}
                          readOnly
                        />
                      </div>
                      <div className="text-start">
                        <label className="label-referrals mb-2 mt-3">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="select-style"
                          value={userDetails?.lastName}
                          readOnly
                        />
                      </div>
                      <div className="text-start">
                        <label className="label-referrals mb-2 mt-3">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="select-style"
                          value={userDetails?.email}
                          readOnly
                        />
                      </div>
                    </>
                  )}

                  {eidtState && (
                    <div className="text-start">
                      <button
                        className="join-btn-buy mt-4"
                        onClick={handleSubmit}
                        disabled={buttonloading}
                      >
                        {buttonloading ? (
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
                          "Submit"
                        )}
                      </button>
                      <button
                        className="join-btn-cancel ms-3 mt-4"
                        onClick={() => setEditState(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
                <div className="col-md-6 box-dashboard-down-profile mt-4 text-start">
                  <h6 className="Token-Balance">Earn with Referral</h6>
                  <label className="label-referrals mb-2 mt-4">
                    Invite your friends & family.
                  </label>
                  <div className="wallet-box mt-3 pt-3 pb-3">
                    <div>
                      <IoIosLink />
                      <span className="ms-2">
                        https://app.shibabudz.org/sign-up/?ref=B3hvhAhK
                      </span>
                    </div>
                    <span>
                      <FaRegCopy />
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Sidebar>
  );
};
