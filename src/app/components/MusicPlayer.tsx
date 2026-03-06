"use client";

import { GiftIcon, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: 12000,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  content: {
    inset: "0",
    zIndex: 12001,
    background: "transparent",
    border: "none",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [modalIsOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <audio ref={audioRef} loop src="/music/bg-music.mp3" />
      <div className="flex flex-col gap-2 fixed bottom-5 right-5 z-[9999]">
        <button
          onClick={openModal}
          className="bg-red-400 hover:bg-red-400/30 backdrop-blur-md p-2 rounded-full text-white zoom-animation"
        >
          <GiftIcon size={20} />
        </button>
        <button
          onClick={toggleMusic}
          className="bg-red-400 hover:bg-red-400/30 backdrop-blur-md p-2 rounded-full text-white"
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="relative w-full max-w-md rounded-2xl bg-white p-3 shadow-2xl">
          <button
            onClick={closeModal}
            className="absolute right-3 top-3 bg-red-400 hover:bg-red-400/80 p-2 w-[40px] h-[40px] rounded-full text-white z-50"
          >
            x
          </button>

          <img
            src="/images/qr.JPG"
            alt="QR quà mừng"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </Modal>
    </>
  );
}

export const musicPlayerControl = {
  startPlaying: () => {
    const event = new CustomEvent("start-music");
    window.dispatchEvent(event);
  },
};
