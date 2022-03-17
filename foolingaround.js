function range (start, end, step) {
  if (start == undefined || end == undefined || step == undefined) {
  //returns empty array if any parameter is undefined
    return [];
  }

  if (start > end || step < 1) {
    //returns empty array if start > end or step < 1
    return [];
  }

  let outputArray = [];
  let value = start;
  
  while (value < end) {
    outputArray.push(value);
    value += step;
  }
  
  return outputArray;
}

console.log(range(0, 34, 5));