function reverseString(str) {
  let result = str.split(" ").reverse().join(" ");
  let final = "";
  console.log(result);
  for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  return final;
}

console.log(reverseString("Hey I am Sukriti"));
let arr = [2, 2, 2, 3, 4];
console.log(arr.reduce((a, b) => a + b, 2));
console.log(arr.filter((a) => a !== 3).reduce((a, b) => a + b, 0));
