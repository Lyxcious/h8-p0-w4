function graduationDetail(data) {
  var hasil = {
      "0-40": [],
      "41-80": [],
      "81-100": [],
      avg: 0,
      highestScore: 0
  };
  var score = 0;
  var total = 0;
  for (var i = 0; i < data.length; i++){
    var temp = {
      "id": data[i].id,
      "first_name": data[i]["first_name"],
      "last_name": data[i]["last_name"],
      "score": data[i].score
    }
    if (temp.score <= 40){
        hasil["0-40"].push(temp);
    } else if (temp.score <= 80){
        hasil["41-80"].push(temp);
    } else if (temp.score <= 100){
        hasil["81-100"].push(temp);
    }
    if (temp.score > score){
        score = temp.score;
        hasil.highestScore = temp;
    }
    total += temp.score;
  }
  hasil.avg = total / data.length;
  return JSON.stringify(hasil, null, 2);
}
  // silahkan isi data di sini
  var scoreData = [
    { id: 1, first_name: 'Carrissa', last_name: 'Murley', score: 53, gender: 'Female', age: 18 },
    { id: 2, first_name: 'Winifield', last_name: 'Frisdick', score: 86, gender: 'Female', age: 18 },
    { id: 3, first_name: 'Romonda', last_name: 'Verling', score: 95, gender: 'Female', age: 18 },
    { id: 4, first_name: 'Yehudit', last_name: 'Isakovic', score: 32, gender: 'Female', age: 18 },
    { id: 5, first_name: 'August', last_name: "O' Mahony", score: 73, gender: 'Female', age: 18 },
    { id: 6, first_name: 'Scott', last_name: 'Rubra', score: 51, gender: 'Female', age: 18 }
  ]
  console.log(graduationDetail(scoreData));
  /*
  {
  '0-40': [
    { id: 4, first_name: 'Yehudit', last_name: 'Isakovic', score: 32 }
  ],
  '41-80': [
    { id: 1, first_name: 'Carrissa', last_name: 'Murley', score: 53 },
    { id: 5, first_name: 'August', last_name: "O' Mahony", score: 73 },
    { id: 6, first_name: 'Scott', last_name: 'Rubra', score: 51 }
  ],
  '81-100':[
    { id: 2, first_name: 'Winifield', last_name: 'Frisdick', score: 86 },
    { id: 3, first_name: 'Romonda', last_name: 'Verling', score: 95 }
  ],
  avg: 65,
  highestScore: { id: 3, first_name: 'Romonda', last_name: 'Verling', score: 95 }
  }
  */