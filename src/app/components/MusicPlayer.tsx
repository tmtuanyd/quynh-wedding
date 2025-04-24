"use client";

import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const handler = () => {
      const audio = document.querySelector("audio") as HTMLAudioElement;
      if (audio && audio.paused) {
        audio.play().catch(console.warn);
        setIsPlaying(true);
      }
    };

    window.addEventListener("start-music", handler);
    return () => {
      window.removeEventListener("start-music", handler);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} loop src="/music/beautiful-in-white.mp3" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 bg-red-400 hover:bg-red-400/30 backdrop-blur-md p-2 rounded-full text-white z-50"
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
