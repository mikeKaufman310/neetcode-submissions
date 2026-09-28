func isAnagram(s string, t string) bool {
	// same letter count for both
	// use hash map/set to count the letters in both
	// compare equality of both hash sets
	// need to check input length equality of strings first
	sLen := len(s)
	tLen := len(t)
	if sLen != tLen {
		return false
	}
	sMap := make(map[byte]int)
	tMap := make(map[byte]int)
	for i := 0; i < sLen; i++ {
		sMap[s[i]]++
		tMap[t[i]]++
	}
	for key := range sMap {
		if sMap[key] != tMap[key] {
			return false
		}
	}
	return true
}
