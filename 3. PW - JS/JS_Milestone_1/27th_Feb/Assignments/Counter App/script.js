const decrementBtn = document.querySelector("#decrement")
const resultSection = document.getElementById("result")
const incrementBtn = document.querySelector("#increment")
const resetBtn = document.getElementById("reset")


// decrease value
decrementBtn.addEventListener("click", () => {
    let value = Number(resultSection.innerText);

    if (value === 0) {
        alert("Negative values are not allowed");
    } else {
        resultSection.innerText = value - 1;
    }
})

// increase value
incrementBtn.addEventListener("click", () => {
    let value = Number(resultSection.innerText);

    if (value === 10) {
        alert("10+ values aren't allowed");
    } else {
        resultSection.innerText = value + 1;
    }
})

// reset button 
resetBtn.addEventListener("click", () => {
    resultSection.innerText = 0;
})