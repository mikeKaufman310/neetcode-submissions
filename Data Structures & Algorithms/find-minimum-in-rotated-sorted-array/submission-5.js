class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // binary search
        let n = nums.length
        let l = 0
        let r = n - 1
        if (n === 1) {
            return nums[0]
        }
        if (n === 2) {
            return Math.min(nums[0], nums[1])
        }
        while (l < r) {
            let m = l + Math.floor((r-l)/2) 
            if (nums[m] < nums[r]) {
                r = m
            } else {
                l = m + 1
            }
        }
        return nums[l]
    }
}
