// // Occurrence of numbers in an array++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function occur(arr){
//     const results = {};
//     for(let i = 0; i < arr.length; i++){
//         if(!results.hasOwnProperty(arr[i])){
//             console.log(arr[i])
//             results[arr[i]] = 1;
//         } else {
//             results[arr[i]]++;

//         }
//     }
//     const final = [];
//     let keys = Object.keys(results);

//     for(let i = 0; i < keys.length; i++){
//         final.push(results[keys[i]]);
//         final.push(parseInt(keys[i]));
//     }
//     return final;

// }



// console.log(occur([3,3,3,4,4,1,1,1,1,5,5,6]));





// // minutes between 2 times++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function minutes(first, second){
//     function findmins(nums){
//         const arr = nums.split(':');
//         const hours = parseInt(arr[0]);
//         const mins = parseInt(arr[1]);
//         const minutes = (hours * 60) + mins;
//         return minutes;
//     }

//     const time1 = findmins(first);
//     const time2 = findmins(second);

//     return time2 - time1;

// }


// console.log(minutes("4:30", "7:30"));



// // Cancel out list of car names++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function cancelCar(arr, name1, name2){

//     const newArr = arr.filter(element => {
//         if(element === name1 || element === name2){
//             return false
//         } else {
//             return true
//         }
//     });

//     return newArr;
// }
// const cars = ["ford", "lincoln", "mercury", "chevy", "corvette", "nova", "vega", "k5", "c10"]

// console.log(cancelCar(cars, "lincoln", "nova"));




// // add 2 binary nums and display their sum in binary++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function add(bin1, bin2) {
//     const num1 = parseInt(bin1, 2);
//     const num2 = parseInt(bin2, 2);
//     const intSum = num1 + num2;

//     return intSum.toString(2);
// }

// console.log(add("1101000", "101010"));




// // Given an integer, output whether that integer is a power of two or not.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function power(num){
//     return (num % Math.sqrt(num) === 0)
// }

// console.log(power(16));
// console.log(power(18));
// console.log(power(256));



// Find the longest substring within a string++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Palindrome disregard spaces problem++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function palindrome(str){
//     const newstring = str.split(" ").join("");
//     const flip = newstring.split("").reverse().join("");
//     return newstring === flip;
// }

// console.log(palindrome("kaya k"));




// // Least common multiple of 2 numbers++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const lcm = (a, b) => {
//     let min = Math.min(a, b);
//     while(min >= 2){
//        if(a % min === 0 && b % min === 0){
//           return (a*b)/min;
//        };
//        min--;
//     };
//     return (a*b);
//  };

//  console.log(lcm(6, 8));
//  console.log(lcm(16, 18));
//  console.log(lcm(0, 8));
//  console.log(lcm(11, 28));
//  console.log(lcm(18, 34));


