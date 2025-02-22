//memoization in JS
/*
suppose i have a function which does complex comutation and provides results taking significant amount of time, here that function is slowfunction which calculates the sum of input running the for loop 1000 times, since i have same  input twice, 5, it would be better to cache the computation when it runs the first time and when called second time return the result from cache instead of again running the loop 1000 times.

url:
https://file.notion.so/f/f/b3d12364-76c0-4ec6-96c2-1b3d5d9932f0/72c5edc7-a244-4401-b75a-f0a28e5e491b/Memoization_with_Closures.pdf?table=block&id=1985c858-f9ac-80cf-a034-e818528df9ef&spaceId=b3d12364-76c0-4ec6-96c2-1b3d5d9932f0&expirationTimestamp=1739412000000&signature=iuwj1QA7hZ_-wgIzDDe6maN30GxaHz-wXdm67--yzck&downloadName=Memoization+with+Closures.pdf

// regarding args
function myFunc(...args) {
    console.log(args,"args");
    console.log(...args,"...args");

}

myFunc(1, 2, 3); 
// Output: 
// (3) [1, 2, 3] args
// 1 2 3 ...args
When to Use JSON.stringify(args)?
When storing function results in a cache.
When using arrays or objects as keys in an object.
*/

function memoize(callback) {
    const cache = {}; 
    return function (...args) {
        console.log(cache,"cache")
        const keys = args;
        const key = JSON.stringify(args); // Creating a unique key for arguments
        console.log(key,"key",keys)
        if (cache[key] !== undefined) {
            console.log("Fetching from cache:", key);
            return cache[key]; // Step 3: Return cached result if available
        }
        
        console.log("Computing result:", key);
        console.log(...args,"...args",args)
        const result = callback(...args); // Step 3: Compute and store result
        cache[key] = result;
        return result;
    };
}

// Example usage
const slowFunction = (num) => {
    let result = 0;
    for (let i = 0; i < 1000; i++) {
        result += num;
    }
    return result;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computes and caches the result
console.log(memoizedFunction([5])); // Fetches from cache
console.log(memoizedFunction(10)); // Computes and caches the result

// o/p:
// {} cache
// [5] key (1) [5]
// Computing result: [5]
// 5 ...args (1) [5]
// 5000
// {[5]: 5000} cache
// [5] key (1) [5]
// Fetching from cache: [5]
// 5000
// {[5]: 5000} cache
// [10] key (1) [10]
// Computing result: [10]
// 10 ...args (1) [10]
// 10000