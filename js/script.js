const slider = document.querySelector("#image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const header = document.querySelector(".caption h1");
const description = document.querySelector(".caption p");

const images = [
  "imgs/OpenGym.jpg",
  "imgs/StrongmanGym.png",
  "imgs/Recepce.png",
];
const headings = ["Fitness Gym", "Open Gym", "Reception"];
const descriptions = [
  "A gym with lots of free weights and some great machines.",
  "A gym for strongmen to lift heavy-ahh weights.",
  "Nice and spacious reception.",
];

let id = 0;

function slide(id) {
  slider.style.backgroundImage = `url(${images[id]})`;
  slider.classList.add("image-fade");
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 550);
  header.innerText = headings[id];
  description.innerText = descriptions[id];
}

// Initial call to slide function with the initial id
slide(id);

arrLeft.addEventListener("click", () => {
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  slide(id);
});

arrRight.addEventListener("click", () => {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slide(id);
});

/*SCROLL ANIMATION*/

const sr = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 800,
  delay: 100,
});

sr.reveal(".intro-name");
sr.reveal(".intro-hashtag", { delay: 300, origin: "bottom" });
sr.reveal(".quote, #workouts, #prices", { interval: 100 });
sr.reveal(".author, #image-slider, .map, .container", {
  interval: 100,
  origin: "bottom",
});
sr.reveal(".footer-text", { interval: 100, origin: "left" });
