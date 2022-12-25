// palindrome.js
if (string.length > 10) {
    console.log("The string is too long. Please enter a string with 10 characters or fewer.");
    return;
  }
  
function checkPalindrome(string) {
    // Check if the string is greater than 10 characters
    if (string.length > 10) {
      return false;
    }
      
    // Reverse the string and check if it is equal to the original
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
  }
  
  // Test the function with different strings
  console.log(checkPalindrome('racecar')); // true
  console.log(checkPalindrome('hello')); // false
  console.log(checkPalindrome('abcdefghijk')); // false
  