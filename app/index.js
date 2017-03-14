'use strict'
module.exports = {
	/*function to return a hash of word counts*/
	words: function(str) {
		var word = str.replace(/\s\s+/g, ' ').split(/\s/);
		var expectedCounts = {};
		word.forEach(function(i) {
			if (!expectedCounts[i]) {
				expectedCounts[i] = 0;
			}
			expectedCounts[i] += 1;
		});
		return expectedCounts;
	},
	/*reverse string function*/
	reverseString: function(str) {
		if (str === '') {
			return null;
		}
		var newString = "";
		for (var i = str.length - 1; i >= 0; i--) {
			newString += str[i];
		}
		if (str === newString) {
			return true;
		} else {
			return newString;
		}
	}
}