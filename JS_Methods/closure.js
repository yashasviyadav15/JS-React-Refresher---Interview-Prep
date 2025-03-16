//############---------############ >>>>> example - 1
function outer() {
    setTimeout(function() {
        console.log("lol",data); // Accesses `data` from the outer scope
    }, 0);
    console.log("hehe",)
        const data = "Hi world"; // `data` is in the `outer` scope

}
outer();
//############---------############ >>>>> example -2 //

function outer() {
    const message = "Hello, world!"; // `message` is in the `outer` scope
    function inner() {
        console.log(message); // `inner` accesses `message` from the outer scope
    }
    return inner; // Return the `inner` function
}

const innerFunc = outer(); // `outer` finishes running, but `innerFunc` remembers `message`
innerFunc(); // Call the `inner` function


//############---------############ >>>>> Example - 3
function createCounter() {
    let count = 0; // `count` is private (encapsulated)
    return function() {
        count++; // Increment the private `count`
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


//############---------############ >>>>> Example - 4
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // What does this print?
    }, 1000);
}
//o/p 4 4 4 ???why