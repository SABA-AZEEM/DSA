//Use binary search to find an element in the aray.
// Time_Complexity = O(logn)

let arr=[3,2,4,1,7,5,6,9,8];
//In binary search sorted array is provided
arr.sort(function(a,b){
    return a-b;
});
let element=4;


//binarySearch function
const binarySearch = (arr,element) => {
    let start = 0;
    let end = arr.length-1;
    let mid;
    while(start <= end){
        mid = Math.floor((start+end)/2);
        if(arr[mid] === element){
            return mid;
        }else if(arr[mid] < element){
            start = mid+1; 
        }else{
            end = mid-1;
        }
    }
    return -1;
}

//call function
let elementIndex = binarySearch(arr,element);

//output
if(elementIndex === -1){
    console.log('Element not exist in this array.');
}else{
    console.log('Element exist at:', elementIndex);
}
