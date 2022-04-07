/**
 * @description 链表
 */

/**
 * 根据数组生成链表
 * @param arr
 * @returns {null}
 */
function genListNode(arr) {
  var t = null;
  var tail = null;
  arr.forEach((element, index) => {
    if (index < arr.length - 1) {
      if (t) {
        tail.next =
          { val: element, next: { val: arr[index + 1], next: null } };
        tail = tail.next;
      } else {
        t = { val: element, next: {} };
        tail = t;
      }
    }
  });
  return t;
}
function p(l) {
  while (l) {
    console.log(l.val);
    l = l.next;
  }
}
var l1 = genListNode([1, 3, 5, 7, 9]);
var l2 = genListNode([2, 4, 6, 8, 10]);
p(l1);
p(l2);
// function merge(l1, l2) {
//   // var tail = null;
//   // if (l1.val < l2.val) {
//   //   tail = l1;
//   // } else {
//   //   tail = l2;
//   // }
//   // while (l1 && l2) {
//   //   debugger
//   //   if (l1.val > l2.val) {
//   //     l2 = l2.next;
//   //   } else {
//   //     tail = l1.next;
//   //     l1.next = l2;
//   //     l1 = tail;
//   //   }
//   // }
//   var tail = null;
//   if (l1.val < l2.val) {
//     tail = l1;
//   } else {
//     tail = l2;
//   }
//   while(l1 && l2) {
//     if (l1.val > l2.val) {
//       l2 = l2.next;
//     } else {
//       tail = l1.next;
//       l1.next = l2;
//       l2 = l2.next;
//       l1 = tail;
//     }
//   }
//   return tail;
// }

function mergeWhile(l1, l2) {
  
}

function merge(l1,l2) {
  if (l1 === null) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  var mh = null;
  if (l1.val < l2.val) {
    mh = l1;
    mh.next = merge(l1.next, l2);
  } else {
    mh= l2;
    mh.next = merge(l2.next, l1);
  }
  return mh;
}
p(merge(l1, l2));

