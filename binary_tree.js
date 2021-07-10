var BST = function () {
  var Node = function (leftChild, key, value, rightChild, parent) {
      return {
        leftChild: typeof leftChild === "undefined" ? null : leftChild,
        key: typeof key === "undefined" ? null : key,
        value: typeof value === "undefined" ? null : value,
        rightChild: typeof rightChild === "undefined" ? null : rightChild,
        parent: typeof parent === "undefined" ? null : parent,
      };
    },
    /*
     * Private Variable: root
     *
     * The root nade of the BST.
     */
    root = new Node(),
    searchNode = function (node, key) {
      if (node.key === null) {
        return null; // key not found
      }

      var nodeKey = parseInt(node.key, 10);

      if (key < nodeKey) {
        return searchNode(node.leftChild, key);
      } else if (key > nodeKey) {
        return searchNode(node.rightChild, key);
      } else {
        // key is equal to node key
        return node.value;
      }
    },
    insertNode = function (node, key, value, parent) {
      if (node.key === null) {
        node.leftChild = new Node();
        node.key = key;
        node.value = value;
        node.rightChild = new Node();
        node.parent = parent;
        return true;
      }

      var nodeKey = parseInt(node.key, 10);

      if (key < nodeKey) {
        insertNode(node.leftChild, key, value, node);
      } else if (key > nodeKey) {
        insertNode(node.rightChild, key, value, node);
      } else {
        // key is equal to node key, update the value
        node.value = value;
        return true;
      }
    },
    traverseNode = function (node, callback) {
      if (node.key !== null) {
        traverseNode(node.leftChild, callback);
        callback(node.key, node.value);
        traverseNode(node.rightChild, callback);
      }

      return true;
    },
    minNode = function (node) {
      while (node.leftChild.key !== null) {
        node = node.leftChild;
      }

      return node.key;
    },
    maxNode = function (node) {
      while (node.rightChild.key !== null) {
        node = node.rightChild;
      }

      return node.key;
    },
    successorNode = function (node) {
      var parent;

      if (node.rightChild.key !== null) {
        return minNode(node.rightChild);
      }

      parent = node.parent;
      while (parent.key !== null && node == parent.rightChild) {
        node = parent;
        parent = parent.parent;
      }

      return parent.key;
    },
    predecessorNode = function (node) {
      var parent;

      if (node.leftChild.key !== null) {
        return maxNode(node.leftChild);
      }

      parent = node.parent;
      while (parent.key !== null && node == parent.leftChild) {
        node = parent;
        parent = parent.parent;
      }

      return parent.key;
    };

  return {
    search: function (key) {
      var keyInt = parseInt(key, 10);

      if (isNaN(keyInt)) {
        return undefined; // key must be a number
      } else {
        return searchNode(root, keyInt);
      }
    },

    insert: function (key, value) {
      var keyInt = parseInt(key, 10);

      if (isNaN(keyInt)) {
        return undefined; // key must be a number
      } else {
        return insertNode(root, keyInt, value, null);
      }
    },

    traverse: function (callback) {
      if (typeof callback === "undefined") {
        callback = function (key, value) {
          print(key + ": " + value);
        };
      }

      return traverseNode(root, callback);
    },

    min: function () {
      return minNode(root);
    },

    max: function () {
      return maxNode(root);
    },

    /*
     * Method: successor
     *
     * Find the key that successes the root node.
     *
     * Parameters: none
     *
     * Returns: the key of the node that successes the root node.
     *
     */
    successor: function () {
      return successorNode(root);
    },

    /*
     * Method: predecessor
     *
     * Find the key that preceeds the root node.
     *
     * Parameters: none
     *
     * Returns: the key of the node that preceeds the root node.
     *
     */
    predecessor: function () {
      return predecessorNode(root);
    },
  };
};

/*
 * Tests
 */

var ipTree = new BST();
ipTree.insert(4, "test4");
ipTree.insert(1, "test1");
ipTree.insert(10, "test10");
ipTree.insert(2, "test2");
ipTree.insert(3, "test3");
ipTree.insert(9, "test9");
ipTree.insert(8, "test8");
ipTree.insert(5, "test5");
ipTree.insert(7, "test7");
ipTree.insert(6, "test6");

ipTree.traverse(function (key, value) {
  print("The value of " + key + " is " + value + ".");
});

print("Searching for 3 results in: " + ipTree.search(3));

print("Min is " + ipTree.min());
print("Max is " + ipTree.max());

print("The successor of root is: " + ipTree.successor());
print("The predecessor of root is: " + ipTree.predecessor());
