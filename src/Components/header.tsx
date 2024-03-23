import React, { useRef } from "react";
import useTheme from "../hooks/useTheme";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import music from "../assets/bg-music.mp3";
import { GoSun } from "react-icons/go";
import { IoIosMoon } from "react-icons/io";
import useMusic from "../hooks/useMusic";

const Header = () => {
  const { currTheme, switchTheme } = useTheme();
  const { isPlaying, play, pause } = useMusic();
  const audioRef = useRef<any | null>();

  const handleMusicChange = () => {
    if (audioRef && audioRef.current) {
      if (isPlaying) {
        pause(audioRef);
      } else {
        play(audioRef);
      }
    }
  };

  return (
    <div className="flex items-center justify-end gap-4 overflow-hidden">
      {/* <img src={wavy} alt="" className="wavy overflow-hidden" /> */}
      <button
        onClick={handleMusicChange}
        className="z-10 rounded-full dark:bg-white bg-black p-4 text-white text-xl dark:text-black"
      >
        {isPlaying ? <MdMusicNote /> : <MdMusicOff />}
      </button>
      <button
        onClick={() => {
          switchTheme();
        }}
        className="z-10  dark:bg-white bg-black text-white dark:text-black text-xl p-4 rounded-full"
      >
        {currTheme === "dark" ? <GoSun /> : <IoIosMoon />}
      </button>
      <audio ref={audioRef} src={music} />
    </div>
  );
};

export default Header;
