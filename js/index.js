// Declaring DOM elements
const hamburgerBtn = document.getElementById("hamburgerBtn");

hamburgerBtn.addEventListener("click", () => {
  console.log("✔️");
  document.querySelector("#menuIcon").classList.toggle("fa-bars");
  document.querySelector("#menuIcon").classList.toggle("fa-times");
  document.getElementById("ulDiv").classList.toggle("open");
});

// poplulatingDOM
