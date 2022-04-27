/*
 * map的key是一个有序(迭代器)
 * 可以替代LinkedListHashMap的功能
 */

class LRUCacheMap<T, U> {
  private cache: Map<T, U> = new Map();
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  /*
   * 判断cache是否有该元素
   * 没有: 返回 null
   * 有: 将元素提升到链表头，返回对应的元素
   */
  public get(key: T): U | null {
    if (this.cache.get(key)) {
      // 先删除该元素，再提升到头部
      const value: U = this.cache.get(key) as U;
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    } else {
      return null;
    }
  }

  /*
   * 判断是否超过容器的极限了
   * 有: 将map最后一个元素移除，后再将该元素放在链表头
   * 没有: 放到链表头
   */
  public put(key: T, value: U) {
    // 已经存在的删除，map的key如果是引用类型并不会被覆盖的
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.capacity === this.cache.size) {
      const lastKey = this.cache.keys().next().value;
      this.cache.delete(lastKey);
    }
    this.cache.set(key, value);
  }

  toString() {
    console.table(this.cache);
  }
}

const list = new LRUCacheMap(4);
list.put(2, 2); // 入 2，剩余容量3
list.put(3, 3); // 入 3，剩余容量2
list.put(4, 4); // 入 4，剩余容量1
list.put(5, 5); // 入 5，已满    从头至尾         2-3-4-5
list.toString();
list.put(4, 4); // 入4，已存在 ——> 置队尾         2-3-5-4
list.toString();
list.put(1, 1); // 入1，不存在 ——> 删除队首 插入1  3-5-4-1
list.toString();
list.get(3); // 获取3，刷新3——> 置队尾         5-4-1-3
list.toString();
