function judgeVegetable(vegetables, metric) {
  let currentWinner = "no one";

  for(let i = 0; i < vegetables.length; i++) {
    let highestScore = 0;
    if (vegetables[i].redness > highestScore) {
      highestScore = vegetables[i].redness;
      currentWinner = vegetables[i].submitter;
      console.log(i, vegetables[i].redness, highestScore, currentWinner);
    }
  }

  return currentWinner;
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

const metric = 'redness';

//judgeVegetable(vegetables, metric)
console.log(judgeVegetable(vegetables, metric));