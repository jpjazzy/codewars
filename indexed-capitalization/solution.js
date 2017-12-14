function capitalize(s,arr){
  //create new string and set it equal to old string first
  let result = s;

  //change individual letters IF the string.length-1 > index to be changed at
  for (let i = 0; i < arr.length; i++) {
    result = result.length - 1 >= arr[i] ? result.replaceAt(arr[i], result[arr[i]].toUpperCase()) : result;
    }

  //return the resulting string
  return result;
};

String.prototype.replaceAt = function(index, replacement) { // Lets reuse our string replacement function
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
