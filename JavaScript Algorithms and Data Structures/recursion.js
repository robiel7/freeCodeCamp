//sum

function sum(arr, n) {
    let total = 0;
      for (let i = 0; i < n; i++) {
        total += arr[i];
      }
      return total;
  }

  function sum(arr, n) {
    if(n<= 0){
      return 0
    }
    else{
      return sum(arr, n-1) + arr[n-1]
    }
  }

  //product

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

/**
 * 
 We have defined a function called countdown with one parameter (n). 
 The function should use recursion to return an array containing the integers n through 1 based on the n parameter. 
 If the function is called with a number less than 1, the function should return an empty array. 
 For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
 Your function must use recursion by calling itself and must not use loops of any kind.
 */
  function countdown(n){
    if (n < 1) {
       return [];
     } else {
       const countArray = countdown(n - 1);
       countArray.unshift(n);
       return countArray;
     }
   }

   /**
    * 
We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 
The starting number will always be less than or equal to the ending number. 
Your function must use recursion by calling itself and not use loops of any kind. 
It should also work for cases where both startNum and endNum are the sam
    */

   function rangeOfNumbers(startNum, endNum) {
    if (endNum == startNum) {
        return [endNum];
      } else {
        const countArray = rangeOfNumbers(startNum , endNum-1);
        countArray.push(endNum);
        return countArray;
      }
 };
 