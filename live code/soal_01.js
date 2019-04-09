/*
===============
Deny dan Mainan
===============

[INSTRUCTION]
Deny dan Jenny sangat bahagia setelah kelahiran anak pertama. Anak mereka sangat
menyukai mainan, jadi Deny ingin membeli beberapa. Ada banyak pilihan mainan
yang dapat dibeli.
Function maximum toys menerima 2 parameter array dan number, array merupakan daftar harga mainan dan number merupakan uang yang dimiliki Deny.

[EXAMPLE]
Bila input harga array adalah [1, 12, 5, 111, 200, 1000, 10] dan uang k = 50
maka hasilnya adalah 4, karena jumlah mainan yang dapat dibeli terbanyak adalah mainan
dengan harga 1,12,5,10.

[RULE]
1. Wajib menulis pseudo code, bila tidak menulis pseudo code maka dianggap tidak
mengerjakan.
2. dilarang menggunakan indexOf(), find(), filter() dan sort()
3. dilarang menggunakan regex
*/

/*
SET "sisaUang" with value parameter k;
SET "count" with value 0;
SET "i" with value 0;
WHILE "i" less than prices.length
  IF "sisaUang" greater equals than prices[i]
    CALCULATE "sisaUang" minus prices[i];
    ADD count with 1;
  END IF
ADD "i" with 1;
END WHILE
DISPLAY "count"
 */

function maximumToys(prices, k) {
  var sisaUang = k;
  var count = 0;
  for (var i = 0; i < prices.length; i++){
    if (sisaUang >= prices[i]){
      sisaUang -= prices[i]
      count++;
    }
  }
  return count
}

console.log(maximumToys([3, 7, 2, 9, 4], 15)); // 3
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)); // 4
console.log(maximumToys([1, 2, 3, 4], 7)); // 3
console.log(
maximumToys(
  [
    52952808,
    39586066,
    70403274,
    33392541,
    37992362,
    55743111,
    55380991,
    48022854,
    54843595,
    440
  ],
  100000
)
); // 1