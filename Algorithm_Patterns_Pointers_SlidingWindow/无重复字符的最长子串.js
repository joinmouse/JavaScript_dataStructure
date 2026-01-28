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
    // TODO: 请在这里实现滑动窗口算法
    let left = 0; // 窗口左指针

    let maxLength = 0; // 记录最大长度

    const charSet = new Set(); // 用于存储当前窗口内的字符

    for (let right = 0; right < s.length; right++) {
        const char = s[right];  // 当前右侧字符
        while(charSet.has(char)) {
            charSet.delete(s[left]);  // 移除左侧字符
            left++;  // 收缩左侧窗口
        }

        // 正常逻辑
        charSet.add(char);
        maxLength = Math.max(maxLength, right - left + 1); // 更新最大长度
    }

    return maxLength;
}
