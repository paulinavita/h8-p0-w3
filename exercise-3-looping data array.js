function indexing(input) {

result = []
for (i= 0; i < input.length; i++) { 
    isi = [
   'Nomor ID: ' + arrData[i][1], 
   'Nama Lengkap: ' + arrData[i][2],
   'TTL: ' + arrData[i][3] + ' ' + arrData[i][3],
   'Hobi: ' + arrData[i][4]]
   result.push(isi)
}
 return result
}


var arrData = 
[
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(indexing(arrData))
