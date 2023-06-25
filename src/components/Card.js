import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faWind, faCloud, faSmog, faSun, faCloudShowersHeavy, faSnowflake } from '@fortawesome/free-solid-svg-icons';

export const Card = ({results}) => {
    const {name} = results;
    const {coord} = results;
    const {sys} = results;
    const {main} = results;
    const {wind} = results;
    const {weather} = results;
    const {cod} = results;

    const getWeatherImage = (type) => {
        switch (type.toLowerCase()) {
            case "clouds":
                return faCloud;
                break;
            case "smoke":
                return faSmog;
                break;
            case "clear":
                return faSun;
                break;
            case "rain":
                return faCloudShowersHeavy;
                break;
            case "snow":
                return faSnowflake;
                break;
            case "haze":
                return faSmog;
                break;
            default:
                return "";
                break;
        }
    };

  return (
    <div>
        {cod === "404" ? (
            <div className="headers_container">
                <h1>No city found</h1>
            </div>
        ) : (
            <div>
                <div className="headers_container">
                    <h1>{results.name && name}, {results.sys && sys.country}</h1>
                </div>
                <div className="coords_container">
                    <div className="lat_coords">
                        <p>lat: {results.coord && coord.lat}</p>
                    </div>
                    <div className="long_coords">
                        <p>long: {results.coord && coord.lon}</p>
                    </div>
                </div>
                <div className="main_stats_container">
                    <div className="image_container">
                        {results.weather && (
                    /*<img src={getWeatherImage(weather[0].main)} alt="weather"/>*/
                            <FontAwesomeIcon icon={getWeatherImage(weather[0].main)} />
                        )}
                    </div>
                     <div className="type_container">
                        <p>{results.weather && weather[0].main}</p>
                        <p>{results.weather && weather[0].description}</p>
                    </div>
                    <div className="temp_stats_container">
                        <div className="temp">{results.main && main.temp}deg</div>
                        <div className="feels_like">feels like {results.main && main.feels_like}deg</div>
                    </div>
                </div>
                <div className="bottom_info_container">
                    <div className="humidity">
                        <div>
                            <FontAwesomeIcon icon={faWater} />
                        </div>
                        <div>
                            <p>{results.main && main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="wind_speed">
                        <div>
                            <FontAwesomeIcon icon={faWind} />
                        </div>
                        <div>
                            <p>{results.wind && wind.speed}Km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}
