
// Declaring DOM elements
const hamburgerBtn = document.getElementById("hamburgerBtn");

hamburgerBtn.addEventListener("click", () => {
  console.log("✔️");
  document.getElementById("hamburgerBtn").classList.toggle("open");
  document.getElementById("ulDiv").classList.toggle("open");
});

// poplulatingDOM

