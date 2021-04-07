function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){  // loop working backwards so we arent checking already sorted items
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){   // loop working forward to check values
            // Compare the two
            if(arr[j] > arr[j + 1]){
                // Swap if needed
                noSwaps = false;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log("looped")
        if(noSwaps) break;               // if no swaps happen in a loop, stop because the array is already sorted
    }
    return arr;
}

console.log(bubbleSort([1,2,3,5,4,7,8,9,10,11]))