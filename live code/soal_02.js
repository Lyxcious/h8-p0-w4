/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string , 
function ini akan membalik elemen array, string yang berada di dalam elemen array juga akan dibalik jika panjang string GENAP

[EXAMPLE]
input: ['hari', 'senin', 'makan', 'sushi', 'enak']
proses: membalik isi array, dan membalik elemen array yang panjang katanya genap
output: [ 'kane', 'sushi', 'makan', 'senin', 'irah' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
*/

function doubleReverse(arr) {
  var tampungKata = "";
  var tampungR = [];
  if (arr[0] === undefined){
    return "Invalid input parameter"
  }
  for (var i = 0; i < arr.length; i++){
    tampungKata = arr[i];
    if (tampungKata.length % 2 == 0){
      var kataR = "";
      for (var j = tampungKata.length-1; j >= 0; j--){
        kataR += tampungKata[j];
      }
      tampungKata = kataR;
    }
    tampungR.push(tampungKata);
  }
  var hasil = [];
  for (var i = tampungR.length-1; i >= 0 ; i--){
    hasil.push(tampungR[i])
  }
  return hasil  
}

console.log(doubleReverse(['hari', 'senin', 'makan', 'sushi', 'enak']));
// [ 'kane', 'sushi', 'makan', 'senin', 'irah' ]
console.log(doubleReverse(['winter', 'is', 'coming']));
// [ 'gnimoc', 'si', 'retniw' ]
console.log(doubleReverse(['valar', 'morghulis', 'valar', 'dohaeris']));
//[ 'sireahod', 'valar', 'morghulis', 'valar' ]
console.log(doubleReverse([]))
// invalid input parameter