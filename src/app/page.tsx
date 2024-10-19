/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";

const page = () => {
  const [rotateDeg, setRotateDeg] = useState(0);
  const [spinning, setSpinning] = useState(false);



  const handleSpin = () => {
    // Disable the spin button while spinning
    setSpinning(true);
    
    // Generate a random rotation between 1440 (4 full rotations) and 1800 degrees (5 full rotations)
    const randomDeg = Math.floor(Math.random() * 360) + 1440;
    
    setRotateDeg(randomDeg);
    
    // Re-enable the button after animation (4s for transition)
    setTimeout(() => {
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className="arrow"></div>
        <div className="w-full">
          <ul className="circle" style={{ transform: `rotate(${rotateDeg}deg)` }}>
            <li>
              <div className="text" contentEditable='true' spellCheck='false'>
                1
              </div>
            </li>
            <li>
              <div className="text" contentEditable='true' spellCheck='false'>
                2
              </div>
            </li>
            <li>
              <div className="text" contentEditable='true' spellCheck='false'>
                3
              </div>
            </li>
            <li>
              <div className="text" contentEditable='true' spellCheck='false'>
                4
              </div>
            </li>
            <li>
              <div className="text" contentEditable='true' spellCheck='false'>
                5
              </div>
            </li>
            <li>
              <div className="text" contentEditable='true' spellCheck='false'>
                6
              </div>
            </li>
            <li>
              <div className="text" contentEditable='true' spellCheck='false'>
                7
              </div>
            </li>
            <li>
              <div className="text" contentEditable='true' spellCheck='false'>
                8
              </div>
            </li>
          </ul>
          <button 
            className="spin-button bg-blue-500 text-white p-4 mt-5 rounded-lg" 
            onClick={handleSpin}
            disabled={spinning} // Disable while spinning
          >
            {spinning ? "Spinning..." : "Spin"}
          </button>
          
          
        </div>
        
      </div>
    </div>
  );
};

export default page;



