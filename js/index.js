
// Declaring DOM elements
const hamburgerBtn = document.getElementById("hamburgerBtn");

hamburgerBtn.addEventListener("click", (e) => {
  document.querySelector("#menuIcon").classList.toggle("fa-bars");
  document.querySelector("#menuIcon").classList.toggle("fa-times");
  document.getElementById("ulDiv").classList.toggle("open");
  document.querySelector('main').scroll
});

// poplulatingDOM
