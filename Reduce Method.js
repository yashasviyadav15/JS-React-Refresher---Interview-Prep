const arr=[1,2,3,4]
const initialVal=1;

//v1
const sum = arr.reduce((acc,currentVal)=>acc+currentVal,initialVal)
console.log(sum,"with initial value")
//v2
const sum2=arr.reduce(summation)
function summation (a,b){
    return a+b
}
console.log(sum2,"without inital value")
