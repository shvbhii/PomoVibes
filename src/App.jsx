import React, { useState, useEffect, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Import Custom Hooks
import useTimer from './hooks/useTimer';

// Import New Components
import Header from './components/Header';
import Timer from './components/Timer';
import Footer from './components/Footer';
import BackgroundSound from './components/BackgroundSound';

// Vibe & Animation Definitions
import { vibes, getParticlesConfig } from './vibesConfig';

// Styles
import './index.css';

// --- CONFIGURATION ---
const POMODORO_SETTINGS = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
  longBreakInterval: 4,
};

// Configure your URLs here
const GITHUB_URL = "https://github.com/shvbhii/PomoVibes.git";
const LINKEDIN_URL = "https://www.linkedin.com/in/shvbhi/";
// --------------------

function App() {
  const [currentVibe, setCurrentVibe] = useState(vibes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const { secondsLeft, isActive, mode, toggleTimer, switchMode, resetTimer } = useTimer(POMODORO_SETTINGS);

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
    setParticlesLoaded(true);
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    document.body.className = `${currentVibe.name.toLowerCase()}-theme`;
    const timeoutId = setTimeout(() => {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', currentVibe.colors.primary);
      root.style.setProperty('--secondary-color', currentVibe.colors.secondary);
      root.style.setProperty('--bg-color', currentVibe.colors.bg);
      root.style.setProperty('--text-color', currentVibe.colors.text);
      const glassOpacity = currentVibe.name === 'Space' || currentVibe.name === 'Neon' ? '0.15' : '0.1';
      root.style.setProperty('--glass-bg', `rgba(255, 255, 255, ${glassOpacity})`);
      let shadowColor = 'rgba(0, 0, 0, 0.3)';
      if (currentVibe.name === 'Space') shadowColor = 'rgba(156, 39, 176, 0.3)';
      if (currentVibe.name === 'Neon') shadowColor = 'rgba(233, 30, 99, 0.3)';
      if (currentVibe.name === 'Ocean') shadowColor = 'rgba(0, 188, 212, 0.3)';
      if (currentVibe.name === 'Sunset') shadowColor = 'rgba(255, 87, 34, 0.3)';
      root.style.setProperty('--shadow-color', shadowColor);
      setIsTransitioning(false);
    }, 150);
    return () => clearTimeout(timeoutId);
  }, [currentVibe]);

  useEffect(() => {
    const root = document.documentElement;
    if (isActive) {
      root.style.setProperty('--pulse-animation', 'pulse 2s ease-in-out infinite');
    } else {
      root.style.setProperty('--pulse-animation', 'none');
    }
  }, [isActive]);

  const handleSelectVibe = (vibe) => {
    if (vibe.name !== currentVibe.name) {
      setCurrentVibe(vibe);
      if ('vibrate' in navigator) navigator.vibrate(50);
    }
  };

  const handleModeSwitch = (newMode) => {
    switchMode(newMode);
    if ('vibrate' in navigator) navigator.vibrate(30);
  };

  const handleToggleTimer = () => {
    toggleTimer();
    if ('vibrate' in navigator) navigator.vibrate(isActive ? 50 : 100);
  };

  const handleResetTimer = () => {
    resetTimer();
    if ('vibrate' in navigator) navigator.vibrate([100, 50, 100]);
  };

  return (
    <div className={`app-container ${isTransitioning ? 'transitioning' : ''}`}>
      <Particles
        id="tsparticles"
        key={currentVibe.name}
        init={particlesInit}
        options={getParticlesConfig(currentVibe.name)}
      />
      <BackgroundSound src={currentVibe.soundSrc} isPlaying={isActive} />

      <Header
        vibes={vibes}
        currentVibe={currentVibe}
        onSelectVibe={handleSelectVibe}
      />
      
      <Timer
        mode={mode}
        onSelectMode={handleModeSwitch}
        secondsLeft={secondsLeft}
        isActive={isActive}
        onToggle={handleToggleTimer}
        onReset={handleResetTimer}
      />
      
      <Footer githubUrl={GITHUB_URL} linkedinUrl={LINKEDIN_URL} />
    </div>
  );
}

export default App;