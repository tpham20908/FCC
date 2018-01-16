/*
  Write a function that splits an array (first argument) into groups the length of
  size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  while (arr.length !== 0) {
    var subArr = [];
    for (var i = 0; i < size; i++) {
      subArr.push(arr.shift());
      if (arr.length === 0) {
        break;
      }
    }
    newArr.push(subArr);
  }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
