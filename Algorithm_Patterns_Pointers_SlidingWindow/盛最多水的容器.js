/**
 * LeetCode 11. 盛最多水的容器
 * 
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i])
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 
 * @param {number[]} height - 高度数组
 * @returns {number} - 最大水量
 */
export function maxArea(height) {
    // TODO: 请实现双指针算法
    let left = 0; // 左指针
    let right = height.length - 1; // 右指针
    let maxArea = 0; // 最大面积

    while(left < right) {
        const width = right - left; // 宽度
        const currentHeight = Math.min(height[left], height[right]); // 当前高度
        const currentArea = width * currentHeight;
        maxArea = Math.max(maxArea, currentArea); // 更新最大面积

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}