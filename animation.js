const lightImages = [
  "assets/face-animation-light/bl-1.png",
  "assets/face-animation-light/bl-2.png",
  "assets/face-animation-light/bl-3.png",
  "assets/face-animation-light/bl-4.png",
  "assets/face-animation-light/bl-5.png"
];

const darkImages = [
  "assets/face-animation-dark/blw-1.png",
  "assets/face-animation-dark/blw-2.png",
  "assets/face-animation-dark/blw-3.png",
  "assets/face-animation-dark/blw-4.png",
  "assets/face-animation-dark/blw-5.png"
];

let currentIndex = 0;

function updateAnimation() {
  const lightImg = document.getElementById("light-animation");
  const darkImg = document.getElementById("dark-animation");

  lightImg.src = lightImages[currentIndex];
  darkImg.src = darkImages[currentIndex];

  currentIndex = (currentIndex + 1) % lightImages.length;
}

setInterval(updateAnimation, 500);
