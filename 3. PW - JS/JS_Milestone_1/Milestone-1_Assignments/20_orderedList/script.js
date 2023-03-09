const btn = document.querySelector("button");
const list = document.getElementsByTagName('ol')[0];
const heading = document.querySelector('h2');

const arr = ['HTML and Semantics', 'Starting with CSS', 'Working Template', 'Mobile responsive webpages', 'Grid and Flex-box in CSS', 'Projects using HTML & CSS', 'Version Control and Git', 'Getting Started with JavaScript', 'Advance JavaScript', 'Working with DOM', 'Making Projects using HTML, CSS and JavaScript']

let counter = 0;
btn.addEventListener('click', () => {
    if (counter < arr.length) {
        list.innerHTML += `<li>${arr[counter]}</li>`
        counter++;
    } else {
        heading.innerText = 'All items have been added! 😀';
        heading.style.color = 'green';
    }
})