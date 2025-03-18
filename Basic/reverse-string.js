//reverse number
function reverseNumber(num){
    let str = num.toString();
    let reverseStr = str.split('').reverse().join('');
    console.log(parseInt(reverseStr))
}

reverseNumber(-123)
//recursive
function reverseString(str) {
    // Base case: if the string is empty or has only one character, return it
    if (str === "") {
        return str;
    }
    // Recursive case: take the last character and add the reverse of the remaining string
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("abcd"));


