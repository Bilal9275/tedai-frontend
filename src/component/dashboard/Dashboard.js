import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebr";
import btc from "../../asstes/btc.svg";
import eth from "../../asstes/eth.svg";
import usdterc20 from "../../asstes/usdterc20.svg";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import ai4 from "../../asstes/ai4.jpeg"
import aiMan from "../../asstes/ai-man.png"
const Dashboard = () => {
  const [truncatedAddress, setTruncatedAddress] = useState("");
  const truncateAddress = (address) => {
    const halfLength = Math.ceil(address.length / 2);
    return address.substring(0, halfLength) + "...";
  };
  const walletAddress = "0xEc7a53fDC565EB22a630eCF5982F370b21772C02";
  useEffect(() => {
    setTruncatedAddress(truncateAddress(walletAddress));
  }, []);
  return (
    <Sidebar>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4 box-dashboard text-start pb-5 mt-3">
            <h6 className="Token-Balance">Token Balance</h6>
            <div className="row mt-4">
              <div className="col-md-6">
                <span className="zero-md">0</span>
                <span className="zero-md-down">.0000000</span>
                <span> BUDZ</span>
              </div>
              <div className="col-md-6 text-center">
                <img src={aiMan} alt="aiMan" className="img-fluid" width={100}/>
              </div>
              <div className="col-md-12 mt-5">
                <span className="balance-span">
                  Balance in other currencies:
                </span>
              </div>
              <div className="row d-flex justify-content-between mt-3">
                <div className="col-md-3 d-flex">
                  <img src={btc} width={18} height={18} />
                  &nbsp; <span className="number-dashboard"> 0.00000000</span>
                </div>
                <div className="col-md-3 d-flex">
                  <img src={eth} width={18} height={18} />
                  &nbsp; <span className="number-dashboard"> 0.0000</span>
                </div>
                <div className="col-md-3 d-flex">
                  <img src={usdterc20} width={18} height={18} />
                  &nbsp; <span className="number-dashboard"> 0.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 box-dashboard text-start mt-3">
            <h6 className="Token-Balance">Account</h6>
            <p className="mt-4">Email Verification</p>
            <div className="wallet-box mt-5">
              <IoMdCheckmark />
              <span>{truncatedAddress}</span>
              <span>
                <FaRegCopy />
              </span>
            </div>
            <p className="description_text">
              Add ERC-20 compatible wallet to receive BUDZ tokens on launch.
            </p>
          </div>
          <div className="col-md-4 box-dashboard text-start mt-3">
            <h6 className="Token-Balance">Live Orders</h6>
            <div className="wallet-box-order mt-3">
              <div className="col-12 d-flex justify-content-between w-100">
                <span className="purchase-span">Purchase</span>
                <span className="Finished-span">Finished 22:39</span>
              </div>
              <div className="col-12 d-flex justify-content-between w-100">
                <span className="Finished-span">3,675.00</span>
                <span className="Finished-span">77,441.20$BUDZ</span>
              </div>
            </div>
            <div className="wallet-box-order mt-3">
              <div className="col-12 d-flex justify-content-between w-100">
                <span className="purchase-span">Purchase</span>
                <span className="Finished-span">Finished 22:39</span>
              </div>
              <div className="col-12 d-flex justify-content-between w-100">
                <span className="Finished-span">3,675.00</span>
                <span className="Finished-span">77,441.20$BUDZ</span>
              </div>
            </div>
            <div className="wallet-box-order mt-3">
              <div className="col-12 d-flex justify-content-between w-100">
                <span className="purchase-span">Purchase</span>
                <span className="Finished-span">Finished 22:39</span>
              </div>
              <div className="col-12 d-flex justify-content-between w-100">
                <span className="Finished-span">3,675.00</span>
                <span className="Finished-span">77,441.20$BUDZ</span>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <div className="col-md-8 mt-2 ">
                <div className="d-grid gap-2">
                  <button className="join-btn-buy">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 col-11 box-dashboard-down text-start mt-3">
            <div className="d-flex justify-content-between flex-md-row flex-column">
              <h6 className="Token-Balance">TIER</h6>
              <h6 className="Token-Balance">
                Tokens Sold 1,403,321,202.00 / 1,542,000,000
              </h6>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <span>Current price: 0.0474554 USD</span>
              <div className="col-md-8">
                <div className="progress-bar__wrapper">
                  <label className="progress-bar__value" htmlFor="progress-bar">
                    40%
                  </label>
                  <progress id="progress-bar" value={40} max={100}></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-7  text-start mb-5 mt-3">
            <div className="box-dashboard-down">
              <h6 className="Token-Balance">REWARD POOL</h6>
              <div className="d-flex justify-content-between mt-3">
                <p className="description_text">
                  Refer a friends and earn up to 5% with form first token
                  purchase
                </p>
              </div>
              <div className="row">
                <div className="col-md-5 ">
                  <label className="label-referrals mb-2 mt-3">
                    Referrals Income
                  </label>
                  <div className="wallet-box-order  pt-4 pb-4 ps-3">
                    <span className="zero-md">0</span>
                    <span className="zero-md-down">.0000000</span>
                    <span> BUDZ</span>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <label className="label-referrals mb-2 mt-3">
                    Total Referrals
                  </label>
                  <div className="wallet-box-order text-center pt-4 pb-4 ps-3">
                    <span className="zero-md">0</span>
                  </div>
                </div>
              </div>
              <label className="label-referrals mb-2 mt-3">
                Your referral link
              </label>
              <div className="wallet-box-order d-flex justify-content-between align-items-center ">
                <div>
                  <IoIosLink /> <span className="description_text">https://app.shibabudz.org/sign-up/?ref=B3hvhAhK</span>
                </div>
                <span>
                <FaRegCopy />
              </span>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-5 mt-4">
            <img src={ai4} alt="ai4" className="img-fluid" style={{borderRadius: "5px"}}/>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
