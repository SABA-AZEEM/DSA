//Check given array is sorted or not?
function fun(arr,idx){
    if(idx===arr.length-1){
        return true;
    }
    if(arr[idx]>arr[idx+1]){
        return false;
    }
    return fun(arr,idx+1);
}
// let arr= [2,3,1,4];
let arr=[1,2,3,4]
console.log(fun(arr,0));