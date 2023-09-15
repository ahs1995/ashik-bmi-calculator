import React, { useState } from "react";

export default function HeightWeightInput({ onBmiValue }) {
  const [weightValue, setWeightValue] = useState(0);
  const [heightValue, setHeightValue] = useState(0);
  const [weightValid, setWeightValid] = useState(true);
  const [heightValid, setHeightValid] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  function calculateBmi() {
    return ((weightValue / heightValue / heightValue) * 10000).toFixed(1);
  }

  function handleWeightChange(e) {
    const newValue = e.target.value;
    setWeightValue(newValue);
    setWeightValid(newValue !== 0);
  }

  function handleHeightChange(e) {
    const newValue = e.target.value;
    setHeightValue(newValue);
    setHeightValid(newValue !== 0);
  }

  function handleButtonClick() {
    setButtonClicked(true);

    if (weightValue === 0) {
      setWeightValid(false);
    } else {
      setWeightValid(true);
    }

    if (heightValue === 0) {
      setHeightValid(false);
    } else {
      setHeightValid(true);
    }

    if (weightValue > 0 && heightValue > 0) {
      const bmi = calculateBmi();
      if (bmi > 0 && bmi < 45) {
        onBmiValue(bmi);
      }
    }
  }

  return (
    <div className="input-area">
      <div className="weight-input input">
        <label className="label">Weight: {weightValue} kg</label>
        <input
          value={weightValue}
          onChange={handleWeightChange}
          min="0"
          max="220"
          type="range"
        />
        {buttonClicked && !weightValid && (
          <small>Please set a valid weight</small>
        )}
      </div>

      <div className="height-input input">
        <label className="label">Height: {heightValue} cm</label>

        <input
          value={heightValue}
          onChange={handleHeightChange}
          min="140"
          max="220"
          type="range"
        />
        {buttonClicked && !heightValid && (
          <small>Please set a valid height</small>
        )}
      </div>
      <button onClick={handleButtonClick} className="btn">
        Get BMI
      </button>
    </div>
  );
}
