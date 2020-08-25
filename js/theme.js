const toggler = document.querySelector(".theme-toggle-wrapper");
const mainColor = document.querySelectorAll(".bg-main");
const themeIcon = document.querySelector(".theme-icon");
const turnWhiteBgImg = document.querySelectorAll(".turn");
const turnWhiteBgColor = document.querySelectorAll(".turn-bg");
const turnColor = document.querySelectorAll(".turn-color");
const current = document.querySelectorAll(".current");

const togglerColors = (arr, toggleClass) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.classList.toggle(toggleClass);
  }
}

toggler.addEventListener("click", () => {
  themeIcon.innerHTML === "brightness_4"
    ? (themeIcon.innerHTML = "brightness_5")
    : (themeIcon.innerHTML = "brightness_4");
  togglerColors(mainColor, "bg-dark");
  togglerColors(turnWhiteBgImg, "turned")
  togglerColors(turnWhiteBgColor, "turned-bg")
  togglerColors(turnColor, "white")
  togglerColors(current, "current-dark");
});
