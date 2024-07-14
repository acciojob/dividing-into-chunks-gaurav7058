const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let str=[]
  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          let subArray=arr.slice(i,j+1)
		  if (subArray.length>0) {
			  let sum=0;
			  for (let t of subArray) {
			  	sum+=t;
			  }
			  if (sum<5) {
			      console.log(subArray)
			  	
			  }
		  	
		  }
      }
  }
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
