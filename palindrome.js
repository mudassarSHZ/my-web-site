function isPalindrome(string) {
    // Remove all non-alphanumeric characters and convert the string to lowercase
    let cleanString = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Check if the string is a palindrome by comparing it to its reverse
    return cleanString === cleanString.split('').reverse().join('');
  }
  
  // Test the function with a few examples
  console.log(isPalindrome('racecar')); // true
  console.log(isPalindrome('hello')); // false
  console.log(isPalindrome('A man, a plan, a canal: Panama')); // true