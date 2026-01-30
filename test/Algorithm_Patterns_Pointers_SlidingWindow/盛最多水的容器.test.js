import { describe, test } from 'node:test';
import assert from 'node:assert';
import { maxArea } from '../../Algorithm_Patterns_Pointers_SlidingWindow/盛最多水的容器.js';

describe('盛最多水的容器', () => {
    describe('基础用例', () => {
        test('示例1：普通情况', () => {
            const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
            assert.strictEqual(result, 49);
        });

        test('示例2：短数组', () => {
            const result = maxArea([1, 1]);
            assert.strictEqual(result, 1);
        });

        test('示例3：递增数组', () => {
            const result = maxArea([1, 2, 4, 3]);
            assert.strictEqual(result, 4);
        });
    });

    describe('边界情况', () => {
        test('最小长度数组', () => {
            const result = maxArea([1, 1]);
            assert.strictEqual(result, 1);
        });

        test('所有高度相同', () => {
            const result = maxArea([5, 5, 5, 5]);
            assert.strictEqual(result, 15);
        });

        test('递减数组', () => {
            const result = maxArea([5, 4, 3, 2, 1]);
            assert.strictEqual(result, 6);
        });
    });

    describe('特殊用例', () => {
        test('包含0的情况', () => {
            const result = maxArea([0, 2, 3, 0]);
            assert.strictEqual(result, 2);
        });

        test('极端高度', () => {
            const result = maxArea([10000, 1, 1, 1, 10000]);
            assert.strictEqual(result, 40000);
        });

        test('最大面积在两端', () => {
            const result = maxArea([9, 6, 5, 4, 8]);
            assert.strictEqual(result, 32);
        });
    });
});