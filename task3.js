const laptop = 35000;
const tablet = 15000;
const mobile = 20000;
function calculateElectronicsBudget(laptop, tablet, mobile) {
  if (
    typeof laptop !== 'number' ||
    typeof tablet !== 'number' ||
    typeof mobile !== 'number'
  ) {
    return 'please provide number';
  } else if (laptop < 0 || tablet < 0 || !mobile < 0) {
    return 'please provide positive value';
  } else {
    const totalCost = laptop + tablet + mobile;
    return totalCost;
  }
}
console.log(calculateElectronicsBudget(laptop, tablet, mobile));
