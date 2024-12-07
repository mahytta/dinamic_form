function addNewRegister() {
  const nameField = document.querySelector("input[name=\"userName\"]");
  const emailField = document.querySelector("input[name=\"userEmails\"]");
  const numberField = document.querySelector("input[name=\"userNumber\"]");

  const register = {
    name: nameField.value,
    email: emailField.value,
    age: numberField.value,
  };
  const formInputs = document.querySelectorAll("input");
  console.log(formInputs);
  if (!validateNameField(register.name)) {
    return;
  }
  if (!validateEmailField(register.email)) {
    return;
  }
  if (!validateAgeField(register.age)) {
    return;
  }
  arrayRegisters.push(register);
  console.log(arrayRegisters);
  showUsers();
}

function validateNameField(name) {
  if (name === "") {
    alert("El nombre introducido es incorrecto");
    return false;
  }
  return true;
}
function validateEmailField(email) {
  if (!email.includes("@")) {
    alert("El valor introducido no es un email");
    return false;
  }
  return true;
}
function validateAgeField(age) {
  if (isNaN(parseInt(age))) {
    alert("Aquí debe introducir un número");
    return false;
  }
  return true;
}

const arrayRegisters = [];

const button = document.querySelector("button");

button.addEventListener("click", () => {
  addNewRegister();
});

const newUser = document.getElementById("users");

function showUsers() {
  let usersHtml = "";

  for (let index = 0; index < arrayRegisters.length; index++) {
    const user = arrayRegisters[index];

    usersHtml += `
    <div class="card">
      <div class="card-body">
      <h6 class="mb-0">Segundo Usuario</h6>
        <form>
          <div class="mb-3">
            <input type="text" readonly value="${user.name}" class="form-control" name="userName" placeholder="Nombre">
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" name="userEmails" placeholder="Correo">
          </div>
          <div class="mb-3">
            <input type="number" class="form-control" name="userNumber" placeholder="Edad">
          </div>
        </form>
      </div>
    </div>`;
  }

  newUser.innerHTML = usersHtml;
}
