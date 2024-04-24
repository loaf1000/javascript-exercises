const repeatString = function(string, timesToRepeat) {
    let finalString = "";

    if(Math.sign(timesToRepeat) < 0)
    {
        return 'ERROR';
    }

    for(index = 0; index < timesToRepeat; index++)
    {
        finalString += string;
    }

    return finalString;

};

// Do not edit below this line
module.exports = repeatString;
