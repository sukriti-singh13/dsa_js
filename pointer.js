//usually we are looking for a pair

//Q function called sumzero, takes sorted array return the first pair which adds upto 0

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[right] + arr[left];
    if (sum === 0) {
      return { right: arr[right], left: arr[left] };
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
let result = sumZero([-6, -5, -3, -1, 0, 1, 2, 5, 6]);
console.log(result);
