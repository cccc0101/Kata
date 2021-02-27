const urlDecode = function(text) {
  // Put your solution here
  let decoded = {};
  if(text.includes("&")){
    
    let a = text.split("&")

  for (i = 0; i < a.length; i++){
    k = a[i].split("=")
    decoded[k[0]] = k[1].split("%20").join(" ")
  }
}
  
  else{
    k = text.split("=")
    decoded[k[0]] = k[1].split("%20").join(" ")
  }
  return decoded
}



console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


/*
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/

