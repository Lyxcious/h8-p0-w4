function cariMedian(arr) {
    i = arr.length/2;
    if (arr.length%2 == 0){
        median = (arr[i] + arr[i-1])/2;
    } else if (arr.legth%2 !== 0){
        i = Math.floor(arr.length/2);
        median = arr[i];
    }
    return median;
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5