// Declaring DOM elements
const hamburgerBtn = document.getElementById("hamburgerBtn");

hamburgerBtn.addEventListener("click", (e) => {
  document.querySelector("#menuIcon").classList.toggle("fa-bars");
  document.querySelector("#menuIcon").classList.toggle("fa-x");
  document.getElementById("ulDiv").classList.toggle("open");
});

// poplulatingDOM

//! SCSS article code snippets
const sassCode = document.querySelector(".language-sass");
sassCode.textContent = `
@import "variables;
@import "small"

@media only screen and (min-width: 560px) 
  @import "medium"

@media only screen and (min-width: 1024px)
  @import "large"
`;

const scssCode = document.querySelector(".language-scss");
scssCode.textContent = `
@import "variables";
@import "small";

@media only screen and (min-width: 560px) {
  @import "medium";
};

@media only screen and (min-width: 1024px) {
  @import "large";
};
`;
