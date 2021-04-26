// String only hash function

// hash("pink", 100) - should hash pink and store it in an array between 0 and 100

// Problems with this hash function:
    // It only hashes strings
    // Not constant time - linear in key length takes longer to hash a longer string
    // Could be a little more random

function hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

console.log(hash("cyan", 10));