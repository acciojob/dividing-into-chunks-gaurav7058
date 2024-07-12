const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	for (let i = 0; i < n; i++) {
		let str=[];
		for (let j = i; j < n; j++) {
			str.push(arr[j])
		}	
    console.log(str)
	}
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
