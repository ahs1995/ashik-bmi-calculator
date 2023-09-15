import React from "react";

export default function BmiResult({ bmiValue, onBack }) {
  return (
    <div className="bmi-result">
      <h1>You have a BMI of {bmiValue}</h1>
      <button onClick={() => onBack()} className="btn">
        <span>👈</span> Back
      </button>

      <div className="message">
        {bmiValue < 18.5 ? (
          <span>
            <h2>You are underweight!</h2>
            <img
              className="underweight-img"
              src="./images/burgerGuy.png"
              alt="old guy"
            />
          </span>
        ) : bmiValue > 18.5 && bmiValue < 24.9 ? (
          <span>
            <h2>Your BMI falls under the healthy range.</h2>
            <img src="./images/oldGuy.png" alt="old guy" />
          </span>
        ) : bmiValue > 24.9 && bmiValue < 29.9 ? (
          <span>
            <h2>you are slighly overweight.</h2>
            <img src="./images/oldGuyRed.png" alt="old guy" />
          </span>
        ) : bmiValue > 30 ? (
          <span>
            <h2>you have obesity ⚠</h2>
            <img src="./images/laserEye.png" alt="old guy" />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
