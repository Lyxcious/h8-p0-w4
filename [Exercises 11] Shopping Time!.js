function shoppingTime(memberId, money) {
    var data;
    var a, b, c, d;
    a = memberId;
    b = money;
    c = [];
    d = b;
    if (typeof memberId !== "string" || memberId === ""){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else {
        if (money < 50000){
            return "Mohon maaf, uang tidak cukup";
        } else {
            if (money >= 1500000){
                c.push('Sepatu Stacattu');
                d = d - 1500000;
                if (d >= 500000){
                    c.push('Baju Zoro');
                    d = d - 500000;
                    if (d >= 250000){
                        c.push('Baju H&N');
                        d = d - 250000;
                        if (d >= 175000){
                            c.push('Sweater Uniklooh');
                            d = d - 175000;
                            if (d >= 50000){
                                c.push('Casing Handphone');
                                d = d - 50000;
                            }
                        }
                    }
                }
            } else if (d >= 500000){
                c.push('Baju Zoro');
                d = d - 500000;
                if (d >= 250000){
                    c.push('Baju H&N');
                    d = d - 250000;
                    if (d >= 175000){
                        c.push('Sweater Uniklooh');
                        d = d - 175000;
                        if (d >= 50000){
                            c.push('Casing Handphone');
                            d = d - 50000;
                        }
                    }
                }
            } else if (d >= 250000){
                c.push('Baju H&N');
                d = d - 250000;
                if (d >= 175000){
                    c.push('Sweater Uniklooh');
                    d = d - 175000;
                    if (d >= 50000){
                        c.push('Casing Handphone');
                        d = d - 50000;
                    }
                }
            } else if (d >= 175000){
                c.push('Sweater Uniklooh');
                d = d - 175000;
                if (d >= 50000){
                    c.push('Casing Handphone');
                    d = d - 50000;
                }
            } else if (d >= 50000){
                c.push('Casing Handphone');
                d = d - 50000;
            }
        }
    }
    var data = {
        memberId: a,
        money: b,
        listPurchased: c,
        changeMoney: d
    }
    return data
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja