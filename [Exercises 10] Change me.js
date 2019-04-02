function changeMe(arr) {
    var id;
    var tahunSekarang = 2019;
    for (var i = 0; i < arr.length; i++){
        id = (i+1) + ". " + arr[i][0] + " " + arr[i][1]; 
        var a, b, c, d;
        a = "";
        b = "";
        c = "";
        d = "Invalid Birth Year";
        for (var j = 0; j < arr[i].length; j++){
            if (j === 0){
                a = arr[i][j];
            } else if (j === 1){
                b = arr[i][j];
            } else if (j === 2){
                c = arr[i][j];
            } else if (j === 3){
                if (arr[i][j] < tahunSekarang){
                    d = tahunSekarang - arr[i][j];
                }
            }
        }
        var data = {
            firstName: a,
            lastName: b,
            gender: c,
            age: d,
        };
        console.log(id);
        console.log(data);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }