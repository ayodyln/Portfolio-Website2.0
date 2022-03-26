// Declaring DOM elements
const hamburgerBtn = document.getElementById("hamburgerBtn");

hamburgerBtn.addEventListener("click", (e) => {
  document.querySelector("#menuIcon").classList.toggle("fa-bars");
  document.querySelector("#menuIcon").classList.toggle("fa-x");
  document.getElementById("ulDiv").classList.toggle("open");
});

// poplulatingDOM
