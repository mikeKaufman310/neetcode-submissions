class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let left = 0
        let right = newS.length - 1
        while (left !== right && right > left) {
            if (newS[left] !== newS[right]) {
                return false
            }
            right--
            left++
        }
        return true
    }
}
