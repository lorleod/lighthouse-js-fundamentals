const sumLargestNumbers = function(data) {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < data.length; i++) {
  if (data[i] > largest) {
    secondLargest = largest;
    largest = data[i];
  }
  }
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

const chooseStations = function (stations) {

}