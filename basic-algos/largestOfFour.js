function largestOfFour(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0]; // set max to first number in array. had 0, but doesnt
    // work for negative numbers
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    newArray.push(max);
  }
  return newArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39],
  [1000, 1001, 857, 1]]));

  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21],
    [-72, -3, -17, -10]]));
