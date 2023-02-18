const removeFromArray = function(givenArray, ...args) {
        for (let i = 0; i < args.length; i++) {
            if (givenArray.includes(args[i])) {
                let numberIndex = givenArray.indexOf(args[i]);
                givenArray.splice(numberIndex, 1);
            }
        }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
