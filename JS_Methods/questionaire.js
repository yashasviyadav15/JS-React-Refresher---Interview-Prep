//------------------- Question 1.-----------------------

//example input:
// 3   4  
// 4   3  
// 2   5  
// 1   3  
// 3   9  
// 3   3

// Pair lowest number in column 1 with lowest in column 2, and then the second lowest from col 1 and col 2, and so on.

// expected output:
// [1, 3]
// [2, 3]
// [3, 3]
// [3, 4]
// [3, 5]
// [4, 9]

const col1=[3,4,2,1,3,3];
const col2=[4,3,5,3,9,3];
const col3=[1,2,10];

const sortedcol1=col1.sort();
const sortedcol2=col2.sort();
const sortedcol3=col3.sort();
console.log(sortedcol3,"yy")

const result =sortedcol1.map((item,i)=>{
    return[item,sortedcol2[i]]
})
console.log(result,"question 1")

// ------------------end of question 1-----------------------

// ------------------question 2-----------------------
// unique array
const arr=[2,1,3,0,2,5,1]
// method 1
const sets=new Set(arr)
const res=[...sets]
console.log(res,"question 2")
//method 2
const res1=arr.filter((item,index)=>arr.indexOf(item)==index)
console.log(res1,"question 2a")

//method 3
const res2=arr.reduce((acc,item)=>{
    if(acc.includes(item)){
      //eat munch do nothing
    }
    else{
        acc.push(item)
    }
        return acc;
},[])
console.log(res2,"question 2b")

//############---------############ >>>>> Question 3 - sort array
const numberArray = [5, 8, 2, 5, 3, 8, 1, 7, 2, 4,5];
const rest=numberArray.filter((item,index)=>numberArray.indexOf(item)===index)
// console.log(rest)
const arrs=[]
for (i=0;i<numberArray.length;i++){
if(!arr.includes(numberArray[i])){
 arr.push(numberArray[i])
}
}
console.log(arrs)
