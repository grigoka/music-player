import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTracks } from "../../context/tracksContext";
import AudioPlayer from "../../components/audioPlayer";
import "./play.css";

export default function Play() {
  const { index } = useParams();
  const { tracks } = useTracks();
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(parseInt(index, 10));

  useEffect(() => {
    console.log("useTracks:", tracks);
    console.log("currentIndex:", currentIndex);

    if (tracks.length > 0 && currentIndex < tracks.length) {
      setCurrentTrack(tracks[currentIndex]);
      console.log("currentTrack:", tracks[currentIndex]);
    } else {
      console.error("Track not found");
    }
  }, [tracks, currentIndex]);

  return (
    <div className="screen-container">
      <AudioPlayer
        currentTrack={currentTrack}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        total={tracks}
      />
    </div>
  );
}
