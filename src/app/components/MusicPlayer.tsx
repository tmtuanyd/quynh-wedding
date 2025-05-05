"use client";

import { useEffect, useRef, useState } from "react";
import { GiftIcon, Volume2, VolumeX } from "lucide-react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "",
    border: "none",
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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <audio ref={audioRef} loop src="/music/beautiful-in-white.mp3" />
      <div className="flex flex-col gap-2 fixed bottom-5 right-5">
        <button
          onClick={openModal}
          className=" bg-red-400 hover:bg-red-400/30 backdrop-blur-md p-2 rounded-full text-white z-50 zoom-animation"
        >
          <GiftIcon size={20} />
        </button>
        <button
          onClick={toggleMusic}
          className=" bg-red-400 hover:bg-red-400/30 backdrop-blur-md p-2 rounded-full text-white z-50"
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className=" bg-red-400 hover:bg-red-400/30 backdrop-blur-md p-2 w-[40px] h-[40px] rounded-full text-white z-50 ml-auto mb-4"
          >
            x
          </button>
        </div>

        <img src="/images/qr.JPG" />
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
