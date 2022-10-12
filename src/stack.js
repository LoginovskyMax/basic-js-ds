const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Unit {
  data
  last = null
  next = null
    constructor(x) {
      this.data = x;
    }
  }
class Stack {
  firstElement = null
  lastElement = null
  size = 0
  push(element) {
   let unit = new Unit(element)
   if(this.firstElement == null && this.size < 1){
      this.firstElement = unit
   }else{
      let current = this.firstElement
      for(let i in current.next){
        if(current.next != null){
            current = current.next
        }
    }
      current.next = unit
   }
   this.size +=1
   this.lastElement = unit
  }
  pop() {
      if(this.size == 1){
          let newElement = this.firstElement
          this.firstElement = null
          this.size-=1
          return newElement.data
      }
      let current = this.firstElement
      for(let i in current.next){
        if(current.next.next != null){
            current = current.next
        }
    }
      this.lastElement = current
      let newElement = current.next
      current.next = null
      this.size-=1
      return newElement.data
  }
  peek() {
    return this.lastElement.data
  }
}

module.exports = {
  Stack
};
