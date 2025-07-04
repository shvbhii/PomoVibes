import React from 'react';

const ModeSelector = ({ currentMode, onSelectMode }) => {
  const modes = [
    { key: 'work', label: 'Pomodoro' },
    { key: 'shortBreak', label: 'Short Break' },
    { key: 'longBreak', label: 'Long Break' },
  ];

  return (
    <div className="mode-selector">
      {modes.map(mode => (
        <button
          key={mode.key}
          className={`mode-button ${currentMode === mode.key ? 'active' : ''}`}
          onClick={() => onSelectMode(mode.key)}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
};

export default ModeSelector;