import { classProjects } from "./projects/class-work.js";

// Declaring DOM elements
const hamburgerBtn = document.getElementById("btn");

hamburgerBtn.addEventListener("click", () => {
  console.log("✔️");
  document.getElementById("ul-nav").classList.toggle("hide");
  document.getElementById("nav-social-links").classList.toggle("hide");
});

// poplulatingDOM

// Jquery
$(document).ready(function () {
  console.log("🙃");

  //   example of DRY coding in jquery
  $(".cardBtn").on("click", function () {
    var cardId = $(this).attr("data-panel");
    // $('.card').find('div').toggle()

    if ($(this).is(".special")) {
      console.log("yerrr skraaa");
    } else if ($(this).parent().is(".parent")) {
      console.log("skra yerrrp");
    }
    console.log(cardId);
  });

  $(".cards").slick({
    dots: true,
    arrows: false
  });
});
