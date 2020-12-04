const buttonTranslate = document.querySelector("#btn-translate");
const input = document.querySelector("#ip")
const output = document.querySelector("#op")

const url = 'https://api.funtranslations.com/translate/minion.json'

function errorHandler(error) {
  console.log("The following error occured: ", error)
  alert('It seems there is an error, please try again after some time.')
}

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
  .catch(errorHandler)
}

buttonTranslate.addEventListener('click', translate)