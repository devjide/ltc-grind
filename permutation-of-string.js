/*
**** PERMUTATION OF STRINGS (https://leetcode.com/problems/permutation-in-string/description/)

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
*/

const s1 = "adc",
  s2 = "dcda";
const myPermutationOfStringSolution = (s1, s2) => {
  let d = new Object();
  const s = s1.split("").sort().join("");
  for (let char in s) {
    if (d[s[char]]) {
      d[s[char]]++;
    } else {
      d[s[char]] = 1;
    }
  }

  generateDict = (window) => {
    const w = new Object();
    for (let char in window) {
      if (w[window[char]]) {
        w[window[char]]++;
      } else {
        w[window[char]] = 1;
      }
    }
    return w;
  };

  let left = 0;
  let right = s1.length;
  let current = "";

  while (right <= s2.length) {
    current = s2
      .slice(left, right)
      .split("")
      .sort()
      .join("");
    if (JSON.stringify(generateDict(current)) === JSON.stringify(d)) {
      return true;
    }
    left++;
    right++;
  }
  return false;
};

console.log(myPermutationOfStringSolution(s1, s2));



//  s1 = "ab", s2 = "eidbaooo"
// Input: s1 = "ab", s2 = "eidbaooo"
var checkInclusion = function (s1, s2) {
	// If s1 is larger than s2 then match is not possible
	// i.e (s1 cannot be substring of s2)
	if (s1.length > s2.length) return false;
	let neededChar = {}; //To Store the frequency/count of required string s1
	for (let i = 0; i < s1.length; i++) {
		// Initially neededChar[s1[i]] will be undefined and
		// undefined || 0 will return 0. So we increment it by 1
		neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
	}
	/*
	Now we have neededChar
	i.e neededChar={
		a:1,
		b:1
	}
	*/
	let left = 0, //left pointer/index of the sliding window
		right = 0, //right pointer/index of the sliding window
		requiredLength = s1.length //length of the substring required in s2

	// Now iterate until the right index of window is lesser than length of s2
	while (right < s2.length) {
		// If we found s2 character in s1 i.e in neededChar then we decrease requiredLength
		if (neededChar[s2[right]] > 0) requiredLength--;
		// Since we have encountered new char i.e s2[right] we decrease it's
		// count in neededChar even if it is not present in neededChar because we only care about neededChars
		neededChar[s2[right]]--;
		right++ //window is incremented by 1 step

		// Now if our requiredLength becomes 0 it means we have found a match of the s2 substring
		// So we return true
		if (requiredLength === 0) return true;

		// If our window length is equal to s1 length (length of string to search in s2)
		// then we have to remove left element of window i.e left++ and add new element from right
		// will be added in next iteration
		if (right - left === s1.length) {
			// if the left element we are removing was a required character then we increase requiredLength
			// because that element will no longer be the part of sliding window
			if (neededChar[s2[left]] >= 0) requiredLength++;
			// We will also increase the count of left element removed from window
			neededChar[s2[left]]++;
			// And finally we will decrease the window size by 1 from left i.e left++
			left++
		}
	}
	// If match was not found we return false
	return false;
};

console.log(checkInclusion(s1, s2))
