// print 1 to n digit.

let n=10;

function fun(n){
    if(n===1){
        console.log(1);
        return;
    }    
    fun(n-1);
    console.log(n);
}

fun(n);