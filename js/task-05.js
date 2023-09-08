const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
const changeText = (event) => {
  if (
    event.currentTarget.value.length ||
    !event.currentTarget.value.trim() === ""
  ) {
    outputText.textContent = event.currentTarget.value;
  } else {
    outputText.textContent = "Anonymous";
  }
};

inputText.addEventListener("input", changeText);