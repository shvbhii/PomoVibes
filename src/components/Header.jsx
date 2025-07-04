import React from 'react';
import VibeSelector from './VibeSelector';

const Header = ({ vibes, currentVibe, onSelectVibe }) => {
  return (
    <header className="header">
      <h1>PomoVibes</h1>
      <p className="watermark">- by Shubhi Sharma -</p>
      <VibeSelector 
        vibes={vibes} 
        currentVibe={currentVibe}
        onSelectVibe={onSelectVibe} 
      />
    </header>
  );
};

export default Header;