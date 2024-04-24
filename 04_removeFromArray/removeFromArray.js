const removeFromArray = function(array, ...elementsToRemove) {
    for (elementToRemove of elementsToRemove)
    {
        while(array.indexOf(elementToRemove) != -1)
        {
            let removalIndex = array.indexOf(elementToRemove);
            array.splice(removalIndex, 1);
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
