import { useState } from "react";
import "./styles/Ap.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  const [curentSong, setCurentSong] = useState(songs[0]);
  console.log(songs);
  return (
    <div className="App">
      <Song curentSong={curentSong} />
      <Player />
    </div>
  );
}

export default App;
