//Given an array of integers nums and an integer target, 
// return possible sum of the two numbers such that they add up to target.

// Example 1:

// Input: nums = [2,3,4,5,7,11,15], target = 9
// Output: [[2,7].[4,5]]

function twoSum(arr,target){
    let result = []
    for(let i=0;i<=arr.length;i++){
        for(let j=i+1;j<=arr.length;j++){
            if(arr[i]+arr[j] === target){
                result.push([arr[i],arr[j]])
            }
        }
    }
    return result;
}
console.log(twoSum([2,3,4,5,7,11,15],9))