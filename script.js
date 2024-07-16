
const divide = (arr, n) => {
  // Write your code here
	let result = [];
  let tempArray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] <= n) {
      tempArray.push(arr[i]);
      currentSum += arr[i];
    } else {
      result.push(tempArray);
      tempArray = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Push the last subarray if it has any elements
  if (tempArray.length > 0) {
    result.push(tempArray);
  }

  return result 
};
 
const n = prompt("Enter n: ");
let arr=[1, 2, 3, 4, 1, 0, 2, 2];
alert(JSON.stringify(divide(arr, n)));
