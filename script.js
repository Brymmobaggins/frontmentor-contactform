/** @format */

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInput();
});

const firstname = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const email = document.getElementById("email");
const messageSubject = document.getElementById("message-subject");
const consent = document.getElementById("consent");

function checkInput() {
  const firstNameValue = firstname.value.trim();
  const lastNameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const messageSubjectValue = messageSubject.value.trim();
  const consentOption = consent.checked;

  if (firstNameValue == "") {
    setErrorFor(firstname, "This field is required");
  } else if (!lastNameValue) {
    setErrorFor(lastname, "This field is required");
  } else if (!emailValue) {
    setErrorFor(email, "This field is required");
  } else if (!messageSubjectValue) {
    setErrorFor(messageSubject, "This field is required");
  } else if (!consentOption) {
    setErrorFor(
      consent,
      "to submit this form, please consent to being contacted"
    );
  } else {
    // show success messages box
    setSuccess();

    // clear input after submit form
    clearInput();
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess() {
  const sucessDiv = document.createElement("div");
  sucessDiv.setAttribute("class", "success");

  const iconMessage = document.createElement("p");
  iconMessage.textContent = "Message Sent!";

  const congratulationMessage = document.createElement("small");
  congratulationMessage.textContent =
    "Thanks for complete the form, will be in touch soon!";

  form.parentElement.appendChild(sucessDiv);
  sucessDiv.append(iconMessage, congratulationMessage);

  const main = document.querySelector("main");
  const body = document.querySelector("body");

  body.insertBefore(sucessDiv, main);
}

// function to clear input
function clearInput() {
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  messageSubject.value = "";
  consent.value = "";
//   consent.
}
// setSuccess()