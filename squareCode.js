const squareCode = function(message) {
  // Put your solution here
  let newText = ""
  let finalText = ""
  let text = message.split(" ").join("")
  let a = Math.ceil(Math.sqrt(text.length))
  let k = 0;
  
  // convert to square
  
  for (i = 0; i < a; i ++){
    if((i+1)*a >= text.length){
      newText += text.slice(i*a, text.length) 
    }
    else{
    newText += text.slice(i*a, (i+1)*a)+ "\n"
    }
  }
  console.log("\nsquareCode: \n" + newText + "\n");

  // find # of rows:
  const rows = newText.match(/^/gm).length

  // encoding
  for (i = 0; i < a; i++){
    for (j = 0; j < rows; j++){
      if(j == rows -1){
        if(newText[j*a+j+k]){
      finalText += newText[j*a+j+k] + " "
        }
        else{
          finalText += " "
        }
      }
      else{
      finalText += newText[j*a+j+k]; 
      }
    }
    k+=1
  }
  console.log("Encrypted Code:")
  return finalText

}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots")); 