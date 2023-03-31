import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import ApodContainer from "./components/ApodContainer";

function App() {
  const [apodData, setApodData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date("2022-08-21").toISOString().slice(0, 10)
  );
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod",
        /*"https://api.nasa.gov/planetary/apod?api_key=3wkI5lZxyiVojEhKgnaeG2kJwgzf00RAFI97pnsz"*/ {
          params: {
            api_key: "5aTPYSEBtG9uzEFh8PzWtDHaiFSN2W2hWRQHXkgS",
            date: datePicker,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
    console.log("Sayfa Render oldu!");
  }, [datePicker]);

  return (
    <div className="App">
      <ApodContainer
        data={apodData}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );
}

export default App;
