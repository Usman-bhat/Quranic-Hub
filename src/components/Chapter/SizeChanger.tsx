"use client"




// FontSizeControl.js

import React, { useState } from 'react';

const SizeChanger = () => {
  const [fontSize, setFontSize] = useState(16); // Initial font size
/*
  const increaseFontSize = () => {
    setFontSize(fontSize + 2); // Increase font size by 2px
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2); // Decrease font size by 2px
  };
*/

const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2); // Increase font size by 2
    onFontSizeChange(fontSize + 2); // Notify parent component of font size change
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 2); // Decrease font size by 2
    onFontSizeChange(fontSize - 2); // Notify parent component of font size change
}

  return (
    <div className="flex items-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={increaseFontSize}>+</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={decreaseFontSize}>-</button>
      <div className="text-lg ml-2" style={{ fontSize: `${fontSize}px` }}>Sample Text</div>
    </div>
  );
};

export default SizeChanger;
