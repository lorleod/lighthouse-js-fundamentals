function judgeVegetable (vegetables, metric) {
  let bestSoFar = 0;
  let bestSubmitterSoFar = "";
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > bestSoFar) {
      bestSoFar = vegetables[i][metric];
      bestSubmitterSoFar = vegetables[i].submitter;
    }
  }
  return bestSubmitterSoFar;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))