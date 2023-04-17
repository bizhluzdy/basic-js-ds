const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }
  add(data) {
    const node = {
      data: data,
      left: null,
      right: null
    }
    if (this.rootNode === null) {
      this.rootNode = node;
    } else {
      let current = this.rootNode;
      while(true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = node;  
            break;
          } else {
            current = current.left;
          }
        } else if (data > current.data) {
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  }
  has(data) {
    return this.find(data) !== null;
  }
  find(data) {
    let current = this.rootNode;
    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.rootNode = removeNode(this.rootNode, data);
  }
  min() {
    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current !== null ? current.data : null;
  }
  max() {
    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }
    return current !== null ? current.data : null;
  }
}

module.exports = {
  BinarySearchTree
};