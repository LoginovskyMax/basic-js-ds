const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class ListNode {
  value
  next = null
  constructor(x) {
   this.value = x;
  }
}
class Queue {
  firstElement = null
  lastElement = null
  size = 0
  getUnderlyingList() {
    let arr = []
     let i = this.firstElement
     while(i!=null){
        arr.push(i.value)
        i=i.next
     }
     this.firstElement = null
     arr.forEach(item=>this.enqueue(item))
     return this.firstElement
  }

  enqueue(value) {
    let unit = new ListNode(value)
    if(this.firstElement == null && this.size<1){
       this.firstElement = unit
    }else{
       unit.next = this.firstElement
       this.firstElement = unit
    }
    this.size+=1
  }

  dequeue() {
    if(this.size ==0){return}
    if(this.size ==1){
      let newElem = this.firstElement
      this.firstElement = null
      this.size--
      return newElem
    }
   
    let current = this.firstElement
    while(current.next.next!= null){
      current = current.next
    }
    this.lastElement = current
    let newElem = current.next
    current.next = null
    this.size--
    return newElem.value
  }
}

module.exports = {
  Queue
};
