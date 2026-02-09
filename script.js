const heartField = document.querySelector(".heart-field");

const heartPositions = [8, 18, 28, 42, 56, 68, 78, 90];

heartPositions.forEach((left, index) => {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.style.left = `${left}%`;
  heart.style.animationDelay = `${index * 0.6}s`;
  heartField.appendChild(heart);
});
