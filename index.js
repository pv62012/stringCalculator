function add(numbers) {
    // first check for emtpy string
    if (numbers === "") return 0;

    // then split string to array of numbers
    let nums = numbers.match(/-?\d+/g).map(Number);
    
    // console.log({nums});

    // find if any negative numbers 
    const negatives = nums.filter(num => num < 0);

    // if negative numbers found, throw an error
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    // Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2
    nums = nums.filter(num => num <= 1000);

    // return summation of all numbers
    return nums.reduce((sum, num) => sum + num, 0);
}

// add("1,-2")

module.exports = add;
