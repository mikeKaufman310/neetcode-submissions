func characterReplacement(s string, k int) int {
    n := len(s)
    left := 0
    right := 0
    max := 0
    cur := 0
    countMap := make(map[byte]int)
    for ; right < n; {
        // add right pointer to count map
        if countMap[s[right]] == 0 {
            countMap[s[right]] = 1
        } else {
            countMap[s[right]]++
        }
        // find max count
        maxCount := 0
        for key := range countMap {
            if countMap[key] > maxCount {
                maxCount = countMap[key]
            }
        }
        if right - left + 1 - maxCount <= k {
            cur++
            if cur > max {
                max = cur
            }
        } else {
            // make it true by moving left
            for right - left + 1 - maxCount > k {
                countMap[s[left]]--
                left++
                maxCount = 0
                for key := range countMap {
                    if countMap[key] > maxCount {
                        maxCount = countMap[key]
                    }
                }
            }
            cur = right - left + 1
        }
        right++
    }
    if cur > max {
        max = cur
    }
    return max
}
