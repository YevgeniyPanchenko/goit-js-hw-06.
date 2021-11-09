

const emailRef = document.querySelector("[type=email]");
const passwordRef = document.querySelector("[type=password]");
const formRef = document.querySelector("form");
formRef.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget.elements;
  const email = form.email.value;
  const password = form.password.value;
  if (emailRef.value === "" || passwordRef.value === "") {
    alert("complete empty fields");
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
}