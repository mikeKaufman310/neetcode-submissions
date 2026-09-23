class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0
        }
        let numSet = new Set(nums)
        let maxCount = 1
        let curCount = 1
        for (let i = 0; i < nums.length; i++) {
            if (!numSet.has(nums[i] -1)) { // start of sequence
                let curNum = nums[i] + 1
                while (numSet.has(curNum)) { // track sequence
                    curCount++
                    curNum++
                }
                if (curCount > maxCount) {
                    maxCount = curCount
                }
                curCount = 1
            }
        }
        return maxCount
    }
}
