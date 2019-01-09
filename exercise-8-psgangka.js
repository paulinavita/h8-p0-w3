function pasanganTerbesar(num) {
    
  numStr = num.toString()
  max = numStr[0]+numStr[1]
  for (j = 0; j < numStr.length - 1; j++ ) {
    if (numStr[j]+numStr[j+1] > max) {
      max = numStr[j]+numStr[j+1]
     
    }
     console.log(max)
  }
return max
}


  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

