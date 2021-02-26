const urlEncode = function(text) {
  // Put your solution here
  let texttrim = text.trim();
  let newText="";
  for (letter of texttrim){newText += (letter === " "?  "%20":letter)}
  return newText

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));