// Soal 1 Selasa
//Buatlah sebuah fungsi dengan nama balikString.
//Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

function balikString(str) {
    var res = ''
    for (i = str.length - 1; i>=0  ;i--) {
    res += str[i]
    }
  return res
}



// Example
//input "hello world!"
//output "!dlrow olleh"
