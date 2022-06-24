const content = document.querySelector(".post__content");
const images = content.querySelector(".content__images");
const imagesFooter = document.querySelector(".post__footer");

const IMAGE_WIDTH = images.querySelector("img").width;
// 이미지 가로 길이가 변하는 오류 발생, 390이랑 78 왔다갔다 함
const IMAGE_LENGTH = images.children.length - 1;

let start_x = 0;
let current_x = 0;
let end_x = 0;
let current = 0;
let position = 0;

function back() {
  images.style.transform = `translateX(${images.querySelector("img").width * current}px)`;
}

function prev() {
  if (current > 0) {
    current -= 1;
    images.style.transform = `translateX(-${images.querySelector("img").width * current}px)`;
  }
}

function next() {
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

function touch_end(event) {
  end_x = event.changedTouches[0].pageX;

  if (start_x > end_x && Math.abs(start_x - end_x) > images.querySelector("img").width / 3) {
    console.log("next");
    next();
  } else if (start_x < end_x && Math.abs(start_x - end_x) > images.querySelector("img").width / 3) {
    console.log("prev");
    prev();
  } else {
    console.log("back");
    back();
  }

  selectDot();
}

images.addEventListener("touchstart", touch_start);
// images.addEventListener("touchmove", touch_move);
images.addEventListener("touchend", touch_end);

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

function createDot() {
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

createDot();
