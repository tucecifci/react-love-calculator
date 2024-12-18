import React, { useState } from "react";

function Calculate({ name1, name2, result, setResult }) {
  // const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    if (name1 != "" && name2 != "") {
      const result = Math.floor(Math.random() * 101);
      setResult(result);
      // setIsCalculated(true);
    } else {
      alert("Lütfen iki ismi de doldurun");
    }
  };

  return (
    <>
      <button onClick={handleCalculate}>Calculate</button>

      {result !== null && (
        <p className="result-message">
          <span className="names">{name1}</span> and{" "}
          <span className="names">{name2}</span>'s chance of love:{" "}
          <p className="result-percentage">{result} %</p>{" "}
        </p>
      )}
    </>
  );
}

export default Calculate;
