const button = document.getElementById("notifyMe");
const input = document.getElementById("emailInput");
const empty = document.getElementById("input-message");
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button.addEventListener("click", validateEmail);

function validateEmail(e) {
    if (input.value == "") {
        empty.innerText = "Whoops! It looks like you forgot to add your email";
    } else if (re.test(String(input.value).toLowerCase()) == false) {
        empty.innerText = "Please provide a valid email address"
    }
    e.preventDefault();
}

const face = document.getElementById("face");

face.addEventListener('mouseover', function() { 
    face.setAttribute('style','-webkit-filter: brightness(5.0)'); 
}, false);

face.addEventListener('mouseout', function() { 
    face.setAttribute('style','-webkit-filter: brightness(1.0)'); 
}, false);

const twit = document.getElementById("twit");

twit.addEventListener('mouseover', function() { 
    twit.setAttribute('style','-webkit-filter: brightness(5.0)'); 
}, false);

twit.addEventListener('mouseout', function() { 
    twit.setAttribute('style','-webkit-filter: brightness(1.0)'); 
}, false);

const insta = document.getElementById("insta");

insta.addEventListener('mouseover', function() { 
    insta.setAttribute('style','-webkit-filter: brightness(5.0)'); 
}, false);

insta.addEventListener('mouseout', function() { 
    insta.setAttribute('style','-webkit-filter: brightness(1.0)'); 
}, false);

