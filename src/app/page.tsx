"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import WelcomeIntro from "./components/WelcomeIntro";
import MusicPlayer, { musicPlayerControl } from "./components/MusicPlayer";
import About from "./components/About";

export default function Home() {
  useEffect(() => {
    const handler = () => {
      const audio = document.querySelector("audio") as HTMLAudioElement;
      if (audio && audio.paused) {
        audio.play().catch(console.warn);
      }
    };

    window.addEventListener("start-music", handler);
    return () => {
      window.removeEventListener("start-music", handler);
    };
  }, []);

  return (
    <>
      <WelcomeIntro onStart={musicPlayerControl.startPlaying} />
      <Hero />
      <About />
      <MusicPlayer />
    </>
  );
}
