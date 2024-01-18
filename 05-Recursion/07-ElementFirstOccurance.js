//Check first occurance of an element
function fun(arr,no,idx){
    if(idx === arr.length){
        return -1;
    }
    if(arr[idx]===no){
        return idx;
    }
    return fun(arr,no,idx+1)
}
let arr =[2,4,1,3,2,5,9];
console.log(fun(arr,9,0));