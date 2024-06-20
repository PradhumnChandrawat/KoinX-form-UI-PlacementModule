// import React, { useState } from "react";
// import "./TaxCalculator.css"; 

// const taxBrackets = {
//   "45001-120000": {
//     baseTax: 5092,
//     additionalRate: 32.5, 
//     threshold: 45000,
//   },
// };

// const TaxCalculator = () => {
//   const [inputs, setInputs] = useState({
//     purchasePrice: "",
//     salePrice: "",
//     expenses: "",
//     investmentType: "Long Term",
//     annualIncome: "45001-120000",
//   });
//   const [results, setResults] = useState({
//     capitalGains: 0,
//     discount: 0,
//     netCapitalGains: 0,
//     taxDue: 0,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prev) => ({ ...prev, [name]: parseFloat(value || 0) }));
//   };

//   const calculateTax = () => {
//     const { purchasePrice, salePrice, expenses, investmentType } = inputs;
//     let capitalGains = Math.max(0, salePrice - purchasePrice - expenses);
//     let discount = investmentType === "Long Term" ? 0.5 * capitalGains : 0;
//     let netCapitalGains = capitalGains - discount;
//     let taxDue = 0;

//     if (investmentType === "Long Term") {
//       const bracket = taxBrackets[inputs.annualIncome];
//       if (netCapitalGains > bracket.threshold) {
//         taxDue =
//           bracket.baseTax +
//           (netCapitalGains - bracket.threshold) *
//             (bracket.additionalRate / 100);
//       } else {
//         taxDue = bracket.baseTax;
//       }
//     }

//     setResults({ capitalGains, discount, netCapitalGains, taxDue });
//   };

//   return (
//     <div className="tax-calculator">
//       <h1>Free Crypto Tax Calculator Australia</h1>
//       <div className="input-group">
//         <label>Purchase Price of Crypto</label>
//         <input
//           name="purchasePrice"
//           type="number"
//           value={inputs.purchasePrice}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="input-group">
//         <label>Sale Price of Crypto</label>
//         <input
//           name="salePrice"
//           type="number"
//           value={inputs.salePrice}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="input-group">
//         <label>Expenses</label>
//         <input
//           name="expenses"
//           type="number"
//           value={inputs.expenses}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="input-group">
//         <label>Investment Type</label>
//         <select
//           name="investmentType"
//           value={inputs.investmentType}
//           onChange={handleInputChange}
//         >
//           <option value="Long Term">Long Term</option>
//           <option value="Short Term">Short Term</option>
//         </select>
//       </div>
//       <div className="input-group">
//         <button onClick={calculateTax}>Calculate</button>
//       </div>
//       <div className="results">
//         <p>Capital Gains Amount: ${results.capitalGains.toFixed(2)}</p>
//         {inputs.investmentType === "Long Term" && (
//           <p>Discount for Long Term Gains: ${results.discount.toFixed(2)}</p>
//         )}
//         <p>Net Capital Gains: ${results.netCapitalGains.toFixed(2)}</p>
//         <p>Tax Due: ${results.taxDue.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default TaxCalculator;
