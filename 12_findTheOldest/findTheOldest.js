const findTheOldest = function(people) {
    return people.reduce((person, currentPerson) => {
        const currentDate = new Date();
        const yearOfBirth = currentPerson.yearOfBirth;
        const yearOfDeath = 'yearOfDeath' in currentPerson ? currentPerson.yearOfDeath : currentDate.getFullYear();

        const age = yearOfDeath - yearOfBirth;

        if ( person === 0 || age > (('yearOfDeath' in person ? person.yearOfDeath : currentDate.getFullYear())- person.yearOfBirth))
        {
                return currentPerson;
        }
        else
        {
            return person;
        }


    }, 0)
};

// Do not edit below this line
module.exports = findTheOldest;
