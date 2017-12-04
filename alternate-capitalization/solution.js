function capitalize(s){
  let str1Arr = s.split('');
  let str2Arr = s.split('');
  for(var i = 0; i < str1Arr.length; i++) { //Replacing even Characters
    if (i%2 !== 1) {
      str1Arr[i] = str1Arr[i].toUpperCase();
    }
  }
  for(var i = 0; i < str2Arr.length; i++) { //Replacing odd Characters
    if (i%2 === 1) {
      str2Arr[i] = str2Arr[i].toUpperCase();
    }
  }

  str1Return = str1Arr.join('');
  str2Return = str2Arr.join('');



  return [str1Return, str2Return];
};
