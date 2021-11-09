const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSize.addEventListener('click', onChangeSize);

function onChangeSize() {
    text.style.fontSize = `${fontSize.value}px`;
}