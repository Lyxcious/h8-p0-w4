var listOfPersons = [
    {
    id: 1,
    "first name": "Andy",
    last_name: "Klouz",
    email: "andy0@gmail.com",
    gender: "Male",
    age: 33,
    score: 80
  },
  {
    id: 2,
    "first name": "Refi",
    last_name: "Castagne",
    email: "refi@gmail.com",
    gender: "Male",
    age: 22,
    score: 75
  }, {
    id: 3,
    "first name": "Irvy",
    last_name: "Florence",
    email: "irvy@gmail.com",
    gender: "Male",
    age: 24,
    score: 78
  }, {
    id: 4,
    "first name": "Karin",
    last_name: "Petkens",
    email: "karin@gmail.com",
    gender: "Female",
    age: 25,
    score: 98
  }, {
    id: 5,
    "first name": "Shadow",
    last_name: "Manuely",
    email: "shadow@gmail.com",
    gender: "Male",
    age: 21,
    score: 76
  },
  {
    id: 6,
    "first name": "Anita",
    last_name: "Manuely",
    email: "anita@gmail.com",
    gender: "MaleFemale",
    age: 21,
    score: 76
  },
  ]
  
  
function groupByGender(persons){
  var result = { };
  var b = 0, c = 0, d = 0;
  for(var i = 0; i < persons.length;i++){
    if(result[persons[i].gender] === undefined){
      result[persons[i].gender] = {
        "persons": [],
        "topScore": b,
        "topScorer": c,
        "avg": d
      };
    }
    result[persons[i].gender]["persons"].push(
      {
      "id": persons[i].id,
      "first name": persons[i]["first name"],
      "last_name": persons[i].last_name,
      "email": persons[i].email,
      "age": persons[i].age,
      "score": persons[i].score
      }
      )
  }
  for (var i in result){
    var topScore = 0
    var sumScore = 0
    for(var j = 0; j < result[i].persons.length; j++){
      sumScore += result[i].persons[j].score
      if (topScore < result[i].persons[j].score){
        topScore = result[i].persons[j].score
        result[i].topScore = topScore
        result[i].topScorer = result[i].persons[j]["first name"] + " " + result[i].persons[j].last_name
      }
      var average = sumScore / result[i].persons.length
      result[i].avg = average
    }
  }
  return JSON.stringify(result,null,5);
}

console.log(groupByGender(listOfPersons));


  // latihan harus menjadi bentuk sbb:

//   var result2 = {
//     "Male": {
//         "persons": [
//             {
//                 "id": 5,
//                 "first name": "Shadow",
//                 "last_name": "Manuely",
//                 "email": "shadow@gmail.com",
//                 "age": 21,
//                 "score": 76
//             }
//             ,
//             ...
//         ],
//         "topScore": 76,
//         "topScorer": "Shadow Manuely",
//         "avg": 888
//     },
//     "Female": {
//         "persons": [
//             {
//                 "id": 4,
//                 "first name": "Karin",
//                 "last_name": "Petkens",
//                 "email": "karin@gmail.com",
//                 "age": 25,
//                 "score": 98
//             },
//             ...
//         ],
//         "topScore": 98,
//         "topScorer": "Karin Petkens",
//         "avg": 2847
//     }
// }