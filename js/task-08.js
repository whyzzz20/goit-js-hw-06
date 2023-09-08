const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };

    console.log(data);
    formElement.reset();
  }
}