import React, { useState } from "react";

const useMusic = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  function play(ref: any) {
    document.querySelector("#wavyBG")?.classList.add("wavy");
    ref?.current?.play();
    setIsPlaying(true);
  }

  function pause(ref: any) {
    document.querySelector("#wavyBG")?.classList.remove("wavy");
    ref?.current?.pause();
    setIsPlaying(false);
  }

  return { isPlaying, play, pause };
};

export default useMusic;
