class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let n = s.length
        let evenLen = n % 2 === 0
        let stck = []
        for (let i = 0; i < n; i++) {
            if (!evenLen && i === n / 2 - 1) { // odd length middle point case
                continue
            }
            if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
                stck.push(s[i])
                continue
            }
            let char = stck.pop()
            if ((s[i] === ']' && char !== '[') || (s[i] === '}' && char !== '{') || (s[i] === ')' && char !== '(')) {
                return false
            }
        }
        return true && stck.length === 0
    }
}
