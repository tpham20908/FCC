/*
  Return the remaining elements of an array after chopping off n elements from the head.
  The head means the beginning of the array, or the zeroth index.
*/
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));

/*
  Return true if the string in the first element of the array contains all of the letters of
  the string in the second element of the array.
  For example, ["hello", "Hello"], should return true because all of the letters in the second
  string are present in the first, ignoring case.
  The arguments ["hello", "hey"] should return false because the string "hello" does not contain
  a "y".
  Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present
  in "Alien".
*/

function mutation(arr) {
  var firstArr = arr[0].split('').map(function(char) {
    return char.toLowerCase();
  });
  var secondArr = arr[1].split('').map(function(char) {
    return char.toLowerCase();
  });
  var match = true;

  while (match) {
    for (var i = 0; i < secondArr.length; i++) {
      if (firstArr.indexOf(secondArr[i]) === -1) {
        match = false;
      }
    }
  }
  return match;
  // console.log(firstArr, secondArr);
}

console.log(mutation(["heLlo", "hey"]));