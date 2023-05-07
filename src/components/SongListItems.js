import React from "react";

const SongListItems = ({ song, songs, setCurentSong, setSongs }) => {
  const songSelect = () => {
    const selectedSong = songs.filter((item) => item.id === song.id);
    setCurentSong(selectedSong[0]);
    const newSongs = songs.map((item) => {
      if (item.id === song.id) {
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
  };

  return (
    <div
      className={`song-container-items ${song.active ? "selected" : " "}`}
      onClick={songSelect}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default SongListItems;
