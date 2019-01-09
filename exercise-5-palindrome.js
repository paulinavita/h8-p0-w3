function palindrome(kata) {
   for(i = 0; i <= kata.length-1 ;i++) {
       var hasil = ''
       hasil += kata[i]
   }
   if (hasil = kata) {
       return true
   }
   else {
       return false
   }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

//   kalo indeks[i]++ = indeks[i]--
//   maka true~