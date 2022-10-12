const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let current = l
    let size = 1
    let newCur = current
    while(newCur.next!=null){
        newCur=newCur.next
        size++
    }
    function remove(index){
        if(index<0 || index>=size){return
        }else if(index == 0){
            let iterator = current.next
            current = iterator
            return
        } else {
            let now = current
            let i  = 0
            while( i!== index-1){
                now = now.next
                i++
            }
            now.next = now.next.next
        }
    }
    let a = l
    let count = 1
    while(a!=null){
        if(a.value%k==0){ count--; remove(count) }
        a=a.next
        count++
    }
 return current

}


module.exports = {
  removeKFromList
};
