function Node(data,left,right) {
    this.data = data;
    this.left = left ? left : null;
    this.right= right ? left : null;  
}
function BST() {
    this.root = null;
    return {
        add: function(data) {
            const node = this.root;
            if(node == null) {
                this.root = new Node(data);
                return;
            } else {
                const searchNode = (node) =>{
                    if(data < node.data) {
                       if(node.left == null) {
                           node.left = new Node(data);
                           return node;
                       } else{
                           if(node.left !== null) {
                            return searchNode(node.left) 
                           }
                        }
                    }
                    else if(data > node.data) {
                        if(node.right == null) {
                            node.right = new Node(data);
                            return node;
                        } else{
                            if(node.right !== null) {
                             return searchNode(node.right) 
                            }
                         }
                     }else {
                         return null;
                     }
                }
                return searchNode(node);   
            }

        },
        remove: function(data) {
            const removeNode = function(node, data) {
              if (node == null) {
                return null;
              }
              if (data == node.data) {
                  console.log("Node Iterate data", data)
                // node has no children 
                if (node.left == null && node.right == null) {
                  return null;
                }
                // node has no left child 
                if (node.left == null) {
                  return node.right;
                }
                // node has no right child 
                if (node.right == null) {
                  return node.left;
                }
                // node has two children 
                var tempNode = node.right;
                console.log("temp",tempNode.data)
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
            this.root = removeNode(this.root, data);
            console.log(this.root.data)
          },

        minHeight: function(node = this.root){
            if(node == null) {
                return -1;
            } 
            let left = this.minHeight(node.left);
            let right = this.minHeight(node.right);
            if(left < right) {
                return left + 1;
            } else {
                return right + 1;
            }
        },
        maxHeight: function(node = this.root){
            if(node == null) {
                return -1;
            } 
            let left = this.minHeight(node.left);
            let right = this.minHeight(node.right);
            if(left > right) {
                return left + 1;
            } else {
                return right + 1;
            }
        },
        InorderTraversal : function (node = this.root) {
            let res = [];
            if(node == null) {
                return null;
            } else {
                function Traverse(node) {
                    if(node.left) Traverse(node.left);
                    res.push(node.data);
                    // if(node.data) this.InorderTraversal(node.data);
                    if(node.right) Traverse(node.right);    
                }

                Traverse(this.root);
                return res;
            }
        },
        preOrderTraversal : function (node = this.root) {
            let res = [];
            if(node == null) {
                return null;
            } else {
                function Traverse(node) {
                    res.push(node.data);
                    if(node.left) Traverse(node.left);
                    if(node.right) Traverse(node.right);    
                }

                Traverse(this.root);
                return res;
            }
        },
        levelOrderTraversal : function() {
            let result = [];
            let Q = []; 
            if (this.root != null) {
                Q.push(this.root);
                while(Q.length > 0) {
                    let node = Q.shift();
                    result.push(node.data);
                    if (node.left != null) {
                        Q.push(node.left);
                    };
                    if (node.right != null) {
                        Q.push(node.right);
                    };
                };
                return result;
            } else {
                return null;
            };
        
            // let result = [];
            // let Q = [];
            // if(this.root !== null) {
            //     Q.push(this.root);
            //     while(Q.length > 0) {
            //         let node = Q.shift();
            //         result.push(node.data);
            //         if (node.left != null) {
            //             Q.push(node.left);
            //         };
            //         if (node.right != null) {
            //             Q.push(node.right);
            //         };
            //     };
            // } 
            // return [...result];
            
        }
    }
}


let bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.remove(4);
console.log(bst.preOrderTraversal())
console.log(bst.levelOrderTraversal())