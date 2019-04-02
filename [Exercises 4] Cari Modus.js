function cariModus(arr) {
    function findIndex(array1, target) {
        var index = "";
        for (var c = 0; c < array1.length; c++){
            if (array1[c] === target){
                index = c;
                return index;
            }
        }
    }
    tampungAngka = [];
    tampungPerulangan = [];
    arr.sort((a, b) => a - b)
    for (var k = 0; k < arr.length; k++){
        if (k === 0){
            tampungAngka.push(arr[k]);
            tampungPerulangan.push(1);
        } else {
            if (arr[k] === arr[k-1]){
                tampungPerulangan[tampungPerulangan.length-1]++;
            } else {
                tampungAngka.push(arr[k]);
                tampungPerulangan.push(1);
            }
        }
    }
    if (tampungPerulangan.length === 1) {
        return -1;
    } else if (tampungPerulangan.length === arr.length){
        return -1;
    } else {
        perulanganTerbesar = Math.max.apply(Math, tampungPerulangan);
        indexAngka = findIndex (tampungPerulangan, perulanganTerbesar)
        return tampungAngka[indexAngka]
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1