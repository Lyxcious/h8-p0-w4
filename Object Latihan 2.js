var characters =
  [
    { id: 720, name: 'Liebert, Anna', role: 'Main', anime: 'Monster' },
    { id: 721, name: 'Liebert, Johan', role: 'Main', anime: 'Monster' },
    { id: 722, name: 'Tenma, Kenzou', role: 'Main', anime: 'Monster' },
    { id: 723, name: 'Bernhardt, Hugo', role: 'Supporting', anime: 'Monster' },
    { id: 724, name: 'Elric, Edward', role: 'Main', anime: 'FMA' },
    { id: 725, name: 'Elric, Alphonse', role: 'Main', anime: 'FMA' },
    { id: 726, name: 'Wanijima, Agito', role: 'Supporting', anime: 'Air gear' }
  ]

function animeReport(arr){
    var hasil = {
        Role: {},
        Title: {}
    };
    for (var i = 0; i < characters.length; i++){
        if (hasil.Role[characters[i].role] === undefined){
            hasil.Role[characters[i].role] = []
        }
    }
    for (var i = 0; i < characters.length; i++){
        if (hasil.Title[characters[i].anime] === undefined){
            hasil.Title[characters[i].anime] = []
        }
    }
    for (var i = 0; i < characters.length; i++){
        for (var j = 0; j < Object.keys(hasil.Role).length; j++){
            if (characters[i].role === Object.keys(hasil.Role)[j]){
                var nama = characters[i].name.split(", ")
                var namaBalik = [];
                for (var k = nama.length-1; k >= 0; k--){
                    namaBalik.push(nama[k]);
                }
                namaBalik = namaBalik.join(" ")
                hasil.Role[Object.keys(hasil.Role)[j]].push(namaBalik)
            }
        }
    }
    for (var i = 0; i < characters.length; i++){
        for (var j = 0; j < Object.keys(hasil.Title).length; j++){
            var temp = {
                id: characters[i].id,
                name: characters[i].name
            }
            if (characters[i].anime === Object.keys(hasil.Title)[j]){
                hasil.Title[Object.keys(hasil.Title)[j]].push(temp)
            }
        }
    }
    return JSON.stringify(hasil, null, 2)
}

console.log(animeReport(characters))

//output 
// 
//   {
//     Role: {
//       Main: ['Anna Liebert', 'Johan Liebert', 'Kenzou Tenma', 'Edward Elric', 'Alphonse Elric'],
//       Supporting: ['Hugo Bernhardt', 'Agito Wanijima']
//     },
//     Title: {
//       Monster: [
//         { id: 720, name: 'Liebert, Anna' },
//         { id: 721, name: 'Liebert, Johan' },
//         { id: 722, name: 'Tenma, Kenzou' },
//         { id: 723, name: 'Bernhardt, Hugo' }
//       ],
//       FMA: [
//         { id: 724, name: 'Elric, Edward' },
//         { id: 725, name: 'Elric, Alphonse' },
//       ],
//       "Air Gear": [
//         { id: 726, name: 'Wanijima, Agito' }
//       ]
//     }
//   }