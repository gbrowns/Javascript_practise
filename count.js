let count = 0;

function cc(card){

    let regex = /[JQKA]/;

    if (card > 1 && card < 7){
        count++;
    }else if(card == 10 && regex.test(card)){
        count--;
    }

    if (count > 0) return `${count} Bet`;
    else return `${count} Hold`;
}

console.log(cc(2))