LEETCODE

let nums = [2, 7, 11, 15];
let target = 9;

var twoSum = function (nums, target) {
    let numArr = new Array;
   
    nums.every(num => {
        let addend = target - num;
        if(nums.includes(addend)){
            numArr.push(nums.indexOf(num));
            numArr.push(nums.indexOf(addend));
            return false;
        }
        return true;
    });
    console.log(numArr);
};
twoSum(nums, target);