function highestScore (students) {
    var score = [], nama = [];
    var tampungKelas = [];
    for (var i = 0; i < students.length; i++){
        tampungKelas.push(students[i].class);
    }
    tampungKelas.sort();
    var kelas = [];
    for (var j = 0; j < tampungKelas.length; j++){
        if (j === 0){
          kelas.push(tampungKelas[j]);
        } else {
            if (tampungKelas[j] !== tampungKelas[j-1]){
              kelas.push(tampungKelas[j]);
            }
        }
    }
    for (var k = 0; k < kelas.length; k++){
      score.push(0);
      nama.push(" ");
    }
    for (var l = 0; l < students.length; l++){
      for (var m = 0; m < kelas.length; m++){
        if (students[l].class === kelas[m]){
          if (students[l].score > score[m]){
            nama[m] = students[l].name;
            score[m] = students[l].score;
          }
        }
      }
    }
    var data = {};
    for (var n = 0; n < kelas.length; n++){
      data[kelas[n]] = {
        name: nama[n],
        score: score[n]
      };
    }
    return data
}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}