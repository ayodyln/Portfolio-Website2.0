"use strict";

//https://api.nasa.gov/

export async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    window.alert("Error Fetching Data");
  }
}

export const currDate = function () {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  let currentDate = (today = yyyy + "-" + mm + "-" + dd);
  // console.log(currentDate)
  return currentDate;
};

export function randomDate(start, end) {
  let d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function clearData(elementID) {
  elementID.innerHTML = " ";
  elementID.src = " ";
  elementID.innerText = " ";
}


//--------------------------------------------------------------------------------------


//Near earth object Web Service
function nearEarthObjectsData(key) {
  getAPIData(
    `https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=${key}`
  ).then(async (data) => {
    console.log(data.near_earth_objects);
  });
}
// nearEarthObjectsData(apiKey)

//Space Weather Database, has sub apis, so this is example url
function donkiData(key) {
  getAPIData(
    `https://api.nasa.gov/DONKI/CME?startDate=2020-10-03&endDate=2021-01-03&api_key=${key}`
  ).then(async (data) => console.log(data));
}
// donkiData(apiKey)

//Create a EOnet fetch function
function eonetData() {
  getAPIData(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`).then(
    async (data) => console.log(data)
  );
}
// eonetData()

//epi api
function epicData(key) {
  getAPIData(
    `https://api.nasa.gov/EPIC/api/natural/images?api_key=${key}`
  ).then(async (data) => console.log(data));
}
// epicData(apiKey)

//Mars rover pictures
function marsImgData(key) {
  getAPIData(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}`
  ).then(async (data) => console.log(data));
}
// marsImgData(apiKey)
