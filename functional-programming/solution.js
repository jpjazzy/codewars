'use strict';

/*************** Kata 1 (doubling an array) *****************/
function double(array) {
    return array.map(n => n * 2);
}

/*************** Kata 2 (filtering an array with numbers) *****************/
function filter_list(l) {
  return l.filter(e => (typeof e !== 'string') && e >= 0)
}

/*************** Kata 3 (returning the average of an array) *****************/
function find_average(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
}
