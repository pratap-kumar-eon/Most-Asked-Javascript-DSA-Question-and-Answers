let arr = [2,5,6,2,8,4];
let sortArr = [];
function secondLargest(arr){
    sortArr = arr.sort()    
    return sortArr[sortArr.length-2]
}
console.log(secondLargest(arr));
