class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let n = s.length
        if (n === 0) {
            return 0
        }
        set.add(s[0])
        let max = 1
        let cur = 1
        let left = 0
        for(let i = 1; i < n; i++) {
            if (set.has(s[i])) {
                // check for max
                if (cur > max) {
                    max = cur
                }
                // pop items from the front until not contained
                while(set.has(s[i])) {
                    set.delete(s[left])
                    left++
                }
                set.add(s[i])
                cur = set.size
            } else {
                set.add(s[i])
                cur++
            }
        }
        if (cur > max) {
            max = cur
        }
        return max
    }
}
