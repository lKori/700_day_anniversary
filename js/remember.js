const remember = document.querySelector("#remember");
const forget = document.querySelector("#forgetWrap");
const forgetYes = document.querySelector("#forgetYes");
const forgetNo = document.querySelector("#forgetNo");

function hiddenForget() {
  forget.classList.add("hidden");
}

function showForget() {
  forget.classList.remove("hidden");
}

function handleRemember() {
  showForget();
}

function clickYes() {
  console.log(forgetYes);
  alert("네가 그렇게 싸움을 잘해? 옥땅으로 따라와");
}

function clickNo() {
  console.log(forgetNo);
  hiddenForget();
}

remember.addEventListener("click", handleRemember);

forgetYes.addEventListener("click", clickYes);
forgetNo.addEventListener("click", clickNo);
