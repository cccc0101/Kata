const squareCode = function(message) {

  let finalText = ""
  let text = message.split(" ").join("")
  let col = Math.ceil(Math.sqrt(text.length))
  let row = Math.ceil(text.length / col)

  for (i = 0; i < row; i++){
    for (j = i; j < text.length; j+=col){
      finalText += text[j];
    }
    finalText += "\n"
  }
  return finalText
  
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots")); 