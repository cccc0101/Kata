const numberOfVowels = function(data) {
  // Put your solution here
  let count = 0;
  let checker = ['a','e','i','o','u']
  for (letter of data){
    if (checker.includes(letter)){
      count +=1;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));