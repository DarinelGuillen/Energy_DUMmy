import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/Card.css"; // Import your CSS file here
import icon from "../../assets/gif/lugar-de-trabajo.gif"; // Import your icon here

function Card(props) {
  const { temperature, location, humidity, windSpeed } = props;

  return (
    <div className="cardm">
      <div className="card">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <div className="main">{temperature} °C</div>
        <div className="mainsub">{location}</div>
      </div>

      <div className="card2">
        <div className="upper">
          <div className="humidity">
            <div className="humiditytext">Humidity<br />{humidity}%</div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

          </div>

          <div className="air">
            <div className="airtext">Wind<br />{windSpeed} Km/h</div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  temperature: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
};

export default Card;
