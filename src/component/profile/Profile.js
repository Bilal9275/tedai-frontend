import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebr";
import { IoIosLink } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
export const Profile = () => {
  const [status, setStatus] = useState("personal_info");
  return (
    <Sidebar>
      <div className="container">
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
                <button className="btn-edit">Edit</button>
              </div>
              <div className="text-start">
                <label className="label-referrals mb-2 mt-3">
                  Current Password
                </label>
                <input type="password" className="select-style" />
              </div>
              <div className="text-start">
                <label className="label-referrals mb-2 mt-3">
                  New Password
                </label>
                <input type="password" className="select-style" />
              </div>
              <div className="text-start">
                <label className="label-referrals mb-2 mt-3">
                  Confirm Password
                </label>
                <input type="password" className="select-style" />
              </div>
              <div className="text-start">
                <button className="join-btn-buy mt-4">Submit</button>
                <button className="join-btn-cancel ms-3 mt-4">Cancel</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="row d-flex justify-content-between">
            <div className="col-md-6 box-dashboard-down-profile mt-4 pb-5">
              <div className="text-end">
                <button className="btn-edit">Edit</button>
              </div>
              <div className="text-start">
                <label className="label-referrals mb-2 mt-3">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="select-style"
                />
              </div>
              <div className="text-start">
                <label className="label-referrals mb-2 mt-3">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="select-style"
                />
              </div>
              <div className="text-start">
                <label className="label-referrals mb-2 mt-3">
                  Contact Phone
                </label>
                <input
                  type="text"
                  placeholder="Contact Phone"
                  className="select-style"
                />
              </div>
              <div className="text-start">
                <label className="label-referrals mb-2 mt-3">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="select-style"
                />
              </div>
              <div className="text-start">
                <button className="join-btn-buy mt-4">Submit</button>
                <button className="join-btn-cancel ms-3 mt-4">Cancel</button>
              </div>
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
      </div>
    </Sidebar>
  );
};
