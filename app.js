const snowEl = document.querySelector(".snow");
const createSnowFlake = () => {
  const flake = document.createElement("div");
  flake.classList.add("flake");
  flake.style.left = Math.random() * window.innerWidth + "px";
  flake.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2 ~ 5 seconds
  flake.style.opacity = Math.random();
  flake.style.transform = `scale(${Math.random()})`;

  snowEl.appendChild(flake);

  setTimeout(() => {
    flake.remove();
  }, 5000);
};

setInterval(createSnowFlake, 100);
