import React, { useState } from "react";
import { useTracks } from "../../context/tracksContext";
import { useNavigate } from "react-router-dom";
import "./playlists.css";

export default function Playlists() {
  const { tracks } = useTracks();
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [newPlaylistTracks, setNewPlaylistTracks] = useState([]);

  const handlePlay = (index) => {
    navigate(`/play/${index}`);
  };

  const handleCreatePlaylist = () => {
    if (newPlaylistName && newPlaylistTracks.length > 0) {
      setPlaylists([
        ...playlists,
        { name: newPlaylistName, tracks: newPlaylistTracks },
      ]);
      setNewPlaylistName("");
      setNewPlaylistTracks([]);
    }
  };

  return (
    <div className="screen-container1">
      <h2 className="name ">Playlists</h2>
      <div className="playlists-body">
        <div className="left-section">
          <h3>Selected Playlist</h3>
          {selectedPlaylist ? (
            <div className="selected-playlist">
              <h4>{selectedPlaylist.name}</h4>
              <div className="tracks-list">
                {selectedPlaylist.tracks.map((track, index) => (
                  <div key={index} className="track">
                    <img
                      src={URL.createObjectURL(track.image)}
                      alt={track.name}
                      className="track-image"
                    />
                    <p>{track.name}</p>
                  </div>
                ))}
              </div>
              <button className="play-button" onClick={() => handlePlay(0)}>
                Play
              </button>
            </div>
          ) : (
            <p>No playlist selected</p>
          )}
        </div>
        <div className="right-section">
          <h3>All Playlists</h3>
          <div className="all-playlists">
            {playlists.map((playlist, index) => (
              <div
                key={index}
                className="playlist"
                onClick={() => setSelectedPlaylist(playlist)}
              >
                <h4>{playlist.name}</h4>
                <div className="playlist-images">
                  {playlist.tracks.slice(0, 4).map((track, i) => (
                    <img
                      key={i}
                      src={URL.createObjectURL(track.image)}
                      alt={track.name}
                      className="playlist-image"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="create-playlist">
            <h3>Create New Playlist</h3>
            <input
              type="text"
              placeholder="Playlist Name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
            />
            <div className="tracks-list">
              {tracks.map((track, index) => (
                <div key={index} className="track">
                  <input
                    type="checkbox"
                    checked={newPlaylistTracks.includes(track)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setNewPlaylistTracks([...newPlaylistTracks, track]);
                      } else {
                        setNewPlaylistTracks(
                          newPlaylistTracks.filter((t) => t !== track)
                        );
                      }
                    }}
                  />
                  <img
                    src={URL.createObjectURL(track.image)}
                    alt={track.name}
                    className="track-image"
                  />
                  <p>{track.name}</p>
                </div>
              ))}
            </div>
            <button onClick={handleCreatePlaylist}>Create Playlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
