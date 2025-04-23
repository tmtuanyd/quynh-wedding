"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import WelcomeIntro from "./components/WelcomeIntro";
import MusicPlayer, { musicPlayerControl } from "./components/MusicPlayer";
import About from "./components/About";
import EventDetails from "./components/EventDetail";
import Location from "./components/Location";
import BrideGroom from "./components/BrideGroom";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

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
      <WelcomeIntro
        onStart={musicPlayerControl.startPlaying}
        showIntro={showIntro}
        setShowIntro={setShowIntro}
      />
      {!showIntro && (
        <>
          <Hero />
          <BrideGroom />
          <About />
          <EventDetails />
          <Location />
        </>
      )}
      <MusicPlayer />
    </>
  );
}
