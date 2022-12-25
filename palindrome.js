function isPalindrome(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();
  
    // Remove all non-alphanumeric characters
    str = str.replace(/[^a-z0-9]/g, "");
  
    // Check if the string is a palindrome by comparing it to its reverse
    return str === str.split("").reverse().join("");
  }
  
  // Test the function
  console.log(isPalindrome("racecar"));  // Output: true
  console.log(isPalindrome("hello"));  // Output: false
  