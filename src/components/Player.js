import React, { useEffect, useRef, useState } from "react";

///fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

//functions
import { timeFormated } from "../helpers/services";

const Player = ({
  curentSong,
  setIsPlaying,
  isPlaying,
  songs,
  setCurentSong,
  setSongs,
}) => {
  useEffect(() => {
    const newSongs = songs.map((item) => {
      if (item.id === curentSong.id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [curentSong]);
  const audioRef = useRef(null);
  const playsong = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const timeUpdateHandler = (e) => {
    const curent = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songinfo, curentTime: curent, endTime: duration });
  };

  const [songinfo, setSongInfo] = useState({
    curentTime: 0,
    endTime: 0,
  });

  const dragHandler = (e) => {
    setSongInfo({ ...songinfo, curentTime: e.target.value });
    audioRef.current.curentTime = e.target.value;
  };

  const skipSongs = (dir) => {
    const currentIndex = songs.findIndex((song) => song.id === curentSong.id);
    if (dir === "next") {
      if (currentIndex === songs.length - 1) {
        setCurentSong(songs[0]);
      } else {
        setCurentSong(songs[currentIndex + 1]);
      }
    }
    if (dir === "back") {
      if (currentIndex === 0) {
        setCurentSong(songs[songs.length - 1]);
      } else {
        setCurentSong(songs[currentIndex - 1]);
      }
    }
  };

  return (
    <div className="palyer-container">
      <div className="time-control">
        <p>{timeFormated(songinfo.curentTime)}</p>
        <input
          type="range"
          min={0}
          max={`${songinfo.duration || 0}`}
          value={songinfo.curentTime}
          onChange={dragHandler}
        />
        <p>{timeFormated(songinfo.endTime)}</p>
      </div>
      <div className="paly-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipSongs("back")}
        />
        {isPlaying ? (
          <FontAwesomeIcon icon={faPause} size="2x" onClick={playsong} />
        ) : (
          <FontAwesomeIcon
            className="play"
            icon={faPlay}
            size="2x"
            onClick={playsong}
          />
        )}

        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipSongs("next")}
        />
      </div>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={curentSong.audio}
        ref={audioRef}
      ></audio>
    </div>
  );
};

export default Player;
