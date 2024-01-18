//Check last occurance of an element
function fun(arr,no,idx){
    if(idx < 0){
        return -1;
    }
    if(arr[idx]===no){
        return idx;
    }
    return fun(arr,no,idx-1)
}
let arr =[9,4,1,3,2,5,1];
console.log(fun(arr,9,6));