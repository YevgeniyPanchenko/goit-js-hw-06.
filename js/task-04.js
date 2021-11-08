const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

decrement.addEventListener('click', onDecrementClick);
increment.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counterValue -= 1;
    value.textContent = counterValue;
}
function onIncrementClick() {
    counterValue += 1;
    value.textContent = counterValue
}
