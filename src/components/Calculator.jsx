import React, { useState } from "react";
import "./Calculator.css";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Calculator = () => {
  const [activeButton, setActiveButton] = useState("");
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <div className="conatiner">
        <div className="heading-div">
          <h1 className="heading">Free Crypto tax Calculator Australia</h1>
        </div>
        <div className="upper-div">
          <div className="upper-input">
            <div className="left-section">
              <span className="upper-span">Financial Year</span>
              <select name="" id="" className="select-tag">
                <option value="FY 2022-23">FY2022-23</option>
                <option value="FY 2023-24">FY2023-24</option>
                <option value="FY 2024-25">FY2024-25</option>
              </select>
            </div>
          </div>
          <div className="upper-input">
            <div className="right-section">
              <span className="upper-span">Country</span>
              <select name="" id="" className="select-tag-right">
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="China">China</option>
              </select>
            </div>
          </div>
        </div>
        <div className="lower-div">
          <div className="lower-left">
            <div className="lower-left-div1">
              <div className="input-container">
                <label for="cryptoPrice">Enter purchase price of Crypto</label>
                <input
                  type="text"
                  id="cryptoPrice"
                  placeholder="$30,000"
                ></input>
              </div>
              <div className="input-container">
                <label for="cryptoPrice">Enter your Expenses</label>
                <input type="text" id="cryptoPrice" placeholder="$5,000" />
              </div>
            </div>
            <div className="lower-left-div2">
              <div className="input-container">
                <label for="cryptoPrice">Select Your Annual Income</label>
                <input
                  type="text"
                  id="cryptoPrice"
                  placeholder="45001-120000"
                ></input>
              </div>
              <div className="input-container">
                <label for="cryptoPrice">Capital gains amount</label>
                <input
                  type="text"
                  id="cryptoPrice"
                  placeholder="$ 5,000"
                ></input>
              </div>
            </div>
            <div className="capital-gain">
              <div className="capital-pera">
                <p>Net Capital gains tax amount</p>
              </div>
              <div className="capital-amount">
                <span>$ 2,500</span>
              </div>
            </div>
          </div>
          <div className="lower-right">
            <div className="lower-right-div1">
              <div className="input-container">
                <label for="cryptoPrice">Enter sale price of Crypto</label>
                <input
                  type="text"
                  id="cryptoPrice"
                  placeholder="$ 20,000"
                ></input>
              </div>

              <div className="button-group">
                <label for="cryptoPrice" className="btn-lable">
                  Investment Type
                </label>
                <div className="check-btn">
                  <div className="check-btn-1">
                    <button
                      className={`investment-btn ${
                        activeButton === "shortTerm" ? "active" : ""
                      }`}
                      aria-pressed={activeButton === "shortTerm"}
                      onClick={() => handleButtonClick("shortTerm")}
                    >
                      Short Term{" "}
                      {activeButton === "shortTerm" && (
                        <FaCheck className="icon" />
                      )}
                    </button>
                  </div>

                  <div className="check-btn-2">
                    <button
                      className={`investment-btn ${
                        activeButton === "longTerm" ? "active" : ""
                      }`}
                      aria-pressed={activeButton === "longTerm"}
                      onClick={() => handleButtonClick("longTerm")}
                    >
                      Long Term{" "}
                      {activeButton === "longTerm" && (
                        <FaCheck className="icon" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="month">
                  <div className="less">
                    <IoIosArrowBack style={{ fontSize: "12px" }} />
                    <span>12 months</span>
                  </div>
                  <div className="more">
                    <IoIosArrowForward style={{ fontSize: "12px" }} />
                    <span>12 months</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lower-right-div2">
              <div className="input-container">
                <p className="tax-rate-pera">Tax Rate</p>
                <p className="tax-rate-pera">
                  $5,902 + 32.5% of excess over $45,001
                </p>
              </div>
              <div className="input-container">
                <label for="cryptoPrice">Discount for long term gains</label>
                <input
                  type="text"
                  id="cryptoPrice"
                  placeholder="$ 2,500"
                ></input>
              </div>
            </div>
            <div className="tax-gain">
              <div className="capital-pera">
                <p>The tax you need to pay</p>
              </div>
              <div className="tax-amount">
                <span>$ 812.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
