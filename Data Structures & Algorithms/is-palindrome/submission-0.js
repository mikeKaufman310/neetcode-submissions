class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // immediately i think of this as a stack problem
        // we can remove white space first
        // then we push half of the letters to the stack
        // we then compare and pop
        // edge case: odd length string

        // remove the white space
        let sRep = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        // get length and determine if even of odd
        const n = sRep.length
        const even = n % 2 === 0
        let stack = []
        // push half letters to stack
        let i = 0
        for (; i < (n/2); i++) {
            stack.push(sRep[i])
        }
        console.debug(stack)
        if (!even) {
            //i++
            stack.pop()
        }
        for (; i < n; i++) {
            if (stack.pop() !== sRep[i]) {
                return false
            }
        }
        return true
    }
}
