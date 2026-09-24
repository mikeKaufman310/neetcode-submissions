class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // can a sorted input help us? yes
        nums.sort((a, b) => a - b)
        let n = nums.length
        let out = []
        for (let i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] === nums[i-1]) {
                continue
            }
            let target = 0 - nums[i]
            // loop 2 pointers
            let left = i + 1
            let right = n - 1
            while (left < right) {
                let temp = nums[left] + nums[right]
                if (temp === target) {
                    let newArr = [nums[i], nums[left], nums[right]]
                    if (!out.includes(newArr)) {
                        out.push(newArr)
                    }
                    left++
                    right--
                    while(left < right && nums[left] === nums[left-1]) {
                        left++
                    }
                } else if (temp < target) {
                    left++
                } else {
                    right--
                }
            }
        }
        // rm duplicates
        return out
    }
}
