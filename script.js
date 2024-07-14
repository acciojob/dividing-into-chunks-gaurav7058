
const divide = (arr, n) => {
  // Write your code here
	let str=[]
  for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
          let subArray=arr.slice(i,j+1)
		  if (subArray.length>0) {
			  let sum=0;
			  for (let t of subArray) {
			  	sum+=t;
			  }
			  if (sum<n) {
			      console.log(subArray)
			  	
			  }
		  	
		  }
      }
  }
};

// const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
