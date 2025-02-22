// 1. Anagram Check
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const charMap = {};
    
    for (let char of str1.toLowerCase()) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    
    for (let char of str2.toLowerCase()) {
        if (!charMap[char]) return false;
        charMap[char]--;
    }
    
    return true;
}

// 2. Array Flatten - Convert nested array to single level
function flattenArray(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

// 3. Find duplicates in array
function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}

// 4. Reverse string without using built-in methods
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 5. Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 6. Check if string is palindrome
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

// 7. Find the largest sum of consecutive numbers
function maxSubArraySum(arr, num) {
    if (num > arr.length) return null;
    
    let maxSum = 0;
    let tempSum = 0;
    
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    
    tempSum = maxSum;
    
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
}

// 8. Find first non-repeating character
function firstNonRepeatingChar(str) {
    const charMap = {};
    
    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    
    for (let char of str) {
        if (charMap[char] === 1) return char;
    }
    
    return null;
}

// 9. Merge and sort two arrays
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

// 10. Check if two strings are rotations of each other
function areRotations(str1, str2) {
    if (str1.length !== str2.length) return false;
    return (str1 + str1).includes(str2);
}

// Example usage:
console.log(isAnagram('listen', 'silent')); // true
console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]
console.log(findDuplicates([1, 2, 3, 2, 4, 1])); // [2, 1]
console.log(reverseString('hello')); // olleh
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
console.log(firstNonRepeatingChar('leetcode')); // 'l'
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(areRotations('hello', 'llohe')); // true
