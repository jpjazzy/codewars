function solution(s){
  var o = ''; //make blank strings
  for (var i = s.length - 1; i >= 0; i--) // decrement from end of the string
    o += s[i]; // grab char at the position and add it to the new variable
  return o; //return generated string
}
