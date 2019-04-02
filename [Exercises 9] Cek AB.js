function checkAB(num) {
    indexA = [];
    indexB = [];
    num = num.split(" ").join("");
    for (var i = 0; i < num.length; i++){
        if (num.charAt(i) == "a"){
            indexA.push(i);
        } else if (num.charAt(i) == "b") {
            indexB.push(i);
        }
    }
    jarakAB = [];
    for (var j = 0; j < indexA.length; j++){
        posisiA = indexA[j];
        for (var k = 0; k < indexB.length; k++){
            posisiB = indexB[k];
            jarak = Math.abs(posisiA - posisiB);
            jarakAB.push(jarak);
        }
    }
    if (jarakAB.length === 0){
        return false
    } else {
        for (var l = 0; l < jarakAB.length; l++){
            if (jarakAB[l] <= 3){
                return true;
                break;
            }
        }
    }
    return jarakAB
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // true