const content = document.querySelectorAll(".post__content");

let start_x = 0;
let current_x = 0;
let end_x = 0;
let current = 0;
let position = 0;

function back(images) {
  images.style.transform = `translateX(${images.querySelector("img").width * current}px)`;
}

function prev(images) {
  if (current > 0) {
    current -= 1;
    images.style.transform = `translateX(-${images.querySelector("img").width * current}px)`;
  }
}

function next(images, IMAGE_LENGTH) {
  if (current < IMAGE_LENGTH) {
    current += 1;
    images.style.transform = `translateX(-${images.querySelector("img").width * current}px)`;
  }
}

function touch_start(event) {
  start_x = event.touches[0].pageX;
}

function touch_move(event) {
  current_x = event.touches[0].pageX;
  console.log(current_x);

  images.style.transform = `translateX(${position}px)`;
  images.style.transitionDuration = "0ms";
}

function touch_end(event, images, IMAGE_LENGTH) {
  end_x = event.changedTouches[0].pageX;

  if (start_x > end_x && Math.abs(start_x - end_x) > images.querySelector("img").width / 3) {
    console.log("next");
    next(images, IMAGE_LENGTH);
  } else if (start_x < end_x && Math.abs(start_x - end_x) > images.querySelector("img").width / 3) {
    console.log("prev");
    prev(images);
  }
  // else {
  //   console.log("back");
  //   back(images);
  // }

  selectDot();
}

function clearDot() {
  const dots = document.querySelectorAll(".dots span");

  dots.forEach((element) => {
    element.classList.remove("select");
  });
}

function selectDot() {
  const dots = document.querySelectorAll(".dots span");

  for (let i = 0; i < dots.length; i++) {
    if (current == i) {
      clearDot();
      dots[i].classList.add("select");
    }
  }
}

function createDot(IMAGE_LENGTH, imagesFooter) {
  const dotsWrap = document.createElement("div");
  dotsWrap.setAttribute("class", "dots");

  for (let i = 0; i < IMAGE_LENGTH + 1; i++) {
    const dot = document.createElement("span");
    dot.innerText = "·";
    dotsWrap.appendChild(dot);
  }

  imagesFooter.appendChild(dotsWrap);

  selectDot();
}

content.forEach((element) => {
  const images = element.querySelector(".content__images");
  const imagesFooter = element.parentElement.querySelector(".post__footer");

  const IMAGE_WIDTH = images.querySelector("img").width;
  const IMAGE_LENGTH = images.children.length - 1;

  // createDot(IMAGE_LENGTH, imagesFooter);

  element.addEventListener("touchstart", (event) => {
    touch_start(event);
  });
  // element.addEventListener("touchmove", touch_move);
  element.addEventListener("touchend", (event) => {
    touch_end(event, images, IMAGE_LENGTH);
  });
});
