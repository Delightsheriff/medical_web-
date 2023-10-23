const form = document.querySelector("form");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const messageInput = document.getElementById("message");
const fullnameError = document.getElementById("fullnameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const dateError = document.getElementById("dateError");
const timeError = document.getElementById("timeError");
const messageError = document.getElementById("messageError");
const submitButton = document.getElementById("submitBtn");

const handleForm = (e) => {
  e.preventDefault();

  const fullname = fullnameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const date = dateInput.value;
  const time = timeInput.value;
  const message = messageInput.value;

  if (!fullname) {
    fullnameError.textContent = "Please enter your fullname!";
  } else {
    fullnameError.textContent = "";
  }
  if (!email) {
    emailError.textContent = "Please enter an email!";
  } else {
    emailError.textContent = ""; // Clear the error message
  }

  if (!phone) {
    phoneError.textContent = "Please enter a phone number!";
  } else {
    phoneError.textContent = ""; // Clear the error message
  }

  if (!date) {
    dateError.textContent = "Please select a date!";
  } else {
    dateError.textContent = ""; // Clear the error message
  }

  if (!time) {
    timeError.textContent = "Please select a time!";
  } else {
    timeError.textContent = ""; // Clear the error message
  }

  if (!message) {
    messageError.textContent = "Please enter a message!";
  } else {
    messageError.textContent = ""; // Clear the error message
  }

  if (email && phone && date && time && message) {
    // All fields are filled, you can submit the form or perform other actions
    console.log({ email, phone, date, time, message });

    emailInput.value = "";
    phoneInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
    messageInput.value = "";
  }
};

form.addEventListener("submit", handleForm);
