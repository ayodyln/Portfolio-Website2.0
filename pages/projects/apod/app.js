"use strict";
const apiKey = "YqyLItBMkSUTxQfWyLCTONOEV5M6GoaRS05ARM6o";
import { getAPIData } from "./data.js";
import { currDate } from "./data.js";
import { clearData } from "./data.js";
import { randomDate } from "./data.js";

const currentBtn = document.querySelector(".current-btn");
const randomBtn = document.querySelector(".random-btn");
const submitBtn = document.querySelector(".submit");
const getApod = document.querySelector(".date-input");

const container = document.querySelector(".container");
const figure = document.querySelector(".apod");
const img = document.querySelector(".apod-img");
const title = document.querySelector(".apod-title");
const abodInfo = document.createElement("p");
const dateText = document.querySelector(".date-text");

dateText.textContent = `Please enter a date between these two dates: 1995-05-16 and ${currDate()}`;

function apodData(key, date) {
  getAPIData(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`)
    .then(async (result) => {
      displayApodData(result);
    })
    .catch((error) => console.log("error", error));
}
apodData(apiKey, currDate());

function displayApodData(data) {
  console.log(data);
  if (data.hasOwnProperty("hdurl")) {
    img.src = data.hdurl;
  } else if (data.hasOwnProperty("url")) {
    window.alert(`Current APOD has no image yet.`);
    console.log("No HD image.");
  }

  title.textContent = `${data.title}; Date: ${data.date}`;
  abodInfo.innerText = data.explanation;
  figure.appendChild(abodInfo);
}

//---- BELOW: are functions that are features I want, default settings are above.

randomBtn.addEventListener("click", () => {
  clearData(img);
  clearData(abodInfo);
  let date = randomDate(new Date(1995, 5, 16), new Date());
  apodData(apiKey, date);
});

currentBtn.addEventListener("click", () => {
  clearData(img);
  clearData(abodInfo);
  apodData(apiKey, currDate());
});

submitBtn.addEventListener("click", () => {
  clearData(img);
  clearData(abodInfo);
  apodData(apiKey, getApod.value);
});
