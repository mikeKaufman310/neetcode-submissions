class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // construct one string
        // get input as list of strings
        // for each input, our output should contain...
        // 1. the number of strings in input
        // 2. the length of an individual string
        // we need a delimeter between length and subsequent string
        // example "[one, two]"
        // 2X3Xone3Xtwo
        const n = strs.length
        const del = "X"
        let out = n + del
        for (const s of strs) {
            let len = s.length
            out+=(len + del+ s)
        }
        return out
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // first we need to get num of strings
        // then for each length we need to construct a string and add it to an output array
        let n = 0
        let i = 0
        let nStr = ""
        // length of strings
        for (;i < str.length; i++) {
            if (str[i] === 'X') {
                i++
                break
            }
            nStr+=str[i]
        }
        n = parseInt(nStr, 10)
        // go through each remain string
        let out = []
        for (let j = 0; j < n; j++) {
            // get length of string
            let curStr = ""
            let curN = 0
            let curNStr = ""
            for (; i < str.length; i++) {
                if (str[i] === 'X') {
                    i++
                    break
                }
                curNStr += str[i]
            }
            curN = parseInt(curNStr, 10)
            let tempCount = 0
            for (; tempCount < curN; tempCount++) {
                curStr+=str[i]
                i++
            }
            out = [...out, curStr]
        }
        return out
    }
}
