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