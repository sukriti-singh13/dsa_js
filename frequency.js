// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     let squaredUndex = arr2.indexOf(arr1[i] ** 2);
//     if (squaredUndex === -1) {
//       return false;
//     }
//     arr2.splice(squaredUndex, 1);
//     console.log(arr2);
//   }

//   return true;
// }

//Refactored

// function same(arr1, arr2) {
//   let obj1 = {};
//   let obj2 = {};
//   for (let i = 0; i < arr1.length; i++) {
//     let char = arr1[i];
//     obj1[char] = ++obj1[char] || (obj1[char] = 1);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     let char = arr2[i];
//     obj2[char] = ++obj2[char] || (obj2[char] = 1);
//   }
//   for (let key in obj1) {
//     console.log(obj2[key ** 2]);
//     if (!(key ** 2 in obj2)) {
//       return false;
//     }
//     if (obj2[key ** 2] !== obj1[key]) {
//       // obj2[key ** 2] accesses the property in obj2 whose key is the squared value of key.
//       return false;
//     }
//   }
//   return true;
// }

// let result = same([2, 3, 4, 3, 9], [4, 9, 9, 8, 16]);
// console.log(result);
// function sameFrequency(arr1, arr2) {
//   // if (arr1.length !== arr2.length) return false;
//   // // good luck. Add any arguments you deem necessary.
//   let frequency1 = {};
//   let frequency2 = {};
//   for (let i = 0; i < arr2.length; i++) {
//     console.log("running");
//     let count = arr1[i];
//     frequency1[count] = ++frequency1[count] || (frequency1.count = 1);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     let count = arr2[i];
//     frequency2[count] = ++frequency2[count] || (frequency2.count = 1);
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (!(frequency1[i] === frequency2[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(sameFrequency(3413, 4232));
function areThereDuplicates() {
  const argsArray = [...arguments];
  console.log(argsArray);
  if (argsArray.length === 0) return false;

  let result = argsArray.sort();
  console.log(result);
  let left = 0;
  let right = 1;
  while (right < argsArray.length) {
    if (argsArray[left] === argsArray[right]) {
      return true;
    }
    left++;
    right++;
  }
  return false;
}
console.log(areThereDuplicates(1, 5, 8, 2, 3, 4, 5, 5));
