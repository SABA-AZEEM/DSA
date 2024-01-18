//Reverse an array using an other array
//Time complexity = O(n)
//Space Complexity = O(n)

// let arr = [1,2,3,4,5];
// let newArr = [];

// for(let i=arr.length-1,j=0; i>=0; i--,j++){
//     newArr[j] = arr[i];
// }
// console.log(newArr);


//Reverse an array in the same array
//Time Complexity = O(n)
//Space Complexity = O(1);

let arr = [1,2,3,4,5];
for(let i=arr.length-1,j=0; i>j; i--,j++){
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
console.log(arr);