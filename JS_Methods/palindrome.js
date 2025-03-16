// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     let cleaned = '';
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i].toLowerCase();
//         if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
//             cleaned += char;
//         }
//     }

//     // Compare characters from start and end
//     let left = 0;
//     let right = cleaned.length - 1;
//     while (left < right) {
//         if (cleaned[left] !== cleaned[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// // Test the function
// const inputString = "A man, a plan, a canal, Panama!";
// if (isPalindrome(inputString)) {
//     console.log(`"${inputString}" is a palindrome.`);
// } else {
//     console.log(`"${inputString}" is not a palindrome.`);
// }

function isPalindrome(str){
    let clean='';
    for(i=0;i<str.length;i++){
        if((str[i]>='a'&&str[i]<='z')||(str[i]>='0'&&str[i]<='9')){
            clean+=str[i]
        }
    }
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(clean[left]!==clean[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("heheh"))