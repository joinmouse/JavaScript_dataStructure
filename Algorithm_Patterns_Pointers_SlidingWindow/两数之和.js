/**
 * 两数之和
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 *
 * 算法思路：使用哈希表（Map）存储数值到下标的映射，
 * 遍历时查找 target - current 是否存在于哈希表中
 */

/**
 * twoSum 函数实现
 * @param {number[]} nums - 整数数组
 * @param {number} target - 目标值
 * @returns {number[]} 返回两个下标 [i, j]，如果找不到则返回空数组
 */
function twoSum(nums, target) {
   let left = 0;
   let right = nums.length - 1;
   while(left < right) { 
        const sum = nums[left] + nums[right]; // 当前的值
        if (sum === target) { 
            return [left, right];
        }else if (sum < target) { 
            left++;
        }else { 
            right--;
        }
   }
   return [];
}

export { twoSum };