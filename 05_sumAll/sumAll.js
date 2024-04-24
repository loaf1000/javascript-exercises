const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0)
    {
        return "ERROR";
    }
    else if (!Number.isInteger(num1) || !Number.isInteger(num2))
    {
        return "ERROR";
    }

    const startingNumber = (num1 < num2) ? num1 : num2;
    const endingNumber = (num1 > num2) ? num1 : num2;
    let sum = 0;

    for (i = startingNumber; i < endingNumber + 1; i++)
    {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
