//Print pairs in array, time-complexity = O(n^2)

let arr = [2,4,6,8,10];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        console.log("("+arr[i]+","+arr[j]+")");
    }
    console.log("\n");
}