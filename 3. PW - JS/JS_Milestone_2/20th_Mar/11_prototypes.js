let myHeros = ['Thor', 'Spider-Man']
let heroPower = {
    thor: 'hammer',
    spiderMan: 'sling'
}

Object.prototype.sounak = function () {
    console.log(`Sounak is present in all objects`);
}

Array.prototype.heySounak = function () {
    console.log(`Sounak says hello to array`);
}


myHeros.sounak();
heroPower.sounak();


myHeros.heySounak();
// heroPower.heySounak();


const User = {
    name: 'firstName lastName',
    email: 'name@mail.com'
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAassistant = {
    makeAssignment: `JS Assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}
console.log(TAassistant.isAvailable);

Teacher.__proto__ = User 
console.log(Teacher.name);

Object.setPrototypeOf(TeachingSupport, Teacher)


String.prototype.truelength = function () {
    console.log(`True length is ${this.trim().length}`);
}

"sounak   saha  ".truelength()
"Anurag    ".truelength()