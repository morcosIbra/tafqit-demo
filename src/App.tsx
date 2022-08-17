import React, { useState } from 'react';
import Tafqit from '@morcos/tafqit-numbers';

function App() {
  const [inputNumber, setInputNumber] = useState("");
  return (
    <div style={{"margin":"50px auto","width": "max-content"}}>
      <label>Write a number:</label>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />

      <Tafqit>{inputNumber}</Tafqit>
    </div>
  );
}

export default App;
