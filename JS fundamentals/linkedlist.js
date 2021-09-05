
function Linkedlist(){
    this.head = null;
    this.length = 0;
    this.Node = function(element){
        this.element = element;
        this.next = null;
    }
    this.add = function(element){
        this.node = new Node(element);
        if(this.head == null) {
            this.head = this.node;
        } else {
            let currentNode = head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = this.node;
        }
        length++;
    }

    this.removeNode = function (element) {
        var currentNode = this.head;
        var previousNode;
        if(currentNode.element == element) {
            head = currentNode.next;
            this.length--;
        } else {
            while(currentNode.element != element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if(currentNode.element == element) {
                previousNode.next = currentNode.next;
                this.length--;
            }
        }
        return currentNode.element = element ? currentNode.element : null; 
    }

    this.isEmpty = function(){
        return this.length == 0;
    }

    this.indexOf = function(element){
        var currentNode = this.head;
        var index = -1;
        while(currentNode) {
            index++;
            if(currentNode.element == element) {
                return index;
            }
        }
        return -1;
    }
    this.elementAt = function(index) {
        var currentNode = this.head;
        var count = 0;
        while(count < index) {
            count+=1;
            currentNode = currentNode.next
        }
        return currentNode.element;
    }
    this.addElementAt = function(index,element){
        var currentNode = this.head;
        var previousNode;
        var node = new Node(element);
        var count = 0;
        if(index > this.length) {
            return -1;
        } else {
        while(count < index ) {
            count++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
            node.next = currentNode;
            previousNode.next = node;
        }       
        this.length++;
    } 

    this.removeNodeAt = function(index,element) {
        var currentNode = this.head;
        var previousNode;
        var count = 0;
        if(index < 0 || index > this.length) {
            return -1;
        }
        while(count < index) {
            if(element != currentNode.element) {
                count+=1
                previousNode = currentNode;
                currentNode = currentNode.next;
            } else {
                previousNode.next = currentNode.next
            }    
        }
        this.length --;
        return this.currentNode.element
     }
    
}