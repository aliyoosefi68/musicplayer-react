import React from "react";
import SongListItems from "./SongListItems";

const SongList = ({ songs, setCurentSong, setSongs, displayListSong }) => {
  return (
    <div className={`song-list ${displayListSong ? "displayList" : " "} `}>
      <h2>List of Songs : </h2>
      <div className="song-list-items">
        {songs.map((song) => (
          <SongListItems
            key={song.id}
            song={song}
            songs={songs}
            setCurentSong={setCurentSong}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default SongList;
