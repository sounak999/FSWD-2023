// const btnEle = document.querySelector(".btn");
const btnEle = document.getElementsByClassName("btn");
console.log(btnEle);

const randomNumberZeroToMax = (max) => {
    return Math.floor(Math.random() * max);
}

const randomColor = () => {
    const values = "0123456789abcdef";
    const len = values.length;
    let color = "#";

    for (let i = 0; i < 6; i++) {
        let idx = randomNumberZeroToMax(len);
        color += values[idx];
    }

    return color;
}

const changeBgColor = () => {
    const modifiedColor = randomColor();
    document.body.style.backgroundColor = modifiedColor;
    // console.log(modifiedColor); 
}

// it works for querySelector()
// btnEle.addEventListener("click", changeBgColor);

// it works for getElementsByClassName
btnEle[0].addEventListener('click', changeBgColor);