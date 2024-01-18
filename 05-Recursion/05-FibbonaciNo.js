//Find nth fibbonaci no.
function fun(n){
    if(n===0 || n===1){
        return n;
    }
    return fun(n-1)+fun(n-2);
}
console.log(fun(6));