// 34Th Question
// Write a JavaScript function to get the nth largest element from an unsorted array.

const arr=[ 50, 36, 200, 100, 88, 70, 60, 33];
const Nthlargest=(arr,tar)=>
arr.sort((a,b)=>b-a)[tar-1]
console.log(Nthlargest(arr, 4));