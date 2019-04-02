function graduates (students) {
    var score = [], nama = [], data1 = [];
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
        score[k] = [];
        nama[k] = [];
        data1[k] = [];
    }
    for (var l = 0; l < students.length; l++){
        for (var m = 0; m < kelas.length; m++){
            if (students[l].class === kelas[m]){
                if (students[l].score > 75){
                nama[m].push(students[l].name);
                score[m].push(students[l].score);
                }
            } 
        }
    }
    var data = {};
    for (var n = 0; n < kelas.length; n++){
        for (var o = 0; o < nama[n].length; o++){
            data1[n].push({
              name: nama[n][o],
              score: score[n][o]
            });
        }
        data[kelas[n]] = data1[n];
    }
    return data
}

  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}