const fibonacci = function(sequenceNumber) {
    const fArray = [];
    const sNumber = Number(sequenceNumber);

    if ( isNaN(sNumber) || sNumber < 0)
        {
            return "OOPS";
        }

    for (let i = 0; i <= sNumber; i++)
        {
            if (i == 0)
                {
                    fArray.push(0);
                }
            else if (i == 1)
                {
                    fArray.push(1);
                }
            else{
                let sum = fArray[i-1] + fArray[i-2]
                fArray.push(sum);
                }   
        }
    return fArray[sNumber];

};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
