let rows = 6;

for(let i=0; i<rows; i++) {
    let cols = rows-i;
    let str = "";

    for (let j = 0; j < cols; j++) {
        str += "* ";
    }

    console.log(str);
}