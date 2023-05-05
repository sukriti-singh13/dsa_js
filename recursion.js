// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// //sumrange1
// //sumrange2
// //sumrange 3

// //return 1 , sumrange 1 out
// //2 +1 sumrange with 2 out
// //3+2+1 sumrange with 3 out
// //6 ans
// console.log(sumRange(3));

//collect odd values from an array

// function collectOddValues(arr) {
//   let result = [];
//   if (arr.length === 0) return result;

//   if (arr[0] % 2 !== 0) {
//     result.push(arr[0]);
//   }

//   result = result.concat(collectOddValues(arr.slice(1)));
//   return result;
// }

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]));

// explanation

// collectOddValues([1,2,3,4,5,6,7,8])
//[1].concat(collectOddValues([1,2,3,4,5,6,7))
//              [].concat(collectOddValues([3,4,5,6,7,8))

// function reverse(str) {
//   console.log(str.length);
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
//   // add whatever parameters you deem necessary - good luck!
// }
// console.log(reverse("awesome"));
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// isPalindrome using recursion


function isPalindrome(str) {


}

console.log(isPalindrome("strong"));
