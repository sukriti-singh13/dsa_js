function countUnique(arr) {
  let left = 0;
  let right = left + 1;
  let count = 0;
  while (right < arr.length) {
    if (!(arr[right] === arr[left])) {
      count++;
      left = right;
    }
    right++;
  }
  return count;
}
console.log(countUnique([-1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5]));
