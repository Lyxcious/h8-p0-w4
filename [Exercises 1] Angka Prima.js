function angkaPrima(angka) {
    if (angka == 0 || angka == 1 || angka < 0){
        return false
    } else if (angka == 2 || angka == 3 || angka == 5 || angka == 7){
        return true;
    } else if (angka%2 != 0){
        if (angka%3 != 0){
            if (angka%5 != 0){
                if (angka%7 !=0){
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false