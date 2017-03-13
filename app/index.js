'use strict'
module.exports = {
	/*function to return a hash of word counts*/
	words: function(string) {
		var word = string.replace(/[.]/g, '').split(/\s/);
		var expectedCounts = {};
		word.forEach(function(w) {
			if (!expectedCounts[w]) {
				expectedCounts[w] = 0;
			}
			expectedCounts += 1;
		});
		return expectedCounts;
	},

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