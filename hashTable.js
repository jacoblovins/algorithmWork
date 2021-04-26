// // String only hash function

// // hash("pink", 100) - should hash pink and store it in an array between 0 and 100

// // Problems with this hash function:
//     // It only hashes strings
//     // Not constant time - linear in key length takes longer to hash a longer string
//     // Could be a little more random

// function hash(key, arrayLen){
//     let total = 0;
//     for(let char of key){
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

// console.log(hash("cyan", 10));


// <--------------------------------------------------------------------------------------------------------------->


// // Refining the hash

// // The prime number in the hash is helpful in spreading out the keys more uniformly
// // Also helps a lot to use a prime number as the length of the array

// function hash(key, arrayLen){
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for(let i = 0; i < Math.min(key.length, 100); i++){
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total * WEIRD_PRIME + value) % arrayLen;
//     }
//     return total;
// }


// console.log(hash("he", 13));


class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = Math.abs((total * WEIRD_PRIME + value) % this.keyMap.length);
        }
        return total;
    }


    // set()
    // Accepts a key and a value
    // Hashes the key
    // Stores the key Value pair in the hash table array via separate chaining

    set(key, value){
        const index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }


    // get()
    // Accepts a key
    // Hashes the key
    // Retrieves the key value pair in the hash table
    // If key isnt found, return undefined

    get(key){
        const index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }


}

const ht = new HashTable(17);

ht.set("hellow old", "goodbye!!");
ht.set("kljhg", "kj");
ht.set("lkhj", "ghjk");
ht.set("mbmnb", "kj");
ht.set("uytu", "hj");

console.log(ht.get("uytu"));