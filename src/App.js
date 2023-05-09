import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import SongList from "./components/SongList";

//styles
import "./styles/Ap.scss";
import ToggleList from "./components/ToggleList";

function App() {
  const [songs, setSongs] = useState(data());
  const [curentSong, setCurentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayListSong, setDisplayListSong] = useState(true);

  return (
    <div className="App">
      <ToggleList
        displayListSong={displayListSong}
        setDisplayListSong={setDisplayListSong}
      />
      <Song curentSong={curentSong} />
      <Player
        curentSong={curentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurentSong={setCurentSong}
        setSongs={setSongs}
      />
      <SongList
        songs={songs}
        setCurentSong={setCurentSong}
        setSongs={setSongs}
        displayListSong={displayListSong}
      />
    </div>
  );
}

export default App;
