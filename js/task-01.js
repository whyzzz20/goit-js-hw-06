const liElem = document.querySelectorAll(".item");

console.log(`Number of categories: ${liElem.length}`);
liElem.forEach((element) => {
  console.log("");
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});