// words having same number of character and same number of count

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let char of string1) {
    //The logical OR operator in this case is used to provide a default value of 1 when the key doesn't exist in the obj1 object.
    // It evaluates to the left operand if the left operand is truthy, otherwise it evaluates to the right operand.
    obj1[char] = ++obj1[char] || (obj1[char] = 1);
  }
  for (let char of string2) {
    obj2[char] = ++obj2[char] || (obj2[char] = 1);
  }
  for (let key in obj1) {
    console.log(obj1[key]);
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("aaalala", "lalaaaa"));
