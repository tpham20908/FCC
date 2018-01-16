/*
  Return the length of the longest word in the provided sentence.
  Your response should be a number.
*/

function findLongestWord(str) {
  var strArr = str.split(' ');
  var longest = strArr[0].length;
  for (var i = 1; i < strArr.length; i++) {
    if (longest < strArr[i].length) {
      longest = strArr[i].length;
    }
  }
  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
