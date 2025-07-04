import React from 'react';
import ModeSelector from './ModeSelector';
import TimerDisplay from './TimerDisplay';
import Controls from './Controls';

const Timer = ({ mode, onSelectMode, secondsLeft, isActive, onToggle, onReset }) => {
  return (
    <main className={`timer-wrapper ${isActive ? 'active' : ''}`}>
      <ModeSelector 
        currentMode={mode} 
        onSelectMode={onSelectMode} 
      />
      <TimerDisplay 
        seconds={secondsLeft} 
        isActive={isActive}
        mode={mode}
      />
      <Controls 
        isActive={isActive} 
        onToggle={onToggle} 
        onReset={onReset} 
      />
    </main>
  );
};

export default Timer;