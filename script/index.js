var $form = document.querySelector(".form");
var $firstName = document.getElementById("firstName-input");
var $errorFirst = document.querySelector(".error-first");
var $lastName = document.getElementById("lastName-input");
var $errorLast = document.querySelector(".error-last");
var $emailInput = document.getElementById("email-input");
var $errorEmail = document.querySelector(".error-email");
var $passwordInput = document.getElementById("password-input");
var $errorPassword = document.querySelector(".error-password");
var $btn = document.querySelector(".button");
let $bark = document.querySelector(".bark");
// console.log($form);

var $resultFirst = document.getElementById("text1");
var $resultLast = document.getElementById("text2");
var $resultEmail = document.getElementById("text3");

$firstName.addEventListener("input", function (e) {
  var $firstValue = e.target.value;
  if ($firstValue.length < 4) {
    $errorFirst.classList.remove("error-first--hidden");
  } else if ($firstValue.length >= 4) {
    $errorFirst.classList.add("error-first--hidden");
  }
});
$lastName.addEventListener("input", function (e) {
  var $lastValue = e.target.value;
  if ($lastValue.length < 4) {
    $errorLast.classList.remove("error-last--hidden");
  } else if ($lastValue.length >= 4) {
    $errorLast.classList.add("error-last--hidden");
  }
});
$emailInput.addEventListener("input", function (e) {
  var $emailValue = e.target.value;
  if ($emailValue.length < 8) {
    $errorEmail.classList.remove("error-email--hidden");
  } else if ($emailValue.length >= 8) {
    $errorEmail.classList.add("error-email--hidden");
  }
});
$passwordInput.addEventListener("input", function (e) {
  var $passwordValue = e.target.value;
  if ($passwordValue.length < 6) {
    $errorPassword.classList.remove("error-password--hidden");
  } else if ($passwordValue.length >= 6) {
    $errorPassword.classList.add("error-password--hidden");
  }
});

// $form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   $resultFirst.textContent = $firstName.value;
//   $resultLast.textContent = $lastName.value;
//   $resultEmail.textContent = $emailInput.value;
// });

var first = [];

function seeName(array) {
  $bark.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let text = document.createElement("p");
    text.textContent = array[i];

    $bark.append(text);
  }
}

seeName(first);

function clickFunction() {
  first.push($firstName.value);
  $firstName.value = "";
  $lastName.value = "";
  $emailInput.value = "";
  $passwordInput.value = "";
  seeName(first);
}

$btn.addEventListener("click", clickFunction);
// $form.addEventListener("submit", clickFunction);
