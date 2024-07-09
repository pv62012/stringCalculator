const add = require('./index.js');



test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
});
test('should return the sum of two numbers', () => {
    expect(add("1\n4")).toBe(5);
});

test('should return the sum of two numbers', () => {
    expect(add("//[*][%]\n1*2%3@%@4")).toBe(10);
});
// Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2
test('Numbers bigger than 1000 should be ignored', () => {
    expect(add("//[*][%]\n1*2%3@%@4*1001")).toBe(10);
});
test('should return negative numbers not allowed', () => {
    expect(()=>add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
});

// // Add more tests following the steps
