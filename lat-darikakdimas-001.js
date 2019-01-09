/* kali lebih dari 60 menit, display jam nya
kalo kurang dari 1 menit deplay detiknya aja
1 jam 3600 detik
1 jam 60 menit
1 menit 60 detik

tampilan 
00 : 00 : 00
jam : menit : detik
*/

function showTime (sekon) {

sekonAkhir = sekon%60
sekonKeMenit = Math.floor(sekon/60) // ini untuk show menitnya
if (sekonAkhir < 10) {
    sekonAkhir = '0' + sekonAkhir
}

menitAkhir = sekonKeMenit%60
menitJam = Math.floor(menitAkhir/60)
if (menitAkhir < 10) {
    menitAkhir = '0' + menitAkhir
}

jamJam = Math.floor(sekon/3600)
if (jamJam < 10) {
    jamJam = '0' + jamJam

}

console.log('Time :' + jamJam+ ':' + menitAkhir + ' :' + sekonAkhir)

}


console.log(showTime(36525))