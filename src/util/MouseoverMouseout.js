export function displayDropDown(btn, e) {
  btn.addEventListener("mouseover", () => {
    e.style.display = "block";
  });
  btn.addEventListener("mouseout", () => {
    setTimeout(() => {
      if (!e.matches(":hover")) {
        e.style.display = "none";
      }
    }, 100);
  });
  e.addEventListener("mouseover", () => {
    e.style.display = "block";
  });

  e.addEventListener("mouseout", () => {
    e.style.display = "none";
  });
}
