function highestScore (students) {
    var kelas = {};
    for (var i = 0; i < students.length; i++){
        if (kelas[students[i].class] === undefined){
            kelas[students[i].class] = {
                name: "",
                score: 0
            }
        }
    }
    for (var i = 0; i < students.length; i++){
        var temp = {
            name: students[i].name,
            score: students[i].score
        }
        for (var j = 0; j < Object.keys(kelas).length; j++){
            if (students[i].class === Object.keys(kelas)[j]){
                if (kelas[Object.keys(kelas)[j]].score < students[i].score){
                    kelas[Object.keys(kelas)[j]] = temp
                }
            }
        }
    }
    return kelas
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