const content = document.querySelector(".post__content");
const images = content.querySelector(".content__images");

const IMAGE_WIDTH = content.querySelector("img").width;
const IMAGE_LENGTH = images.children.length;

let start_x = 0;
let current_x = 0;
let end_x = 0;
let current = 0;
let position = 0;

function prev() {
  if (current > 0) {
    position += IMAGE_WIDTH;
    images.style.transform = `translateX(${IMAGE_WIDTH}px)`;
    current -= 1;
  }
}

function next() {
  if (current < IMAGE_LENGTH) {
    position -= IMAGE_WIDTH;
    images.style.transform = `translateX(${IMAGE_WIDTH}px)`;
    current += 1;
  }
}

function touch_start(event) {
  start_x = event.touches[0].pageX;
}

function touch_move(event) {
  current_x = event.touches[0].pageX;

  images.style.transform = `translateX(${position}px)`;
  images.style.transitionDuration = "0ms";
}

function touch_end(event) {
  end_x = event.changedTouches[0].pageX;

  if (start_x > end_x) {
    next();
  } else {
    prev();
  }
}

images.addEventListener("touchstart", touch_start);
images.addEventListener("touchmove", touch_move);
images.addEventListener("touchend", touch_end);
