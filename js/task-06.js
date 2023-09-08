const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", onchangeFocus);

function onchangeFocus(element) {
  const dataLength = inputText.dataset.length;
  const inputTextLength = inputText.value.length;

  if (inputTextLength === Number(dataLength)) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
}