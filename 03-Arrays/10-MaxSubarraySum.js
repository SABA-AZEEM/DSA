//Print max subarray sum, time-complexity= O(n^3)

let arr = [2,4,6,8,10];
let sum=0;
let maxSum = Number.MIN_VALUE;
for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        for(let k=i; k<=j; k++){
            sum += arr[k];
        }

        if(sum > maxSum){
            maxSum = sum;
        }
        sum = 0;
    }
    
}

console.log(maxSum);