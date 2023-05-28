const nameInput = document.getElementById('input-name');
const nameErrorMessage = document.getElementById('error-message-name');
const emailInput = document.getElementById('input-email');
const emailErrorMessage = document.getElementById('error-message-email');
const subjectInput = document.getElementById('input-subject');
const subjectErrorMessage = document.getElementById('error-message-subject');
const messageInput = document.getElementById('input-message');
const messageErrorMessage = document.getElementById('error-message-message');
const submitButton = document.getElementById('submit-button');

const validEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function showError(inputType) {
  if (inputType === 'name') {
    nameErrorMessage.style.display = 'block';
  }
  if (inputType === 'email') {
    emailErrorMessage.style.display = 'block';
  }
  if (inputType === 'subject') {
    subjectErrorMessage.style.display = 'block';
  }
  if (inputType === 'message') {
    messageErrorMessage.style.display = 'block';
  }
}

function hideErrors() {
  nameErrorMessage.style.display = 'none';
  emailErrorMessage.style.display = 'none';
  subjectErrorMessage.style.display = 'none';
  messageErrorMessage.style.display = 'none';
}

function validateEmail(email) {
  return email.match(validEmailRegex);
}

function validateInputs() {
  hideErrors();
  let hasError = false;
  if (nameInput.value.length < 5) {
    showError('name');
    hasError = true;
  }
  if (!validateEmail(emailInput.value)) {
    showError('email');
    hasError = true;
  }
  if (subjectInput.value.length < 15) {
    showError('subject');
    hasError = true;
  }
  if (messageInput.value.length < 25) {
    showError('message');
    hasError = true;
  }
  if (!hasError) {
    console.log('Submit form');
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  validateInputs(event);
});
