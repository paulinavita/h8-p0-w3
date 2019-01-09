function angkaPalindrome(num) {
  var isPalindrome = false // ini initializationnya
    while (isPalindrome == false) { //selama masih salah ngulang
      num++ //kuncinya disini harus ditambah dulu
      numStr = num.toString()
      numStrBalik = ''
      for (var i = numStr.length - 1 ; i >= 0 ;i--) {
        numStrBalik += numStr[i]
      }
      if (numStrBalik == numStr) {
        return num
      }
    }
  }
  
  
     
    // TEST CASES
    console.log(angkaPalindrome(8)); // 9
    console.log(angkaPalindrome(1)); // 11
    console.log(angkaPalindrome(117)); // 121
    console.log(angkaPalindrome(175)); // 181
    console.log(angkaPalindrome(1000)); // 1001