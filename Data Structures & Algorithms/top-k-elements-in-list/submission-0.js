class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count by hash map
        // then put counts in sorted descending order?
        let map = {}
        let n = nums.length
        for (let i = 0 ; i < n; i++) {
            map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1
        }
        let kCount = 0
        let out = []
        while (kCount < k) {
            let maxKey = -1001
            let maxCount = 0
            for (const key of Object.keys(map)) {
                if (map[key] > maxCount) {
                    maxCount = map[key]
                    maxKey = key
                }
            }
            out = [...out, maxKey]
            map[maxKey] = undefined
            kCount++
        }
        return out
    }
}
