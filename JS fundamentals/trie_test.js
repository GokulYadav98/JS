function Node(){
    this.keys = new Map();
    this.end = false;
    this.setEnd = ()=> {
        this.end = true;       
    }
    this.isEnd = () =>{
        return this.end;
    }
}

function Trie(){
    this.root = new Node();
    this.add = function add(word,node = this.root) {
        if(word.length == 0) {
            node.setEnd();
            return;
        }
        if(!node.keys.has(word[0])) {
            node.keys.set(word[0], new Node());
            return this.add(word.substr(1),node.keys.get(word[0]))
        } else {
            return this.add(word.substr(1),node.keys.get(word[0]))
        }
    }
    this.isWord = function(word) {
        function searchWord(word,node){
            if(!node.keys.has(word[0])){
                return false;
            } else {
                while(word.length > 1) {
                    return searchWord(word.substr(1), node.keys.get(word[0]));
                }
            }
            return node.keys.has(word[0]) && node.keys.get(word[0]).isEnd() ? true : false;
        }
        return searchWord(word,this.root);
    }
    this.checkPrefix = function(word) {
        function searchWord(word,node){
            if(!node.keys.has(word[0])){
                return false;
            } else {
                while(word.length > 1) {
                    return searchWord(word.substr(1), node.keys.get(word[0]));
                }
            }
            return node.keys.has(word[0]) ? true : false;
        }
        return searchWord(word,this.root);
    }

    this.printPrefixWord = function(prefix) {
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
                if(node.isEnd()) {
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
trie.add("Hello");
trie.add("hero");
trie.add("Happy");
trie.add("Aero");
trie.add("fappy");
// console.log(trie.isWord("Hello"))
// console.log(trie.isWord("Hell"))
// console.log(trie.checkPrefix("Hell"))

console.log(trie.printPrefixWord("A"))