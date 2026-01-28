/**
 * 最大平均数 I - 滑动窗口算法
 * 
 * 问题描述：
 * 给定一个整数数组 nums 和一个整数 k，找出数组中连续 k 个元素的最大平均值
 * 
 * 示例：
 * 输入：nums = [1, 12, -5, -6, 50, 3], k = 4
 * 输出：12.75
 * 解释：连续 4 个元素的最大平均值是 [12, -5, -6, 50] 的平均值，即 (12 - 5 - 6 + 50) / 4 = 12.75
 * 
 * 算法思路（滑动窗口）：
 * 1. 窗口大小固定为 k，从数组左侧开始
 * 2. 计算第一个窗口的和
 * 3. 向右滑动窗口：
 *    - 减去移出窗口的元素
 *    - 加上进入窗口的元素
 * 4. 保持跟踪最大和，最后除以 k 得到最大平均值
 * 
 * 时间复杂度：O(n)，只需遍历数组一次
 * 空间复杂度：O(1)，只需常数空间
 * 
 * @param {number[]} nums - 整数数组
 * @param {number} k - 窗口大小
 * @returns {number} 连续 k 个元素的最大平均值
 */
export function findMaxAverage(nums, k) {
  if (nums.length === 0 || k <= 0 || k > nums.length) {
    throw new Error('输入参数不合法');
  }

  // TODO: 实现滑动窗口算法
  let maxSum = 0;
  let windowSum = 0;

  // 1、先计算索引0到k-1的和
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  maxSum = windowSum;

  // 2、滑动窗口计算更新窗口和
  for (let right = k; right < nums.length; right++) {
    windowSum -= nums[right - k] // 移除左侧元素
    windowSum += nums[right] // 添加右侧元素
    maxSum = Math.max(maxSum, windowSum); // 更新最大和
  }

  // 3、返回最大平均值
  return (maxSum / k).toFixed(2);
}
