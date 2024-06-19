const names = ['rahim', 3, 'rafi', 'ron', 'rashed'];
function smallestName(names) {
  let smallest = names[0];
  for (const name of names) {
    if (typeof name !== 'string') {
      return 'please provide your name as string';
    }
    if (name.length < smallest.length) {
      smallest = name;
    }
  }
  return smallest;
}
console.log(smallestName(names));
