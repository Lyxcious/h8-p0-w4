var pokemonList2 = [
    {
      name: 'Beedrill',
      status: { attack: 72, hp: 73, defense: 75 },
      type: 'Flying'
    },
    {
      name: 'Gliscor',
      status: { attack: 99, hp: 95, defense: 85 },
      type: 'Flying'
    },
    {
      name: 'Caterpie',
      status: { attack: 30, hp: 45, defense: 55 },
      type: 'Bug'
    }
  ]
  
  function gottaGroupEmAll(list) {
    var hasil = [];
    var type = [];
    for (var i = 0; i < pokemonList2.length; i++){
        if (i === 0){
            type.push(pokemonList2[i].type);
        }
        for (var j = 0; j < type.length; j++){
            if (pokemonList2[i].type !== type[j]){
                type.push(pokemonList2[i].type)
            }
        }
    }
    for (var i = 0; i < type.length; i++){
        var temp = {
            type: "",
            pokemonList: [],
            highestAttack: {
                name: "",
                attack: 0
            },
            bestStatus: {
                name: "",
                overallStat: 0
            }
        };
        temp.type = type[i];
        for (var j = 0; j < pokemonList2.length; j++){
            if (pokemonList2[j].type === type[i]){
                temp.pokemonList.push(pokemonList2[j].name);
                if (pokemonList2[j].status.attack > temp.highestAttack.attack){
                    temp.highestAttack.name = pokemonList2[j].name;
                    temp.highestAttack.attack = pokemonList2[j].status.attack;
                }
                var overallStat = pokemonList2[j].status.attack + pokemonList2[j].status.defense + pokemonList2[j].status.hp;
                if (overallStat > temp.bestStatus.overallStat){
                    temp.bestStatus.name = pokemonList2[j].name;
                    temp.bestStatus.overallStat = overallStat;
                }
            }
        }
        hasil.push(temp);
    }
    return hasil;
  }
  console.log(gottaGroupEmAll(pokemonList2))
  
  // //output: 
  // // [{
  // //   type: 'Flying',
  // //   pokemonList: ['Beedrill', 'Gliscor'],
  // //   highestAttack: { name: 'Beedrill', attack: 72 },
  // //   bestStatus: { name: 'Gliscor', overallStat: 279 } //overall stat di dapat dari menjumlahkan attack hp dan defense pokemon
  // // },
  // // {
  // //   type: 'Bug',
  // //   pokemonList: ['Caterpie'],
  // //   highestAttack: { name: 'Caterpie', attack: 30 },
  // //   bestStatus: { name: 'Caterpie', overallStat: 130 }
  // // }]