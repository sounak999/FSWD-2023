const heading = document.getElementsByTagName("h1")[0];
const btn = document.getElementsByTagName("button")[0];
const initText = heading.innerText;

btn.addEventListener("click", () => {
    if (heading.innerText === initText) {
        heading.innerText = "PW Skills"
    } else {
        heading.innerText = initText;
    }
});