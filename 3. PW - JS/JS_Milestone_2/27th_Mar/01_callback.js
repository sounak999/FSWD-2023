function hof(fn) {
    fn();
}

hof(function demoFun() {
    console.log('executing...');
})

setTimeout(function f() {
    console.log('done!!')
}, 2000)