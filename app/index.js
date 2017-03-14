'use strict'
module.exports = {
	words: function(wordCount) {
		// split words argument into an array containing each of the words in it using any amount of whitespace as delimiter
		var listOfWords = wordCount.split(/\s+/);

		// Create an empty array to hold each of the entities in words without repitition
		var uniqueWords = [];

		listOfWords.forEach(function(word) {
			if (uniqueWords.indexOf(word) !== 1) {
				uniqueWords.push(word);
			}
		});

		var expectedCounts = {};

		for (var j of uniqueWords) {
			var count = 0;
			for (var i of listOfWords) {
				// count how many times each of the words in uniqueWords appears in listOfWords
				if (j === i) {
					count += 1;
				}
			}

			// create a key in expectedCounts with the value of j, each word in uniqueWords, and give
			// it a property of count, the number of times it appears in listOfWords
			expectedCounts[j] = count;
		}
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