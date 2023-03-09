const heading = document.querySelector("h3");
const form = document.querySelector('form');
const email = document.getElementById("mail");
const password = document.getElementById("psw");
const submit = document.getElementById("submit-btn");

// click submit 
submit.addEventListener("click", () => {
    let emailVal = email.value;
    let passVal = password.value;

    if ((emailVal.includes("@")) && (passVal.length >= 8)) {
        heading.style.color = 'green';
        heading.innerText = "Valid email and password!";
    } else {
        heading.style.color = 'red';
        heading.innerText = "invalid email or password!";

        // prevent the form from submitting
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        })
    }
})