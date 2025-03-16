const str="hello there"

function reverseString(str){
    let rvrs=''
    for(i=str.length-1;i>=0;i--){
        rvrs+=str[i]
    }
    return rvrs;
}
console.log(reverseString(str))

//inbuilt
let revrs=str
.split(" ")
.reverse()
.join(" ")
console.log("hehhe",revrs)