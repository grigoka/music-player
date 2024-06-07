import React, { useState } from "react";
import { useTracks } from "../../context/tracksContext";

export default function Add() {
  const { addTrack } = useTracks();
  const [formData, setFormData] = useState({
    image: null,
    trackName: "",
    author: "",
    audioFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrack = {
      image: formData.image,
      name: formData.trackName,
      artist: formData.author,
      preview_url: URL.createObjectURL(formData.audioFile),
    };
    addTrack(newTrack);
    setFormData({
      image: null,
      trackName: "",
      author: "",
      audioFile: null,
    });
  };

  return (
    <div className="screen-container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="trackName">Name:</label>
            <input
              type="text"
              id="trackName"
              name="trackName"
              value={formData.trackName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="author">Autor:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="audioFile">Audio:</label>
            <input
              type="file"
              id="audioFile"
              name="audioFile"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
