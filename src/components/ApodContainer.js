import React from "react";
import "./StarWarsText.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function ApodContainer(props) {
  const { data, dateChange, currentDate } = props;
  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }
  function prevDayHandler() {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    dateChange(prevDay.toISOString().split("T")[0]);
    // document
    //   .querySelectorAll("button")
    //   .forEach((button) => (button.style.fontSize = "150%"));
  }

  function nextDayHandler() {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    dateChange(nextDay.toISOString().split("T")[0]);
    // document
    //   .querySelectorAll("button")
    //   .forEach((button) => (button.style.fontSize = "150%"));
  }

  if (!data) return <h3>Yükleniyor...</h3>;
  return (
    // <div>
    //   <p>{data.date}</p>
    //   <label htmlFor="apodDate">apodDate:</label>
    //   <input
    //     onChange={(e) => dateChangeHandler(e)}
    //     type="date"
    //     value={currentDate}
    //     name="apodDate"
    //   ></input>
    //   <p>{data.explanation}</p>
    //   <p>{data.hdurl}</p>
    //   <p>{data.media_type}</p>
    //   {data.media_type === "image" && (
    //     <img src={data.hdurl} alt={data.title} width="1000" height="600" />
    //   )}
    //   {data.media_type === "video" && (
    //     <iframe width="800" height="600" src={data.url}></iframe>
    //   )}
    //   <p>{data.service_version}</p>
    //   <p>{data.title}</p>
    //   <p>{data.url}</p>
    // </div>
    <div className="row App__Container">
      <div className="column grow2">
        <div className="row">
          <div className="column text--white">
            <h2>{data.date}</h2>
            <h2>{data.title}</h2>
          </div>
        </div>
        <div className="row grow2">
          <div className="column">
            <div className="star-wars-text">
              <div className="crawl">
                <div className="title">
                  <p>{data.service_version}</p>
                  <h1>{data.title}</h1>
                </div>
                <p>{data.explanation.slice(0, 200)}</p>
                <p>{data.explanation.slice(201, 400)}</p>
                <p>{data.explanation.slice(401, 600)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <button onClick={prevDayHandler}>Prev</button>
            <button onClick={nextDayHandler}>Next</button>
          </div>
        </div>
      </div>
      <div className="column grow2">
        <div className="row">
          <div className="column image-container blur">
            {" "}
            {data.media_type === "image" && (
              <img
                className="dynamic-image"
                src={data.hdurl}
                alt={data.title}
                // width="32vw"
                // height="50vw"
              />
            )}
            {data.media_type === "video" && (
              <iframe
                className="dynamic-video"
                /*width="420" height="315"*/ src={data.url}
              ></iframe>
            )}{" "}
          </div>
        </div>
        <div className="row grow2">
          <div className="column image-container">
            {" "}
            {data.media_type === "image" && (
              <img
                className="dynamic-image"
                src={data.hdurl}
                alt={data.title}
                // width="32vw"
                // height="50vw"
              />
            )}
            {data.media_type === "video" && (
              <iframe
                className="dynamic-video"
                /*width="420" height="315"*/ src={data.url}
              ></iframe>
            )}
          </div>
        </div>
        <div className="row">
          <div className="column image-container blur">
            {" "}
            {data.media_type === "image" && (
              <img
                className="dynamic-image"
                src={data.hdurl}
                alt={data.title}
                // width="32vw"
                // height="50vw"
              />
            )}
            {data.media_type === "video" && (
              <iframe
                className="dynamic-video"
                /*width="420" height="315"*/ src={data.url}
              ></iframe>
            )}{" "}
          </div>
        </div>
      </div>
      <div className="column--right">
        <div className="row">
          <div className="column--right">
            <label htmlFor="apodDate">Archives:</label>
            <input
              onChange={(e) => dateChangeHandler(e)}
              type="date"
              value={currentDate}
              name="apodDate"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="column--right">
            <h2> Follow Nasa Apod in Social Media...</h2>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
