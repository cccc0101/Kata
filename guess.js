
let prompt = require("prompt-sync")();
let counter = 0;
let number = Math.floor(Math.random()*101);
let storage = [];
let answer = -1;
/*
guess number
check if number
check if guessed
compare
add counter*/

while (answer != number){
  let answer = prompt("what is your guess (0-100)? ");
  if (isNaN(answer)){
    console.log("Not a number! Try again!")
  }
  else{
    if(storage.includes(answer)){
      console.log("already guessed!")
    }
    else if (answer > number) {
      console.log("your guess is too high!");
      counter++;
      storage.push(answer);
    }
    else if(answer < number){
      console.log("your guess is too low!");
      counter++;
      storage.push(answer);
    }
    else{
      console.log("you got it!");
      counter++;
      console.log("you have tried " + counter + " times.");
      break;
    }
}
}



