import React, { createContext, useState, useContext } from "react";

const TracksContext = createContext();

export const useTracks = () => useContext(TracksContext);

export const TracksProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);

  const addTrack = (track) => {
    setTracks([...tracks, track]);
  };

  return (
    <TracksContext.Provider value={{ tracks, addTrack }}>
      {children}
    </TracksContext.Provider>
  );
};
