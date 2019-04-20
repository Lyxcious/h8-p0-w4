function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var bayar, ruteAwal, ruteAkhir, data = [];
    for (var i = 0; i < arrPenumpang.length; i++){
        ruteAwal = rute.indexOf(arrPenumpang[i][1]);
        ruteAkhir = rute.indexOf(arrPenumpang[i][2]);
        bayar = Math.abs(ruteAkhir-ruteAwal)*2000;
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