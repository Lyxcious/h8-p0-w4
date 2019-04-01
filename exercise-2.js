function fpb(angka1, angka2) {
    if (angka1 > angka2){
        for (var i = 0; i <= angka1; i++){
            if (angka1%i == angka2%i && angka1%i == 0){
                var a = i;
            } else {}
        }
        return a
    }
    if (angka1 < angka2){
        for (var i = 0; i <= angka2; i++){
            if (angka2%i == angka1%i && angka2%i == 0){
                var a = i;
            } else {}
        }
        return a
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1