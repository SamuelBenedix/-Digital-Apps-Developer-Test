import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [diff, setDiff] = useState(0);

  function handleInput(e) {
    console.log("test", e.target.value);
    const raw = e.target.value;
    const onlyNumbers = raw.replace(/\D/g, "");
    setValue(onlyNumbers);
    //please put your logic here
  }

  function handleSubmit() {
    const reverseNumber = value.split("").reverse().join("");
    const diffNumber = Math.abs(Number(value) - Number(reverseNumber));
    setDiff(diffNumber);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={value} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {diff}</div>
    </div>
  );
}
