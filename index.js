// const countCharacters = (str) => {
//   let result = {};

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     result[char]>0?result[char]++:result[char] = 1;
//   }
//   return result;
// };


//Refactored code 
const countCharacters = (str) => {
  let result = {};

  for (let char of str) {
    //gives every character in a string
    char = char.toLowerCase();
    result[char] = ++result[char] || (result[char] = 1);
  }
  return result;
};

const main = countCharacters("Hshhello ds");
console.log(main);
