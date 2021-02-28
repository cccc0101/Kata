let priority = ['camel','pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower']
function camelCase(input) {
  return input.replace(/\s+\w{1}/g, letter => letter.toUpperCase()).split(" ").join("")
}
function pascalCase(input){
  return input.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()).split(" ").join("")
}
function titleCase(input){
  return input.replace(/(^\w{1})|(\s{1}\w{1})/g, letter => letter.toUpperCase())
}
function snakeCase(input){
  return input.replace(/\s/g, "_")
}
function kebabCase(input){
  return input.replace(/\s/g, "-")
}
function vowelCase(input){
  return input.replace(/a|e|i|o|u/g, letter => letter.toUpperCase())
}
function consonantCase(input){
  return input.replace(/[^aeiou]/g, letter => letter.toUpperCase())
}
function upperCase(input){
  return input.replace(/[a-z]/g, letter => letter.toUpperCase())
}
function lowerCase(input){
  return input.replace(/[A-Z]/g, letter => letter.toLowerCase())
}
const makeCase = function(text, type){
  if (typeof(type) === "string"){
    switch (type){
      case "camel":
        newText = camelCase(text);
        break
      case "pascal":
        newText = pascalCase(text);
        break
      case "snake":
        newText = snakeCase(text)   
        break    
      case "kebab":
        newText = kebabCase(text)     
        break
      case "title":
        newText = titleCase(text)    
        break 
      case "vowel":
        newText = vowelCase(text)    
        break 
      case "consonant":
        newText = consonantCase(text)
        break
      case "upper":
        newText = upperCase(text)
        break
      case "lower":
        newText = lowerCase(text)
        break
    }
    return newText
  }
  else{
    type.sort(function(a,b){
      return priority.indexOf(a) - priority.indexOf(b)
    })
    for (item of type){
      if( item === "camel"){
          text = camelCase(text);
      }
      else if( item === "pascal"){
          text = pascalCase(text);
      }
      else if( item === "snake"){
        text = snakeCase(text);
      }
      else if( item === "kebab"){
      text = kebabCase(text);
      }
      else if( item === "title"){
    text = titleCase(text);
      }
      else if( item === "vowel"){
        text = vowelCase(text);
      }
      else if( item === "consonant"){
        text = consonantCase(text);
      }
      else if( item === "upper"){
        text = upperCase(text);
      }
      else if( item === "lower"){
        text = lowerCase(text);
      }
    }
  return text
  }
}



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant")); 
console.log(makeCase("this is a string", ["upper", "snake"]))


/* 
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/


