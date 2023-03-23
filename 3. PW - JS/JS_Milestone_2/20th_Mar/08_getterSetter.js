class Student {
    #name;
    #rollNo = 0;

    setName(newName) {
        this.name = newName
    }

    getName() {
        console.log(`Name of the Student is ${this.name}`);
    }

    set studentRollNo(roll) {
        if (roll < 1) {
            return ;
        }

        this.#rollNo = roll;
    }

    get studentRollNo() {
        console.log(`Student's roll no is ${this.#rollNo}`);
    }
}

const s1 = new Student();
s1.setName(`Sounak`);
s1.getName();

s1.studentRollNo;
s1.studentRollNo = 23;
s1.studentRollNo;