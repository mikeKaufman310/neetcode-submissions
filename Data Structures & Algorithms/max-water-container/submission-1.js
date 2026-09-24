class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let n = heights.length
        let right = n
        let curMax = 0
        while (left < right) {
            let tempMaxHeight = Math.min(heights[left], heights[right])
            let tempMaxWidth = right - left
            let tempMax = tempMaxHeight * tempMaxWidth
            if (tempMax > curMax) {
                curMax = tempMax
            }
            if (heights[left] <= heights[right]) {
                left++
            } else {
                right--
            }
        }
        return curMax
    }
}
