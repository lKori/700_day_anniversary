const userID = document.querySelector("#userID");
const userPW = document.querySelector("#userPW");
const loginBtn = document.querySelector("#loginBtn");

const USER_ID = "현지";
const USER_PW = "0628";

function successLogin() {
  console.log("login success");
  location.href = "./html/page01.html";
}

function tryLogin() {
  const submitID = userID.value;
  const submitPW = userPW.value;

  if (USER_ID === submitID && USER_PW === submitPW) {
    successLogin();
  } else {
    userID.value = "";
    userPW.value = "";
    alert("이걸 틀린거야?");
  }
}

loginBtn.addEventListener("click", tryLogin);
