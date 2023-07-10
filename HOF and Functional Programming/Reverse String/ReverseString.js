// Input string
var input = "Hello, World!";

// Function to reverse the string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Delay function using setTimeout
function delay(callback, delayTime) {
  setTimeout(callback, delayTime);
}

// Delayed string reversal
delay(function() {
  var reversed = reverseString(input);
  console.log(reversed);
}, 2000);
