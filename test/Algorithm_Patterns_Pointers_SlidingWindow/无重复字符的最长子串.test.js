import { describe, test } from 'node:test';
import assert from 'node:assert';
import { lengthOfLongestSubstring } from '../../Algorithm_Patterns_Pointers_SlidingWindow/无重复字符的最长子串.js';

describe('无重复字符的最长子串', () => {
    describe('基础用例', () => {
        test('示例1：无重复字符', () => {
            const result = lengthOfLongestSubstring('abcabcbb');
            assert.strictEqual(result, 3);
        });

        test('示例2：所有字符相同', () => {
            const result = lengthOfLongestSubstring('bbbbb');
            assert.strictEqual(result, 1);
        });

        test('示例3：部分重复', () => {
            const result = lengthOfLongestSubstring('pwwkew');
            assert.strictEqual(result, 3);
        });
    });

    describe('边界情况', () => {
        test('空字符串', () => {
            const result = lengthOfLongestSubstring('');
            assert.strictEqual(result, 0);
        });

        test('单个字符', () => {
            const result = lengthOfLongestSubstring('a');
            assert.strictEqual(result, 1);
        });

        test('全部无重复', () => {
            const result = lengthOfLongestSubstring('abcdef');
            assert.strictEqual(result, 6);
        });
    });

    describe('特殊场景', () => {
        test('包含空格', () => {
            const result = lengthOfLongestSubstring('abc def ghi');
            assert.strictEqual(result, 7);
        });

        test('包含数字和字母', () => {
            const result = lengthOfLongestSubstring('a1b2c3d4');
            assert.strictEqual(result, 8);
        });

        test('连续重复字符', () => {
            const result = lengthOfLongestSubstring('abccba');
            assert.strictEqual(result, 3);
        });

        test('长字符串', () => {
            const result = lengthOfLongestSubstring('abcdefghijklmnopqrstuvwxyz');
            assert.strictEqual(result, 26);
        });
    });
});
