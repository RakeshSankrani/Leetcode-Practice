// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

var plusOne = function(digits) {
    let digitsJoin=digits.join('');
    let digitsNumber=Number(digitsJoin)+1;
    return digitsNumber.toString().split('');
};

console.log(plusOne([1,2,3]))



// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
    if(nums[i] + nums[j] == target){
    return [i,j]
    }
    }
    }
    };

console.log(twoSum([2,7,11,15],9));


// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums) {

    if(nums.length == 0) return 0;



    let i = 0;

    for (let j = 1; j < nums.length; j ++){
        if(nums[j] !== nums[i]){
           i++;
           nums[i] = nums[j];
        }
    }
    return i + 1
}
console.log(removeDuplicates([1,1,2]))

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

var num1 = [1,2,2,4]
var num2 = [2,2]
var findintersection = num1.filter((cele)=>{
    return num2.includes(cele);
});
console.log([... new Set(findintersection)]);