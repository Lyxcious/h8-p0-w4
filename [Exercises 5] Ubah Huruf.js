function ubahHuruf(kata) {
    huruf = "abcdefghijklmnopqrstuvwxyz";
    kataBaru = "";
    kata = kata.split("");
    for (var i = 0; i < kata.length; i++){
        hurufLama = kata[i];
        indexHurufLama = huruf.indexOf(hurufLama);
        kataBaru += huruf[indexHurufLama+1];
    }
    return kataBaru;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu