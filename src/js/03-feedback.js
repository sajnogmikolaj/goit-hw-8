import throttle from 'lodash.throttle';
const form = document.querySelector('form.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const INPUT_STORAGE_KEY = 'already-written'



email.value = localStorage.setItem('feedback-form-state', email);
message.value = localStorage.setItem('feedback-form-state', text);
form.onchange = function () {
    const key = form.value;
    localStorage.setItem('key', key)
    form.value = localStorage.getItem("key")
}
// throttle(data => {
//     localStorage.setItem(INPUT_STORAGE_KEY, text);
//   }, 1000)
//     ;


// throttle(data) =>{
//  getValue() {
//     let emailValue = document.getElementById('email').value;
//     let messageValue = document.getElementById('text').value;
//     localStorage.setItem(emailValue, email);
//     localStorage.setItem(messageValue, message);
// }
// } 1000