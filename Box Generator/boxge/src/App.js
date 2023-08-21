
import React, { useState } from 'react';
import './App.css';
import FormColor from './Components/FormColor';
import Color from './Components/Color';

const  App = () =>  {
  const [crtColor, setCrtColor] = useState("");
  const [colors, setColors] = useState([]);

  const handleColor = (newColor) => {
    setCrtColor(newColor)
  }
  return (
    <div className="App">
      <FormColor colors={colors} settcolor={handleColor} />
      <Color colors={colors} crtColor={crtColor} />
    </div>
  );
}

export default App;