function mergeSort(arr) {
    // Base case: If the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
        console.log(arr,"ret");
      return arr;
    }
  
    // Step 1: Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid); // Left half
    const right = arr.slice(mid); // Right half
  
    // Step 2: Recursively sort the two halves
    console.log(left,"recursion!!!",right)
    const sortedLeft = mergeSort(left); // First recursive call
    const sortedRight = mergeSort(right); // Second recursive call
  
    // Step 3: Merge the sorted halves
    console.log("Merge Merge Merge")
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    console.log("inside",left,right)
    const result = [];
    let i = 0, j = 0;
  
    // Compare elements from both arrays and add the smaller one to the result
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add any remaining elements from the left array
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    // Add any remaining elements from the right array
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  console.log("returned res",result)
    return result;
  }
  
  // Example usage
  const arr = [3,7,5,1,2];
  const sortedArray = mergeSort(arr);
  console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]