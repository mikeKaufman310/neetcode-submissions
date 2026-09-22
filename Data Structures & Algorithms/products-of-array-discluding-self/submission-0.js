class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // 1 2 3 4
        // have pre and post vals starting at 1
        // first pass prefix: 1 1 2 6
        // second pass: 24 12 8 6
        let pre = 1
        let post = 1
        let n = nums.length
        let out = new Array(n)
        // first pass
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                out[i] = 1
                pre = nums[i]
                continue
            }
            out[i] = pre
            pre*=nums[i]
        }
        // second pass
        for (let i = n-1; i >= 0; i--) {
            if (i === n-1) {
                post*=nums[i]
                continue
            }
            out[i]*=post
            post*=nums[i]
        }
        return out
    }
}
