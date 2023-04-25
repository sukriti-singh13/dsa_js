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

function same(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < arr1.length; i++) {
    let char = arr1[i];
    obj1[char] = obj1[char] ? ++obj1[char] : 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    let char = arr2[i];
    obj2[char] = obj2[char] ? ++obj2[char] : 1;
  }
  for (let key in obj1) {
    console.log(obj2[key ** 2]);
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
        // obj2[key ** 2] accesses the property in obj2 whose key is the squared value of key.
      return false;
    }
  }
  return true;
}

let result = same([2, 3, 4, 3,9], [4, 9, 9,8, 16]);
console.log(result)
