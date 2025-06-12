
var MedianFinder = function() {
    this.left = new PriorityQueue((a,b) => b - a)
    this.right = new PriorityQueue((a,b) => a - b)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
    if(this.right.isEmpty() || num > this.right.front()) {
        this.right.enqueue(num)
    } else {
        this.left.enqueue(num)
    }

    if(this.right.size() > this.left.size() + 1) {
        this.left.enqueue(this.right.dequeue())
    }
    if(this.left.size() > this.right.size() + 1) {
        this.right.enqueue(this.left.dequeue())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
    if(this.right.size() > this.left.size()) {
        return this.right.front()
    } else if (this.left.size() > this.right.size()) {
        return this.left.front()
    }
    return (this.left.front() + this.right.front()) / 2
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */