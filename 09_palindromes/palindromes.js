const reverseString = require("../03_reverseString/reverseString");

const palindromes = function (string) {
    const lowerCaseString = string.toLowerCase();
    const pString = lowerCaseString.replace(/\W+/gi, "");
    const pReverseString = reverseString(pString);

    if (pString === pReverseString)
        {
            return true;
        }
    else
    {
        return false;
    }



};


// Do not edit below this line
module.exports = palindromes;
