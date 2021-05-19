// Dynamic Recursive fibonacci sequence using Memoization
function fib_memo(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    let res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
    memo[n] = res;
    return res;
}

console.log(fib_memo(6));