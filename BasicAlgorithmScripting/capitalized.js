/*
  Return the provided string with the first letter of each word capitalized.
  Make sure the rest of the word is in lower case.
  For the purpose of this exercise, you should also capitalize connecting words
  like "the" and "of".
*/
function titleCase(str) {
  var strArr = str.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return strArr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
