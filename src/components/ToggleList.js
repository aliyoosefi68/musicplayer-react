import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const ToggleList = ({ setDisplayListSong, displayListSong }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setDisplayListSong(!displayListSong)}>
        <span id="button-toggle">Song List </span>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default ToggleList;
