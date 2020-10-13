module.exports = function reverse (n) {
    let positiveNum = Math.abs(n);
    let string = positiveNum.toString();
    let array = string.split('');
    array.reverse();
    let reversedString = array.join('')
    return reversedString;
}
