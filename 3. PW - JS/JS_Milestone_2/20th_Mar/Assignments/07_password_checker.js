class User {
    constructor(username, password) {
        this.username = username
        this.setPassword(password)
    }

    getPassword() {
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

        if (regex.test(this.password)) {
            return this.password.replace(/./g, '*')
        }

        return 'Invalid Password'
    }

    setPassword(newPassword) {
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

        if (regex.test(newPassword)) {
            this.password = newPassword
        } else {
            console.error('Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.')
        }
    }
}

const user = new User("Sounak", "pass123")
console.log(user.getPassword())

user.setPassword("Password")

user.setPassword("Password999")
console.log(user.getPassword())
