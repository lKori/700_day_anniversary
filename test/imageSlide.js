/*
const images = document.querySelector(".images");

let current = 0;
let start_x = 0;
let current_x = 0;
let end_x = 0;
let position = 0;

const IMAGES_WIDTH = images.querySelector("img").width;
const IMAGES_LENGTH = images.children.length - 1;

function returnPos() {
  images.style.transform = `translateX(${IMAGES_WIDTH * current})`;
}

function prev() {
  if (current > 0) {
    position -= IMAGES_WIDTH;
    images.style.transform = `translateX(${IMAGES_WIDTH * current})`;
    current -= 1;
  }
}

function next() {
  if (current < IMAGES_LENGTH) {
    position += IMAGES_WIDTH;
    images.style.transform = `translateX(${IMAGES_WIDTH * current})`;
    current += 1;
  }
}

function touchStart(event) {
  start_x = event.touches[0].pageX;
  console.log(`start ${event.touches[0].pageX}`);
}

function touchMove(event) {
  current_x = event.touches[0].pageX;

  images.style.transform = `translateX(${current_x - start_x}px)`;
}

function touchEnd(event) {
  end_x = event.changedTouches[0].pageX;
  console.log(`end ${event.changedTouches[0].pageX}`);

  if (current < IMAGES_LENGTH && Math.abs(start_x - end_x) > IMAGES_WIDTH / 2) {
    next();
  } else if (current > 1 && Math.abs(start_x - end_x) > IMAGES_WIDTH / 2) {
    prev();
  } else {
    returnPos();
  }
}

images.addEventListener("touchstart", touchStart);
images.addEventListener("touchmove", touchMove);
images.addEventListener("touchend", touchEnd);
*/
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
const images = document.querySelector(".images");

let current = 0;
let start_x = 0;
let current_x = 0;
let end_x = 0;
let position = 0;

const IMAGE_WIDTH = images.querySelector("img").width;
const IMAGE_LENGTH = images.children.length - 1;

function back() {
  images.style.transform = `translateX(${IMAGE_WIDTH * current}px)`;
}

function prev() {
  if (current > 0) {
    current -= 1;
    images.style.transform = `translateX(-${IMAGE_WIDTH * current}px)`;
  }
}

function next() {
  if (current < IMAGE_LENGTH) {
    current += 1;
    images.style.transform = `translateX(-${IMAGE_WIDTH * current}px)`;
  }
}

function touchStart(event) {
  start_x = event.touches[0].pageX;
  console.log(start_x);
}

function touchMove(event) {
  current_x = event.touches[0].pageX;
  images.style.transform = `translateX(${current_x - start_x}px)`;
  console.log(current_x);
}

function touchEnd(event) {
  end_x = event.changedTouches[0].pageX;
  console.log(end_x);

  if (start_x > end_x && Math.abs(start_x - end_x) > IMAGE_WIDTH / 3) {
    console.log("next");
    next();
  } else if (start_x < end_x && Math.abs(start_x - end_x) > IMAGE_WIDTH / 3) {
    console.log("prev");
    prev();
  } else {
    console.log("back");
    back();
  }
}

images.addEventListener("touchstart", touchStart);
// images.addEventListener("touchmove", touchMove);
images.addEventListener("touchend", touchEnd);
