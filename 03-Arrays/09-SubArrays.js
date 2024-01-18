//Print subarrays, time-complexity= O(n^3)

let arr = [2,4,6,8,10];
let sum=0;
let maxSum = Number.MIN_VALUE;
for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        for(let k=i; k<=j; k++){
            console.log(arr[k]);
        }
        console.log(" ");
    }
    console.log('\n');
}