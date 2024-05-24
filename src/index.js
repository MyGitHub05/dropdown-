import "./styles/style.css";
import { displayDropDown } from "./util/MouseoverMouseout";
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menuBtn");
  const ul = document.querySelector(".dropDown-content");

  displayDropDown(menuBtn, ul);
});
