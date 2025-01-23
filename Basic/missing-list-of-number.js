function missing(arr){
    const missingNums = [];

    let start = Math.min(...arr);
    let end = Math.max(...arr);

    for(let i=start;i<=end;i++){
        if(!arr.includes(i)){
            missingNums.push(i)
        }
    }
    return missingNums;
}

console.log(missing([1,3,5,6,8])) // output [2,4,7]