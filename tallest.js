const heights = [66, 68, 72, 78, 99];
let max = heights[0];
for (const maxHeight of heights) {
  if (maxHeight > max) {
    max = maxHeight;
  }
}
console.log(max);
