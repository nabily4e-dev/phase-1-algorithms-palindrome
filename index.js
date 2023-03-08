function isPalindrome(word) {
	// Write your algorithm here
	// Initialize start to 0
	// Initialize end to the length of the word minus 1
	let start = 0
	let end = word.length - 1

	// While start is less than end
	while (start < end) {
		// If character at start index is not equal to character at end index
		if (word[start] !== word[end]) {
			// Return false
			return false
		}
		// Increment start by 1
		start++
		// Decrement end by 1
		end--
	}

	// Return true
	return true
}

/* 
  Add your pseudocode here
  1. Initialize a variable called `start` to 0
  2. Initialize a variable called `end` to the length of the `word` minus 1
  3. While `start` is less than `end`, do the following:
    1. If the character at index `start` is not equal to the character at index `end`, return `false`
    2. Increment `start` by 1
    3. Decrement `end` by 1
  4. If we make it through the loop without finding a mismatch, return `true`
*/

/*
  Add written explanation of your solution here
  The isPalindrome function takes a single argument word, which is a string that we want to check for palindrome. To determine if the string is a palindrome, we compare the first and last characters of the string, then the second and second-to-last characters, and so on, until we reach the middle of the string.

  To do this, we use two pointers, start and end. start points to the beginning of the string, and end points to the end of the string. In each iteration of the loop, we compare the characters at the start and end indices. If they are not equal, we return false. If they are equal, we move the start pointer forward one position and the end pointer back one position, so that we can compare the next pair of characters on the next iteration.

  If we make it through the entire loop without finding a mismatch, then the string is a palindrome, and we return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log('Expecting: true')
	console.log('=>', isPalindrome('racecar'))

	console.log('')

	console.log('Expecting: false')
	console.log('=>', isPalindrome('robot'))
}

module.exports = isPalindrome
