import React from "react";

const Song = ({ curentSong }) => {
  return (
    <div className="song-container">
      <img src={curentSong.cover} alt={curentSong.name} />
      <h2>{curentSong.name}</h2>
      <h3>{curentSong.artist}</h3>
    </div>
  );
};

export default Song;
