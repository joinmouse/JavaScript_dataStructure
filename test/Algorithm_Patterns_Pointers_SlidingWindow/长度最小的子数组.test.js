import { describe, it } from 'node:test';
import assert from 'node:assert';

// TODO: 导入实现函数
import { minSubArrayLen } from '../../Algorithm_Patterns_Pointers_SlidingWindow/长度最小的子数组.js';

describe('变长滑动窗口：长度最小的子数组', () => {
  
  describe('基础用例', () => {
    it('示例1: target=7, nums=[2,3,1,2,4,3] 应该返回 2', () => {
      const target = 7;
      const nums = [2, 3, 1, 2, 4, 3];
      // 可能的子数组:
      // [2,3,1,2] 和=7, 长度=4
      // [3,1,2,4] 和=10, 长度=4
      // [1,2,4] 和=7, 长度=3
      // [2,4,3] 和=9, 长度=3
      // [4,3] 和=7, 长度=2 ✓ (最小)
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 2);
    });

    it('示例2: target=4, nums=[1,4,4] 应该返回 1', () => {
      const target = 4;
      const nums = [1, 4, 4];
      // [4] 和=4, 长度=1 ✓
      // [4] 和=4, 长度=1 ✓
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 1);
    });

    it('示例3: target=11, nums=[1,2,3,4,5] 应该返回 3', () => {
      const target = 11;
      const nums = [1, 2, 3, 4, 5];
      // [3,4,5] 和=12, 长度=3 ✓
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 3);
    });
  });

  describe('边界情况', () => {
    it('空数组应该返回 0', () => {
      const target = 5;
      const nums = [];
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 0);
    });

    it('target 为 0 应该返回 0', () => {
      const target = 0;
      const nums = [1, 2, 3];
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 0);
    });

    it('target 大于所有元素和应该返回 0', () => {
      const target = 100;
      const nums = [1, 2, 3, 4, 5];
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 0);
    });

    it('target 等于数组和应该返回数组长度', () => {
      const target = 15;
      const nums = [1, 2, 3, 4, 5];
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 5);
    });

    it('单元素数组且刚好等于target应该返回 1', () => {
      const target = 5;
      const nums = [5];
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 1);
    });

    it('单元素数组且不等于target应该返回 0', () => {
      const target = 5;
      const nums = [3];
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 0);
    });
  });

  describe('特殊场景', () => {
    it('全相同元素: target=9, nums=[3,3,3,3,3] 应该返回 3', () => {
      const target = 9;
      const nums = [3, 3, 3, 3, 3];
      // [3,3,3] 和=9, 长度=3 ✓
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 3);
    });

    it('递增数组: target=15, nums=[1,2,3,4,5,6] 应该返回 5', () => {
      const target = 15;
      const nums = [1, 2, 3, 4, 5, 6];
      // [1,2,3,4,5] 和=15, 长度=5 ✓
      // [4,5,6] 和=15, 长度=3 ✓ (更小)
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 3);
    });

    it('递减数组: target=15, nums=[6,5,4,3,2,1] 应该返回 3', () => {
      const target = 15;
      const nums = [6, 5, 4, 3, 2, 1];
      // [6,5,4] 和=15, 长度=3 ✓
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 3);
    });

    it('包含零: target=5, nums=[1,0,2,0,2] 应该返回 4', () => {
      const target = 5;
      const nums = [1, 0, 2, 0, 2];
      // [1,0,2,0,2] 和=5, 长度=5
      // [1,0,2,0,2] 没有更短的
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 5);
    });

    it('单个大元素: target=5, nums=[10,1,1,1] 应该返回 1', () => {
      const target = 5;
      const nums = [10, 1, 1, 1];
      // [10] 和=10, 长度=1 ✓
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 1);
    });

    it('大数组和: target=500, nums=[100,100,100,100,100] 应该返回 5', () => {
      const target = 500;
      const nums = [100, 100, 100, 100, 100];
      // [100,100,100,100,100] 和=500, 长度=5 ✓
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 5);
    });

    it('target=1, nums=[1,2,3,4,5] 应该返回 1', () => {
      const target = 1;
      const nums = [1, 2, 3, 4, 5];
      // [1] 和=1, 长度=1 ✓
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 1);
    });
  });

  describe('性能测试', () => {
    it('大数组测试: 10000个元素', () => {
      // 创建递增数组
      const nums = new Array(10000).fill(0).map((_, i) => i + 1);
      const target = 500000;
      
      // 应该能快速完成
       const result = minSubArrayLen(target, nums);
       assert.ok(result > 0);
    });

    it('全1数组: target=500, 1000个1应该返回 500', () => {
      const nums = new Array(1000).fill(1);
      const target = 500;
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 500);
    });
  });

  describe('复杂场景', () => {
    it('需要多次收缩窗口: target=7, nums=[4,3,1,2,1,1,1,1]', () => {
      const target = 7;
      const nums = [4, 3, 1, 2, 1, 1, 1, 1];
      // [4,3] 和=7, 长度=2 ✓
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 2);
    });

    it('多个相同长度的解: target=6, nums=[3,3,3,3] 应该返回 2', () => {
      const target = 6;
      const nums = [3, 3, 3, 3];
      // [3,3] 和=6, 长度=2 ✓
      // [3,3] 和=6, 长度=2 ✓
      // [3,3] 和=6, 长度=2 ✓
      
       const result = minSubArrayLen(target, nums);
       assert.strictEqual(result, 2);
    });
  });
});
