import React, { useState, useEffect } from "react";
import { createComponent } from "@lit-labs/react";
import { CustomInput } from "../../custom-input";
import "./App.css";

export const CustomInputComponent = createComponent(
  React,
  "custom-input",
  CustomInput,
  {
    onValueChange: "value-change",
    onClear: "clear",
  }
);

const App = () => {
  const [value, setValue] = useState("hello?");
  const [showValueClearedMessage, setShowValueClearedMessage] = useState(false);

  useEffect(() => {
    let timeout;

    if (showValueClearedMessage) {
      timeout = setTimeout(() => {
        setShowValueClearedMessage(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showValueClearedMessage]);

  const handleValueChange = (e) => {
    if (showValueClearedMessage) {
      setShowValueClearedMessage(false);
    }

    setValue(e.target.value);
  };

  const handleClear = () => {
    setShowValueClearedMessage(true);
  };

  return (
    <main>
      <h1>A React example using lit custom elements</h1>

      <section className="example-container">
        <CustomInputComponent
          value={value}
          onValueChange={handleValueChange}
          onClear={handleClear}
          className="custom-input"
        >
          <span slot="label">Another input:</span>
        </CustomInputComponent>

        <span>Reactive value: {value}</span>

        {showValueClearedMessage && <span>Value was cleared!</span>}
      </section>
    </main>
  );
};

export default App;
