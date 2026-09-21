class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let curCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
       const n = strs.length
       let map = {}
       for (let i = 0; i < n; i++) {
        let m = strs[i].length
        for (let j = 0; j < m; j++) {
            curCount[strs[i][j].charCodeAt(0)-97] = curCount[strs[i][j].charCodeAt(0)-97] + 1
        }
        //console.debug(curCount)
        map[curCount] = map[curCount] ? [...map[curCount],strs[i]] : [strs[i]]
        curCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
       }
       let out = []
       for (const key of Object.keys(map)) {
        out.push(map[key])
       }
       return out
    }
}
