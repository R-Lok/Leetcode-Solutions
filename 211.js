class WordDictionary {
    constructor() {
        this.root = 
        {
            end: false
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {

        let node  = this.root
        let index = 0

        traverse(node, word, index)

        function traverse(node, word, index) {

            if(index === word.length) {
                node.end = true
                return
            }

            if(!Object.hasOwn(node, word[index])) {
                node[word[index]] = {end: false}
            } 
            traverse(node[word[index]], word, index + 1)
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        let index = 0
        let node  = this.root

        function traverse(node, word, index) {

            if(index === word.length && node.end === true) {
                return true
            }

            if(index === word.length && !node.end) {
                return false
            }

            if(word[index] === '.') {
                for(const key in node) {
                    if(traverse(node[key], word, index + 1)) {
                        return true
                    }
                }
                return false
            } 

            if(Object.hasOwn(node, word[index])) {
                return traverse(node[word[index]], word, index + 1)
            } else {
                return false
            }
        }

        return traverse(node, word, index)
    }
}
