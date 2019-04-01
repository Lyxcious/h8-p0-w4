function digitPerkalianMinimum(angka) {
    arrayFaktor = []
    for (i = 1; i <= angka; i++){
        faktor = angka/i;
        if (Math.floor(faktor) * i === angka){
            d = String(i) + String(faktor)
            arrayFaktor.push(d)
        }
    }
    digitFaktor = []
    for (j = 0; j < arrayFaktor.length; j++){
        digit = arrayFaktor[j].length;
        digitFaktor.push(digit)
    }
    digitMinimum = Math.min.apply(Math, digitFaktor)
    return digitMinimum
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2