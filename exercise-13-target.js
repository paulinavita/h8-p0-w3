function targetTerdekat(arr) {
    distX = arr.indexOf('x')
    distO = arr.indexOf('o')
   
    var jarak = 0
    var jarakEnd = arr.length

    maxX = 0
    for (m = 0; m < arr.length; m++) {
        if (arr[m] === 'x') {
            maxX = m
        }
    }
    maxO = 0
    for (n = 0; n < arr.length; n++) {
        if (arr[n] === 'o') {
            maxO = n
        }
    }

    // console.log(distX)
    // console.log(distX, maxX)
    // console.log(distO)
    // console.log(maxO)
    
    for (i = 0; i < arr.length;i++) {
        if (distX === -1) { //kenapa -1? ga undefined?
                return 0
        }

        if (arr[i] === 'o') {
            if (distO > maxX) { //kalo o lebih besar dari max X then o - x
                jarak = distO - maxX
            }
            else if (maxO > distO) { // kalo max o > jarak o, dist o nya jadi max o, trus dikurangin
                distO = maxO
                jarak = distO - maxX
            } 
            else { //biasa aja. x min o. jarak x - jarak o
                jarak = distX-distO
            }
        }
    }
    return jarak
}

      // TEST CASES
      console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
      console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
      console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
      console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
      console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
    //   console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x', 'o'])); // 1
    
    //nilai o max
    // 2
    // 0
    // 6
    // 2
    // 1