import { useState } from "react";
import Header from "./Header";
import HeightWeightInput from "./HeightWeightInput";
import BmiResult from "./BmiResult";

function App() {
  const [bmiValue, setBmiValue] = useState(null);
  const [showBmi, setShowBmi] = useState(false);

  function handleBMIValue(value) {
    setBmiValue(() => value);
    setShowBmi((show) => !show);
  }

  function handleBack() {
    setShowBmi(false);
  }

  console.log(bmiValue);

  return (
    <div className="container">
      <Header />

      {showBmi ? (
        <BmiResult bmiValue={bmiValue} onBack={handleBack} />
      ) : (
        <HeightWeightInput onBmiValue={handleBMIValue} />
      )}
    </div>
  );
}

export default App;
