import { Howl } from "howler";
import { useEffect, useState } from "react";
import Song from "./Song";
import "remixicon/fonts/remixicon.css";

import Styles from "./Playlist.module.css";

const audioPath = "/music/";
const titles = [
  "Killer Of Giants",
  "The Court Of Azathoth",
  "Purging The Corruption",
  "Vexed",
  "The Hun Rides Again",
];
const playlist = [
  "01-killer-of-giants",
  "02-the-court-of-azathoth",
  "03-purging-the-corruption",
  "04-vexed",
  "05-the-hun-rides-again",
].map((file) => new Howl({ src: `${audioPath}${file}.mp3`, preload: false }));

const Playlist = () => {
  const [playIndex, setPlayIndex] = useState(-1);
  const stopAndPlay = (file: Howl, index: number) => {
    Howler.stop();
    if (playIndex === index) {
      setPlayIndex(-1);
      return;
    }

    file.load().play();
    setPlayIndex(index);
    const logos = document.querySelectorAll<HTMLImageElement>(".nav__logo");
    const images =
      document.querySelectorAll<HTMLImageElement>(".listen__image");

    logos.forEach((logo, i) =>
      logo.setAttribute("style", `opacity:${index === i ? 1 : 0}`)
    );

    images.forEach((image, i) =>
      image.setAttribute("style", `opacity:${index === i ? 1 : 0}`)
    );
  };

  useEffect(() => {
    playlist.forEach((file) => {
      file.load();
      file.on("end", () => {
        setPlayIndex(-1);
      });
    });
  }, []);

  return (
    <ol className={Styles.playlist}>
      {playlist.map((file, index) => (
        <Song
          //@ts-ignore
          key={file._src}
          index={index + 1}
          isPlaying={playIndex === index}
          onClick={() => {
            stopAndPlay(file, index);
          }}
        >
          {titles[index]}
        </Song>
      ))}
    </ol>
  );
};

export default Playlist;
