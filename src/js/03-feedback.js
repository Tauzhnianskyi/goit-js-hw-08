const throttle = require('lodash.throttle');
const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const onInput = throttle(event => {
  event.preventDefault();

  const refs = {
    email: formEl.elements['email'].value,
    message: formEl.elements['message'].value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(refs));
}, 500);

formEl.addEventListener('input', onInput);
const feedbackFormState = localStorage.getItem(STORAGE_KEY);
if (feedbackFormState) {
  const formStateValue = JSON.parse(feedbackFormState);
  formEl.elements['email'].value = formStateValue.email;
  formEl.elements['message'].value = formStateValue.message;
}

formEl.addEventListener('submit', onSumbit);

function onSumbit(e) {
  e.preventDefault();
  const refs = {
    email: formEl.elements['email'].value,
    message: formEl.elements['message'].value,
  };
  console.log(refs);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
