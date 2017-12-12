function cubeOdd(arr) {
  for(let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') return undefined;
  }

  let cubes = [];

  arr.forEach(function(val){
    if (val % 2 === 1 || val % 2 === -1) cubes.push(val*val*val);
  })

  if (cubes.length === 0) return 0;

  return cubes.reduce((accumulator, currentValue) => accumulator + currentValue);
}
