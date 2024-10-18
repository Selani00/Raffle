// components/SpinButton.tsx
import React from 'react';

interface SpinButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const SpinButton: React.FC<SpinButtonProps> = ({ onClick, disabled }) => {
  return (
    <button className="spin-button" onClick={onClick} disabled={disabled}>
      Spin
    </button>
  );
};

export default SpinButton;