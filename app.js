const buttonTranslate = document.querySelector("#btn-translate");
const input = document.querySelector("#ip")
const output = document.querySelector("#op")

const url = 'https://api.funtranslations.com/translate/minion.json'

function translate() {

  var textInput = input.value

  function transUrl(textInput) {
    return url + '?'+ 'text=' + textInput
  }

  fetch(transUrl(textInput))
  .then(resp => resp.json())
  .then(json => {
    output.innerText = json.contents.translated
  })

}

buttonTranslate.addEventListener('click', translate)