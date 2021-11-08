const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', onInputChange);
function onInputChange() {
    if (input.value !== '') {
        output.textContent = input.value
    }
    else {
        output.textContent = "Anonymous";
    }
}