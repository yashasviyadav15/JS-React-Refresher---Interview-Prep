function checkSubarray(org, sub) {
    let orgnl = 0;
    let subl = 0;
    while (orgnl < org.length && subl < sub.length) {
      if (org[orgnl] === sub[subl]) {
        subl++;
      }
      orgnl++;
    }
    return subl === sub.length;
  }
  const original = [3, 5, 2, 1, 6, 7, 2];
  const subArray = [5, 1, 2];
  
  console.log(checkSubarray(original, subArray));
// #################################################### 2nd if order is  not important
  function isSubsequenceRegardlessOfOrder(original, subsequence) {
    const originalSet = new Set(original);
  
    for (const num of subsequence) {
      console.log("runn")
      if (!originalSet.has(num)) {
        console.log("bye")
  
        return false;
      }
      else{
        console.log("yay")
      }
    }
  console.log("hi")
    return true;
  }
  
  const originalArray = [5, 1, 22, 25, 6, -1, 8, 10];
  const subArrays = [1, 5, -1, 10,13];
  
  console.log(isSubsequenceRegardlessOfOrder(originalArray, subArrays)); // Output: true
  