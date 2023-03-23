let obj = {
    x: 10,
    fun() {
        console.log(this.x);
        y = {
            x: 50,
            gun: () => {
                console.log(this.x);
            }
        }
        y.gun()
    }
}

obj.fun()