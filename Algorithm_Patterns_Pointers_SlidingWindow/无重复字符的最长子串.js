/**
 * 无重复字符的最长子串
 * 
 * 使用滑动窗口算法
 * 时间复杂度：O(n)
 * 空间复杂度：O(min(m, n))，其中 m 是字符集大小，n 是字符串长度
 * 
 * @param {string} s - 输入字符串
 * @returns {number} - 无重复字符的最长子串长度
 */
export function lengthOfLongestSubstring(s) {
    let left = 0; // 滑动窗口左指针
    let maxLength = 0; // 记录最长子串长度
    const charIndexMap = new Map(); // 存储字符及其最新索引

    // 遍历字符串
    for (let right = 0; right < s.length; right++) {
        // 字符重复，移动左指针
        if (charIndexMap.has(s[right])) {
            left = Math.max(left, charIndexMap.get(s[right]) + 1);
        }

        charIndexMap.set(s[right], right); // 更新字符索引

        // 对比并更新最大长度
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
