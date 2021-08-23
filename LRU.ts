/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
 function LRU( operators , k){
  const n = operators.length;
  const map = new Map();
  const res = []
  for(let i = 0;i < n;i ++){
      if(operators[i][0] === 1){
          set(operators[i][1],operators[i][2]);
      }else{
          res.push(get(operators[i][1]));
      }
  }
  function get(key){
      const val = map.get(key);
      if(val === undefined) return -1;
      map.delete(key);
      map.set(key,val);
      return val;
  }
  function set(key,val){
      if(map.has(key)) map.delete(key);
      map.set(key,val);
      if(map.size > k){
          map.delete(map.keys().next().value);
      }
  }
  return res;
}
module.exports = {
  LRU : LRU
};


class ListNode {
  prev: ListNode | null;
  next: ListNode | null;
  value: any;
  key: string | number;
  constructor(key = 0, val = '', prev = null, next = null) {
    this.value = val || '';
    this.prev = prev || null;
    this.next = next || null;
    this.key = key;
  }
}
class Solution {
  cache: { [key: string]: ListNode | null };
  head: ListNode;
  tail: ListNode;
  max = 0;
  constructor(max: number) {
    this.cache = {};
    this.head = new ListNode();
    this.tail = new ListNode();
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.max = max;
  }
  set(key: string | number, value: any) {
    if (this.cache.hasOwnProperty(key)) {
      // 若存在，先删除指定节点，后添加
      const node = this.cache[key];
      this.remove(node);
    }
    const node = new ListNode(key as number, value, null, null);
    this.addToEnd(node);
    this.cache[key] = node;

    if (Object.keys(this.cache).length > this.max) {
      // 若超出，删除第一个的节点
      var fnode = this.head.next;
      this.remove(fnode);
      delete this.cache[fnode.key];
    }

  }
  get(key: string | number) {
    if (this.cache[key]) {
      const node = this.cache[key];
      this.remove(node);
      this.addToEnd(node);
      return node.value;
    } else {
      return -1;
    }
  }
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  addToEnd(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }
}
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
export function LRU(operators: number[][], k: number): number[] {
  // write code here
  const solution = new Solution(k);
  const result: number[] = [];
  for (let k = 0; k < operators.length; k++) {
    const opt = operators[k];
    if (opt[0] === 1) {
      solution.set(opt[1], opt[2])
    } else if (opt[0] === 2) {
      result.push(solution.get(opt[1]));
    }
  }
  return result;
}
