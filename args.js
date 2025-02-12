function sumAll(){
    return function (...args){
        return args.reduce((a,b)=>a+b,0)
    }
}

const sum=sumAll()
const total =sum(1,2,3)
console.log(total)

//6
function myFunc(...args) {
    console.log(args,"args");
    console.log(...args,"...args");

}

myFunc(1, 2, 3); 
// Output: 
// (3) [1, 2, 3] args
// 1 2 3 ...args