const heartField = document.querySelector(".heart-field");
const balloonField = document.querySelector(".balloon-field");

const heartPositions = [8, 18, 28, 42, 56, 68, 78, 90];
const balloonPositions = [6, 24, 38, 52, 66, 84];
const balloonColors = ["#d23a6a", "#f2b94b", "#f7c9d9", "#c25b78", "#f08fae", "#e86f8a"];

heartPositions.forEach((left, index) => {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.style.left = `${left}%`;
  heart.style.animationDelay = `${index * 0.6}s`;
  heartField.appendChild(heart);
});

balloonPositions.forEach((left, index) => {
  const balloon = document.createElement("span");
  balloon.className = "balloon";
  balloon.style.left = `${left}%`;
  balloon.style.animationDelay = `${index * 1.4}s`;
  balloon.style.background = `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.65), transparent 45%), ${balloonColors[index % balloonColors.length]}`;
  balloonField.appendChild(balloon);
});
