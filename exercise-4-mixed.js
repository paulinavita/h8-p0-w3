/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
hasil = input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
console.log(input) //ga ngerti???! knp yang di console input???

tglLahir = hasil.slice(2,3)
strTglLahir = tglLahir.toString() //dijadiin string dlu soalnya biar bisa dipisah pake
ambilBulan = strTglLahir.split('/')
  switch (ambilBulan[1]) { 
   // trus index ke brp DARI ARRAY? [1] makanya di bracketin krn mo ambil yg tngah aj gtu
    case '01' : 
    ambilBulan='January';
    break;
    case '02' :
    ambilBulan='February';
    break;
    case '03' : 
    ambilBulan='March';
    break;
    case '04' : 
    ambilBulan='April';
    break;
    case '05' : 
    ambilBulan='May';
    break;
    case '06' : 
    ambilBulan='June';
    break;
    case '07' :
    ambilBulan='July';
    break;
    case '08' : 
    ambilBulan='August';
    break;
    case '09' : 
    ambilBulan='September';
    break;
    case '10' : 
    ambilBulan='October';
    break;
    case '11' : 
    ambilBulan='November';
    break;
    case '12' : 
    ambilBulan='December';
    break;
    default :
    console.log('Data yang Anda masukkan salah');
    break;
    }
  console.log (ambilBulan)

ambilBulan = strTglLahir.split('/')
urutanBulan = ambilBulan.sort(function(value1, value2) { return value2 - value1 }) //ngga ngerti kenapa - works while < doesn't. tanya!
console.log(urutanBulan)

joinBulan = strTglLahir.split('/')
console.log(joinBulan.join("-"))

strNama = input[1].toString()
console.log(strNama)
namaAkhir = strNama.slice(0,15)

return namaAkhir
}


console.log(dataHandling2(input))