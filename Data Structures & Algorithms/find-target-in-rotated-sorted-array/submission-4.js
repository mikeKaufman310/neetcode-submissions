class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // we know the solution to the min version of this
        // now we have a target
        // binary search could work?
        // 3 5 6 0 1 2
        // lm r
        // target == 1
        // if target <= m && target < l => its to the right => l = m
        // if target <= m && target >= l => its to the left => r = m
        // if target > m && target < r => its to the right
        // loop while r != l

        let n = nums.length
        let out = -1
        let r = n -1
        let l = 0
        while (l <= r) { // maybe its r >= l
            let m = Math.floor((l+r)/2)
            //console.debug(nums[m])
            if (nums[m] === target) {
                return m
            }
            if (nums[l] <= nums[m]) {
                if (target > nums[m] || target < nums[l]) {
                    l = m + 1
                } else {
                    r = m - 1 
                }
            } else {
                if (target < nums[m] || target > nums[r]) {
                    r = m - 1 
                } else {
                    l = m + 1
                }
            }
        }

        return out
    }
}
