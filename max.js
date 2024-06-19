const jim = 85;
const kim = 88;
const tim = 94;
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
const max = maxOfThree(jim, kim, tim);
console.log('maximum number of three', max);
