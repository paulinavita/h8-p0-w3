function perkalianUnik(arr) {
    // console.log(arr.length)
    arrAkhir = []
      for(i=0; i<arr.length ;i++) { 
        // ini ga min 1 soalnya length nya 3, trus dia krg dari 3 jadi sampe 2 aja
        hasilAwal = 0
        if (i == arr.length-1) { 
          //kalo ini di min 1 soalny kan pas i=2, cek if i == pjg array ga, pjg arraynya 3, 2 =3 ga? ga. brati masuk else kan. td i nya 2, brarti arr indeks 2 dikali arr indeks 3 trus hasilnya NaN. knp? soalny gk ada yg indeks 3. kan 012 doang nomor arrayny
          //makanya jadi dapetnya NaN td klo g di -1. inget!!
          hasilAwal = arr[0]*arr[i]
          arrAkhir.unshift(hasilAwal)
        }
        else {
          hasilAwal = arr[i]*arr[i+1]
          arrAkhir.unshift(hasilAwal)
          }
      }
      arrUrut = arrAkhir.sort()
      return arrUrut
  }
  
  // pake push salah, hasilnya klo push 8 24 12. kebalik da dia nambah dari depan ke blkg
  // kalo unshift juga sala. jd 12 24 8. knp? soalny dia nambahin dari depan. jd ng geser smua gt. 8 nya kgser jd pling blkg
  // klo soal kyknya di sort jd both ways diatas sbrny fine lol 
  
  
  //TEST CASES
    console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
    console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
   console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
   console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
  
  
// saalah baca soal yg atas //  