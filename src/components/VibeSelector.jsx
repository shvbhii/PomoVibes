import React from 'react';

const VibeSelector = ({ vibes, onSelectVibe }) => {
  return (
    <div className="vibe-selector">
      <span>Vibe:</span>
      {vibes.map(vibe => (
        <button key={vibe.name} onClick={() => onSelectVibe(vibe)}>
          {vibe.name}
        </button>
      ))}
    </div>
  );
};

export default VibeSelector;