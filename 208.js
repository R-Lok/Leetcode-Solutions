class Trie {
    constructor() {
        this.root = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        traverse(this.root, word, 0)

        function traverse(node, word, index) {

            if(index >= word.length) {
                node.end = true
                return
            }
            
            if(!Object.hasOwn(node, word[index])) {
                 node[word[index]] = {}
            }

            traverse(node[word[index]], word, index + 1)
        }
    }
    
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        
        let node = this.root
        let index = 0

        while(index < word.length && Object.hasOwn(node, word[index])) {
            if(index === word.length - 1 && node[word[index]].end === true) {
                return true
            }
            node = node[word[index++]]
        }
        return false
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root
        let index = 0

        while(index < prefix.length && Object.hasOwn(node, prefix[index])) {
            if(index === prefix.length - 1)  {
                return true
            }
            node = node[prefix[index]]
            index++
        }
        return false
    }
}
