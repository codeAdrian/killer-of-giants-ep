import type { HTMLAttributes } from "react";
import Styles from "./Song.module.css";
import { getRomanNumeral } from "../utils/getRomanNumeral";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isPlaying: boolean;
  index: number;
}

const Song = ({ children, onClick, isPlaying, index }: Props) => {
  const iconVariant = isPlaying
    ? "ri-pause-large-line ri-fw ri-lg"
    : "ri-play-large-fill ri-fw ri-lg";

  return (
    <li id={`audio-${index}`} className={Styles.song}>
      <div className={Styles.songTitle}>
        <span className={Styles.songIndex}>{getRomanNumeral(index)}</span>
        <div>{children}</div>
      </div>
      <button className={Styles.songButton} onClick={onClick}>
        <i className={iconVariant} />
      </button>
    </li>
  );
};

export default Song;
