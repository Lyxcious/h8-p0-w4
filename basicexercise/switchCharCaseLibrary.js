/**
 [Instruction]
 Ubah huruf kecil menjadi besar, dan besar menjadi kecil.
 dilarang menggunakan .toUpperCase() dan .toLowerCase()
 gunakan teknik alphabet library!
 */

function switchCharCase(words) {
    var pecah = words.split("")
    for (var i = 0; i < pecah.length; i++){
        for (var j = 65; j <= 122; j++){
            if (j <= 90){
                if (pecah[i] === String.fromCharCode(j)){
                    pecah[i] = String.fromCharCode(j+32);
                    break;
                }
            }
            if (j <= 122){
                if (pecah[i] === String.fromCharCode(j)){
                    pecah[i] = String.fromCharCode(j-32);
                    break;
                }
            }
        }
    }
    return pecah
   
}

console.log(switchCharCase('aXBcEf')); //AxbCeF
console.log(switchCharCase('sAyA buKAN AnAK AlAy')); //SaYa BUkan aNak aLaY

// A = 65; Z = 90
// a = 97; z = 122