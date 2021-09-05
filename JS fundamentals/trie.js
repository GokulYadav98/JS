function Node() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    }
    this.getEnd = () =>{
        return this.end;
    }
}

function Trie(){
    this.root = new Node();
    this.add = function(value,node=this.root){
        if(value.length == 0) {
            node.setEnd();
            return;
        } else {
            if(!node.keys.has(value[0])) {
                node.keys.set(value[0],new Node());
                return this.add(value.substr(1),node.keys.get(value[0]))
            } else {
                return this.add(value.substr(1),node.keys.get(value[0]))
            }
        }
    }

    this.isWord = function(word) {
        function searchWord(word,node) {
            
            if(!node.keys.has(word[0])) {
                return false;
            } else {
                while(word.length > 1) {
                   return searchWord(word.substr(1),node.keys.get(word[0]))
                }
            }
            return node.keys.has(word) && node.keys.get(word).getEnd()  ? true : false      } 

        return searchWord(word,this.root)
    }
    this.checkPrefix = function(word) {
        function searchWord(word,node) {
            if(!node.keys.has(word[0])) {
                return false;
            } else {
                while(word.length > 1) {
                   return searchWord(word.substr(1),node.keys.get(word[0]))
                }
            }
            return node.keys.has(word) && !node.keys.get(word).getEnd()  ? true : false      } 

        return searchWord(word,this.root)
    }
    this.removeWord = function (word,node=this.root) {
        if(!this.isWord(word)) {
            return;
        } else {
            function searchWord(word,node) {
            
                if(!node.keys.has(word[0])) {
                    return false;
                } else {
                    while(word.length > 2) {
                       return searchWord(word.substr(1),node.keys.get(word[0]))
                    }
                }
                
            }
            return searchWord(word,this.root)
           
        }
    }

    this.printPrefix = function(prefix) {
        let word = [];
        function getPrefix(string,node){
            // console.log(node)
            if(!node.keys.has(string[0])) {
                return ;
            } else {
                while(string.length > 1) {
                    return getPrefix(string.substr(1),node.keys.get(string[0]))
                }
            }
            console.log("............................");
            // console.log(node.keys.get(string[0]))
            return node.keys.get(string[0]);
        }
        let resNode = getPrefix(prefix,this.root)
        function searchWord(node,string) {
            if(node.keys.size !=0) {
                for(let val of node.keys.keys()) {
                    searchWord(node.keys.get(val), string.concat(val));
                }
                if(node.getEnd()) {
                    word.push(string);
                }
            } else {
                string.length > 0 ? word.push(string) : undefined;
                return;
            }
        }

        searchWord(resNode, prefix)
        return word.length > 0 ? word : null; 
    }
}
 

const trie = new Trie();

trie.add('abcd');
trie.add('bdsd');
trie.add('avbas');
trie.add('abc');
trie.add('asass');
trie.add('arfsgrs');
trie.add('afdkmsfkfldsfk');

// console.log(trie.isWord('abc'))

// console.log(trie.isWord('bdsd'));
console.log(trie.printPrefix('as'));
// trie.removeWord("bdsd");

