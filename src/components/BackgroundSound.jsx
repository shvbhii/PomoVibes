import React, { useRef, useEffect } from 'react';

const BackgroundSound = ({ src, isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.warn("Audio autoplay was prevented by the browser. User interaction is required.");
      });
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Set a soft volume
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, src]);

  return <audio ref={audioRef} src={src} />;
};

export default BackgroundSound;