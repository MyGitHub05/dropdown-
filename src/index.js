import "./styles/dropdown.css";
import "./styles/carousel.css";
import { displayDropDown } from "./util/dropdownControl";
import { carouselControl } from "./util/carouselControl";

document.addEventListener("DOMContentLoaded", () => {
  const carouselController = carouselControl();
  const menuBtn = document.querySelector(".menuBtn");
  const ul = document.querySelector(".dropDown-content");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  prevBtn.addEventListener("click", () => {
    carouselController.prev();
  });

  nextBtn.addEventListener("click", () => {
    carouselController.next();
  });

  displayDropDown(menuBtn, ul);
  carouselController.rotate();
});
