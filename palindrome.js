function isPalindrome(str) {
    // Remove spaces/punctuation and convert to lowercase for accurate checking
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Compare the cleaned string to a reversed version of itself
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = isPalindrome;