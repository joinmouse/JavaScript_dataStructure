'use strict';

/**
 * 两数之和测试用例
 * 
 * 运行方式：
 * - 运行所有测试: node --test 两数之和.test.js
 * - 运行指定测试: node --test --test-name-pattern="基础用例" 两数之和.test.js
 * - 查看覆盖率: node --experimental-test-coverage --test 两数之和.test.js
 */

import { test, describe } from 'node:test';
import assert from 'node:assert';
import { twoSum } from '../../Algorithm_Patterns_Pointers_SlidingWindow/两数之和.js';

describe('两数之和测试套件', () => {
  test('示例1：基础用例', (t) => {
    const res = twoSum([2, 7, 11, 15], 9);
    assert.ok(Array.isArray(res), '返回值应为数组');
    assert.strictEqual(res.length, 2, '返回值长度应为2');
    
    const [i, j] = res;
    assert.ok(Number.isInteger(i) && Number.isInteger(j), '下标应为整数');
    assert.notStrictEqual(i, j, '两个下标应不同');
    assert.ok(i >= 0 && i < 4 && j >= 0 && j < 4, '下标应在有效范围内');
    assert.strictEqual([2, 7, 11, 15][i] + [2, 7, 11, 15][j], 9, '两数之和应等于目标值');
  });

  test('示例2：相邻元素', (t) => {
    const res = twoSum([2, 3, 4], 6);
    const [i, j] = res;
    assert.strictEqual([2, 3, 4][i] + [2, 3, 4][j], 6, '两数之和应等于6');
    assert.notStrictEqual(i, j, '两个下标应不同');
  });

  test('示例3：相同元素组成目标值', (t) => {
    const res = twoSum([3, 3], 6);
    const [i, j] = res;
    assert.strictEqual([3, 3][i] + [3, 3][j], 6, '两数之和应等于6');
    assert.notStrictEqual(i, j, '两个下标应不同');
  });

  test('示例4：包含0的情况', (t) => {
    const res = twoSum([0, 4, 3, 0], 0);
    const [i, j] = res;
    assert.strictEqual([0, 4, 3, 0][i] + [0, 4, 3, 0][j], 0, '两数之和应等于0');
    assert.notStrictEqual(i, j, '两个下标应不同');
  });

  test('示例5：包含负数', (t) => {
    const res = twoSum([-3, 4, 3, 90], 0);
    const [i, j] = res;
    assert.strictEqual([-3, 4, 3, 90][i] + [-3, 4, 3, 90][j], 0, '两数之和应等于0');
    assert.notStrictEqual(i, j, '两个下标应不同');
  });

  test('边界情况：空数组', (t) => {
    const res = twoSum([], 0);
    assert.deepStrictEqual(res, [], '空数组应返回空数组');
  });

  test('边界情况：无解情况', (t) => {
    const res = twoSum([1, 2, 3], 10);
    assert.deepStrictEqual(res, [], '无解时应返回空数组');
  });
});
