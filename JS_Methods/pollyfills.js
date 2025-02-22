//map
Array.prototype.mapit=function(fn){
    let temp=[]
    for(i=0;i<this.length;i++){
temp.push(fn(this[i]))
    }
    return temp;
}

const arr=[1,2,3]
const dbl=(x)=>{
return x*x;
}
const maps=arr.mapit(dbl)
console.log(maps,"maps")
//filter
Array.prototype.filterit=function(fn){
    let temp=[]
    for(i=0;i<this.length;i++){

        if(fn(this[i])){
        temp.push(this[i])
        }
    }
    return temp;
}
const checkodd=(x)=>{
return x%2
}
const res=arr.filterit(checkodd)
console.log(res,"filter")