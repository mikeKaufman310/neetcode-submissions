class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // buy low, sell high
        // buy needs precede the sell
        // this seems likely to be a greedy solution
        // sorting the input probably won't help us
        // 1 pass
        let max = 0
        // 2 pointer
        let left = 0
        let n = prices.length
        if (n === 1) {
            return 0
        }
        let right = 1
        while (left < right && right < n) {
            let cur = prices[right] - prices[left]
            if (cur > max) {
                max = cur
            } 
            if (prices[left] > prices[right]) {
                left = right
                right++
            }else{
                right++
            }
        }
        return max
    }
}
