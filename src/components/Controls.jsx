import React from 'react';

const Controls = ({ isActive, onToggle, onReset }) => {
  return (
    <div className="controls">
      <button onClick={onToggle} className="control-button">
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={onReset} className="control-button reset-button">
        Reset
      </button>
    </div>
  );
};

export default Controls;