func twoSum(nums []int, target int) []int {
    n := len(nums)
	m := make(map[int]int)
	for i:=0;i<n;i++ {
		m[nums[i]] = i
	}
	for i:=0;i<n;i++ {
		dif := target-nums[i]
		if j, exists := m[dif]; exists && j != i {
			return []int{i, j}
		}
	}
	return []int{}
}
