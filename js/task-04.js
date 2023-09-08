const btnCountPlus = document.querySelector('button[data-action="increment"]');
const btnCountMinus = document.querySelector('button[data-action="decrement"]');
const initialValue = document.querySelector("#value");
let counterValue = 0;

btnCountPlus.addEventListener("click", function () {
  counterValue += 1;
  initialValue.textContent = counterValue;
});
btnCountMinus.addEventListener("click", function () {
  counterValue -= 1;
  initialValue.textContent = counterValue;
});