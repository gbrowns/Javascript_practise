let count = 0;

function cc(card){

    let regex = /[JQKA]/;

    if (card > 1 && card < 7){
        count++;
    }else if(card == 10 || regex.test(card)){
        count--;
    }

    if (count > 0) return `${count} Bet`;
    else return `${count} Hold`;
}

console.log(cc("JQ"))

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return names[0];
  }else if(strokes <= par-2){
    return names[1];
  }else if(strokes == par-1){
    return names[2];
  }else if(strokes == par){
    return names[3];
  }else if(strokes == par+1){
    return names[4];
  }else if(strokes == par+2){
    return names[5];
  }else{
    return names[6];
  }

  // Only change code above this line
}

console.log(golfScore(5, 4));


// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if (value === ''){
    delete records[id][prop];
  }else if (prop === 'tracks'){
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(...value);
  }else{
    records[id][prop] = value;
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'tracks', ["qwen", "takila"]));

function sum(arr, n) {
  // Only change code below this line
  return (n <= 0) ? 0 : sum(arr, n-1) + arr[n-1];
  // Only change code above this line
}

console.log(sum([2,3,4], 1));