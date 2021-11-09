const input = document.querySelector('#validation-input');
input.addEventListener('blur', onFocusLost);
function onFocusLost() {
    if (input.value.length >= input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
   } else {
     input.classList.add("invalid");
   }
    
}