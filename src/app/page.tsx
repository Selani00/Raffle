// app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Wheel from '../components/Wheel';
import SpinButton from '../components/SpinButton';

const Page: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);

  const handleSpin = () => {
    setIsSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 360;
    setWheelRotation(randomRotation);
    setTimeout(() => {
      setIsSpinning(false);
    }, 5000);
  };

  useEffect(() => {
    const wheel = document.querySelector('.wheel') as HTMLElement;
    if (wheel) {
      wheel.style.transform = `rotate(${wheelRotation}deg)`;
    }
  }, [wheelRotation]);

  return (
    <div className="container">
      <Wheel />
      <SpinButton onClick={handleSpin} disabled={isSpinning} />
    </div>
  );
};

export default Page;