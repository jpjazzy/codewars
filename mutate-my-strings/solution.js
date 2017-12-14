function mutateMyStrings(stringOne, stringTwo){
// create result var
let result = stringOne + '\n';

// loop through each character and change the letter then add it to the new variable on a new line
let newString, prevString = stringOne;
for (let i = 0; i < stringOne.length; i++) {
  if (prevString[i] === stringTwo[i]) continue;
  newString = prevString.replaceAt(i, stringTwo.charAt(i));
  result += `${newString}\n`;
  prevString = newString;
}

// return result
return result;
}

String.prototype.replaceAt=function(index, replacement) { // String replacement function
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
