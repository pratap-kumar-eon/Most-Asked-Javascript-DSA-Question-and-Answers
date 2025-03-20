//Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function twoSum(arr,target){
    for(let i=0;i<=arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return [i,j]
            }
        }
    }
}
console.log(twoSum([2,7,11,15],18))