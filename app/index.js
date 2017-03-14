'use strict'
module.exports = {
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