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
      setIsPlaying(!isPlaying);
    } else if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  const [songinfo, setSongInfo] = useState({
    curentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const timeUpdateHandler = (e) => {
    const curent = e.target.currentTime;
    const duration = e.target.duration;

    if (curent === duration) {
      skipSongs("next");
    }

    //calculate Percentage
    const roundCurrent = Math.round(curent);
    const roundDuration = Math.round(duration);

    const animationPer = Math.round((roundCurrent / roundDuration) * 100);

    setSongInfo({
      ...songinfo,
      curentTime: curent,
      duration: duration,
      animationPercentage: animationPer,
    });
  };

  const dragHandler = (e) => {
    setSongInfo({ ...songinfo, curentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const skipSongs = (dir) => {
    const currentIndex = songs.findIndex((song) => song.id === curentSong.id);
    if (dir === "next") {
      if (currentIndex === songs.length - 1) {
        setIsPlaying(false);
        setCurentSong(songs[0]);
      } else {
        setCurentSong(songs[currentIndex + 1]);
        setIsPlaying(false);
      }
    }
    if (dir === "back") {
      if (currentIndex === 0) {
        setCurentSong(songs[songs.length - 1]);
        setIsPlaying(false);
      } else {
        setCurentSong(songs[currentIndex - 1]);
        setIsPlaying(false);
      }
    }
  };

  //add the style
  const trackAnimation = {
    transform: `translateX(${songinfo.animationPercentage}%)`,
  };

  return (
    <div className="palyer-container">
      <div className="time-control">
        <p>{timeFormated(songinfo.curentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right,${curentSong.color[0]},${curentSong.color[1]}) `,
          }}
        >
          <input
            type="range"
            min={0}
            max={songinfo.duration || 0}
            value={songinfo.curentTime}
            onChange={dragHandler}
          />
          <div className="animate-track" style={trackAnimation}></div>
        </div>

        <p>{timeFormated(songinfo.duration)}</p>
      </div>
      <div className="paly-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipSongs("back")}
        />
        {isPlaying && (
          <FontAwesomeIcon icon={faPause} size="2x" onClick={playsong} />
        )}

        {!isPlaying && (
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
