const heights2 = [167, '190', 120, 165, 137];
function minHeights(heights2) {
  let heights = heights2[0];
  for (const height of heights2) {
    if (height < heights) {
      heights = height;
    }
  }
  return heights;
}
console.log(minHeights(heights2));
