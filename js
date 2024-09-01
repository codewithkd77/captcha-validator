const captchaTextElement = document.getElementById('captcha-text');
const captchaInput = document.getElementById('captcha-input');
const validateButton = document.getElementById('validate-button');
const refreshButton = document.getElementById('refresh-button');
const errorMessage = document.getElementById('error-message');

function generateCaptchaText() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let captchaText = '';
  for (let i = 0; i < 6; i++) {
    captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captchaText;
}

function refreshCaptcha() {
  const captchaText = generateCaptchaText();
  captchaTextElement.textContent = captchaText;
  captchaInput.value = '';
  errorMessage.textContent = '';
}

function validateCaptcha() {
  const userCaptcha = captchaInput.value;
  const correctCaptcha = captchaTextElement.textContent;
  if (userCaptcha === correctCaptcha) {
    errorMessage.textContent = 'Captcha validated successfully!';
    errorMessage.style.color = 'green';
  } else {
    errorMessage.textContent = 'Invalid captcha. Please try again.';
    errorMessage.style.color = 'red';
  }
}

refreshButton.addEventListener('click', refreshCaptcha);
validateButton.addEventListener('click', validateCaptcha);
captchaInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    validateCaptcha();
  }
});

refreshCaptcha();
