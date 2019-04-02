function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    function findIndex(array1, target) {
        var index = "";
        for (var c = 0; c < array1.length; c++){
            if (array1[c] === target){
                index = c;
                return index;
            }
        }
    }
    var bayar, ruteAwal, ruteAkhir, data = [];
    for (var i = 0; i < arrPenumpang.length; i++){
        ruteAwal = findIndex(rute, arrPenumpang[i][1]);
        ruteAkhir = findIndex(rute, arrPenumpang[i][2]);
        bayar = (ruteAkhir-ruteAwal)*2000;
        data.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: bayar,
        });
    }
    return data
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]