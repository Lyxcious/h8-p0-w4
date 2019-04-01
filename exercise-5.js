function ubahHuruf(kata) {
    function findIndex(array1, target) {
        var index = "";
        for (var c = 0; c < array1.length; c++){
            if (array1[c] === target){
                index = c;
                return index;
            }
        }
    }
    huruf = "abcdefghijklmnopqrstuvwxyz";
    kataBaru = "";
    kata = kata.split("");
    for (var i = 0; i < kata.length; i++){
        hurufLama = kata[i];
        indexHurufLama = findIndex(huruf, hurufLama);
        kataBaru += huruf[indexHurufLama+1]
    }
    return kataBaru
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu