import { useState, useEffect, useRef } from 'react';

const useTimer = (initialSettings) => {
  const [settings] = useState(initialSettings);
  const [mode, setMode] = useState('work'); // 'work', 'shortBreak', 'longBreak'
  const [isActive, setIsActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(settings.work);
  const [pomodoros, setPomodoros] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            handleTimerEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  const handleTimerEnd = () => {
    setIsActive(false);
    // You can add an alarm sound here if you want
    
    if (mode === 'work') {
      const newPomodoros = pomodoros + 1;
      setPomodoros(newPomodoros);
      if (newPomodoros % settings.longBreakInterval === 0) {
        switchMode('longBreak');
      } else {
        switchMode('shortBreak');
      }
    } else {
      switchMode('work');
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setIsActive(false);
    setSecondsLeft(settings[newMode]);
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  
  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(settings[mode]);
  }

  return { 
    secondsLeft, 
    isActive, 
    mode, 
    pomodoros, 
    toggleTimer, 
    switchMode,
    resetTimer
  };
};

export default useTimer;