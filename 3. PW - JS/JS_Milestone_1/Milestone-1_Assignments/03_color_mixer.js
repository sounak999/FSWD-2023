let color1 = "red", color2 = "blue";

// if (color1 == "red" && color2 == "blue") {
//     console.log("purple");
// } else if (color1 === "red" && color2 === "yellow") {
//     console.log("orange");
// } else if (color1 === "blue" && color2 === "yellow") {
//     console.log("green");
// } else {
//     console.log("Invalid color combination");
// }

switch (color1) {
    case "red":
        switch (color2) {
            case "blue":
                console.log("purple");
                break;

            case "yellow":
                console.log("orange");
                break;

            default:
                console.log("Invalid color combination");
                break;
        }
        break;

    case "blue":
        switch (color2) {
            case "yellow":
                console.log("green");
                break;

            default:
                console.log("Invalid color combination");
                break;
        }
        break;

    default:
        console.log("Invalid color combination");
        break;
}