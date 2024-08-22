import React from "react";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(0);
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose((is) => !is);
  };

  const HandleNext = () => {
    setStep((s) => s + 1);

    if (step === 2) {
      setStep(2);
    }
  };

  const HandlePrevious = () => {
    setStep((s) => s - 1);

    if (step === 0) {
      setStep(0);
    }
  };

  return (
    <>
      <button onClick={handleClose} className="close">
        {close ? "X" : "+"}
      </button>
      {close && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 0 && "active"}>1</div>
            <div className={step === 1 && "active"}>2</div>
            <div className={step === 2 && "active"}>3</div>
          </div>
          <p className="message">{messages[step]}</p>
          <div className="buttons">
            <button onClick={HandlePrevious}>Previous</button>
            <button onClick={HandleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
