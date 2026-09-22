class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // do bucket sort (not max heap)
        // get counts of each number using map
        // put into bucket array
        // reverse traverse array to construct output
        let countMap = {}
        const n = nums.length
        for (let i = 0; i < n; i++) {
            countMap[nums[i]] = countMap[nums[i]] ? countMap[nums[i]] + 1 : 1
        }
        let maxCount = 0
        for (const key of Object.keys(countMap)) {
            if (countMap[key] > maxCount) {
                maxCount = countMap[key]
            }
        }
        let buckets = new Array(maxCount+1) // this should be max count
        // populate buckets with arrays
        for (let i = 0; i < maxCount+1; i++) {
            buckets[i] = []
        }
        for (const key of Object.keys(countMap)) {
            if (buckets[countMap[key]].length === 0) {
                buckets[countMap[key]] = [key]
                continue
            }
            buckets[countMap[key]] = [...buckets[countMap[key]], key]
        }
        let nk = k
        let out = []
        for (let i = buckets.length - 1; i >=0; i--) {
            if (nk === 0) {
                break
            }
            if (buckets[i].length > 0) {
                out = [...out, buckets[i].splice(0, 1)]
                i++
                nk--
            }
        }
        return out
    }
}
