//for each
let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach((currentValue,idx,arr)=>{
//     console.log(currentValue*2);
// })

// let newArr = arr.map((currentVal,idx,arr)=>{
//     return currentVal*2;
// });
// console.log(newArr);

// let newArr = arr.filter((currentVal,idx,arr)=>{
//     return currentVal%2===0;
// })
// console.log(newArr);

// let digit = arr.reduce((acc,currentVal)=>{
//     return acc+currentVal;
// },2);
// console.log(digit);

let newArr = Array.from(arr);
console.log(newArr);