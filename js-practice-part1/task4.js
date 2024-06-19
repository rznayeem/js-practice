const str = 'I am learning Programming to become a programmer';
function largestWord(str) {
  const str2 = str.split(' ');
  let largest = str2[0];
  for (const large of str2) {
    if (large.length > largest.length) {
      largest = large;
    }
  }
  return largest;
}
console.log(largestWord(str));
