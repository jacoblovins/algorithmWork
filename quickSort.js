// solve through recursion
// like merge sort, split to arrays of 1 or 0
// works by selecting one element called the pivot and finding the index of where the pivot should end up in the sorted array
// once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot


// find the pivot helper function
function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}