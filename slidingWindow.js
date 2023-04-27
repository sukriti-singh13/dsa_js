// paatern invoves creating window, useful for keeping track of subsets in arr or string

//Q maxSubarraySum which accepts an array and number n
//calculate the maximum sum of n consecutive elements

function maxSubarraySum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  if (num > arr.length) return 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 5, 11, 10, 3], 2));
