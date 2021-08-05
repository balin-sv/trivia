let user = "";
let showUser = "";
let showResult = "";

function setName() {
  user = document.querySelector(".name-input").value.toUpperCase();
  sessionStorage.setItem("name", user);
  document.querySelector(".name-input").value = "";
}

function getName() {
  showUser = sessionStorage.getItem("name");
  document.querySelector(".name").textContent = showUser;
  console.log(showUser);
}

function calculateResult() {
  let result = 0;
  let questions = document.querySelectorAll(".question");
  for (let i = 0; i < questions.length; i++) {
    let answer = questions[i].querySelector("input[type='radio']:checked");
    if (answer) {
      result = result + +answer.value;
    }
  }
  sessionStorage.setItem("result", result);
}

function getResult() {
  showResult = sessionStorage.getItem("result");
  document.querySelector(".result").textContent = showResult;
  if (showResult > 1) {
    document.querySelector(".result-text").textContent =
      "Wow! Sabes mucho! Es la hora de ir!";
  } else {
    document.querySelector(".result-text").textContent =
      "Es la hora de ir y conocer el lugar!";
  }
}

function resetGame() {
  sessionStorage.clear();
}
