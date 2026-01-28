import { describe, it } from 'node:test';
import assert from 'node:assert';

// 导入实现函数
import { findMaxAverage } from '../../Algorithm_Patterns_Pointers_SlidingWindow/最大平均数I.js';

describe('最大平均数 I', () => {
  
  describe('基础用例', () => {
    it('示例1: [1,12,-5,-6,50,3], k=4 应该返回 12.75', () => {
      const nums = [1, 12, -5, -6, 50, 3];
      const k = 4;
      // 连续4个分数的组合:
      // [1,12,-5,-6] 平均: (1+12-5-6)/4 = 0.5
      // [12,-5,-6,50] 平均: (12-5-6+50)/4 = 12.75 ✓
      // [-5,-6,50,3] 平均: (-5-6+50+3)/4 = 10.5
      // 最大平均值: 12.75
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '12.75');
    });

    it('示例2: [5], k=1 应该返回 5', () => {
      const nums = [5];
      const k = 1;
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '5.00');
    });

    it('示例3: [0,4,0,3,2], k=1 应该返回 4', () => {
      const nums = [0, 4, 0, 3, 2];
      const k = 1;
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '4.00');
    });
  });

  describe('边界情况', () => {
    it('空数组应该抛出错误', () => {
      const nums = [];
      const k = 1;
      
      assert.throws(() => findMaxAverage(nums, k));
    });

    it('k 大于数组长度应该抛出错误', () => {
      const nums = [1, 2, 3];
      const k = 5;
      
      assert.throws(() => findMaxAverage(nums, k));
    });

    it('k 等于数组长度应该返回数组平均值', () => {
      const nums = [1, 2, 3, 4];
      const k = 4;
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '2.50');
    });

    it('k 为 0 应该抛出错误', () => {
      const nums = [1, 2, 3];
      const k = 0;
      
      assert.throws(() => findMaxAverage(nums, k));
    });
  });

  describe('负数场景', () => {
    it('全负数数组: [-1,-2,-3,-4], k=2 应该返回 -1.5', () => {
      const nums = [-1, -2, -3, -4];
      const k = 2;
      // [-1,-2] 平均: -1.5 ✓ (最大)
      // [-2,-3] 平均: -2.5
      // [-3,-4] 平均: -3.5
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '-1.50');
    });

    it('正负混合: [-5,10,-5,10,-5], k=2 应该返回 5', () => {
      const nums = [-5, 10, -5, 10, -5];
      const k = 2;
      // [-5,10] 平均: 2.5
      // [10,-5] 平均: 2.5
      // [-5,10] 平均: 2.5
      // [10,-5] 平均: 2.5
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '2.50');
    });
  });

  describe('特殊场景', () => {
    it('全相同元素: [3,3,3,3,3], k=3 应该返回 3', () => {
      const nums = [3, 3, 3, 3, 3];
      const k = 3;
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '3.00');
    });

    it('已排序升序数组: [1,2,3,4,5,6,7,8,9,10], k=4 应该返回 8.5', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const k = 4;
      // [7,8,9,10] 平均: 8.5 ✓ (最后四个元素)
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '8.50');
    });

    it('已排序降序数组: [10,9,8,7,6,5,4,3,2,1], k=4 应该返回 8.5', () => {
      const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      const k = 4;
      // [10,9,8,7] 平均: 8.5 ✓ (前四个元素)
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '8.50');
    });

    it('包含零: [0,0,1,0,0,1,0,0], k=3 应该返回 1/3', () => {
      const nums = [0, 0, 1, 0, 0, 1, 0, 0];
      const k = 3;
      // [1,0,0] 平均: 1/3 ≈ 0.333...
      // [0,1,0] 平均: 1/3 ≈ 0.333...
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '0.33');
    });

    it('大数值: [10000, -10000, 10000, -10000, 10000], k=3 应该返回 3333.33', () => {
      const nums = [10000, -10000, 10000, -10000, 10000];
      const k = 3;
      // [10000,-10000,10000] 和: 10000, 平均: 3333.33 ✓ (最大)
      // [-10000,10000,-10000] 和: -10000, 平均: -3333.33
      // [10000,-10000,10000] 和: 10000, 平均: 3333.33
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '3333.33');
    });
  });

  describe('性能测试', () => {
    it('大数组测试: 10000个元素', () => {
      // 创建一个大的测试数组
      const nums = new Array(10000).fill(0).map((_, i) => i % 100);
      const k = 100;
      
      // 应该能快速完成
      const result = findMaxAverage(nums, k);
      assert.ok(parseFloat(result) >= 0 && parseFloat(result) <= 99);
    });

    it('长窗口: 10000个元素, k=5000', () => {
      const nums = new Array(10000).fill(0).map((_, i) => i);
      const k = 5000;
      
      const result = findMaxAverage(nums, k);
      assert.ok(parseFloat(result) > 0);
    });
  });

  describe('精度测试', () => {
    it('小数平均值: [1,2,3,4,5], k=3 应该返回 4', () => {
      const nums = [1, 2, 3, 4, 5];
      const k = 3;
      // [3,4,5] 平均: 4 ✓
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '4.00');
    });

    it('需要保留精度的平均值: [1,1,1,2,2,2], k=2 应该返回 2', () => {
      const nums = [1, 1, 1, 2, 2, 2];
      const k = 2;
      // [2,2] 平均: 2 ✓
      
      const result = findMaxAverage(nums, k);
      assert.strictEqual(result, '2.00');
    });
  });
});
