//Find largest and smallest no in array. Time Complexity = O(n)

let arr = [1,2,6,3,8,5];
let smallestNumber = Number.MAX_VALUE;
let largestNumber = Number.MIN_VALUE;

for(let i=0; i<arr.length; i++){
    if(arr[i]<smallestNumber){
        smallestNumber = arr[i];
    }
    if(arr[i]>largestNumber){
        largestNumber = arr[i];
    }
}

console.log("Smallest no is array is:"+smallestNumber);
console.log("Largest no is array is:"+largestNumber);