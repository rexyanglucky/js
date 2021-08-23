 function getLongestPalindrome(A, n) {
  // write code here
  let max = 0;
  for (let k = 1 ; k < n - 1; k++) {
      let l = k - 1, r = k+1;
      let count = 1;
      if (A[l] === A[k] && A[l] != A[r]){
          max = Math.max(max, 2);
          r = k;
          continue;
          count = 0;
      } 
      while(l>=0 && r<n && A[l] === A[r]) {
        //  console.log(A.slice(l,r));
         l--;
         r++;
         count = count + 2;
      }

      max = Math.max(max, count);
  }
  return max;
}

console.log(getLongestPalindrome('addddddda', 9));
