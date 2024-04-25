import throttle from 'lodash/throttle';
const form = document.querySelector('form.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const INPUT_STORAGE_KEY = 'already-written'
const btn = document.getElementById('button')

function saveLocal() {
    const emailValue = email.value;
    const textValue = message.value;
    localStorage.setItem('key1', emailValue);
    localStorage.setItem('key2', textValue)
}


const throttledSaveLocal = throttle(saveLocal, 500);
form.addEventListener("input", throttledSaveLocal)

function printValue() {
    console.log(email.value);
    console.log(message.value);
    localStorage.removeItem('key1');
    localStorage.removeItem('key2');l
}

btn.addEventListener("click", printValue);


function getLocal() {
    const localValue =localStorage.getItem('key1');
    const localValue1 = localStorage.getItem('key2');
    let email.value = localValue;
    let message.value = localValue1;
    
}

const throttledGetLocal = throttle(getLocal, 600);
window.addEventListener("load", throttledGetLocal);