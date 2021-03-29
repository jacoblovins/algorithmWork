// in order to implement radix sort, it's helpful to build a few helper functions first:

// getDigit(num, place) -- return the digit in num at the giver place value. (going from the right to the left)


const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


console.log(getDigit(12345, 0));  // 5
console.log(getDigit(12345, 1));  // 4
console.log(getDigit(12345, 2));  // 3
console.log(getDigit(12345, 3));  // 2
console.log(getDigit(12345, 4));  // 1
console.log(getDigit(12345, 5));  // 0
