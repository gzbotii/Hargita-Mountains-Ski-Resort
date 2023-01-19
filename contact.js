const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");
const clearForm = document.querySelectorAll("input");
const successModal = document.getElementById("successModal");
const successMessageModal = successModal.querySelector(".success-message");
const closeButton = successModal.querySelector(".close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = validateInputs();
  if (isValid) {
    // display success message in modal
    successMessageModal.innerText =
      "Form successfully submitted. We will contact you shortly.";
    successModal.classList.add("show");
    // clear form inputs
    clearForm.forEach((input) => {
      input.value = "";
    });
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === "") {
    setError(username, "Name is required");
    return false;
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
    return false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    return false;
  } else {
    setSuccess(email);
  }

  return true;
};

// close modal when user clicks the "x" button
closeButton.addEventListener("click", () => {
  successModal.classList.remove("show");
});

// close modal when user clicks outside of it
successModal.addEventListener("click", (e) => {
  if (e.target === successModal) successModal.classList.remove("show");
});
