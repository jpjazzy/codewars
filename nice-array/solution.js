function isNice(arr){
  if (arr.length === 0) return false; //Return if there is no elements
  let niceArrTest = []; //create blank array for flags

  for (let k = 0; k < arr.length; k++) { //generate a flag for each of the elements
    niceArrTest.push('false'); // make all flags false by default
  }

  for (let i = 0; i < arr.length; i++) { //testing element
    for (let j = 0; j < arr.length; j++) { // element testing against
      if (arr[j] === arr[i] + 1 || arr[j] === arr[i] - 1) {
      niceArrTest[i] = true; // return true if a match is found and put it in the flag setter
      break; //break if we found a match
      }
    }
  }

  for (let l = 0; l < niceArrTest.length; l++) { //return false if any flags are false in the test arr
    if (niceArrTest[l] === 'false') return false;
  }

  return true; //return false if the element makes it this far
}
