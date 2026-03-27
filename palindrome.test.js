const isPalindrome = require('./palindrome');

test('returns true for a standard palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
});

test('returns false for a standard non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('returns true for a palindrome with spaces and mixed casing', () => {
    expect(isPalindrome('Taco cat')).toBe(true);
});