"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import WelcomeIntro from "./components/WelcomeIntro";
import MusicPlayer, { musicPlayerControl } from "./components/MusicPlayer";
import About from "./components/About";
import EventDetails from "./components/EventDetail";
import BrideGroom from "./components/BrideGroom";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

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
        </>
      )}
      <MusicPlayer />
    </>
  );
}
