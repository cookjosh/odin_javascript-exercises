const findTheOldest = function(input) {
    let oldest = input.sort(function(a,b) {
        const firstPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return firstPerson > nextPerson ? -1 : 1;
      })
    let oldestPerson = oldest[0];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
