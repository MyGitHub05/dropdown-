export function carouselControl() {
  //global
  let currentIndex = 0;
  let slides = document.querySelectorAll(".images");
  let lastIndex = slides.length - 1;

  const rotate = () => {
    setInterval(() => {
      slides[currentIndex].classList.remove("display");

      // Update currentIndex and lastIndex
      lastIndex = currentIndex;
      currentIndex = (currentIndex + 1) % slides.length;

      slides[currentIndex].classList.add("display");
    }, 5000);
  };

  const prev = () => {
    lastIndex = currentIndex;
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    slides[lastIndex].classList.remove("display");
    slides[currentIndex].classList.add("display");
  };

  const next = () => {
    lastIndex = currentIndex;
    currentIndex = (currentIndex + 1 + slides.length) % slides.length;

    slides[lastIndex].classList.remove("display");
    slides[currentIndex].classList.add("display");
  };

  return { rotate, prev, next };
}
