/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let res = 0;
    let stack = [this.root];
    let current = null;

    while (stack.length) {
      current = stack.pop();
      if (current) {
        res = res + current.val;
        if (current.children.length) {
          for (let child of current.children) {
            stack.push(child);
          }
        }
      }
    }

    return res;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let res = 0;
    let stack = [this.root];
    let current = null;

    while (stack.length) {
      current = stack.pop();
      if (current) {
        if (current.val % 2) {
          res += 1;
        }
        if (current.children.length) {
          for (let child of current.children) {
            stack.push(child);
          }
        }
      }
    }

    return res;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let res = 0;
    let stack = [this.root];
    let current = null;

    while (stack.length) {
      current = stack.pop();
      if (current) {
        if (current.val > lowerBound) {
          res += 1;
        }
        if (current.children.length) {
          for (let child of current.children) {
            stack.push(child);
          }
        }
      }
    }

    return res;
  }
}

module.exports = { Tree, TreeNode };
