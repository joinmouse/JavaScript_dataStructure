/*
 * 双链表Node
 */
class DoubleLinkedListNode {
  public key: number;
  public value: number;
  public next: any = null;
  public prev: any = null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class DoubleLinkedList {
  // 链表头节点, Number.POSITIVE_INFINITY -> 正无穷大
  public head = new DoubleLinkedListNode(
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY
  );
  // 链表尾节点, Number.NEGATIVE_INFINITY -> 负无穷大
  public tail = new DoubleLinkedListNode(
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY
  );
  private size: number = 0; //链表长度

  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  public addFirstNode(node: DoubleLinkedListNode): any {
    // node链起来
    node.prev = this.head;
    node.next = this.head.next;
    // 处理node
    this.head.next.prev = node;
    this.head.next = node;
    // size ++
    this.size += 1;
  }

  public remove(node: any): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    // size --
    this.size -= 1;
  }

  public removeLastNode() {
    // 空链表上，其实这里也可以通过size判断
    if (this.head.next === this.tail) return null;
    const last = this.tail.prev;
    this.remove(last);
    return last;
  }

  public getSize(): number {
    return this.size;
  }
}

class LRUCache {
  private hashMap = new Map();
  private cache: DoubleLinkedList = new DoubleLinkedList();
  private capacity: number; //容量

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  // key访问提升到最近使用
  private getRecently(key: number): void {
    const node: DoubleLinkedListNode = this.hashMap.get(key);
    // 移除node
    this.cache.remove(node);
    // 放到队头
    this.cache.addFirstNode(node);
  }

  // 移除最久未使用的元素
  private removeLastRecently(): void {
    const lastNode: any = this.cache.removeLastNode();
    // map中也要删掉改元素哦
    this.hashMap.delete(lastNode?.key);
  }

  // 添加最近使用的元素
  private addRecently(key: number, value: number): void {
    const node: DoubleLinkedListNode = new DoubleLinkedListNode(key, value);
    this.cache.addFirstNode(node);
    this.hashMap.set(key, node);
  }

  /*
   * 判断hashMap是否有该元素
   * 没有: 返回 -1
   * 有: 将元素提升到链表头，返回对应的元素
   */
  public get(key: number) {
    if (this.hashMap.has(key)) {
      this.getRecently(key);
      return this.hashMap.get(key).value;
    } else {
      return -1;
    }
  }

  /*
   * 判断是否超过容器的极限了
   * 有: 将链表最后一个元素移除，后再将该元素放在链表头
   * 没有: 放到链表头
   */
  public put(key: number, value: number) {
    if (this.cache.getSize() === this.capacity) {
      this.removeLastRecently();
    }
    this.addRecently(key, value);
    console.log("map", this.hashMap);
  }
}

const lRUCache = new LRUCache(2);
console.log("-----");
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log("-----");
lRUCache.get(1); // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log("-----");
lRUCache.get(2); // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log("-----");
lRUCache.get(1); // 返回 -1 (未找到)
lRUCache.get(3); // 返回 3
lRUCache.get(4); // 返回 4
