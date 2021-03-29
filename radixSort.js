// in order to implement radix sort, it's helpful to build a few helper functions first:

// getDigit(num, place) -- return the digit in num at the giver place value. (going from the right to the left)


const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Next we need to figure out how many times we need to run the function for a given list of numbers
// This depends on how many digits the largest number has

// digitCount(num) -- return the number of digits in num


const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


// mostDigits(nums) -- Given an array of numbers, returns the number o fdigits in the largest number in the list

const mostDigits = (nums) => {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


const radixSort = (nums) => {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));



        // mostDigits helper tests
// console.log(mostDigits([1234, 56, 7]));     // 4
// console.log(mostDigits([1, 1, 11111, 1]));  // 5
// console.log(mostDigits([12, 34, 56, 78]));  // 2



        //digitCount helper tests
// console.log(digitCount(1));    // 1
// console.log(digitCount(25));   // 2
// console.log(digitCount(314));  // 3



        // getDigit helper tests
// console.log(getDigit(12345, 0));  // 5
// console.log(getDigit(12345, 1));  // 4
// console.log(getDigit(12345, 2));  // 3
// console.log(getDigit(12345, 3));  // 2
// console.log(getDigit(12345, 4));  // 1
// console.log(getDigit(12345, 5));  // 0
