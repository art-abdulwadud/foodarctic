const toggler = document.querySelector(".theme-toggle-wrapper");
const themeIcon = document.querySelector(".theme-icon");
const turnWhiteBgImg = document.querySelector(".turn");
const turnWhiteBgColor = document.querySelector(".turn-bg");
const turnColor = document.querySelectorAll(".turn-color");

toggler.addEventListener("click", () => {
  themeIcon.innerHTML === "brightness_4"
    ? (themeIcon.innerHTML = "brightness_5")
    : (themeIcon.innerHTML = "brightness_4");
  const mainColor = document.querySelectorAll(".bg-main");
  for (let i = 0; i < mainColor.length; i++) {
    const element = mainColor[i];
    element.classList.toggle("bg-dark");
  }
  turnWhiteBgImg.classList.toggle("turned");
  for (let i = 0; i < turnWhiteBgColor.length; i++) {
    const element = turnWhiteBgColor[i];
    element.classList.toggle("turned-bg");
  }
  for (let i = 0; i < turnColor.length; i++) {
    const element = turnColor[i];
    element.classList.toggle("white");
  }
});
