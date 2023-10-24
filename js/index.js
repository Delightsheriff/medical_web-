const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".tog");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

function validateForm(form) {
  const nameInput = form.querySelector("#name");
  const phoneInput = form.querySelector("#phone");
  const interestSelect = form.querySelector("#interest");
  const timeInput = form.querySelector("#time");
  const agreeCheckbox = form.querySelector("#agree");
  const nameError = form.querySelector("#nameError");
  const phoneError = form.querySelector("#phoneError");
  const interestError = form.querySelector("#interestError");
  const timeError = form.querySelector("#timeError");
  const agreeError = form.querySelector("#agreeError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    if (!nameInput.value) {
      nameError.textContent = "Please enter your name";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    if (!phoneInput.value) {
      phoneError.textContent = "Please enter your phone number";
      valid = false;
    } else {
      phoneError.textContent = "";
    }

    if (interestSelect.value === "") {
      interestError.textContent = "Please select a checkup type";
      valid = false;
    } else {
      interestError.textContent = "";
    }

    if (!timeInput.value) {
      timeError.textContent = "Please select a time";
      valid = false;
    } else {
      timeError.textContent = "";
    }

    if (!agreeCheckbox.checked) {
      agreeError.textContent = "You must agree to the terms and conditions";
      valid = false;
    } else {
      agreeError.textContent = "";
    }

    if (valid) {
      // All fields are valid, you can submit the form or perform other actions
      form.submit();
    }
  });
}

// Attach the validation function to a specific form by passing the form element to the function.
const specificForm = document.querySelector("#questions");
validateForm(specificForm);
