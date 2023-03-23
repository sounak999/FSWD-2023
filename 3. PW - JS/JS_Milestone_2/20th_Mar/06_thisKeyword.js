let obj = {
    x: 10, y: 20,
    display: function () {
        console.log(this.x);
    }

    // display: () => {
    //     console.log(this.x);
    // }
}

obj.display()