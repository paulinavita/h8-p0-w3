function perkalianUnik(arr) {
    arrAkhir = []
    
    for (i = 0; i < arr.length ;i++) {
        counter = 1
        for (j = 0; j < arr.length; j++) {
            if (i != j) {
            counter = counter*arr[j]
            }    
        }
     arrAkhir.push(counter)
    }
    return arrAkhir
}

    
  
    //TEST CASES
    console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
    // console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
    // console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
    // console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
    // console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
    
//cara lain

// function multiply(array) {
//     var arrRes = [];
//     var sum = 1; //knp satu? pas diassign jadi nilai baru yang udah kekali terus sama array ke i. 
//     for (var i=0; i<array.length; i++) {
//         sum = sum * array[i];
//     }
//     for (var j=0; j<array.length; j++) {
//        arrRes.push(sum) //buat nambahin sebanyak panjang array soal, diulang
//     }
//     for (var k=0; k<array.length; k++) { //ngedapetin hasilnya
//        divresult = sum/array[k]
//        arrRes[k] = divresult
//     }
//     return arrRes
// }

// console.log(multiply([2,4,6])) // [24, 12, 8]
// console.log(multiply([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
    