const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let str=[]
  for (let i = 0; i < n; i++) {
      for (let j = i+1; j < n; j++) {
          if (arr[i]+arr[j]<=5) {
              str.push(arr[i],arr[j])
          }
      }
      console.log(str)
  }
};

// const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
