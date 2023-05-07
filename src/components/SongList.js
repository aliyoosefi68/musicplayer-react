import React from "react";
import SongListItems from "./SongListItems";

const SongList = ({ songs }) => {
  return (
    <div className="song-list">
      <h2>List of Songs : </h2>
      <div className="song-list-items">
        {songs.map((song) => (
          <SongListItems song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongList;
