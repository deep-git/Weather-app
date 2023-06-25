import './App.css';
import React, { useState } from "react";
import {Card} from "./components/Card";

function App() {
  const [location, setLocation] = useState("");
  const [results, setResults] = useState();
  const titleActive = document.querySelector(".title");

  const onSubmitLocation = (e) => {
    e.preventDefault();

    if (location === "") {
      return;
    }

    try {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json()).then(data => {
        if (!data.errors) {
          setResults(data);
          titleActive.classList.add("active");
          console.log(data);
        } else {
          setResults();
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Weather</h1>
      </div>
      <div className="content_container">
        <div className="search_container">
          <input type="text" value={location} placeholder="Search location" className="input_container" onChange={(e) => setLocation(e.target.value)}/>
          <button onClick={onSubmitLocation} className="button_search"><ion-icon name="search-outline"></ion-icon></button>
        </div>
        {results !== undefined && (
          <div className="weather_container">
            <Card results={results}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
