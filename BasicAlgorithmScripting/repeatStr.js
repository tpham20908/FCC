/*
  Repeat a given string (first argument) num times (second argument).
  Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = "";
  for (var i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));
