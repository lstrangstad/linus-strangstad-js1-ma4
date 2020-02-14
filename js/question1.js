const myForm = document.querySelector("#contactForm");

myForm.addEventListener("submit", validator);
function validator(event) {
  event.preventDefault();
  const nameInput = document.querySelector("#firstName");
  const nameError = document.querySelector(".error");
  const nameValue = nameInput.value;

  if (validateName(nameValue) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
}

function validateName(value) {
  const trimmedValue = value.trim();
  if (trimmedValue.length > 2) {
    return true;
  } else {
    return false;
  }
}
