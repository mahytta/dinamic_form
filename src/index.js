function addNewRegister() {
  const nameField = document.querySelector("input[name=\"userName\"]");
  const emailField = document.querySelector("input[name=\"userEmails\"]");
  const numberField = document.querySelector("input[name=\"userNumber\"]");

  const register = {
    name: nameField.value,
    email: emailField.value,
    age: numberField.value,
  };

  arrayRegisters.push(register);
  console.log(arrayRegisters);
}

const arrayRegisters = [];

const button = document.querySelector("button");

button.addEventListener("click", () => {
  addNewRegister();
});
