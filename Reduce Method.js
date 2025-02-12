const arr=[1,2,3,4]
const initialVal=1;

//v1
const sum = arr.reduce((acc,currentVal)=>acc+currentVal,initialVal)
console.log(sum,"with initial value")
//output : 11

//v2
const sum2=arr.reduce(summation)
function summation (a,b){
    return a+b
}
console.log(sum2,"without inital value")
//output : 10

// /--------------------------------//
function sumAll(){
    return function (...args){
        return args.reduce((a,b)=>a+b,0)
    }
}

const sums=sumAll()
const total =sums(1,2,3)
console.log(total,"sum")

//Output : 6

// /--------------------------------//

// Outer Function - sumAll:

// The sumAll function doesn't take any arguments.
// When called, it returns another function. This returned function can take any number of arguments (indicated by the ...numbers rest parameter).
// Returned Function:

// The returned function uses the numbers rest parameter to collect all its arguments into an array.
// It then calculates the sum of all the numbers in the array using the reduce method:
// reduce takes a callback function (sum, num) => sum + num that accumulates a running total (sum) as it iterates through the array.
// The second argument, 0, is the initial value of sum.
// How It Works:

// When sumAll is invoked, it returns the inner function.
// This inner function is stored in the variable sumFunction.
// Now, sumFunction can be called with any number of arguments, and it will sum them up.
