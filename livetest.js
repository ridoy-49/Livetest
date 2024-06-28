// 1) Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330
function circuitPower(voltage , current ){
    return voltage*current
}
console.log(circuitPower(110,3))
/*2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.*/


function findMaxNumber(x){
    let v=x.map(Number)
    if (v.length === 0) {
        return null;
      }
      else{
        return Math.max(...v)
      }
}
array=[5,6,8,9]
console.log(findMaxNumber(array))

/*3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array*/
function mergeArrays(array1, array2) {
    return array1.concat(array2);
  }
array1=[45,34,56]
array2=[45,78]
console.log(mergeArrays(array1, array2))
/*4) Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]*/
function arrayValuesTypes(array) {
    return array.map(value=> typeof(value));
  }
  array=[1,2,"uj","null",[],{},,]
  console.log(arrayValuesTypes(array))
