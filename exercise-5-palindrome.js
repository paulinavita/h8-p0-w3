function palindrome(kata) {
hasil = ''
   for(i = kata.length - 1; i >= 0 ;i--) {
       hasil += kata[i]
   }
   if (hasil == kata) {
       final = true
   }
   else if (hasil !== kata) {
       final = false
   }
   return final
   }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

//   kalo indeks[i]++ = indeks[i]--
//   maka true~