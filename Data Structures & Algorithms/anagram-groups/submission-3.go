func groupAnagrams(strs []string) [][]string {
	// an anagram implies that it will have the same char count as another
	// so we can map char count to list of sting
	// and output by iterating through map values at the end
	strMap := make(map[string][]string) // {0, 0,...,0} => ["poop"]
	 
	n := len(strs)
	// loop through input
	for i:=0;i<n;i++{
		// get an array that is the char count
		strN := len(strs[i])
		tempCount := []int{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}
		for j:=0; j < strN; j++{
			tempCount[strs[i][j]-97]++ // there might be a typing issue here
		}
		// check if map has that entry
		tempVal, found := strMap[fmt.Sprint(tempCount)]
		if found {
			tempVal = append(tempVal, strs[i])
			strMap[fmt.Sprint(tempCount)] = tempVal
		} else {
			strMap[fmt.Sprint(tempCount)] = []string{strs[i]}
		}
		// add to value for key char count
	}
	// loop through keys and construct output
	out := [][]string{}
	for key := range strMap {
		out = append(out, strMap[key])
	}
	return out
}
