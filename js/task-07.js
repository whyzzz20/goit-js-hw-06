const controlSize = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

controlSize.addEventListener("input", onchangeText);

function onchangeText(params) {
  const fontSize = params.target.value + "px";
  textSize.style.fontSize = fontSize;
}