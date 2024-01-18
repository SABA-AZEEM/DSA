//Find an element in unsorted array using linear search, time-complexity= O(n)

let arr=[2,1,6,3,8,4,9,7,8,5];
let element=4;
let elementIndex=-1;
for(let i=0; i<arr.length; i++){
    if(arr[i] === element)
        elementIndex = i;
}
if(elementIndex === -1){
    console.log('Element not exist in this array');
}else{
    console.log('Element exist at index:'+ elementIndex);
}