func hasDuplicate(nums []int) bool {
    countMap := make(map[int]int)
	n := len(nums)
	for i := 0; i < n; i++ {
		if countMap[nums[i]] == 0 {
			countMap[nums[i]] = 1
		} else {
			return true
		}
	}
	return false
}
