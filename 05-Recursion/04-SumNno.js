//Print sum of n natural numbers.
function fun(n){
    if(n===1){
        return 1;
    }
    return n+fun(n-1);
}
console.log(fun(5));