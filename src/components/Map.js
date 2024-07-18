import React, { useState, useCallback } from 'react';

const Map = ({ handleChange }) => {
  const [iframeSrc, setIframeSrc] = useState(
    "https://www.google.com/maps/embed/v1/place?q=usa&key=AIzaSyBFvU905wVMfSfWkWW1_8xOGAe-SX-Ea3A"
  );

  const generateIframeSrc = useCallback((event) => {
    event.preventDefault();
    const userInput = event.target.elements[0].value;
    const localMapUrl = `https://www.google.com/maps/embed/v1/search?q=dog%20park%20near%20${userInput}%20USA&key=AIzaSyBFvU905wVMfSfWkWW1_8xOGAe-SX-Ea3A`;
    setIframeSrc(localMapUrl);
  }, []);

  return (
    <div className="map-container" id="map-container">
      <h2>Local Dog Parks</h2>
      <form onSubmit={generateIframeSrc}>
        <input
          type="text"
          placeholder="zip or city name"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Find Dog Parks!" />
      </form>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        frameBorder="0"
        src={iframeSrc}
      ></iframe>
    </div>
  );
};

export default Map;