/*
  Return true if the given string is a palindrome. Otherwise, return false.
  A palindrome is a word or sentence that's spelled the same way both forward
  and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
  // Good luck!
  str = trim(str).toLowerCase();
  return str === reverseString(str);
}

function trim(str) {
    return str.replace(/[^a-z\d]/gi, '');
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

palindrome("eye");
