function urutkanAbjad(str) {
    daftarHuruf = "abcdefghijklmnopqrstuvwxyz";
    str = str.split("");
    indexHuruf = []
    for (var i = 0; i < str.length; i++){
        huruf = str[i];
        indexHuruf.push(daftarHuruf.indexOf(huruf));
    }
    indexHuruf.sort((a, b) => a - b);
    hurufBaru = "";
    for (var j = 0; j < indexHuruf.length; j++){
        d = indexHuruf[j];
        hurufBaru += daftarHuruf[d];
    }
    return hurufBaru
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'