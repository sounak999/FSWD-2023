let x = 5, y = 10

function swapValues(x, y) {
    console.log(`x --> ${x}`);
    console.log(`y --> ${y}`);

    let arr = [x, y] = [y, x] 
    console.log(`Array after swapping ${arr}`);
    console.log(`Modified x --> ${x}`);
    console.log(`Modified y --> ${y}`);
}

swapValues(x, y)