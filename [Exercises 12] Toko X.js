function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    var sisaSepatu = listBarang[0][2];
    var sisaBaju = listBarang[1][2];
    var sisaSweater = listBarang[2][2];
    var shoppersSepatu = [], shoppersBaju = [], shoppersSweater = [];
    var profitSepatu = 0, profitBaju = 0, profitSweater = 0;
    for (var i = 0; i < shoppers.length; i++){
        if (shoppers[i].product === 'Sepatu Stacattu'){
            if (shoppers[i].amount <= sisaSepatu){
                shoppersSepatu.push(shoppers[i].name);
                sisaSepatu -= shoppers[i].amount;
                profitSepatu = (listBarang[0][2] - sisaSepatu) * listBarang[0][1];
            }
        } else if (shoppers[i].product === 'Baju Zoro'){
            if (shoppers[i].amount <= sisaBaju){
                shoppersBaju.push(shoppers[i].name);
                sisaBaju -= shoppers[i].amount;
                profitBaju = (listBarang[1][2] - sisaBaju) * listBarang[1][1];
            }
        } else if (shoppers[i].product === 'Sweater Uniklooh'){
            if (shoppers[i].amount <= sisaSweater){
                shoppersSweater.push(shoppers[i].name);
                sisaSweater -= shoppers[i].amount;
                profitSweater = (listBarang[2][2] - sisaSweater) * listBarang[2][1];
            }
        }
    }
    var dataSepatu = {
        product: listBarang[0][0],
        shoppers: shoppersSepatu,
        leftOver: sisaSepatu,
        totalProfit: profitSepatu,
    }
    var dataBaju = {
        product: listBarang[1][0],
        shoppers: shoppersBaju,
        leftOver: sisaBaju,
        totalProfit: profitBaju,
    }
    var dataSweater = {
        product: listBarang[2][0],
        shoppers: shoppersSweater,
        leftOver: sisaSweater,
        totalProfit: profitSweater,
    }
    return [dataSepatu, dataBaju, dataSweater]
}
  
//   // TEST CASES
   console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]