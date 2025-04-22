"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.warn);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop src="/music/beautiful-in-white.mp3" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full text-white z-50"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
}

export const musicPlayerControl = {
  startPlaying: () => {
    const event = new CustomEvent("start-music");
    window.dispatchEvent(event);
  },
};
