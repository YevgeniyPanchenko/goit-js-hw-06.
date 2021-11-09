function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");

changeColorBtn.addEventListener("click", onColorChange);

function onColorChange() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  colorName.textContent = `${color}`;
}