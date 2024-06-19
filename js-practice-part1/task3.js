function count_letters(vowels) {
  var counter = 0;

  for (var i = 0; i < vowels.length; i++) {
    var index_of_sub = vowels.indexOf('a', 'e', 'i', 'o', 'u', i);

    if (index_of_sub > -1) {
      counter++;
      i = index_of_sub;
    }
  }
  return counter;
}
const vowels = 'Programming';
console.log(count_letters(vowels));
