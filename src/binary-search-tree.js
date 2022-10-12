const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Unit{
  data;
  left= null
  right=null
  constructor(data){
      this.data = data
  }
}
class BinarySearchTree {
  rootOfTree = null;
  root() {
    return this.rootOfTree
  }
  add(data) {
    let unit = new Unit(data)
    if(this.rootOfTree == null){
        this.rootOfTree = unit
    }
    let current = this.rootOfTree
    while(true){
        if(data<current.data){
            if(current.left == null){
                current.left = unit;
                break
            }else{
                current = current.left
            }
        }else if(data>current.data){
            if(current.right == null){
                current.right = unit
                break
            }else{ current = current.right }
        }else{ break }
    }
  }
  has( data ) {
    let current = this.rootOfTree
    while(current.data != data){
        if(data < current.data){
            current = current.left
        } else if(data > current.data){  current = current.right}
        if(current == null ){
            return false
        }
    }
    return true
  }
  find(data) {
    let current = this.rootOfTree
    while(current.data != data){
        if(data < current.data){
            current = current.left
        } else if(data > current.data){  current = current.right}
        if(current == null ){ return null }
    }
    return current
  }
  remove(data) {
    let deleteUnit = function(unit,data){
      if(unit == null){ return null }
      if(data == unit.data){
          if(unit.left==null && unit.right==null){ return null }
          if(unit.left==null ){ return unit.right }
          if(unit.right==null ){ return unit.left }
          let current = unit.right
          for(let i in current.left){
              if(current.left != null){
                  current = current.left
              }
          }
          unit.data = current.data
          unit.right = deleteUnit(unit.right, current.data)
          return unit
      }else if( data > unit.data){
          unit.right = deleteUnit(unit.right,data)
          return unit
      }else if(data < unit.data){
          unit.left = deleteUnit(unit.left,data)
          return unit
      }
  }
  this.rootOfTree = deleteUnit(this.rootOfTree,data)
  }

  min() {
    let current = this.rootOfTree
    for(let i in current.left){
        if(current.left != null){
            current = current.left
        }
    }
    return current.data
  }

  max() {
    let current = this.rootOfTree
    for(let i in current.left){
        if(current.right != null){
            current = current.right
        }
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};