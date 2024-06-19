const numbers = [5, 6, 11, 12, 98, 5];

function countNumber(array) {
  let count = 0;
  for (const arr of array) {
    if (arr == 25) {
      count++;
    }
  }
  return count;
}
console.log(countNumber(numbers));
