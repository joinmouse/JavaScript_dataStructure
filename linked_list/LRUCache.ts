/**
 * 基于Map和双向链表实现的LRU算法
 * 使用泛型可以存储多种类型的数据
 */
class LinkedListNode<K, V> {
  key: K;
  value: V;
  next: LinkedListNode<K, V> | null;
  prev: LinkedListNode<K, V> | null;

  constructor(
    key: K,
    value: V,
    next: LinkedListNode<K, V> | null = null,
    prev: LinkedListNode<K, V> | null = null
  ) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRUCache<K, V> {
  private readonly limit: number;
  private cacheMap: Map<K, LinkedListNode<K, V>>;
  // constructor
  constructor(limit: number) {
    if (limit <= 0) throw new Error("limit of cache must > 0");
    this.limit = limit;
    this.cacheMap = new Map();
  }
}
