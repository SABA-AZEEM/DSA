// let arr=[2,3,4,5] create a new array with same length, but 
// at 0 index it store 3*4*5 and 
// at 1 index it store 2*4*5 and 
// at 2 index it store 2*3*5 and 
// at 3 index it store 2*3*4. 
// so the end result of new array is [60,40,30,24]. Write a program of this.

let arr = [2,3,4,5];
let newArr = [];

//Function, time_complexity = O(n^2)
// function productElements(arr){
//     for(let i=0; i<arr.length; i++){
//         let product = 1;
//         for(let j=0; j<arr.length; j++){
//             if(i!==j)
//                 product  *= arr[j];
//         }
//         newArr.push(product);
//     }
//     return newArr;
// }

//Function, time complexity = O(n)
function productElements(arr){
    let product = 1;
    //find product of all elements
    for(let i=0; i<arr.length; i++){
        product *= arr[i];
    }
    //Store product in array
    for(let i=0; i<arr.length; i++){
        newArr[i] = product/arr[i];
    }
    return newArr;
}

//Function call
console.log(productElements(arr));