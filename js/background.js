const images = ["aurora.jpg", "lights.jpg", "stars.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${randomImage}`;
document.body.appendChild(bgImage);
