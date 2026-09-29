func topKFrequent(nums []int, k int) []int {
	countMap:=make(map[int]int) // num to count, and iterate through keys later
	n:=len(nums)
	// populate count map
	for i:=0; i < n; i++ {
		countMap[nums[i]]++
	}
	// the max count in map to get bucket arr length
	maxCount:=0
	for key := range countMap {
		if countMap[key] > maxCount {
			maxCount=countMap[key]
		}
	}
	// create bucket arr
	bucketArr:=make([][]int, maxCount+1) // array where and index corresponds to a list of nums with that count
	for key := range countMap {
		if bucketArr[countMap[key]] == nil { // this might be wrong syntax
			bucketArr[countMap[key]] = []int{key}
		} else {
			bucketArr[countMap[key]] = append(bucketArr[countMap[key]], key) // this might be wrong syntax too
		}
	}
	//fmt.Println(bucketArr)
	// descend our buckets until k
	out:=[]int{}
	for j:=maxCount;j >=0;j-- {
		if k == 0 {
			break
		}
		if bucketArr[j] == nil {
			continue
		}
		m:=len(bucketArr[j])
		for l:=0; l < m; l++ {
			if k == 0 {
				break
			}
			out = append(out, bucketArr[j][l])
			k--
		}
	}
	return out
}
