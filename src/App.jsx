import React, { useState } from "react";
import QRCode from "react-qr-code";
const App = () => {
  const [count, setCount] = useState("0");
  return (
    <div className="container">
      <QRCode value={count} />
      <div className="input-container">
        <p>Enter Search Here AnyType Value</p>
        <input
          type="text"
          placeholder="Search"
          onInput={(e) => {
            setCount(e.target.value);
          }}
        />
      </div>
    </div>
   
  );
};

export default App;
