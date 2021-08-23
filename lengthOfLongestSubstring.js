var lengthOfLongestSubstring = function (s) {
  if (s.length > 0) {
    const w = new Set();
    let m = -1, max = 0;
    for (let k = 0; k < s.length; k++) {
      if (k != 0) {
        w.delete(s[k - 1]);
      }
      while (m + 1 < s.length && !w.has(s[m + 1])) {
        w.add(s[m + 1]);
        m++;
      }
      max = Math.max(max, m - k + 1);
    }
    return max;
  }
  return 0;
};
console.log(lengthOfLongestSubstring('bbb'));