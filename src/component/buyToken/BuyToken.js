import React from "react";
import Sidebar from "../sidebar/Sidebr";
import btc from "../../asstes/btc.svg";
import usdterc20 from "../../asstes/usdterc20.svg";
import eth from "../../asstes/eth.svg";
import Form from "react-bootstrap/Form";
export const BuyToken = () => {
  return (
    <Sidebar>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12 box-dashboard-down text-start pb-5 mt-3">
            <h6 className="Token-Balance">Step 1</h6>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="label-referrals mb-2 mt-3">
                  Please select payment method
                </label>
                <select className="select-style">
                  <option>Ethereum (ETH)</option>
                  <option>Bitcoin (BTC)</option>
                  <option>Litecoin (LTC)</option>
                  <option>Tether ERC-20(USDTERC20)</option>
                  <option>USDC (ERC20)</option>
                  <option>Tether TRC-20(USDTTRC20)</option>
                  <option>Dogecoin (DOGE)</option>
                  <option>Polygon (MATIC)</option>
                  <option>Chainlink (LINK)</option>
                  <option>Bitcoin Cash (BCH)</option>
                  <option>Filecoin (FIL)</option>
                  <option>Axie Infinity (AXS)</option>
                  <option>Uniswap (UNI)</option>
                  <option>Binance Smart Chain - BEP20 (BNBBSC)</option>
                  <option>JasmyCoin (JASMY)</option>
                  <option>TRON (TRX)</option>
                  <option>Algorand (ALGO)</option>
                  <option>Polkadot (DOT)</option>
                  <option>Guard (GUARD)</option>
                  <option>Horizen (ZEN)</option>
                  <option>Elrond (EGLD)</option>
                  <option>Seedify Fund (SFUND)</option>
                  <option>TrueUSD (TUSD)</option>
                  <option>USDP Stablecoin (USDP)</option>
                  <option>Hedera (HBAR)</option>
                  <option>Galxe (GAL)</option>
                  <option>The Graph (GRT)</option>
                  <option>Chiliz (CHZ)</option>
                  <option>Tenshi (TENSHI)</option>
                  <option>Travala.com (AVA)</option>
                </select>
              </div>
              <h6 className="Token-Balance mt-5">Step 2</h6>
              <div className="col-md-6">
                <label className="label-referrals mb-2 mt-3">
                  Enter the amount in USD
                </label>
                <input type="number" className="select-style" />
                <span className="description_text">
                  Minimum order amount $100
                </span>
              </div>
              <div className="col-md-6 d-flex align-items-center mt-3">
                ~
                <span style={{ fontSize: "12px" }} className="ms-2">
                  
                  &nbsp;0.0000000
                  <br />
                  AVA
                </span>
              </div>
              <div className="col-md-12 d-flex flex-column">
                <span className="mt-3 token-amount-span">
                  Token Amount - <b>0 BUDZ</b>
                </span>
                <span className="mt-2 token-amount-span">
                  Bonus Amount - <b>0 BUDZ</b>
                </span>
                <span className="mt-2 token-amount-span">
                  Total - <b>0 BUDZ</b>
                </span>
              </div>

              <div className="col-md-6">
                <label className="label-referrals mb-2 mt-5">
                  Promo Code (Optional)
                </label>
                <input type="text" className="select-style" />
              </div>
              <div className="col-md-6 d-flex align-items-center mt-5">
                <button className="join-btn-buy mt-4">Apply Promo code</button>
              </div>
              <div className="col-md-12 mt-4 text-start">
                <Form>
                  <Form.Check
                    type="checkbox"
                    id="custom-switch"
                    label="I agree to the Terms and Conditions and Privacy Policy."
                    style={{ fontSize: "15px" }}
                  />
                </Form>
              </div>
              <div className="col-md-3">
              <button className="join-btn-buy mt-4">Pay with crypto</button>
              </div>
              <span className="description_text text-start mt-4">*A processing fee may be charged by the payment gateway</span>
              <span className="label-referrals mt-3">Tokens will appear on your dashboard after payment is successfully made and approved by our team.</span>
            </div>
          </div>

          <div className="col-md-12 box-dashboard-down text-start pb-5 mt-3">
            <h6 className="Token-Balance">Token Balance</h6>
            <div className="row mt-3">
              <div className="col-md-6">
                <span className="zero-md">0</span>
                <span className="zero-md-down">.0000000</span>
                <span> BUDZ</span>
              </div>

              <div className="col-md-12 mt-3">
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
        </div>
      </div>
    </Sidebar>
  );
};
