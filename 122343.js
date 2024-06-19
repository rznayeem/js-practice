// program to check if an object is an array

// function checkObject(arr) {
// check if arr is array
//   const result = Array.isArray(arr);

//   if (result) {
//     console.log(`[${arr}] is an array.`);
//   } else {
//     console.log(`${arr} is not an array.`);
//   }
// }

// const array = [1, 2, 3];

// call the function
// checkObject(array);
function canPay(array, number) {
  if (array.length === 0) {
    return 'put numbers';
  }
  let sum = 0;
  for (const arr of array) {
    sum = sum + arr;
  }
  if (sum >= number) {
    return true;
  } else {
    return false;
  }
}
console.log(canPay([1, 5, 5], 10));
