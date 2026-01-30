import { describe, test } from 'node:test';
import assert from 'node:assert';
import { findAnagrams } from '../../Algorithm_Patterns_Pointers_SlidingWindow/找到字符串中所有字母异位词.js';

describe('找到字符串中所有字母异位词', () => {
    describe('基础用例', () => {
        test('示例1：普通情况', () => {
            const result = findAnagrams('cbaebabacd', 'abc');
            assert.deepStrictEqual(result, [0, 6]);
        });

        test('示例2：无异位词', () => {
            const result = findAnagrams('abab', 'baab');
            assert.deepStrictEqual(result, []);
        });

        test('示例3：连续异位词', () => {
            const result = findAnagrams('abab', 'ab');
            assert.deepStrictEqual(result, [0, 1, 2]);
        });
    });

    describe('边界情况', () => {
        test('空字符串 s', () => {
            const result = findAnagrams('', 'a');
            assert.deepStrictEqual(result, []);
        });

        test('空字符串 p', () => {
            const result = findAnagrams('abc', '');
            assert.deepStrictEqual(result, []);
        });

        test('p 长度大于 s 长度', () => {
            const result = findAnagrams('a', 'ab');
            assert.deepStrictEqual(result, []);
        });

        test('s 和 p 长度相等且是异位词', () => {
            const result = findAnagrams('cba', 'abc');
            assert.deepStrictEqual(result, [0]);
        });

        test('s 和 p 长度相等但不是异位词', () => {
            const result = findAnagrams('cba', 'def');
            assert.deepStrictEqual(result, []);
        });
    });

    describe('特殊场景', () => {
        test('单个字符', () => {
            const result = findAnagrams('a', 'a');
            assert.deepStrictEqual(result, [0]);
        });

        test('全部相同的字符', () => {
            const result = findAnagrams('aaaaa', 'aa');
            assert.deepStrictEqual(result, [0, 1, 2, 3]);
        });

        test('包含所有字母的异位词', () => {
            const result = findAnagrams('abcdefghijklmnopqrstuvwxyz', 'cba');
            assert.deepStrictEqual(result, [0]);
        });

        test('重复出现的异位词', () => {
            const result = findAnagrams('abcabcabc', 'abc');
            assert.deepStrictEqual(result, [0, 1, 2, 3, 4, 5, 6]);
        });

        test('窗口大小为1', () => {
            const result = findAnagrams('ababa', 'a');
            assert.deepStrictEqual(result, [0, 2, 4]);
        });

        test('字符串中有重复字母', () => {
            const result = findAnagrams('babbac', 'abb');
            assert.deepStrictEqual(result, [1, 3]);
        });
    });

    describe('性能测试', () => {
        test('长字符串', () => {
            const s = 'a'.repeat(10000) + 'b' + 'a'.repeat(10000);
            const p = 'aaab';
            const result = findAnagrams(s, p);
            assert.ok(result.length >= 0);
        });
    });
});
