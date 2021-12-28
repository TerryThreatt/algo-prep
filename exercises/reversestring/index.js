// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Solution 1
    // return str
    //     .split("")
    //     .reverse()
    //     .join("")

    // Solution 2
    // let result = '';

    // for (let char of str) {
    //     result = char + result;
    // }

    // return result

    // Solution 3
    return str.split("").reduce((reversed, char) => {
        return char = char + reversed;
    }, '')
}

module.exports = reverse;
