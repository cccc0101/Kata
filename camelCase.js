const camelCase = function(input) {
  // Your code here
  let newText=""
  for (i = 0; i < input.length; i++){
    if (input[i] != " "){
      newText +=input[i]
    }
    else {
      i+=1;
      newText += input[i].toUpperCase()

    }
  }
  return newText
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));