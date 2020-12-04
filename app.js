const buttonTranslate = document.querySelector("#btn-translate");
const input = document.querySelector("#ip")
const output = document.querySelector("#op")

function translate() {
  output.innerText = input.value;
}

buttonTranslate.addEventListener('click', translate)