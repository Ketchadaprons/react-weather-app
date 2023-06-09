import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chicago" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://ketchadapron.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Ketchadapron Rohlfs
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/Ketchadaprons/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
